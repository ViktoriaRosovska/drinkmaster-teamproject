import { createPortal } from 'react-dom';
import MotivatingModal from './MotivatingModal';
import { motivationScenarios } from './motivatingScenarios';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from 'redux/auth/authOperations';

const MotivatingModalPortal = () => {
    const modalRoot = document.querySelector('#modal-root');
    
    // const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(true);
//   const [motivatingScenario, setMotivatingScenario] = useState({});

  const motivatingScenario = motivationScenarios.scenario3;

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await dispatch(authOperations.currentUser());
    //             console.log(response);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchData();
    // }, []);
         


  const closeModal = () => {
    setIsOpen(false);
  };

  return isOpen
    ? createPortal(
        <MotivatingModal
          open={isOpen}
          handleClose={closeModal}
          image={motivatingScenario.image}
          text={motivatingScenario.text}
        />,
        modalRoot
      )
    : null;
};

export default MotivatingModalPortal;
