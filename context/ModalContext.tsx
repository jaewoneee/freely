/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, ReactNode } from 'react';

interface ModalContextType {
  isModalVisible: boolean;
  modalName: string | null;
  openModal: (name: string) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({
  isModalVisible: false,
  modalName: '',
  openModal: () => {},
  closeModal: () => {},
});

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalName, setModalName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = (name: string) => {
    setModalName(name);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setModalName('');
    setIsModalVisible(false);
  };

  return (
    <ModalContext.Provider value={{ isModalVisible, openModal, closeModal, modalName }}>
      {children}
    </ModalContext.Provider>
  );
};
