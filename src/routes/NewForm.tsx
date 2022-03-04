import { FC } from "react";

import { FormEditor } from "../components";
import { newForm } from '../utils/forms';

export const NewFormPage: FC = () => {
  return (
    <FormEditor form={newForm()} saved={false} />
  )
}
