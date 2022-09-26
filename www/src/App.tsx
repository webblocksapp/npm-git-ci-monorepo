import type { Component } from 'solid-js';
import { helloWorldFn } from 'webblocksapp-ci-demo-lib';

const App: Component = () => {
  return <div>{helloWorldFn()}</div>;
};

export default App;
