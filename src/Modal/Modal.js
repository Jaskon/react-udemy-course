import './Modal.scss';
import cl from 'classnames';


function Modal({ children, className, onBackdropClick }) {
  return <>
    <div className={'Modal__backdrop'} onClick={onBackdropClick} />
    <div className={cl('Modal__window', className)}>
      {children}
    </div>
  </>;
}


export default Modal;
