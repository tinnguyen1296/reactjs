import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';

import Header from './common/Header';
import Todo from './Todo';

library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Todo /> */}
    </div>
  );
}

export default App;
