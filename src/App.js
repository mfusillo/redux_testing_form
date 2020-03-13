import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import PostForm from './components/PostForm'
import Posts from './components/Posts'
import store from './store'

function App() {



  return (
    <Provider store={store}>
      <div className="App">
        <header></header>
        <main>
          <PostForm/>
          <hr></hr>
          <Posts/>
        </main>
      </div>
    </Provider>
  );
}

export default App;
