import { useState, useEffect } from 'react';
import './WithLoadingDelay.scss';
import cl from 'classnames';
import Spinner from "../Spinner/Spinner";


function WithLoadingDelay(Children, { width, height }) {
  return function Child(props) {
    // Called once the component created
    const [loading, setLoading] = useState(() => {
      console.log('Starting timer...');
      setTimeout(() => {
        console.log('Timer expired!');
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
}


export default WithLoadingDelay;
