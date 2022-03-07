import { FC, useState } from "react";
import { FormField } from '../components'
import { TForm } from '../types'

const Placeholder: FC = ({ children }) => <span className="text-neutral-400">{children}</span>

export const Form: FC<{ form: any, preview?: boolean }> = (props) => {
  let form: TForm = props.form

  const [fieldValues, setFieldValues] = useState<Record<any, any>>({})

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

        {(form.fields || []).map((field) =>
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
