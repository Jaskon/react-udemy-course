import './Spinner.scss';
import styled from 'styled-components';
import cl from 'classnames';


const Container = styled.div`
  height: ${props => props.containerHeight};
  width: ${props => props.containerWidth};
`;


function Spinner({className, containerHeight = 'auto', containerWidth = 'auto'}) {
  return <>
    <Container
      className={cl(className, 'Spinner__container')}
      containerHeight={containerHeight}
      containerWidth={containerWidth}
    >
      <div className={'Spinner__spinner'}/>
    </Container>
  </>;
}


export default Spinner;
