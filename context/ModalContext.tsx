/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, ReactNode } from 'react';

interface ModalContextInterface {
  isModalVisible: boolean;
  modalName: string | null;
  modalProps: any;
  openModal: (name: string) => void;
  closeModal: () => void;
  setModalData: (data: any) => void;
}

export const ModalContext = createContext<ModalContextInterface>({
  isModalVisible: false,
  modalName: '',
  modalProps: null,
  openModal: () => {},
  closeModal: () => {},
  setModalData: () => {},
});

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalName, setModalName] = useState('');
  const [modalProps, setModalProps] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = (name: string) => {
    setModalName(name);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setModalName('');
    setIsModalVisible(false);
  };

  const setModalData = (data: any) => {
    setModalProps(data);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalVisible,
        openModal,
        closeModal,
        modalName,
        modalProps,
        setModalData,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
