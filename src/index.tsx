import React from 'react';
import ReactDOM from 'react-dom';
import Tempo from './componente/tempo';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Tempo texto='Conversor de unidades de tempo' 
    mensagem='Insira um valor para uma unidade de tempo' />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

