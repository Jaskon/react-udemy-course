import './App.scss';
import Header from '../Header';
import Card from '../Card';


function App() {
  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum mauris justo, non egestas sapien malesuada sit amet.';

  const cards = [0, 1, 2].map(one =>
    <Card
      key={one}
      caption={'Card header'}
      content={loremIpsum}
    />
  );

  return (
    <div>
      <Header containerStyleName={'App__container'}/>
      <div className={'App__container App__container-background'}>
        <div className={'App__content'}>
          {cards}
        </div>
      </div>
    </div>
  );
}

export default App;
