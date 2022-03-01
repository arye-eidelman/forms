import { getForms } from "../data";
import { Link, Outlet } from "react-router-dom";



export default function Forms() {
  let forms = getForms().sort((a, b) => a.id - b.id);
  return (
    <div>
      <h1>Form</h1>

      {forms.map(form => (
        <Link
          to={`/forms/${form.slug}`}
          key={form.id}
          className="flex justify-between m-2 shadow-md p-2 bg-orange-100 rounded-xl"
        >
          <h2 className="p-1 w-36 inline-block">{form.title}</h2>
          <p className="p-1 w-36 inline-block">{form.description}</p>
          <p className="p-1 w-36 inline-block">{new Date(form.createdAt).toDateString()}</p>
        </Link>
      ))}
      
      <Outlet />
    </div>
  )
}
