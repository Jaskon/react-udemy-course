import './App.scss';
import Header from '../Header';
import Card from '../Card';
import cl from 'classnames';


const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum mauris justo, non egestas sapien malesuada sit amet.';

const beValues = [
  {
    id: '0',
    caption: 'Card one header',
    content: loremIpsum
  }, {
    id: '1',
    caption: 'Card two header',
    content: loremIpsum
  }, {
    id: '2',
    caption: 'Card three header',
    content: loremIpsum
  }
];


function App() {
  const cards = beValues.map(one =>
    <Card
      key={one.id}
      caption={one.caption}
      content={one.content}
    />
  );

  return (
    <div>
      <Header containerStyleName={'App__container'}/>
      <div className={cl('App__container', 'App__container-background')}>
        <div className={'App__content'}>
          {cards}
        </div>
      </div>
    </div>
  );
}

export default App;
