import React, { ReactElement } from 'react';
import { styled } from 'styled-components/native';

export default function Safe({
  children,
  gap,
  jusifyContent,
}: {
  children: ReactElement | ReactElement[];
  gap?: number;
  jusifyContent?: 'space-between' | 'center';
}) {
  return (
    <SafeBox gap={gap} justifyContent={jusifyContent}>
      {children}
    </SafeBox>
  );
}

const SafeBox = styled.SafeAreaView<{ gap?: number; justifyContent?: string }>`
  flex: 1;
  gap: ${({ gap }) => `${gap}px`};
`;
