import { Formik } from 'formik';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';
import * as Yup from 'yup';
import { Input, InputWrapper, LoginForm, Title } from './SigninForm.styled';

const initialValues = { email: '', password: '' };
const schema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Email must contain only digits, letters and . - _ symbols. e.g. example@mail.com'
    )
    .email('Invalid email format, example@mail.com')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .max(30, 'Passwors must be shorter')
    .required('Password is required')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number'),
});

export default function SigninForm() {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(authOperations.signIn({ email, password }))
      .unwrap()
      .then(() => toast.success('Your login was successful!'))
      .catch(() => toast.error('Something went wrong. Try again'));
    resetForm();
  };

  return (
    <>
      <Title>Sign In</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched }) => (
          <LoginForm>
            <>
              <InputWrapper>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  error={errors.email && touched.email ? 'true' : 'false'}
                  success={values.email && !errors.email ? 'true' : 'false'}
                />
              </InputWrapper>

              <InputWrapper>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  name="password"
                  placeholder="Password"
                  error={errors.password && touched.password ? 'true' : 'false'}
                  success={
                    values.password && !errors.password ? 'true' : 'false'
                  }
                />
                <button type="button" onClick={handleTogglePassword}></button>
              </InputWrapper>
            </>

            <button type="submit">Sign In</button>
          </LoginForm>
        )}
      </Formik>
    </>
  );
}
