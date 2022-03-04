import { FC } from "react";

import { TField } from '../types'
import { fieldTypeOptions } from '../utils/forms'

export const FormField: FC<{
  field: TField,
  value: any,
  onChange: (value: any) => void
}> = ({ field, value, onChange }) => {

  return (
    <div className="m-2 shadow-md p-2 bg-orange-100 rounded-xl" key={field.id}>
      <label className="block p-1 font-semibold" htmlFor={"form-field__" + field.id}>
        {field.label}
        {field.required && <span className="text-red-600">*</span>}
      </label>
      {field.type === "paragraph" ? (
        <textarea
          id={"form-field__" + field.id}
          className="px-3 py-2 rounded-md w-full"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={field.placeholder}
        />
      ) : field.type === "checkbox" ? (
        <input
          id={"form-field__" + field.id}
          className="px-3 py-2 rounded-md w-full"
          type="checkbox"
          checked={!!value}
          onChange={e => onChange(e.target.checked)}
          placeholder={field.placeholder}
        />
      ) : (
        <input
          id={"form-field__" + field.id}
          className="px-3 py-2 rounded-md w-full"
          type={fieldTypeOptions[field.type].type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={field.placeholder}
        />
      )}
      {field.hint && <h3 className="p-1 text-sm font-semibold text-neutral-600">{field.hint}</h3>}
    </div>
  )
}
