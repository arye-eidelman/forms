import { getForm } from "../data";
import { useParams } from "react-router-dom";



export default function Form() {
  let params = useParams();

  let form = params.slug && getForm(params.slug)
  return (
    <div>
      {form && <>
        <h1>Form {form.slug}</h1>
        <div className="m-4 px-6 py-3 bg-green-100 rounded-2xl shadow-xl ring-4 ring-green-300">
          <h2 className="text-2xl pb-3">{form.title}</h2>
          <p className="flex justify-between">
            <span className="font-semibold">{form.amount}</span>
            {' '}
            <span className="text-sm">{form.createdAt}</span>
          </p>
        </div>
      </>}
    </div>
  )
}
