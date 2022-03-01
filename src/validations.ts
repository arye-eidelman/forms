// https://stackoverflow.com/a/201378
// eslint-disable-next-line no-control-regex
const emailRFC5322Regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

export const validations = {
  number: {
    correctType: (value: any) => typeof value === 'number',
    min: (value: number, min: number) => value >= min,
    max: (value: number, max: number) => value < max,
    integer: (value: number) => value % 1 === 0,
    positive: (value: number) => value >= 0,
    negetive: (value: number) => value <= 0,
    nonZero: (value: number) => value !== 0,
    precision: (value: number, step: number) => value % step === 0,
  },
  text: {
    correctType: (value: any) => typeof value === 'string',
    length: (value: string, length: number) => value.length === length,
    minLength: (value: string, minLength: number) => value.length >= minLength,
    maxLength: (value: string, maxLength: number) => value.length <= maxLength,
  },
  emailAddress: {
    correctType: (value: any) => typeof value === 'string' && emailRFC5322Regex.test(value),
  },
  phoneNumber: {
    correctType: (value: any) => typeof value === 'string' && /^[0-9]{11,}$/.test(value),
  },
  checkbox: {
    correctType: (value: any) => typeof value === 'boolean',
    requireChecked: (value: boolean) => value === true,
  },
  radio: {
    correctType: (value: any) => typeof value === 'string',
  },
  select: {
    correctType: (value: any) => typeof value === 'string',
  },
}
