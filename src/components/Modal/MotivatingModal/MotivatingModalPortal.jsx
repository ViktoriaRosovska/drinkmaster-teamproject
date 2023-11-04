import { createPortal } from "react-dom";
import MotivatingModal from "./MotivatingModal";
import { motivationScenarios } from "./motivatingScenarios";
import { useState } from "react";

const MotivatingModalPortal = () => {
    const modalRoot = document.getElementById('modal-root');

    const [isOpen, setIsOpen] = useState(true);
    // const [motivatingScenario, setMotivatingScenario] = useState({});

    const motivatingScenario = motivationScenarios.scenario1;

    // useEffect

    const closeModal = () => {
        setIsOpen(false);
    }
    

    return isOpen ? (createPortal(<MotivatingModal open={isOpen} handleClose={closeModal} image={motivatingScenario.image} text={motivatingScenario.text} />, modalRoot)) : null;
}

export default MotivatingModalPortal