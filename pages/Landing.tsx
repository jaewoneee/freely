import { styled } from 'styled-components/native';
import Button from '../components/common/Button';
import React from 'react';
import CommonText from '../components/common/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import Safe from '../components/common/Safe';

export default function LandingPage({ navigation }: { navigation: any }) {
  return (
    <Landing>
      <Safe>
        <TitleBox>
          <CommonText
            props={{
              text: 'Find your flight',
              size: 'XL',
              weight: 'bold',
              align: 'center',
            }}
          />
          <CommonText
            props={{
              text: ' Now no need to worry if you want to go anywhere, find lots of flight tickets to various destinations you want in just an app!',
              size: 'M',
              weight: 'regular',
              align: 'center',
              color: 'grey',
            }}
          />
        </TitleBox>
        <Button
          props={{
            text: 'Get Started',
            callback: () => navigation.navigate('Home'),
          }}
        />
      </Safe>
    </Landing>
  );
}

const Landing = styled.View`
  padding: 24px 16px;
  flex: 1;
  background-color: ${({ theme }) => theme.color.bg};
  background-color: red;
`;

const TitleBox = styled.View`
  margin-block: 16px;
`;
