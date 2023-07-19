import React from 'react';
import { styled } from 'styled-components/native';
import Safe from '../components/common/Safe';
import CommonText from '../components/common/Text';

export default function TicketPage() {
  return (
    <Ticket>
      <Safe>
        <CommonText
          props={{ text: 'notification', weight: 'bold', size: 'L', color: 'black' }}
        />
      </Safe>
    </Ticket>
  );
}

const Ticket = styled.View`
  background-color: red;
  flex: 1;
`;
