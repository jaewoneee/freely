import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';
import { FlightContext } from '../../context/FlightContext';
import { ModalContext } from '../../context/ModalContext';
import { styled } from 'styled-components/native';
import { useColorScheme } from 'react-native';

export default function Calendar() {
  const colorScheme = useColorScheme();
  const { modalProps, closeModal } = useContext(ModalContext);
  const { flightObj, setFlight } = useContext(FlightContext);
  const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    if (modalProps && date) {
      const newObj = flightObj[modalProps];
      newObj.date = date;
      setFlight({ ...flightObj, [modalProps]: newObj });
      closeModal();
    }
  }, [date]);

  return (
    <CalendarBox>
      <DatePicker
        onDateChange={(date) => setDate(date)}
        mode="calendar"
        current={flightObj[modalProps].date}
        selected={flightObj[modalProps].date}
        options={{
          backgroundColor: colorScheme === 'dark' ? '#1e1e1e' : '#ffffff',
          textHeaderColor: '#459AAC',
          textDefaultColor: colorScheme === 'dark' ? '#F0F0F0' : '#272526',
          selectedTextColor: '#fff',
          mainColor: '#459AAC',
          textSecondaryColor: colorScheme === 'dark' ? '#F0F0F0' : '#272526',
          borderColor: 'transparent',
        }}
      />
    </CalendarBox>
  );
}

const CalendarBox = styled.View`
  flex: 1;
`;
