import React from 'react';
import { styled } from 'styled-components/native';
import CommonText from '../components/common/Text';
import { Image } from 'react-native';
import Search from '../components/Search';
import Safe from '../components/common/Safe';
import Upcoming from '../components/Upcoming';

export default function HomePage() {
  return (
    <Home>
      <Safe gap={24}>
        <Greeting>
          <CommonText
            props={{ text: 'Hello, user!', size: 'M', weight: 'regular', color: 'grey' }}
          />

          <CommonText
            props={{
              text: 'Where are you going?',
              size: 'L',
              weight: 'bold',
              color: 'black',
            }}
          />
        </Greeting>
        <Search />
        <Upcoming />
      </Safe>
    </Home>
  );
}

const Home = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }) => theme.color.bg};
`;

const Greeting = styled.View`
  margin: 24px 0 20px;
`;
