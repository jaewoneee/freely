import React, { ReactElement } from 'react';
import { styled } from 'styled-components/native';

function Card({ children }: { children: ReactElement }) {
  return <CardBox>{children}</CardBox>;
}

const CardBox = styled.View`
  padding: 16px;
  flex: 1;
  border: 1px solid ${({ theme }) => theme.color.pale_grey};
  border-radius: 8px;
`;

export default Card;
