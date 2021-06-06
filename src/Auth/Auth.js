import './Auth.scss';
import InputValidation from "../common/InputValidation/InputValidation";
import {useState} from "react";

function Auth() {
  const [username, setUsername] = useState({ value: '', valid: false });
  const [password, setPassword] = useState({ value: '', valid: false });

  return <div className={'Auth__container'}>
    <label>Username</label>
    <InputValidation
      onChange={({value, valid}) => setUsername({value, valid})}
      validationFunc={(v) => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(v)}
      placeholder={'Email'}
    />

    <label>Password</label>
    <InputValidation
      type="password"
      onChange={({value, valid}) => setPassword({value, valid})}
      validationFunc={(v) => /[0-9]/.test(v) && /[a-zA-Z]/.test(v) && v.length >= 8}
      placeholder={'Password'}
    />

    <button
      onClick={() => console.log(username, password)}
      disabled={!username.valid || !password.valid}
    >Sign in</button>
  </div>;
}

export default Auth;
