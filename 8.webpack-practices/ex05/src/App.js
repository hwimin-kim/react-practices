import './assets/scss/App.scss'

function App() {
  const app = document.createElement("div");
  app.textContent = "Hello World";
  app.className = 'Header';
  return app;
}

export { App };
