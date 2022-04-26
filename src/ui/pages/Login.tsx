import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import useLogin from '../../usecase/login';

type Props = {
  saveToken: Dispatch<SetStateAction<string>>;
};

const Login: React.FC<Props> = (props) => {
  const { saveToken } = props;

  const { handleLogin } = useLogin();

  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const changeLoginId = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginId(e.target.value);
  };
  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();
  const onSubmit = (e: SyntheticEvent) => {
    const token = handleLogin(loginId, password);
    saveToken(token);
    navigate('/');
    e.preventDefault();
  };

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
          <input type="button" onClick={onSubmit} name="login" value="LOGIN" />
        </div>
      </form>
    </>
  );
};

export default Login;
