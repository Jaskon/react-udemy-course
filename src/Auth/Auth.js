import './Auth.scss';
import { Link } from 'react-router-dom';

function Auth() {
  return <div className={'Auth__container'}>
    <label htmlFor="username">Username</label>
    <input type="text"/>

    <label htmlFor="username">Password</label>
    <input type="text"/>

    <Link to="/">
      <button>Sign in</button>
    </Link>
  </div>;
}

export default Auth;
