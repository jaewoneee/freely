import React from 'react';
import { styled } from 'styled-components/native';
import CommonText from './Text';

export default function Loading() {
  return (
    <LoadingBox>
      <CommonText
        props={{
          text: 'Loading..',
          size: 'XL',
          weight: 'bold',
        }}
      />
    </LoadingBox>
  );
}

const LoadingBox = styled.View``;
