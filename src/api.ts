import { TForm } from "./types";
import htmlTagNames from './data/htmlTagNames'

const sniffHTML = (text: string) => new RegExp(`^\\s*<\\/?(${htmlTagNames.join("|")})(\\s|>)[\\s\\S]*>`).test(text)

const BASE_API_URL = (process.env.API_URL || 'http://localhost:8000') + '/api/v1/';
const HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

const apiFetch = async (path: string, method: string = "GET", body?: string | object) => {
  const response = await fetch(`${BASE_API_URL}${path}`, {
    method: method.toUpperCase(),
    headers: HEADERS,
    body: body ? typeof body === 'string' ? body : JSON.stringify(body) : null
  })
  
  const responseBody = await response.text()
  // throw a fit if the servers responsds with non json content regardless of the response code
  let json: Record<any, any>
  try {
    json = JSON.parse(responseBody)
  } catch {
    const errorMessage = `apiFetch: server responded with ${sniffHTML(responseBody) ? 'html' : 'text'} instead of json`
    console.error(errorMessage, { response: responseBody })
    return { error: { message: errorMessage, response: responseBody } }
  }
  if (response.status !== 200) {
    throw new Error(json.error)
  }
  return json
}

export const formsAPI = {
  get: (slug: string) => apiFetch(`forms/${slug}`),
  getAll: () => apiFetch(`forms`),
  create: (form: TForm) => apiFetch(`forms`, 'POST', { form }),
  update: (form: TForm) => apiFetch(`forms/${form.slug}`, 'PATCH', { form }),
  destroy: (slug: string) => apiFetch(`forms/${slug}`, 'DELETE'),
}