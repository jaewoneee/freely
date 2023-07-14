import React, { useContext } from 'react';
import { View, Text, Modal as RNModal, Button } from 'react-native';
import { ModalContext } from '../../context/ModalContext';
import Airport from './Airport';
import Safe from '../common/Safe';
import { styled } from 'styled-components/native';

export default function Modal() {
  const { isModalVisible, closeModal, modalName } = useContext(ModalContext);

  const setModalComponent = () => {
    switch (modalName) {
      case 'airport':
        return <Airport />;

      default:
        return <View></View>;
    }
  };

  return (
    <RNModal visible={isModalVisible} animationType="slide">
      <ModalContainer>
        <Safe>{setModalComponent()}</Safe>
      </ModalContainer>
    </RNModal>
  );
}

const ModalContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.bg};
`;
