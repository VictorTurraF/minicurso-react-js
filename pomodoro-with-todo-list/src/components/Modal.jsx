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
  inset: 0
})

const ModalContainer = styled('div', {
  padding: "2rem",
  borderRadius: "1rem",
  backgroundColor: "#fff"
})

function Modal({ isModalOpen = false, onModalClose = () => {}, onTaksFormSubmit = () => {} }) {
  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      onModalClose(event)
    }
  }

  return (
    isModalOpen && (
      createPortal(
        <Overlay onClick={handleOverlayClick}>
          <ModalContainer>
            <TaskForm onClose={onModalClose} onSubmit={onTaksFormSubmit} />
          </ModalContainer>
        </Overlay>,
        document.body
      )
    )
  )
}

export default Modal