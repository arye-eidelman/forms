import { FC, useState, useEffect } from 'react';
import { formsAPI } from '../api';
import { useParams } from "react-router-dom";

import { Form } from '../components'
import { TForm } from '../types'


export const FormPage: FC = (props) => {
  let params = useParams();
  const [form, setForm] = useState<TForm | undefined>();

  useEffect(() => {
    if (params.slug) {
      formsAPI.get(params.slug).then(json => {
        console.log(json)
        setForm(json.form);
      });
    }
  }, [params.slug])
  if (!form) {
    return <div>Loading...</div>
  }
  return (
    <Form form={form} />
  )
}
