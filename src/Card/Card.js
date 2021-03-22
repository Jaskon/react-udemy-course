import './Card.scss';

function Card({ className, caption, content }) {
  return (
    <div className={className}>

      <div className={'Card'}>
        <div className={'Card__header'}>
          {caption}
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
