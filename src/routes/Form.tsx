import { FC } from "react";
import { useParams } from "react-router-dom";

import { Form } from '../components'
import { TForm } from '../types'
import { getForm } from "../utils/forms";


export const FormPage: FC = (props) => {
  let params = useParams();
  let form: TForm | undefined = params.slug ? getForm(params.slug) : undefined
  if (!form) {
    return <div>Loading...</div>
  }
  return (
    <Form form={form} />
  )
}
