import { FC } from 'react';

import { Forms } from '../components';
import { getForms } from "../utils/forms";

export const FormsPage: FC = () => {
  let forms = getForms().sort((a, b) => a.id < b.id ? 1 : -1);
  return (
    <Forms forms={forms} />
  )
}
