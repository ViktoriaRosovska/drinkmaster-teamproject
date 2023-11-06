import { createPortal } from 'react-dom';
import MotivatingModal from './MotivatingModal';
import { motivatingScenarios } from './motivatingScenarios';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { useDrink } from 'hooks/useDrink';

const MotivatingModalPortal = () => {
  const modalRoot = document.querySelector('#modal-root');
  const userAuth = useSelector(authSelectors.selectUserAuth);
  console.log('userAuth:', userAuth);
  const { favoriteDrinks } = useDrink();
  console.log(favoriteDrinks.length);

    const [isOpen, setIsOpen] = useState(false);
    let motivatingScenarioRef = useRef(null);
//   const [motivatingScenario, setMotivatingScenario] = useState(null);

  //   const motivatingScenario = motivationScenarios.scenario3;
  const closeModal = () => {
    setIsOpen(false);

    localStorage.setItem('motivatingModalClosed', 'true');
  };

  useEffect(() => {
    const isModalClosed =
      localStorage.getItem('motivatingModalClosed') === 'true';

    if (!isModalClosed) {
      if (userAuth === 47) {
          motivatingScenarioRef.current = motivatingScenarios.scenario1;
      } else if (favoriteDrinks.length === 1) {
        motivatingScenarioRef.current = motivatingScenarios.scenario2;
      } else if (favoriteDrinks.length === 10) {
        motivatingScenarioRef.current = motivatingScenarios.scenario3;
      }

      if (motivatingScenarioRef.current) {
          setIsOpen(true);
          localStorage.setItem('motivatingModalClosed', 'true');
      }
    }
  }, [userAuth, favoriteDrinks]);

  return isOpen
    ? createPortal(
        <MotivatingModal
          open={isOpen}
          handleClose={closeModal}
          image={motivatingScenarioRef.current.image}
          text={motivatingScenarioRef.current.text}
        />,
        modalRoot
      )
    : null;
};

export default MotivatingModalPortal;
