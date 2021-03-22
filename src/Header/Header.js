import './Header.scss';
import cl from 'classnames';

function Header({ containerStyleName }) {
  return (
    <div className={'Header__header-wrapper'}>
      <div className={cl(containerStyleName, 'Header__container-background')}>
        <div className={'Header__content'}>
          <div>Header</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
