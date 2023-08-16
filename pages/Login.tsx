import React, { useState } from 'react';
import { styled } from 'styled-components/native';
import Safe from '../components/common/Safe';
import CommonText from '../components/common/Text';
import Button from '../components/common/Button';
import { View, TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native';
import { useLogin } from '../api/user';
import { setStorageData } from '../utils/storage';

export default function LoginPage({ navigation }: { navigation: any }) {
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const { mutate: login } = useLogin();

  const handleLogin = () => {
    if (username && password)
      login(
        { username, password },
        {
          onSuccess: (data) => {
            data && setStorageData('token', data);
          },
        },
      );
  };

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
              <CommonInput
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <Button
              props={{
                text: 'Login',
                callback: handleLogin,
                disabled: !username || !password ? true : false,
                point: username && password ? true : false,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 4,
                marginTop: 12,
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
              <Pressable onPress={() => navigation.navigate('SignUp')}>
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
  flex: 0.9;
  gap: 14px;
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
