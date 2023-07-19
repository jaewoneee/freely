import React from 'react';
import { styled } from 'styled-components/native';
import Safe from '../components/common/Safe';
import CommonText from '../components/common/Text';

export default function ProfilePage() {
  return (
    <Profile>
      <Safe>
        <CommonText
          props={{ text: 'Profile', weight: 'bold', size: 'L', color: 'black' }}
        />
      </Safe>
    </Profile>
  );
}

const Profile = styled.View`
  background-color: red;
  flex: 1;
`;
