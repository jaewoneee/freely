import React from 'react';
import { styled } from 'styled-components/native';

type TextPropsType = {
  text: string;
  size: 'XL' | 'L' | 'M' | 'S';
  weight: 'light' | 'regular' | 'medium' | 'semiBold' | 'bold' | 'extra';
  color?: 'black' | 'grey' | 'pale_grey';
  align?: 'center' | 'left' | 'right';
};

export default function CommonText({ props }: { props: TextPropsType }) {
  const { text } = props;
  return <TextBox props={props}>{text}</TextBox>;
}

const TextBox = styled.Text<{ props: TextPropsType }>`
  color: ${({ props, theme }) => theme.color[props.color || 'black']};
  text-align: ${({ props }) => props.align || 'left'};
  font-family: ${({ theme, props }) => theme.fonts[props.weight]};
  font-size: ${({ props }) =>
    props.size === 'XL'
      ? '32px'
      : props.size === 'L'
      ? '24px'
      : props.size === 'M'
      ? '16px'
      : '14px'};
`;
