import React, {useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import './styles/Navbar.css';
import AvatarPic from '../photos/avatar.jpg';

const ModalWrapper = styled.div`
  width: 800px;
  height: 600px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr;
  position: fixed;
  z-index: 100;
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
  z-index: 100;
`;

export const ViewForm = ({val, showModal, setShowModal }) => {
  
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
                <ModalContent >
                <div class="mt-5 text-center">
                    <h4 class="mb-0" id="title">{val.firstName} {val.lastName}</h4>
                    <Link to ="/Message"><button style={{marginTop: "20px"}} id = "sort" type="button">Contact</button></Link>
                    <div class="d-flex justify-content-between align-items-center mt-4 px-4">
                        <div class="stats">
                            <h6 class="mb-0">Company</h6 > <span class="mb-0" id="statsDesc">{val.companyName}</span>
                        </div>
                        <div class="stats">
                            <h6 class="mb-0">Industry</h6> <span class="mb-0" id="statsDesc">{val.industryName}</span>
                        </div>
                        <div class="stats">
                            <h6 class="mb-0">Emirate</h6> <span class="mb-0" id="statsDesc">{val.emirateName}</span>
                        </div>
                    </div>
                    <div class = "stats" id = "companyDesc">{val.companyDesc}</div>
                    
                    <div class="mb-0" id="footer">{val.companyWebsite}</div>
                    <div class="mb-0" id="footer">This Company has {val.numofPeople}</div>


                </div>
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

