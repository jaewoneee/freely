import React from 'react';
import { css, styled } from 'styled-components/native';
import Text from './common/Text';
import Button from './common/Button';
import { Feather } from '@expo/vector-icons';

export default function Upcoming() {
  const dummyData = [
    { city: 'Chicago', iata_code: 'ORD' },
    { city: 'Atlanta', iata_code: 'ATL' },
  ];

  return (
    <UpcomingBox>
      <Topper>
        <Text props={{ text: 'Upcoming Flight', size: 'L', weight: 'bold' }} />
        <Button
          props={{
            text: 'See All',
            textType: true,
            callback: () => console.log('hello'),
          }}
        />
      </Topper>
      <Ticket>
        <Row flex={0.5} border>
          <Ball />
          <Badge text="Nov.24 2022" type="calendar" />
          <Badge text="1h 30Min" type="clock" />
          <Ball right={true} />
        </Row>
        <Row>
          <Item data={dummyData} />
        </Row>
      </Ticket>
    </UpcomingBox>
  );
}

function Badge({ text, type }: { text: string; type: 'clock' | 'calendar' }) {
  return (
    <BadgeBox>
      <Feather name={type} size={16} color="#459AAC" />
      <Text props={{ text, size: 'M', weight: 'medium', color: 'primary' }} />
    </BadgeBox>
  );
}

function Item({ data }: { data: { iata_code: string; city: string }[] }) {
  return (
    <>
      {data.map((v) => (
        <ItemBox key={v.iata_code}>
          <Text props={{ text: v.iata_code, weight: 'bold', size: 'L' }} />
          <Text props={{ text: v.city, color: 'grey', weight: 'regular', size: 'M' }} />
        </ItemBox>
      ))}
    </>
  );
}

const UpcomingBox = styled.View`
  flex: 0.9;
`;

const Topper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Ticket = styled.View`
  background-color: ${({ theme }) => theme.color.pale_grey};
  border-radius: 16px;
  padding: 14px;
  flex: 0.8;
  gap: 8px;
  position: relative;
`;

const Row = styled.View<{ flex?: number; border?: boolean }>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: ${({ flex }) => flex ?? 1};
  position: relative;
  ${({ border }) =>
    border &&
    css`
      padding-bottom: 12px;
      border-color: ${({ theme }) => theme.color.bg};
      border-bottom-width: 2px;
    `}
`;

const BadgeBox = styled.View`
  background-color: #d0fcf5d0;
  padding: 4px 8px;
  border-radius: 16px;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

const ItemBox = styled.View``;

const Ball = styled.View<{ right?: boolean }>`
  position: absolute;
  background-color: ${({ theme }) => theme.color.bg};
  bottom: -10px;
  ${({ right }) =>
    right
      ? css`
          right: -20px;
        `
      : css`
          left: -20px;
        `}

  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
