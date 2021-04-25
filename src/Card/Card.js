import { useState } from 'react';
import cl from 'classnames';
import './Card.scss';
import CardHeader from './CardHeader/CardHeader';
import CardBody from './CardBody/CardBody';

function Card({ className, onEdit,
                data: { caption, content, editing = false, selected = false },
                readOnly = false }) {

  // New values state
  const [state, setState] = useState({ caption, content });


  const onSelect = () =>
    onEdit({ selected: !selected });

  const onEditStart = () => {
    setState({ caption, content });
    onEdit({ editing: true, selected: false });
  };

  const onSave = () =>
    onEdit({ ...state, editing: false });

  const onEditCancel = () =>
    // Reset state values (to passed with props)
    onEdit({ editing: false });

  const onCaptionChange = (value) =>
    setState({...state, caption: value});

  const onContentChange = (value) =>
    setState({...state, content: value})


  return (
    <div className={className}>

      <div className={cl('Card', {'Card__selected': selected})}>
        <CardHeader
          caption={caption}
          editing={editing}
          readOnly={readOnly}
          selected={selected}
          onSelect={onSelect}
          onEditStart={onEditStart}
          onSave={onSave}
          onEditCancel={onEditCancel}
          onCaptionChange={onCaptionChange}
        />

        <div className={'Card__divider'} />

        <CardBody
          content={content}
          editing={editing}
          onContentChange={onContentChange}
        />
      </div>

    </div>
  );
}

export default Card;
