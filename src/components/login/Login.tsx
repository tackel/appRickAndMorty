// packages
import React from 'react';

// styles
import {
  Button,
  IconContainer,
  Label,
  ScreenBottom,
  ScreenImage,
  TextButton,
} from './style';

//components
import Input from './Input';
import ButtonComponent from './Button';
import {StatusBar, Text, View} from 'react-native';
import {Auth} from '../../Provider/AuthProvider';

import {supabase} from '../../supabase/supabaseCliente';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function LoginComponent() {
  const {handleLogin} = React.useContext(Auth);

  const [isSignUp, setIsSignUp] = React.useState(true);
  const [email, setEmail] = React.useState<string>('');
  const [password, setPass] = React.useState<string>('');
  const [error, setError] = React.useState<string>('');
  const [errorPass, setErrorPass] = React.useState<string>('');

  const [active, setActive] = React.useState<boolean>();

  const handleKeyBoard = () => {
    setActive(prevState => !prevState);
  };

  const hangleSignUp = async () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const trueMail = re.test(String(email).toLowerCase());
    trueMail ? setError('') : setError('invalid email');
    password.length >= 8
      ? setErrorPass('')
      : setErrorPass('must be more than 8 characters');

    if (password.length >= 8 && trueMail) {
      try {
        const {user, session, error} = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        alert('Confirme la Suscripcion en su Mail y Podra Loguearse.');
        //handleLogin ? handleLogin() : null;
      } catch (e) {
        alert(e.message);
      }
    }
  };

  const hangleSignIn = async () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const trueMail = re.test(String(email).toLowerCase());
    trueMail ? setError('') : setError('invalid email');
    password.length >= 8
      ? setErrorPass('')
      : setErrorPass('must be more than 8 characters');

    if (password.length >= 8 && trueMail) {
      try {
        const {user, session, error} = await supabase.auth.signIn({
          email,
          password,
        });
        if (error) throw error;
        alert('User Logged');
        handleLogin ? handleLogin() : null;
      } catch (e) {
        alert(e.message);
      }
    }
  };

  const changeForm = () => {
    setIsSignUp(value => !value);
  };
  return (
    <ScreenImage source={require('../../../assets/images/rym2.jpg')}>
      <StatusBar barStyle="light-content" />

      <ScreenBottom>
        <View>
          <Label style={{textAlign: 'center'}}>
            {isSignUp ? 'Sign In   (Loguearse)' : 'Sign Up   (Registrese)'}
          </Label>

          <Input
            name={'Sms'}
            value={email}
            onChangeText={setEmail}
            onFocus={handleKeyBoard}
            onBlur={handleKeyBoard}
            placeholder="Email"
            errorMessage={error}
            type="mail"
          />
          <Input
            //name="password"
            value={password}
            onChangeText={setPass}
            onBlur={handleKeyBoard}
            onFocus={handleKeyBoard}
            placeholder="Password"
            errorMessage={errorPass}
            type="password"
          />

          <Button>
            {isSignUp ? (
              <ButtonComponent
                color="white"
                title="Sign In (Loguearse)"
                onPress={hangleSignIn}
              />
            ) : (
              <ButtonComponent
                color="orange"
                title="Sign Up (Registrarse)"
                onPress={hangleSignUp}
              />
            )}
          </Button>

          <TouchableOpacity style={{padding: 10}} onPress={changeForm}>
            <TextButton style={{color: 'blue'}}>
              {!isSignUp ? 'Are you account? Sign In' : 'Are you new? Sign Up'}
            </TextButton>
          </TouchableOpacity>
        </View>
      </ScreenBottom>
    </ScreenImage>
  );
}
