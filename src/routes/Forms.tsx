import { FC, useState, useEffect } from 'react';

import { Forms } from '../components';
import { formsAPI } from '../api';
import { TForm } from '../types';

export const FormsPage: FC = () => {
  const [forms, setForms] = useState<TForm[] | undefined>();
  // let forms: TForm[] | undefined
  useEffect(() => {
    formsAPI.getAll().then(json => {
      console.log(json)
      setForms(json.forms.sort((a: TForm, b: TForm) => a.id < b.id ? 1 : -1));
    });
  }, []);

  if (!forms) {
    return <div>Loading...</div>
  }
  return (
    <Forms forms={forms} />
  )
}
