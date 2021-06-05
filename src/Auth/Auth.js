import './Auth.scss';
import { Link } from 'react-router-dom';

function Auth() {
  return <div className={'Auth__container'}>
    <label>Username</label>
    <input type="text"/>

    <label>Password</label>
    <input type="text"/>

    <Link to="/">
      <button>Sign in</button>
    </Link>
  </div>;
}

export default Auth;
