import './assets/scss/App.scss';
import logo from './assets/images/logo.svg';

function App() {
  const app = document.createElement("div");
  app.className = 'App';
  app.innerHTML = 
    `<header className="App-header">
      <img src=${logo} className="App-logo" alt="logo" />
      <p>Hello World</p>
    </header>`;
  return app;
}

export { App };
