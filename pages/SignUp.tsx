import React, { useState } from 'react';
import { styled } from 'styled-components/native';
import Safe from '../components/common/Safe';
import CommonText from '../components/common/Text';
import Button from '../components/common/Button';
import { View, TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native';

export default function SignUpPage() {
  const [username, setUsername] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const [confirmedPassword, setConfirmedPassword] = useState<string | undefined>(
    undefined,
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SignUp>
        <Safe>
          <FormBox>
            <CommonText
              props={{ text: 'Sign Up', size: 'XL', weight: 'bold', align: 'center' }}
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
            <View>
              <CommonText
                props={{ text: 'Confirmed Password', size: 'M', weight: 'regular' }}
              />
              <CommonInput
                secureTextEntry={true}
                value={confirmedPassword}
                onChangeText={setConfirmedPassword}
              />
            </View>
            <Button
              props={{
                text: 'Sign Up',
                callback: () => console.log('sign'),
                disabled:
                  !password || !confirmedPassword || password !== confirmedPassword
                    ? true
                    : false,
                point: username && password === confirmedPassword ? true : false,
              }}
            />
          </FormBox>
        </Safe>
      </SignUp>
    </TouchableWithoutFeedback>
  );
}

const SignUp = styled.View`
  background-color: ${({ theme }) => theme.color.bg};
  flex: 1;
  padding: 16px;
`;
const FormBox = styled.View`
  flex: 1;
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
