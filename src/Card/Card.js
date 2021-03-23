import cl from 'classnames';
import './Card.scss';

function Card({ className, caption, content,
                checkbox = false, selected = false,
                onSelect = undefined }) {

  const onHeaderClick = () => {
    return onSelect(!selected);
  };

  return (
    <div className={className}>

      <div className={cl('Card', {'Card__selected': selected})}>
        <div
          className={cl('Card__header', {'Card__clickable': checkbox})}
          onClick={checkbox ? onHeaderClick : undefined}
        >
          <div>{caption}</div>
          {checkbox &&
            <input type={'checkbox'} className={'Card__clickable'} checked={selected} readOnly />
          }
        </div>

        <div className={'Card__divider'} />

        <div className={'Card__content'}>
          {content}
        </div>
      </div>

    </div>
  );
}

export default Card;
