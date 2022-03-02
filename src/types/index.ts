export type TFieldType
  = 'text'
  | 'paragraph'
  | 'number'
  | 'emailAddress'
  | 'phoneNumber'
  | 'checkbox'

export type TField = {
  id: string | number
  label: string
  hint: string
  type: TFieldType
  required: boolean
  defaultValue: string
  placeholder: string
  validations: any[]
}

export type TForm = {
  id: string | number
  slug: string
  title: string
  description: string
  createdBy: string
  fields: TField[]
  acceptingSubmissions: boolean
  createdAt: string
  updatedAt: string
  version: number
}