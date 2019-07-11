import React from 'react';
import Header from './common/Header';
import Counter from './components/Counter';
import List from './components/List';

const data = ['A', 'B', 'C'];

function App() {
  return (
    <div className="App">
      <Header />
      <List data={data} render={item => <div>{item}</div>} />
      <Counter timer={1000} maxValue={10000}>
        { count =>
          <h1>{count}</h1>
        }
      </Counter>
    </div>
  );
}

export default App;
