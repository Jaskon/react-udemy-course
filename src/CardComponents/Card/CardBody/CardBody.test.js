import { shallow } from 'enzyme';
import CardBody from "./CardBody";


const defaultProps = {
  editing: false,
  content: 'Some content',
  onContentChange: () => {}
};

const createComp = (props) => {
  return shallow(<CardBody
    {...defaultProps}
    {...props}
  />)
};


test('should be defined', () => {
  const wrapper = createComp();
  expect(wrapper).toBeDefined();
});

test('should render editing fields', () => {
  const wrapper = createComp({ editing: true });
  expect(wrapper.find('textarea')).toHaveLength(1);
  expect(wrapper.find('textarea').render().text()).toEqual(defaultProps.content);
});

test('should render view fields', () => {
  const wrapper = createComp({ editing: false });
  expect(wrapper.find('textarea')).toHaveLength(0);
  expect(wrapper.text()).toEqual(expect.stringContaining(defaultProps.content));
});

test('should call onChange event', () => {
  const newContent = 'New content';
  const onChangeMock = jest.fn();

  const wrapper = createComp({ editing: true, onContentChange: onChangeMock });
  wrapper.find('textarea').simulate('change', { currentTarget: { value: newContent } });
  expect(onChangeMock).toBeCalledTimes(1);
  expect(onChangeMock).toBeCalledWith(newContent);
});

