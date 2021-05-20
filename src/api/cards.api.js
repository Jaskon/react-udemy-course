import {v4 as uuid} from 'uuid';
import axios from 'axios';

function getCardList() {
  return axios
    .get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
    .then(
      res => res.data
        .slice(0, 15)
        .map(one => ({
          id: uuid(),
          caption: one['Name'],
          content: one['About']
        }))
    );
}

export { getCardList };
