import React, { FC } from "react";
import { getForm } from "../data";
import { useParams } from "react-router-dom";
import { TForm } from '../types'

import { Form } from '../components'

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
