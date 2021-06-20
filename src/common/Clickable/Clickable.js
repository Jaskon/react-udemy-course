import './Clickable.scss';

function Clickable({ children, ...props }) {
  return <a className={'Clickable'} {...props}>{children}</a>;
}

export default Clickable;
