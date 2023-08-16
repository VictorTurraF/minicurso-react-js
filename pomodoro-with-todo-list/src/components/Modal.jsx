import React from 'react'
import { createPortal } from 'react-dom'
import TaskForm from './TaksForm'
import { styled } from '@stitches/react'

const Overlay = styled('div', {
  backgroundColor: "rgba(0,0,0, .5)",
  position: "fixed",
  display: 'flex',
  alignItems: "center",
  justifyContent: "center",
  inset: 0,
  opacity: 0,
  transition: "opacity .3s ease-in-out",
  variants: {
    isOpen: {
      [true]: {
        opacity: 1
      },
      [false]: {
        opacity: 0
      }
    }
  }
})

const ModalContainer = styled('div', {
  padding: "2rem",
  borderRadius: "1rem",
  backgroundColor: "#fff"
})

function Modal({ 
  isModalOpen = false, 
  isModalMounted = false, 
  onModalClose = () => { },
  children
}) {
  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      onModalClose(event)
    }
  }

  return (
    isModalMounted && (
      createPortal(
        <Overlay isOpen={isModalOpen} onClick={handleOverlayClick}>
          <ModalContainer>
            {children}
          </ModalContainer>
        </Overlay>,
        document.body
      )
    )
  )
}

export default Modal