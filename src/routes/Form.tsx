import React, { FC, useState } from "react";
import { getForm } from "../data";
import { useParams } from "react-router-dom";
import { TForm } from '../types'
import FormField from '../components/FormField'

const Placeholder: FC = ({ children }) => <span className="text-neutral-400">{children}</span>

const Form: FC<{ form?: any, preview?: boolean }> = (props) => {
  let params = useParams();
  let form: TForm = props.form ?? (params.slug && getForm(params.slug))

  const [fieldValues, setFieldValues] = useState<{ [key: string | number]: any }>({})

  if (!form) {
    return <div>Loading...</div>
  }

  const setValue = (fieldId: string | number) => (value: any) => {
    setFieldValues({
      ...fieldValues,
      [fieldId]: value
    })
  }

  return (
    <div>
      <div className="m-4 px-6 py-3 bg-green-100 rounded-2xl shadow-xl ring-4 ring-green-300">
        <h2 className="text-2xl py-2">{form.title || <Placeholder>Form title placeholder</Placeholder>}</h2>
        <p className="py-2">{form.description}</p>
        {/* <span className="text-sm">Created {new Date(form.createdAt).toDateString()}</span> */}
        <p className="font-semibold">By: {form.createdBy || <Placeholder>author@email.placeholder</Placeholder>}</p>

        {form.fields.map((field) =>
          <FormField
            key={field.id}
            field={field}
            value={fieldValues[field.id] ?? field.defaultValue}
            onChange={() => setValue(field.id)}
          />
        )}

      </div>
    </div >
  )
}
export default Form