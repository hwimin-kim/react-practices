import React from 'react';

function App() {
    /**
     *  리액트 컴포넌트는 단일 루트 노드만 렌더링 할 수 있다.
     *  오류)
     *  return (
     *      <h2>App02</h2>
     *      <p> Turorial - 특징2: Single Root Node </p>
     *  )
     */
    return (
        <div id='App'>
            <h2>App02</h2>
            <p> JSX Turorial - 특징2: Single Root Node </p>
        </div>
    );
}

export default App