import { shallow } from 'enzyme';
import CardHeader from "./CardHeader";


const defaultProps = {
  editing: false,
  readOnly: false,
  caption: 'Card one',
  selected: false,
  onCaptionChange: () => {},
  onEditStart: () => {},
  onSelect: () => {},
  onSave: () => {},
  onEditCancel: () => {}
};

const createComp = (props) => {
  return shallow(<CardHeader
    {...defaultProps}
    {...props}
  />)
}


test('should be defined', () => {
  const wrapper = createComp();
  expect(wrapper).toBeDefined();
});

test('should render editing mode', () => {
  const wrapper = createComp({ editing: true });

  expect(wrapper.find('.Card__icon-save')).toHaveLength(1);
  expect(wrapper.find('.Card__icon-cancel')).toHaveLength(1);
  expect(wrapper.find('.Card__icon-edit')).toHaveLength(0);

  expect(wrapper.find('input[type="text"]')).toHaveLength(1);
  expect(wrapper.find('input[type="text"]').render().prop('value')).toEqual(defaultProps.caption);
});

test('should render view mode', () => {
  const wrapper = createComp({ editing: false });

  expect(wrapper.find('.Card__icon-save')).toHaveLength(0);
  expect(wrapper.find('.Card__icon-cancel')).toHaveLength(0);
  expect(wrapper.find('.Card__icon-edit')).toHaveLength(1);

  expect(wrapper.find('input[type="text"]')).toHaveLength(0);
  expect(wrapper.text()).toEqual(expect.stringContaining(defaultProps.caption));
});

test('should render read only mode', () => {
  const wrapper = createComp({ readOnly: true });

  expect(wrapper.find('.Card__icon-save')).toHaveLength(0);
  expect(wrapper.find('.Card__icon-cancel')).toHaveLength(0);
  expect(wrapper.find('.Card__icon-edit')).toHaveLength(0);

  expect(wrapper.find('input[type="text"]')).toHaveLength(0);
  expect(wrapper.text()).toEqual(expect.stringContaining(defaultProps.caption));
});

test('should render selected/non-selected', () => {
  const wrapper = createComp({ selected: false });
  const wrapperSelected = createComp({ selected: true });

  expect(wrapper.find('input[type="checkbox"]').render().prop('checked')).toEqual(false);
  expect(wrapperSelected.find('input[type="checkbox"]').render().prop('checked')).toEqual(true);
});

test('should call appropriate callbacks of editing mode', () => {
  const newCaption = 'New caption';
  const clickEvent = {
    stopPropagation: jest.fn()
  };

  const onCaptionChange = jest.fn();
  const onSave = jest.fn();
  const onEditCancel = jest.fn();

  const wrapper = createComp({
    editing: true,
    onCaptionChange,
    onSave,
    onEditCancel
  });

  wrapper.find('input[type="text"]').simulate('change', { currentTarget: { value: newCaption } });
  expect(onCaptionChange).toHaveBeenCalledTimes(1);
  expect(onCaptionChange).toHaveBeenCalledWith(newCaption);

  wrapper.find('.Card__icon-save').simulate('click', clickEvent);
  expect(onSave).toHaveBeenCalledTimes(1);

  wrapper.find('.Card__icon-cancel').simulate('click', clickEvent);
  expect(onEditCancel).toHaveBeenCalledTimes(1);
});

test('should call appropriate callbacks of view mode', () => {
  const clickEvent = {
    stopPropagation: jest.fn()
  };

  const onEditStart = jest.fn();
  const onSelect = jest.fn();

  const wrapper = createComp({
    editing: false,
    onEditStart,
    onSelect
  });

  wrapper.find('.Card__icon-edit').simulate('click', clickEvent);
  expect(onEditStart).toHaveBeenCalledTimes(1);

  wrapper.find('.Card__header').simulate('click');
  expect(onSelect).toHaveBeenCalledTimes(1);
});
