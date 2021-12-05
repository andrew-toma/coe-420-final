import React, {useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import './styles/Navbar.css';

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  z-index: 10;
  border-radius: 25px;
  
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2.0;
  color: #141414;
  margin:10px 30px;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const View = ({val, showModal, setShowModal }) => {
  
  const modalRef = useRef();
  
    const animation = useSpring({
      config: {
        duration: 250
      },
      opacity: showModal ? 1 : 0,
      transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });
  
    const closeModal = e => {
      if (modalRef.current === e.target) {
        setShowModal(false);
      }
    };
  
    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape' && showModal) {
          setShowModal(false);
          console.log('I pressed');
        }
      },
      [setShowModal, showModal]
    );
  
    useEffect(
      () => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
      },
      [keyPress]
    );
  return (
    
      <>
          {showModal ? (
            <animated.div style={animation}>
              <ModalWrapper showModal={showModal}>
                {/* <ModalImg src={require('./modal.jpg')} alt='camera' /> */}
                <ModalContent >
                  <h2>{val.companyName}</h2>
                  <h1 class="subtitle">{val.firstName} {val.lastName}</h1>
                  <p><strong>Email:</strong> {val.email}</p>
                  <p><strong>Industry:</strong> {val.industry}</p>
                  <p><strong>Emirate:</strong> {val.emirate}</p>
                  <Link to ="/Message"><button id = "sort" type="button">Contact</button></Link>
                </ModalContent>
                <CloseModalButton
                  aria-label='Close modal'
                  onClick={() => setShowModal(prev => !prev)}
                />
              </ModalWrapper>
            </animated.div>
            ) : null}

    </>
  );
};

