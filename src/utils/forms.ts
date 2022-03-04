import { v4 as uuidv4 } from 'uuid';

import { TForm } from '../types'

let forms: TForm[] = [
  {
    id: uuidv4(),
    slug: "sdhgndbslibailngagnlinlg",
    title: "Test Form",
    description: "This is a test form",
    createdBy: "example@gmail.com",
    acceptingSubmissions: true,
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
    version: 1,
    fields: [
      {
        id: uuidv4(),
        label: "Full name",
        hint: "Enter your full name",
        type: "text",
        placeholder: "John Smith",
        required: true,
        validations: [
          {
            type: "minLength",
            value: 3,
          },
          {
            type: "maxLength",
            value: 30,
          }
        ],
      },
      {
        id: uuidv4(),
        label: "Age",
        hint: "Enter your age",
        type: "number",
        required: true,
        validations: [
          {
            type: "min",
            value: 0,
          },
          {
            type: "max",
            value: 100,
          },
          {
            type: "integer",
          }
        ],
      }
    ]
  },
];

export function getForms() {
  return forms;
}

export function newForm(): TForm {
  return {
    id: uuidv4(),
    slug: uuidv4(),
    title: "",
    description: "",
    createdBy: "",
    acceptingSubmissions: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    version: 1,
    fields: [],
  };
}

export function getForm(slug: string) {
  return forms.find(form => form.slug === slug);
}

export const fieldTypeOptions = {
  text: {
    title: "Text",
    type: "text",
    highLevelType: "text",
    placeholder: "Enter text",
  },
  paragraph: {
    title: "Paragraph",
    type: "text",
    highLevelType: "paragraph",
    placeholder: "Enter text",
  },
  number: {
    title: "Number",
    type: "number",
    highLevelType: "number",
    placeholder: "0",
  },
  emailAddress: {
    title: "Email address",
    type: "email",
    highLevelType: "email",
    placeholder: "example@example.com",
  },
  phoneNumber: {
    title: "Phone number",
    type: "tel",
    highLevelType: "phoneNumber",
    placeholder: "555-555-5555",
  },
  checkbox: {
    title: "Checkbox",
    type: "checkbox",
    highLevelType: "checkbox",
  },
}
