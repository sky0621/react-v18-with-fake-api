import React from 'react';
import { useLoginForm, useLoginSubmit } from './LoginHooks';
import BriefNotification from '../organisms/BriefNotification/ui/BriefNotification';

const Login: React.FC = () => {
  const { loginId, changeLoginId, password, changePassword } = useLoginForm();
  const { handleLogin, alert } = useLoginSubmit(loginId, password);

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
      {alert != null && <BriefNotification log={alert} />}
    </>
  );
};

export default Login;
