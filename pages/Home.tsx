import React from 'react';
import { styled } from 'styled-components/native';
import CommonText from '../components/common/Text';
import { Image } from 'react-native';
import Search from '../components/Search';
import Safe from '../components/common/Safe';

export default function HomePage() {
  return (
    <Home>
      <Safe>
        <Greeting>
          <CommonText
            props={{ text: 'Hello, user!', size: 'S', weight: 'regular', color: 'grey' }}
          />

          <CommonText
            props={{
              text: 'Where are you going?',
              size: 'L',
              weight: 'semiBold',
              color: 'black',
            }}
          />
        </Greeting>
        <Search />
      </Safe>
    </Home>
  );
}

const Home = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }) => theme.color.bg};
`;

const Greeting = styled.View``;
