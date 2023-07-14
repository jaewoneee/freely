import React from 'react';
import { styled } from 'styled-components/native';
import Safe from '../common/Safe';

export default function Airport() {
  return (
    <AirportBox>
      <Safe>{/* <AirportList></AirportList> */}</Safe>
    </AirportBox>
  );
}
const AirportBox = styled.View`
  flex: 1;
  background-color: skyblue;
`;
const AirportList = styled.FlatList``;
