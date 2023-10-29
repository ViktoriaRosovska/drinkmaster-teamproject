import { Formik } from "formik";
import { SybscribeWrapper, SybscribeInput, SybscribeText,SubscribeButton } from "./SubscribeForm.styled";
import { useDispatch } from 'react-redux';
import { subscribeEmail } from "redux/auth/authOperations";

const SubscribeForm = () => {
    const dispatch = useDispatch();



    return (
        <Formik initialValues={{ email: '' }} onSubmit={(values, actions) => { dispatch(subscribeEmail(values)); actions.resetForm();}}>
        <SybscribeWrapper>
            <SybscribeText>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</SybscribeText>
            <SybscribeInput />
            <SubscribeButton type='submit'>Subscribe</SubscribeButton>
        </SybscribeWrapper>
        </Formik>
    )
}

export default SubscribeForm;