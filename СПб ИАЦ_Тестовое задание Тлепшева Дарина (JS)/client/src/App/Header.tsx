import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { logout, selectUser } from '../features/user/redux/userSlice';
import { useAppDispatch } from '../store';
import './header.scss';

export default function Header(): JSX.Element {
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();
  console.log(user?.Role?.name);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="header">
        <div className="header-container">
          <div className="left">
            <Link to="/" className="link">
              Главная
            </Link>
          </div>
          <div className="right">
            {user ? (
              <>
                <div className="user"> {user?.User?.fullname}</div>
                <Link to="/">
                  <button className="link button logout" onClick={handleClick}>
                    Выйти
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/auth/register" className="link">
                  Регистрация
                </Link>
                <Link to="/auth/login" className="link">
                  Войти
                </Link>
              </>
            )}
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
}
