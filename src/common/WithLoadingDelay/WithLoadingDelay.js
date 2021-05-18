import { useState } from 'react';
import './WithLoadingDelay.scss';
import Spinner from "../Spinner/Spinner";


function WithLoadingDelay(Children, { width, height }) {
  const Child = (props) => {
    // Called once the component created
    const [loading, setLoading] = useState(() => {
      console.debug('Starting timer...');
      setTimeout(() => {
        console.debug('Timer expired!');
        setLoading(false);
      }, 2000);
      return true;
    });

    return <>
      {loading
          ? <Spinner containerHeight={height} containerWidth={width} className={props.className} />
          : <Children {...props} />
      }
    </>;
  }

  Child.propTypes = Children.propTypes;

  return Child;
}


export default WithLoadingDelay;
