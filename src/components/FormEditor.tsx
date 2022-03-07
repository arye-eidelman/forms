import { FC } from "react";
import { v4 as uuidv4 } from 'uuid';

import { Form, FormFieldEditor } from "../components";
import { TField, TFieldType, TForm } from '../types'

export const FormEditor: FC<{
  form: TForm,
  setForm: (form: TForm) => void
  save: () => void
  saved: boolean
}> = ({ form, setForm, save, saved }) => {

  function createField(type: TFieldType) {
    setForm({
      ...form,
      fields: [
        ...form.fields,
        {
          id: uuidv4(),
          label: "",
          hint: "",
          type: type,
          required: false,
          defaultValue: "",
          placeholder: "",
          validations: [],
        }
      ]
    });
  }

  const updateField = (id: string | number) => (field: TField) => {
    setForm({
      ...form,
      fields: form.fields.map(f => f.id === id ? field : f)
    });
  }

  return (
    <div className="m-4 px-4 py-3 bg-green-100 rounded-lg shadow-xl ring-4 ring-green-300">
      <div className="flex justify-between">
        <h1>New Form Editor</h1>
        <div>
          <button className="p-2 m-1 bg-lime-200" onClick={() => save()}>Save</button>
        </div>
      </div>
      <div className="
      sm:flex sm:justify-around">
        <div className="w-full">
          <div className="m-2">
            <input type="text" name="title" id="title" className="text-2xl" placeholder="Form Title"
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
            />
          </div>
          <div className="m-2">
            <textarea name="description" id="description" placeholder="Form Description"
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
            />
          </div>
          <div className="m-2">
            <label htmlFor="createdBy" className="block my-2">Author email:</label>
            <input type="text" name="createdBy" id="createdBy"
              value={form.createdBy}
              onChange={e => setForm({ ...form, createdBy: e.target.value })}
            />
          </div>

          {form.fields.map((field) => (
            <FormFieldEditor key={field.id} field={field} setField={updateField(field.id)} />
          ))}

          <span className="text-3xl font-semibold">+</span>
          <button className="p-2 m-1 bg-lime-200" onClick={() => createField("text")}>Text</button>
          <button className="p-2 m-1 bg-lime-200" onClick={() => createField("paragraph")}>Paragraph</button>
          <button className="p-2 m-1 bg-lime-200" onClick={() => createField("number")}>Number</button>
          <button className="p-2 m-1 bg-lime-200" onClick={() => createField("emailAddress")}>Email</button>
          <button className="p-2 m-1 bg-lime-200" onClick={() => createField("phoneNumber")}> Phone</button >
          <button className="p-2 m-1 bg-lime-200" onClick={() => createField("checkbox")}>Checkbox</button>
        </div >
        <div className="w-full pt-8 sm:pt-0">
          <h2>Preview</h2>
          <Form form={form} />
        </div>
      </div >
    </div >
  )
}
