// для використання однакових налаштувань імпортуємо собі в компонент
// import { toast } from 'react-toastify';
// import { toastConfig } from './notification';
// далі використовуєте як зазвичай toast + конфіг
// приклад: toast.success('You have successfully subscribed!', toastConfig());


export const toastConfig = (options = {}) => ({
position: "top-center",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
  ...options,
});


