import React, { useContext, useState } from 'react';
import { styled } from 'styled-components/native';
import Button from './common/Button';
import Text from './common/Text';
import { AntDesign } from '@expo/vector-icons';
import { ModalContext } from '../context/ModalContext';
import { AirportContext } from '../context/AirportContext';

export default function Search() {
  const { openModal, setModalData } = useContext(ModalContext);
  const { airportObj, setAirports } = useContext(AirportContext);

  const swapDepartureForArrival = () => {
    setAirports({ departure: airportObj.arrival, arrival: airportObj.departure });
  };

  return (
    <SearchBox>
      <CountryBox>
        <Select>
          <Text props={{ text: 'From', size: 'S', weight: 'medium', color: 'grey' }} />
          <Button
            props={{
              text: `${airportObj.departure.city} (${airportObj.departure.iata_code})`,
              callback: () => {
                setModalData('departure');
                openModal('airport');
              },
              textType: true,
            }}
          />
        </Select>
        <Select>
          <Text props={{ text: 'To', size: 'S', weight: 'medium', color: 'grey' }} />
          <Button
            props={{
              text: `${airportObj.arrival.city} (${airportObj.arrival.iata_code})`,
              callback: () => {
                setModalData('arrival');
                openModal('airport');
              },
              textType: true,
            }}
          />
        </Select>
        <SwapButton onPress={swapDepartureForArrival}>
          <AntDesign name="swap" size={24} color="white" />
        </SwapButton>
      </CountryBox>
      <DateBox>
        <Select>
          <Text
            props={{ text: 'Departure', size: 'S', weight: 'medium', color: 'grey' }}
          />
          <Button
            props={{
              text: 'June 02, 2023',
              callback: () => 'hello',
              textType: true,
            }}
          />
        </Select>
        <Select>
          <Text props={{ text: 'Return', size: 'S', weight: 'medium', color: 'grey' }} />
          <Button
            props={{
              text: 'June 03, 2023',
              callback: () => console.log('hello'),
              textType: true,
            }}
          />
        </Select>
      </DateBox>
      <Button
        props={{ text: 'Search', callback: () => console.log('gbg'), point: true }}
      />
    </SearchBox>
  );
}

const SearchBox = styled.View`
  flex: 1.1;
  background-color: ${({ theme }) => theme.color.pale_grey};
  border-radius: 16px;
  padding: 14px;
  gap: 12px;
`;

const CountryBox = styled.View`
  flex: 1;
  gap: 12px;
  position: relative;
  justify-content: center;
`;

const DateBox = styled.View`
  flex-direction: row;
  gap: 12px;
`;

const Select = styled.View`
  background-color: #fff;
  border-radius: 16px;
  padding: 12px;
  gap: 8px;
  flex: 1;
  justify-content: center;
`;

const SwapButton = styled.TouchableOpacity`
  position: absolute;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  right: 10%;
  justify-content: center;
  align-items: center;
  transform: rotate(90deg);
`;
