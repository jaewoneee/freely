import React, { useState } from 'react';
import { styled } from 'styled-components/native';
import Safe from '../components/common/Safe';
import CommonText from '../components/common/Text';
import Button from '../components/common/Button';
import { View, TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native';

export default function LoginPage() {
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Login>
        <Safe>
          <FormBox>
            <CommonText
              props={{ text: 'Login', size: 'XL', weight: 'bold', align: 'center' }}
            />
            <View>
              <CommonText props={{ text: 'Username', size: 'M', weight: 'regular' }} />
              <CommonInput value={username} onChangeText={setUsername} />
            </View>
            <View>
              <CommonText props={{ text: 'Password', size: 'M', weight: 'regular' }} />
              <CommonInput value={password} onChangeText={setPassword} />
            </View>
            <Button
              props={{
                text: 'Login',
                callback: () => console.log('login'),
                disabled: !username || !password ? true : false,
                point: username && password ? true : false,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 4,
                alignItems: 'center',
              }}
            >
              <CommonText
                props={{
                  text: `Dont't have an account?`,
                  size: 'M',
                  color: 'black',
                  weight: 'medium',
                }}
              />
              <Pressable onPress={() => console.log('hee')}>
                <CommonText
                  props={{
                    text: 'Sign Up',
                    size: 'M',
                    color: 'primary',
                    weight: 'bold',
                  }}
                />
              </Pressable>
            </View>
          </FormBox>
        </Safe>
      </Login>
    </TouchableWithoutFeedback>
  );
}

const Login = styled.View`
  background-color: ${({ theme }) => theme.color.bg};
  flex: 1;
  padding: 16px;
`;
const FormBox = styled.View`
  flex: 1;
  gap: 12px;
  justify-content: center;
`;

const CommonInput = styled.TextInput`
  border: 1px solid;
  border-radius: 8px;
  padding: 16px;
  margin-top: 4px;
  border-color: ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.black};
`;
