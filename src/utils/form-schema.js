import * as yup from 'yup';

export const formSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  LastName: yup.string(),
  email: yup.string().email().required('Correct email is required'),
  phone: yup.number(),
  message: yup.string().required('Message is required'),
});
