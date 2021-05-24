import './Header.scss';
import cl from 'classnames';
import Badge from "../common/Badge/Badge";
import { Link } from 'react-router-dom';

function Header({ containerStyleName, badge }) {
  return (
    <div className={'Header__header-wrapper'}>
      <div className={cl(containerStyleName, 'Header__container-background')}>
        <div className={'Header__content'}>
          <div className={'Header__links'}>
            <Link to="/">Home</Link>
            <Link to="/auth">Sign in</Link>
          </div>
          <Badge>{badge}</Badge>
        </div>
      </div>
    </div>
  );
}

export default Header;
