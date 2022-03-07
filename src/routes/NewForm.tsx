import { FC, useState } from "react";

import { FormEditor } from "../components";
import { TForm } from "../types";
import { newForm } from '../utils/forms';
import { formsAPI } from '../api'

export const NewFormPage: FC = () => {
  const [form, setForm] = useState<TForm>(newForm());
  const save = () => {
    return formsAPI.create(form)
  }

  return (
    <FormEditor form={form} setForm={setForm} save={() => save()} saved={false} />
  )
}
