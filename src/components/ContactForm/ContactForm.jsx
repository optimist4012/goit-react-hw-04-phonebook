import { Formik } from 'formik';
import { Form, Field, Button, ErrorMessage } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const contactsFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required field'),
  number: Yup.string()
    .matches(
      /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      'Please, enter only digits in format of "123-12-12"'
    )
    .required('Required field'),
});

export const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactsFormSchema}
      onSubmit={(values, actions) => {
        onAddContact({
          name: values.name,
          number: values.number,
          id: nanoid(),
        });
        actions.resetForm();
      }}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" />
        <ErrorMessage name="name" component={'span'}></ErrorMessage>

        <label htmlFor="number">Number</label>
        <Field id="number" name="number" type="tel" />
        <ErrorMessage name="number" component={'span'}></ErrorMessage>

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
