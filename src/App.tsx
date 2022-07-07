import React from 'react';
import {
  atom,
  selector,
  useRecoilValue,
} from 'recoil';

const getData = async () => {
  return fetch('https://catfact.ninja/facts')
    .then((response) => response.json())
    .then(({ data }) => data);
}

const catFactsState = atom<[]>({
  key: 'catFacts',
  default: selector({
    key: 'catFactsLoader',
    get: async () => {
      return await getData()
    },
  }),
})


function App() {
  const data = useRecoilValue(catFactsState);

  return (
    <div>{data.map((el: { fact: string }, i: number) => (
      <p key={i}>{el.fact}</p>
    ))}</div>
  );
}

export default App;
