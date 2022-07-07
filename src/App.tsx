import React from 'react';
import { RecoilRoot } from 'recoil';

import CharacterCounter from './components/CharacterCounter';

function App() {
  return (
    <RecoilRoot>
      Characters Counter

      <CharacterCounter />
    </RecoilRoot>
  );
}

export default App;
