import React from 'react';
import { styled } from 'styled-components/native';
import Safe from '../components/common/Safe';
import CommonText from '../components/common/Text';
import Button from '../components/common/Button';
import { removeStorageData } from '../utils/storage';

export default function ProfilePage() {
  const logout = async () => {
    await removeStorageData('token');
  };

  return (
    <Profile>
      <Safe>
        <CommonText
          props={{ text: 'Profile', weight: 'bold', size: 'L', color: 'black' }}
        />
        <Button
          props={{
            text: 'Logout',
            callback: () => logout(),
            point: true,
          }}
        />
      </Safe>
    </Profile>
  );
}

const Profile = styled.View`
  background-color: ${({ theme }) => theme.color.bg};
  flex: 1;
  padding: 16px;
`;
