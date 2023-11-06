import { createPortal } from 'react-dom';
import MotivatingModal from './MotivatingModal';
import { motivatingScenarios } from './motivatingScenarios';
import { useEffect, useState } from 'react';
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
  const [motivatingScenario, setMotivatingScenario] = useState(null);

  //   const motivatingScenario = motivationScenarios.scenario3;
  const closeModal = () => {
    setIsOpen(false);

    localStorage.setItem('motivatingModalClosed', 'true');
  };

  useEffect(() => {
    const isModalClosed =
      localStorage.getItem('motivatingModalClosed') === 'true';

    if (!isModalClosed) {
      if (userAuth === 10) {
        setMotivatingScenario(motivatingScenarios.scenario1);
      } else if (favoriteDrinks.length === 1) {
        setMotivatingScenario(motivatingScenarios.scenario2);
      } else if (favoriteDrinks.length === 10) {
        setMotivatingScenario(motivatingScenarios.scenario3);
      }

      if (motivatingScenario) {
        setIsOpen(true);
      }
    }
  }, [userAuth, favoriteDrinks, motivatingScenario]);

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
