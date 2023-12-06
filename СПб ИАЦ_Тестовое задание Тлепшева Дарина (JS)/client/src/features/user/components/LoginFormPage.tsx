import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store';
import { loginUser } from '../redux/userSlice';
import { LoginUserData } from '../types/User';
import { Button, TextField, Container, Typography } from '@mui/material';
import useStyles from '../css/Login.module.css'; // Импортируем стили

function Login(): JSX.Element {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const data: LoginUserData = {
      login,
      password,
    };

    dispatch(loginUser(data));

    navigate('/');
  };

  return (
    <Container maxWidth="xs" className={useStyles.formContainer}>
      <form onSubmit={onHandleSubmit} className={useStyles.form}>
        <Typography variant="h4" className={useStyles.title}>
          Авторизация
        </Typography>
        <TextField
          className={useStyles.input}
          label="Login"
          variant="outlined"
          type="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
        <TextField
          className={useStyles.input}
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          className={useStyles.submitButton}
          variant="contained"
          color="primary"
          type="submit"
        >
          Войти
        </Button>
      </form>
    </Container>
  );
}

export default Login;
