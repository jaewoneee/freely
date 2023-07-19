import React from 'react';
import { css, styled } from 'styled-components/native';

type ButtonPropsTypes = {
  text: string;
  callback: () => void;
  border?: boolean;
  point?: boolean;
  disabled?: boolean;
  textType?: boolean;
  color?: string;
};

export default function Button({ props }: { props: ButtonPropsTypes }) {
  const { text, callback, border, point, textType, color, disabled } = props;

  return textType ? (
    <TextButtonBox onPress={() => callback()}>
      <ButtonText textType={textType} color={color}>
        {text}
      </ButtonText>
    </TextButtonBox>
  ) : (
    <ButtonBox
      onPress={() => callback()}
      border={border}
      point={point}
      disabled={disabled}
    >
      <ButtonText point={point} disabled={disabled}>
        {text}
      </ButtonText>
    </ButtonBox>
  );
}

const ButtonBox = styled.TouchableOpacity<{
  border?: boolean;
  point?: boolean;
  disabled?: boolean;
}>`
  border-radius: 8px;
  padding: 18px 8px;
  background-color: ${({ theme, point }) =>
    point ? theme.color.primary : theme.color.btn_bg};
  width: 100%;
  border: ${({ border }) => (border ? '1px solid red' : '0')};
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.color.grey};
      color: ${({ theme }) => theme.color.pale_grey};
    `}
`;

const TextButtonBox = styled.TouchableOpacity``;

const ButtonText = styled.Text<{
  point?: boolean;
  textType?: boolean;
  color?: string;
  disabled?: boolean;
}>`
  color: ${({ theme, point, color, disabled }) =>
    color
      ? color
      : point
      ? '#fff'
      : disabled
      ? theme.color.pale_grey
      : theme.color.btn_text};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: ${({ textType }) => (textType ? 'left' : 'center')};
  font-size: 16px;
`;
