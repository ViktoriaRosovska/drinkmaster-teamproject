import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { addMyDrink } from 'redux/drinks/drinksOperations';

import { FormContainer } from './AddDrinkForm.styled';
import WhiteLinkBtn from '../../Buttons/WhiteLinkBtn/WhiteLinkBtn';
import { DrinkDescriptionFields } from '../../DrinkDescriptionFields/DrinkDescriptionFields';
// import DrinkRecipePreparation from 'components/DrinkRecipePreparation/DrinkRecipePreparation';
// import DrinkIngridientsFields from 'components/DrinkIngredientsFields/DrinkIngredientsFields';

import Loader from 'components/Loader';
import DrinkIngridientsFields from 'components/DrinkIngredientsFields/DrinkIngredientsFields';
import DrinkRecipePreparation from 'components/DrinkRecipePreparation/DrinkRecipePreparation';

// import chevronUp from '../../assets/images/addDrink/chevron-up.svg';
// import { ReactSVG } from 'react-svg';

export default function AddDrinkForm() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      drink: '',
      description: '',
      category: '',
      glass: '',
      alcoholic: 'Non alcoholic',
      instructions: '',
      ingredients: [
        {
          title: '',
          measure: '',
          ingredientId: '',
        },
      ],
    },
    validationSchema: Yup.object().shape({
      // drink: Yup.string().max(40).required('This field is required'),
      // description: Yup.string().required('This field is required'),
      // category: Yup.string().required('This field is required'),
      // glass: Yup.string().required('This field is required'),
      //   alcoholic: Yup.string().required('Select a type of drink'),
      //   instructions: Yup.string().required('This field is required'),
      //   ingredients: Yup.array().required('This field is required'),
      //   drinkThumb: Yup.mixed().required('Select a drink image'),
    }),
    onSubmit: async values => {
      const formData = new FormData();
      formData.append('drink', values.drink);
      formData.append('description', values.description);
      formData.append('category', values.category);
      formData.append('glass', values.glass);
      formData.append('alcoholic', values.alcoholic);
      formData.append('instructions', values.instructions);
      formData.append('ingredients', JSON.stringify(values.ingredients));
      formData.append('drinkThumb', values.drinkThumb);
      setIsLoading(true);
      console.log('hello');
      try {
        const responce = await dispatch(addMyDrink(formData));
        if (responce) {
          navigate('/my');
          console.log('Hurray!!!');
        } else {
          console.log('Server error', responce.statusText);
        }
      } catch (error) {
        console.log('Sending error. Please, try again', error.statusText);
      } finally {
        setIsLoading(false);
      }
    },
  });
  // text="Please, wait for the drink to be added"
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <FormContainer onSubmit={formik.handleSubmit}>
          <DrinkDescriptionFields
            values={formik.values}
            errors={formik.errors}
            touched={formik.touched}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            setFieldValue={formik.setFieldValue}
          />
          <DrinkIngridientsFields
            values={formik.values}
            errors={formik.errors}
            touched={formik.touched}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            setFieldValue={formik.setFieldValue}
          />

          <DrinkRecipePreparation
            values={formik.values}
            errors={formik.errors}
            touched={formik.touched}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            setFieldValue={formik.setFieldValue}
          />
          <WhiteLinkBtn type="submit" title="Add" />
        </FormContainer>
      )}
    </>
  );
}
