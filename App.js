import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ListaItens from './src/components/ListaItens';

const App: () => React$Node = () => { /* essa é a expressão do RN para receber quase todos qualquer JSX válido*/
                                      /* (em reagir nativo é qualquer coisa de View, Text, .etc),*/
                                      /* ReactFragment, React.Portal, booleano, nulo, indefinido */
  return <ListaItens />;
};

export default App;
