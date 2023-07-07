import React, { ReactElement } from 'react';
import { styled } from 'styled-components/native';

export default function Safe({ children }: { children: ReactElement | ReactElement[] }) {
  return <SafeBox>{children}</SafeBox>;
}

const SafeBox = styled.SafeAreaView`
  background-color: orange;
  flex: 1;
`;
