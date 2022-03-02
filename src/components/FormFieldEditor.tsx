import React, { FC } from "react";
import { TField } from '../types'
import { inputOptions } from '../data'
// import slugify from 'slugify';

const FormFieldEditor: FC<{
  field: TField,
  setField: (field: TField) => void
  deleteField?: () => void
  moveField?: (direction: 'up' | 'down') => void
}> = ({
  field,
  setField,
  deleteField = () => { },
  moveField = () => { }
}) => {
    return (
      <div className="ring-2 p-1 my-2">
        {/* controlls bar */}
        <div className="flex space-x-2 justify-between m-1 mb-3">
          <h1>{inputOptions[field.type].title}</h1>
          <div className="flex space-x-2">
            <button onClick={() => moveField('up')}>Up</button>
            <button onClick={() => moveField('down')}>Down</button>
            <button onClick={() => deleteField()}>Delete</button>
          </div>

        </div>
        <div className="p-1">
          <label
            htmlFor={`form-field__${field.id}__label`}
            className="inline-block w-32"
          >
            Label<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="label"
            id={`form-field__${field.id}__label`}
            value={field.label}
            onChange={e => setField({ ...field, label: e.target.value })}
          />
        </div>
        <div className="p-1">
          <label
            htmlFor={`form-field__${field.id}__hint`}
            className="inline-block w-32"
          >
            Hint
          </label>
          <input
            type="text"
            name="hint"
            id={`form-field__${field.id}__hint`}
            onChange={e => setField({ ...field, hint: e.target.value })}
          />
        </div>
        <div className="p-1">
          <label
            htmlFor={`form-field__${field.id}__defaultValue`}
            className="inline-block w-32"
          >
            Default
          </label>
          <input
            type="text"
            name="defaultValue"
            id={`form-field__${field.id}__defaultValue`}
            onChange={e => setField({ ...field, defaultValue: e.target.value })}
          />
        </div>
        <div className="p-1">
          <label
            htmlFor={`form-field__${field.id}__placeholder`}
            className="inline-block w-32"
          >
            Placeholder
          </label>
          <input
            type="text"
            name="placeholder"
            id={`form-field__${field.id}__placeholder`}
            onChange={e => setField({ ...field, placeholder: e.target.value })}
          />
        </div>
        <div className="p-1">
          <label
            htmlFor={`form-field__${field.id}__required`}
            className="inline-block w-32"
          >
            Required?<span className="text-red-600">*</span>
          </label>
          <input
            type="checkbox"
            name="required"
            id={`form-field__${field.id}__required`}
            onChange={e => setField({ ...field, required: e.target.checked })}
          />
        </div>
      </div>
    );
  }

export default FormFieldEditor