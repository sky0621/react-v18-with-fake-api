import React from 'react';
import useLogin from './LoginHooks';

const Login: React.FC = () => {
  const { loginId, changeLoginId, password, changePassword, handleLogin } =
    useLogin();

  return (
    <>
      <div>Login Form</div>
      <form>
        <div>
          ID:
          <input
            type="text"
            name="loginId"
            value={loginId}
            onChange={changeLoginId}
          />
        </div>
        <div>
          Password:
          <input
            type="password"
            name="loginId"
            value={password}
            onChange={changePassword}
          />
        </div>
        <div>
          <input
            type="button"
            onClick={handleLogin}
            name="login"
            value="LOGIN"
          />
        </div>
      </form>
    </>
  );
};

export default Login;
