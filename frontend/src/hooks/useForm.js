import Joi from 'joi'
import { useCallback, useState } from 'react'

export default function useForm(form, schema, handleSubmit) {
  // form info - data
  const [formData, setFormData] = useState(form);
  const [errors, setErrors] = useState({});

  const validateProperty = useCallback((name, value) => {
    // reference the property of the schema, and destructure its error if it results in it, return error message if exists
    let property = Joi.object({ [name]: schema[name] });
    let { error } = property.validate({ [name]: value });
    return error ? error.details[0].message : null;
  }, [schema]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    const errorMessage = validateProperty(name, value);

    setErrors((prev) => {
      const updatedErrors = JSON.parse(JSON.stringify(prev));

      if (errorMessage) {
        updatedErrors[name] = errorMessage;
      } else {
        delete updatedErrors[name];
      }
      return updatedErrors
    })
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, [validateProperty]);

  const validateForm = useCallback(() => {
    // this function will make the submit button active/inactive accordingly
    const joiSchema = Joi.object(schema);
    const { error } = joiSchema.validate(formData);
    if (error) return false;
    return true;
  }, [schema, formData])

  const onSubmit = useCallback((e) => {
    e.target.disabled = true;
    e.target.classList.toggle('Mui-disabled');

    handleSubmit(formData, e);
  }, [formData]);

  return { formData, errors, setFormData, handleChange, validateForm, onSubmit }
}
