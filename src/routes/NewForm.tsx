import React from "react";
import Form from "../routes/Form";

export default function NewForm() {
  const [form, setForm] = React.useState<any>({
    id: null,
    slug: null,
    title: "",
    description: "",
    createdBy: "",
    createdAt: null,
    updatedAt: null,
    acceptingSubmissions: false,
    fields: []
  });

  function addFeild(type: string) {
    setForm({
      ...form,
      fields: [
        ...form.fields,
        {
          id: null,
          slug: null,
          title: "",
          description: "",
          type: type,
          required: false,
          defaultValue: "",
          placeholder: "",
          subtitle: ""
        }
      ]
    });
  }


  return (
    <div>
      <h1>New Form</h1>
      <div className="m-4 px-4 py-3 bg-green-100 rounded-lg shadow-xl ring-4 ring-green-300
      sm:flex sm:justify-around">
        <div className="w-full">
          <h2 className="m-2">
            Editor
          </h2>
          <form>
            <div className="m-2">
              <label htmlFor="title" className="block my-2">Title </label>
              <input type="text" name="title" id="title"
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
              />
            </div>
            <div className="m-2">
              <label htmlFor="description" className="block my-2">Description</label>
              <textarea name="description" id="description"
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

            <button className="p-2 m-1 bg-lime-200" onClick={(e) => {e.preventDefault(); addFeild("text")}}>Add text field</button>
            <button className="p-2 m-1 bg-lime-200" onClick={(e) => {e.preventDefault(); addFeild("paragraph")}}>Add large text field</button>
            <button className="p-2 m-1 bg-lime-200" onClick={(e) => {e.preventDefault(); addFeild("number")}}>Add number field</button>
            <button className="p-2 m-1 bg-lime-200" onClick={(e) => {e.preventDefault(); addFeild("emailAddress")}}>Add email field</button>
            <button className="p-2 m-1 bg-lime-200" onClick={(e) => {e.preventDefault(); addFeild("phoneNumber")}}> Add phone field</button >
            <button className="p-2 m-1 bg-lime-200" onClick={(e) => {e.preventDefault(); addFeild("checkbox")}}>Add checkbox</button>
          </form >
        </div >
        <div className="w-full pt-8 sm:pt-0">
          <h2>Form Preview</h2>
          <Form form={form} />
        </div>
      </div >
    </div >
  )
}
