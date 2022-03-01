let forms = [
  {
    id: 765456,
    slug: "sdhgndbslibailngagnlinlg",
    title: "Test Form",
    description: "This is a test form",
    createdBy: "example@gmail.com",
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: "2022-01-01T00:00:00.000Z",
    acceptingSubmissions: true,
    fields: [
      {
        title: "Full name",
        subtitle: "Enter your full name",
        slug: "full-name",
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
        title: "Age",
        subtitle: "Enter your age",
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

export function getForm(slug: string) {
  return forms.find(form => form.slug === slug);
}
export function toLowLevelInputType(type: string) {
  return ({
    emailAddress: "email",
    phoneNumber: "tel",
    text: "text",
    number: "number"
  })[type] || "text";
};
