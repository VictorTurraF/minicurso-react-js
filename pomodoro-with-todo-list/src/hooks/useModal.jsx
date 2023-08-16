import { useState } from "react";

export default function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalMounted, setIsModalMounted] = useState(false);

  const openModal = () => {
    setIsModalMounted(true)

    setTimeout(() => {
      setIsModalOpen(true);
    }, 10)
  };

  const closeModal = () => {
    setIsModalOpen(false);

    setTimeout(() => {
      setIsModalMounted(false)
    }, 300)
  };

  return {
    isModalOpen,
    isModalMounted,
    openModal,
    closeModal,
    modalProps: {
      isModalOpen,
      isModalMounted,
      onModalClose: closeModal
    }
  }
}