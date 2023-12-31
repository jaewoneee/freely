import React, { useContext } from 'react';
import { Modal as RNModal, useColorScheme } from 'react-native';
import { ModalContext } from '../../context/ModalContext';
import Airport from './Airport';
import Safe from '../common/Safe';
import { styled } from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import Calendar from './Calendar';

export default function Modal() {
  const colorScheme = useColorScheme();
  const { isModalVisible, closeModal, modalName } = useContext(ModalContext);

  const setModalComponent = () => {
    switch (modalName) {
      case 'airport':
        return <Airport />;
      case 'calendar':
        return <Calendar />;
      default:
        return <></>;
    }
  };

  return (
    <RNModal visible={isModalVisible} animationType="slide">
      <ModalContainer>
        <Safe>
          <TopBar>
            <CloseButton onPress={closeModal}>
              <AntDesign
                name="close"
                size={24}
                color={colorScheme === 'dark' ? 'white' : 'black'}
              />
            </CloseButton>
          </TopBar>

          {setModalComponent()}
        </Safe>
      </ModalContainer>
    </RNModal>
  );
}

const ModalContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.bg};
`;

const TopBar = styled.View`
  flex: 0.1;
  justify-content: center;
  align-items: flex-end;
  padding: 0 16px;
`;
const CloseButton = styled.TouchableOpacity``;
