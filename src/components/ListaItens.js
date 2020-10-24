import React, {Component} from 'react';
import {Text, Vibration, View, ScrollView} from 'react-native';

import Itens from './Itens';
import axios from 'axios';

export default class ListaItens extends Component {
  constructor(props) {
    super(props);

    this.state = {ListaItens: []};
  }

  UNSAFE_componentWillMount() {
    //Requisição HTTP
    axios
      .get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then((response) => {
        this.setState({ListaItens: response.data});
      })
      .catch(() => {
        console.log('Erro ao recuperar os dados');
      });
  }

  render() {
    return (
      <ScrollView>
        {this.state.ListaItens.map((item) => (
          <Itens key={item.titulo} item={item} />
        ))}
      </ScrollView>
    );
  }
}
