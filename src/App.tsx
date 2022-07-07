import React from 'react';
import {
  atom,
  selector,
  useRecoilValueLoadable,
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
  const data = useRecoilValueLoadable(catFactsState);

  if (data.state === "hasError") {
    return <div> There is some problem! </div>;
  }

  if (data.state === "loading") {
    return <div>Loading data...</div>;
  }

  if (data.state === "hasValue") {
    return (
      <div>{data.contents.map((el: { fact: string }, i: number) => (
        <p key={i}>{el.fact}</p>
      ))}</div>
    );
  }

  return <>No data</>
}

export default App;
