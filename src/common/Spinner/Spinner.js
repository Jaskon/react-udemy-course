import './Spinner.scss';
import styled from 'styled-components';
import cl from 'classnames';


function Spinner({ className, containerHeight = 'auto', containerWidth = 'auto' }) {

    const Container = styled.div`
        height: ${containerHeight};
        width: ${containerWidth};
    `;

    return <>
        <Container className={cl(className, 'Spinner__container')}>
            <div className={'Spinner__spinner'}/>
        </Container>
    </>;
}


export default Spinner;
