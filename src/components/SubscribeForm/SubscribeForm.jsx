import { Formik } from 'formik';
import {
  SybscribeWrapper,
  SybscribeInput,
  SybscribeText,
  SubscribeButton,
} from './SubscribeForm.styled';
import { useDispatch } from 'react-redux';
import { subscribeEmail } from 'redux/auth/authOperations';
import { object, string } from 'yup';

const validationSchema = object({
  email: string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Email must contain only digits, letters and . - _ symbols. e.g. example@mail.com'
    )
    .email('Invalid email format, example@mail.com')
    .required('Email is required'),
});

const SubscribeForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(subscribeEmail(values));
        actions.resetForm();
      }}
    >
      <SybscribeWrapper>
        <SybscribeText>
          Subscribe up to our newsletter. Be in touch with latest news and
          special offers, etc.
        </SybscribeText>
        <SybscribeInput type='email' name='email' placeholder='Enter the email'></SybscribeInput>
        <SubscribeButton type="submit">Subscribe</SubscribeButton>
      </SybscribeWrapper>
    </Formik>
  );
};

export default SubscribeForm;
