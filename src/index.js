import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Homepage from "./components/Homepage/Homepage";

ReactDOM.render(
  <React.StrictMode>
    <Homepage/>
    </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
