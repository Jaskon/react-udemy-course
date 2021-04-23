import styled from 'styled-components';


const InputCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const CheckboxWrapper = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
`;

const Checkbox = styled.div`
  border: .0625rem solid black;
  display: inline-block;
  height: 1rem;
  margin-right: .25rem;
  width: 1rem;
`;

const Checkmark = styled.div`
  border-bottom: .1875rem;
  border-color: black;
  border-left: .1875rem;
  border-right: 0;
  border-style: solid;
  border-top: 0;
  box-sizing: border-box;
  height: .5rem;
  left: .125rem;
  position: relative;
  top: .0625rem;
  transform: rotate(-45deg);
  visibility: ${({ hidden }) => hidden ? 'hidden' : 'visible'};
  width: .625rem;
`;

const Label = styled.span`
  margin-top: -1px;
`;


export default function CustomCheckbox({ checked, onChange, label }) {
  return <CheckboxWrapper>
    <InputCheckbox
      onChange={onChange}
    />
    <Checkbox>
      <Checkmark hidden={!checked}/>
    </Checkbox>
    <Label>{label}</Label>
  </CheckboxWrapper>;
}
