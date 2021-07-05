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


describe('should call onEdit when appropriate callback called', () => {
  const editMock = jest.fn();
  const wrapper = createComp({ onEdit: editMock });

  beforeEach(() => {
    editMock.mockClear();
  });

  test('onSelect', () => {
    wrapper.find('CardHeader').prop('onSelect')();
    expect(editMock).toHaveBeenCalledTimes(1);
    expect(editMock).toHaveBeenCalledWith({ selected: !defaultProps.selected });
  });

  test('onEditStart', () => {
    wrapper.find('CardHeader').prop('onEditStart')();
    expect(editMock).toHaveBeenCalledTimes(1);
    expect(editMock).toHaveBeenCalledWith({editing: true, selected: false});
  });

  test('onSave', () => {
    wrapper.find('CardHeader').prop('onSave')();
    expect(editMock).toHaveBeenCalledTimes(1);
    expect(editMock).toHaveBeenCalledWith({
      caption: defaultProps.data.caption,
      content: defaultProps.data.content,
      editing: false
    });
  });

  test('onEditCancel', () => {
    wrapper.find('CardHeader').prop('onEditCancel')();
    expect(editMock).toHaveBeenCalledTimes(1);
    expect(editMock).toHaveBeenCalledWith({editing: false});
  });
});


describe('should set right state on appropriate callback called', () => {
  let wrapper;
  let changeStateMock;
  let useStateMock;

  beforeAll(() => {
    // Mock React setState fn (via mocking useState hook)
    changeStateMock = jest.fn();
    useStateMock = jest.spyOn(React, 'useState');
    useStateMock.mockImplementation(initState => [initState, changeStateMock]);

    wrapper = createComp();
  });

  afterAll(() => {
    // Restore React useState hook
    useStateMock.mockRestore();
  });

  beforeEach(() => {
    changeStateMock.mockClear();
  });

  test('onCaptionChange', () => {
    const newCaption = 'New caption';
    wrapper.find('CardHeader').prop('onCaptionChange')(newCaption);
    expect(changeStateMock).toHaveBeenCalledTimes(1);
    expect(changeStateMock.mock.calls[0][0]).toMatchObject({caption: newCaption});
  });

  test('onContentChange', () => {
    const newContent = 'New content';
    wrapper.find('CardBody').prop('onContentChange')(newContent);
    expect(changeStateMock).toHaveBeenCalledTimes(1);
    expect(changeStateMock.mock.calls[0][0]).toMatchObject({content: newContent});
  });
});
