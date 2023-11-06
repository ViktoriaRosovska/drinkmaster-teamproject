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
  console.log('length:', favoriteDrinks.length);

    const [isOpen, setIsOpen] = useState(false);
    // let motivatingScenario = null;
    const [motivatingScenario, setMotivatingScenario] = useState(null);
 

  //   const motivatingScenario = motivationScenarios.scenario3;
    const closeModal = () => {
        setIsOpen(false);
    };

    const isUser10 = localStorage.getItem('motivatingUser10');

    useEffect(() => {
     
        const isFirstFav = localStorage.getItem('motivatingFavorite1');
        const isTenthFav = localStorage.getItem('motivatingFavorite10');
        
    

        if (isFirstFav && isFirstFav === 'false') {
            setIsOpen(true)
            setMotivatingScenario(motivatingScenarios.scenario2)
            localStorage.setItem('motivatingFavorite1', 'true')
        } else if (isTenthFav && isTenthFav === 'false') {
            setIsOpen(true);
            setMotivatingScenario(motivatingScenarios.scenario3)
            localStorage.setItem('motivatingFavorite10', 'true')
        } else if (isUser10 && isUser10 === 'false') {
            setIsOpen(true)
            setMotivatingScenario(motivatingScenarios.scenario1)
            localStorage.setItem('motivatingUser10', 'true')
        }
    }, [isUser10, favoriteDrinks])
    
    
    
  console.log(motivatingScenario);

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
