import React, { ReactElement } from 'react';
import { styled } from 'styled-components/native';

export default function Safe({
  children,
  gap,
}: {
  children: ReactElement | ReactElement[];
  gap?: number;
}) {
  return <SafeBox gap={gap}>{children}</SafeBox>;
}

const SafeBox = styled.SafeAreaView<{ gap?: number }>`
  flex: 1;
  gap: ${({ gap }) => `${gap}px`};
`;
