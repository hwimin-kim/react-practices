function App() {
    const app = document.createElement('div');
    app.textContent = 'Hello World';
    return app;
}

document
    .getElementById('root')
    .appendChild(App());