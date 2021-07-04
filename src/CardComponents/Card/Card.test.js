import React from 'react';
import { shallow } from 'enzyme';
import { Card } from "./Card";
import CardHeader from "./CardHeader/CardHeader";
import CardBody from "./CardBody/CardBody";


const defaultProps = {
  onEdit: jest.fn(),
  data: {
    caption: 'Caption',
    content: 'Content',
    editing: false,
    selected: false,
    readOnly: false
  }
};

const createComp = (props) => {
  return shallow(<Card
    {...defaultProps}
    {...props}
  />)
}


test('should be defined', () => {
  const wrapper = createComp();
  expect(wrapper).toBeDefined();
});

test('should have CardHeader and CardBody components inside', () => {
  const wrapper = createComp();

  expect(wrapper.find(CardHeader)).toHaveLength(1);
  expect(wrapper.find(CardHeader).prop('caption')).toEqual(defaultProps.data.caption);
  expect(wrapper.find(CardBody)).toHaveLength(1);
  expect(wrapper.find(CardBody).prop('content')).toEqual(defaultProps.data.content);
});

test('should call onEdit in a proper way', () => {
  const editMock = jest.fn();
  const changeStateMock = jest.fn();
  const useStateMock = jest.spyOn(React, 'useState');
  useStateMock.mockImplementation(initState => [initState, changeStateMock]);
  const wrapper = createComp({ onEdit: editMock });

  // onSelect
  wrapper.find('CardHeader').prop('onSelect')();
  expect(editMock).toHaveBeenCalledTimes(1);
  expect(editMock).toHaveBeenCalledWith({ selected: !defaultProps.selected });

  editMock.mockClear();

  // onEditStart
  wrapper.find('CardHeader').prop('onEditStart')();
  expect(editMock).toHaveBeenCalledTimes(1);
  expect(editMock).toHaveBeenCalledWith({ editing: true, selected: false });

  editMock.mockClear();

  // onSave
  wrapper.find('CardHeader').prop('onSave')();
  expect(editMock).toHaveBeenCalledTimes(1);
  expect(editMock).toHaveBeenCalledWith({
    caption: defaultProps.data.caption,
    content: defaultProps.data.content,
    editing: false
  });

  editMock.mockClear();

  // onEditCancel
  wrapper.find('CardHeader').prop('onEditCancel')();
  expect(editMock).toHaveBeenCalledTimes(1);
  expect(editMock).toHaveBeenCalledWith({ editing: false });

  changeStateMock.mockClear();

  // onCaptionChange
  const newCaption = 'New caption';
  wrapper.find('CardHeader').prop('onCaptionChange')(newCaption);
  expect(changeStateMock).toHaveBeenCalledTimes(1);
  expect(changeStateMock.mock.calls[0][0]).toMatchObject({ caption: newCaption });

  changeStateMock.mockClear();

  // onContentChange
  const newContent = 'New content';
  wrapper.find('CardBody').prop('onContentChange')(newContent);
  expect(changeStateMock).toHaveBeenCalledTimes(1);
  expect(changeStateMock.mock.calls[0][0]).toMatchObject({ content: newContent });
});
