import { Field, Formik, Form } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';
// import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';

const initialValues = {
  name: '',
  birthDate: '',
  email: '',
  password: '',
};

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  // const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('values', values);

    const { name, birthDate, email, password } = values;
    dispatch(authOperations.signUp({ name, birthDate, email, password }));

    resetForm();
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="name" placeholder="Name" required />

          {/* <StyledDatepicker name="date" /> */}
          {/* <DatePicker
            onChange={date => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/mm/yyyy"
            // locale="en-GB"
          /> */}

          <Field type="email" name="email" placeholder="Email" required />

          <Field
            type="password"
            name="password"
            placeholder="Password"
            required
          />

          <button type="submit">Sign Up</button>
          <Link to="/signin">Sign In</Link>
        </Form>
      </Formik>
    </div>
  );
}

export default SignupForm;
