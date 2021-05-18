import './Header.scss';
import cl from 'classnames';
import Badge from "../common/Badge/Badge";

function Header({ containerStyleName, badge }) {
  return (
    <div className={'Header__header-wrapper'}>
      <div className={cl(containerStyleName, 'Header__container-background')}>
        <div className={'Header__content'}>
          <div>Header</div>
          <Badge>{badge}</Badge>
        </div>
      </div>
    </div>
  );
}

export default Header;
