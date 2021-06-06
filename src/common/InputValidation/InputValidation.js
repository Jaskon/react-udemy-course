import './InputValidation.scss';
import {useState} from "react";
import cl from 'classnames';

function InputValidation({ validationFunc, onChange, ...props }) {

  const [invalid, setInvalid] = useState(true);
  const [blurred, setBlurred] = useState(false);
  const [changed, setChanged] = useState(false);

  const blurHandler = () => {
    setBlurred(true);
  };

  const changeHandler = (e) => {
    setChanged(true);
    const isValid = e.target.value !== '' && validationFunc(e.target.value);
    setInvalid(!isValid);
    onChange({value: e.target.value, valid: isValid});
  };

  return <input
    className={cl('InputValidation__input', {
      'InputValidation__input_invalid': blurred && changed && invalid
    })}
    onChange={changeHandler}
    onBlur={blurHandler}
    {...props}
  />;
}

export default InputValidation;
