import { FC } from 'react';
import { getForms } from "../data";
import { Forms } from '../components';

export const FormsPage: FC = () => {
  let forms = getForms().sort((a, b) => a.id < b.id ? 1 : -1);
  return (
    <Forms forms={forms} />
  )
}
