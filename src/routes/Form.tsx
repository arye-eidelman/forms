import React, { FC } from "react";
import { getForm } from "../data";
import { useParams } from "react-router-dom";
import { toLowLevelInputType } from '../data'

const Placeholder: FC<{}> = ({ children }) => <span className="text-neutral-400">{children}</span>

export default function Form(props: { form?: any }) {
  let params = useParams();

  let form = props.form ?? (params.slug && getForm(params.slug))
  if (!form) {
    return <div>Loading...</div>
  }
  const isSaved = form.id !== null;

  return (
    <div>
      <div className="m-4 px-6 py-3 bg-green-100 rounded-2xl shadow-xl ring-4 ring-green-300">
        <h2 className="text-2xl pb-3">{form.title || <Placeholder>Form title placeholder</Placeholder>}</h2>
        <p className="flex justify-between">
          <span className="font-semibold">{form.description}</span>
          <span className="text-sm">
            Created {isSaved
              ? new Date(form.createdAt).toDateString()
              : <Placeholder> {new Date(Date.now()).toDateString()}</Placeholder>
            }
          </span>
        </p>
        <p className="font-semibold">by: {form.createdBy || <Placeholder>author@email.placeholder</Placeholder>}</p>
        {form.fields.map((field: any) => (
          <div className="m-2 shadow-md p-2 bg-orange-100 rounded-xl" key={field.id}>
            <label className="block p-1 font-semibold" htmlFor={"form-field__" + field.slug}>
              {field.title}
              {field.required && <span className="text-red-600">*</span>}
            </label>
            {field.type === "paragraph" ? (
              <textarea
                id={"form-field__" + field.slug}
                className="px-3 py-2 rounded-md w-full"
                defaultValue={field.defaultValue}
                placeholder={field.placeholder}
              />
            ) : (
              <input
                id={"form-field__" + field.slug}
                className="px-3 py-2 rounded-md w-full"
                type={toLowLevelInputType(field.type)}
                defaultValue={field.defaultValue}
                placeholder={field.placeholder}
              />
            )}
            {field.subtitle && <h3 className="p-1 text-sm font-semibold text-neutral-600">{field.subtitle}</h3>}
          </div>
        ))}
      </div>
    </div >
  )
}
