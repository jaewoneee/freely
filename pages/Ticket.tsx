import React from 'react';
import { styled } from 'styled-components/native';
import Safe from '../components/common/Safe';

export default function TicketPage() {
  return (
    <Ticket>
      <Safe></Safe>
    </Ticket>
  );
}

const Ticket = styled.View``;
