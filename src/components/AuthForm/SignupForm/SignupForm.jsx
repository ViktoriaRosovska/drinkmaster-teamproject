import { Formik, ErrorMessage } from 'formik';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';
import DatePicker from 'react-datepicker';
import * as Yup from 'yup';
import {
  Input,
  InputWrapper,
  Title,
  Button,
  ToggleButton,
  ErrorText,
  ErrorSvgStyled,
  CheckSvgStyled,
  Link,
} from '../AuthForm.styled';
import { SignUpContainer, SignUpForm } from './SignupForm.styled.js';
import { ReactComponent as ShowPassword } from '../../../assets/images/authComponents/eye.svg';
import { ReactComponent as HidePassword } from '../../../assets/images/authComponents/eye-off.svg';
import 'react-datepicker/dist/react-datepicker.css';

const initialValues = {
  name: '',
  birthDate: new Date(),
  email: '',
  password: '',
};

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Email must contain only digits, letters and . - _ symbols. e.g. example@mail.com'
    )
    .email('Invalid email format, example@mail.com')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .max(30, 'Password must be shorter')
    .required('Password is required')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
});

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values, { resetForm, setFieldValue }) => {
    console.log('values', values);

    setFieldValue(selectedDate);

    const { name, birthDate, email, password } = values;
    dispatch(authOperations.signUp({ name, birthDate, email, password }))
      .unwrap()
      .then(() => {
        console.log('name:', name);
        console.log('birthDate:', birthDate);
        console.log('email:', email);
        console.log('password:', password);
        toast.success(`🦄 Success!`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1500,
        });
      })
      .catch(() => {
        console.log('name:', name);
        console.log('birthDate:', birthDate);
        console.log('email:', email);
        console.log('password:', password);

        toast.error(`Something went wrong. Try again`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1500,
        });
      });

    resetForm();
  };

  return (
    <SignUpContainer>
      <ToastContainer transition={Slide} />
      <Title>Sign Up</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ values, errors, touched }) => (
          <SignUpForm>
            <InputWrapper>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                error={errors.name && touched.name ? 'true' : 'false'}
                success={values.name && !errors.name ? 'true' : 'false'}
              />
              <ErrorMessage
                name="name"
                render={message => <ErrorText>{message}</ErrorText>}
              />
              {errors.name && touched.name ? (
                <ErrorSvgStyled />
              ) : values.name && !errors.name ? (
                <CheckSvgStyled />
              ) : null}
            </InputWrapper>

            <InputWrapper>
              <DatePicker
                selected={values.birthDate}
                onChange={date => setSelectedDate('birthDate', date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
              />
            </InputWrapper>

            <InputWrapper>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                error={errors.email && touched.email ? 'true' : 'false'}
                success={values.email && !errors.email ? 'true' : 'false'}
              />
              <ErrorMessage
                name="email"
                render={message => <ErrorText>{message}</ErrorText>}
              />
              {errors.email && touched.email ? (
                <ErrorSvgStyled />
              ) : values.email && !errors.email ? (
                <CheckSvgStyled />
              ) : null}
            </InputWrapper>

            <InputWrapper>
              <Input
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                placeholder="Password"
                error={errors.password && touched.password ? 'true' : 'false'}
                success={values.password && !errors.password ? 'true' : 'false'}
              />
              <ErrorMessage
                name="password"
                render={message => <ErrorText>{message}</ErrorText>}
              />
              {errors.password && touched.password ? (
                <ErrorSvgStyled />
              ) : values.password && !errors.password ? (
                <CheckSvgStyled />
              ) : null}
              <ToggleButton type="button" onClick={handleTogglePassword}>
                {values.password ? (
                  showPassword ? (
                    <ShowPassword />
                  ) : (
                    <HidePassword />
                  )
                ) : null}
              </ToggleButton>
            </InputWrapper>

            <Button type="submit">Sign Up</Button>
            <Link to="/signin">Sign In</Link>
          </SignUpForm>
        )}
      </Formik>
    </SignUpContainer>
  );
}

export default SignupForm;
