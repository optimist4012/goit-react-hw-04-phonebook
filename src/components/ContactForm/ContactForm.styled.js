import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as Error,
} from 'formik';

export const Form = styled(FormikForm)`
  max-width: 200px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const Field = styled(FormikField)`
  &:focus-visible {
    box-shadow: 0 0 0 3px lightskyblue;
  }
`;

export const ErrorMessage = styled(Error)`
  color: #f96722;
  font-size: 14px;
`;

export const Button = styled.button`
  width: 100px;
  padding: 4px 5px;
  cursor: pointer;
`;
