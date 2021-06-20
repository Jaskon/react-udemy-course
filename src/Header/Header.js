import './Header.scss';
import cl from 'classnames';
import Badge from "../common/Badge/Badge";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/userSlice';
import Clickable from '../common/Clickable/Clickable';

function Header({ containerStyleName, badge }) {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  return (
    <div className={'Header__header-wrapper'}>
      <div className={cl(containerStyleName, 'Header__container-background')}>
        <div className={'Header__content'}>
          <div className={'Header__links'}>
            <Link to="/">Home</Link>
            {user
              ? <Clickable onClick={() => dispatch(logout())}>Sign out</Clickable>
              : <Link to="/auth">Sign in</Link>
            }
            {user?.role === 'admin' &&
              <Link to="/settings">Settings</Link>
            }
          </div>
          <div className={'Header__links'}>
            {user &&
              <span>Hello {user.username}</span>
            }
            <Badge>{badge}</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
