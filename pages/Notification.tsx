import React from 'react';
import { styled } from 'styled-components/native';
import Safe from '../components/common/Safe';
import CommonText from '../components/common/Text';

export default function NotificationPage() {
  return (
    <Notification>
      <Safe>
        <CommonText
          props={{ text: 'notification', weight: 'bold', size: 'L', color: 'black' }}
        />
      </Safe>
    </Notification>
  );
}

const Notification = styled.View`
  background-color: red;
  flex: 1;
`;
