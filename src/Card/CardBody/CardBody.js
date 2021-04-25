import './CardBody.scss';


function CardBody({ editing, content, onContentChange }) {

  const renderContent = () => {
    if (editing) {
      return <textarea
        className={'Card__input-content'}
        onChange={e => onContentChange(e.currentTarget.value)}
        defaultValue={content}
      />;
    }

    return <div className={'Card__content'}>{content}</div>;
  };

  return (
    <div className={'Card__content-wrapper'}>
      {renderContent()}
    </div>
  );
}

export default CardBody;
