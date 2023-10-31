import { Formik, ErrorMessage } from 'formik';
import {
  SubscribeWrapper,
  SubscribeInput,
  SubscribeText,
  SubscribeButton,
} from './SubscribeForm.styled';
import { useDispatch } from 'react-redux';
import { subscribeEmail } from 'redux/auth/authOperations';
import { object, string } from 'yup';
import { toast } from 'react-toastify';
import { toastConfig } from '../Notification/notification_options';

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
      onSubmit={async (values, actions) => {
        try {
          await dispatch(subscribeEmail(values));
          actions.resetForm();
          toast.success('You have successfully subscribed!', toastConfig());
        } catch (error) {
          toast.error('Subscription failed. Please try again.', toastConfig());
        }
      }}
    >
      <SubscribeWrapper>
        <SubscribeText>
          Subscribe up to our newsletter. Be in touch with latest news and
          special offers, etc.
        </SubscribeText>
        <SubscribeInput
          type="email"
          name="email"
          placeholder="Enter the email"
        ></SubscribeInput>
        <ErrorMessage name="email" component="div" />
        <SubscribeButton type="submit">Subscribe</SubscribeButton>
      </SubscribeWrapper>
    </Formik>
  );
};

export default SubscribeForm;
