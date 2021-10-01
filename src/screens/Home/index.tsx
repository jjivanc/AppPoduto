import React , { Component, useEffect, useState,  } from 'react';
import {  ActivityIndicator, FlatList, Text, TouchableOpacity, View, Alert ,ScrollView} from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';
import { styles } from './styles';
import axios from 'axios'


const INIT_DATA= {
  titulo:'',
  descricao:'',
  valor: '',
};

export function Home() {
  const [dadoProdutos, setDadoProdutos] = useState(INIT_DATA);
  const [nome, setNome] = useState(null)
  const [desc, setDesc] = useState(null)
  const [valor, setValor] = useState(null)
  const entrar = () =>  {
  }

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    getProdutos();
  }, []);

  function changeData(key, valeu) {
    setDadoProdutos({ ...dadoProdutos, [key]: valeu });
  }

  const getProdutos = async () => {
     try {
      const response = await axios.get('http://app-escola-api.herokuapp.com/produtos');
      setData(response.data)
      setDadoProdutos(INIT_DATA)
    } catch (e) {
      Alert.alert('Erro', 'Erro ao encontrar Produto');
    }
  }
  async function handleSubmit() {
    try {
      const response = await axios.post(
        'http://app-escola-api.herokuapp.com/produtos',dadoProdutos
        
      );

      const mensagem = response.data.mensagem
     
      Alert.alert('Mensagem', mensagem);
      
      getProdutos();
    } catch (error) {
      Alert.alert('Erro', 'Erro ao encontrar Produto');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.cadastro}>
        <Text style={styles.Text}>Cadastrar novo produto</Text>
        <Input placeholder="Nome" onChangeText={(value) => changeData('titulo',value)} containerStyle={{width: 310 , backgroundColor: '#fff', height: 43,borderRadius: 5,   margin: 4}} ></Input>
        <Input placeholder="Descrição" onChangeText={(value) => changeData('descricao',value)} containerStyle={{width: 310 , backgroundColor: '#fff', height: 43,borderRadius: 5, margin: 4}} ></Input>
        <Input placeholder="Valor" onChangeText={(value) => changeData('valor',value)} containerStyle={{width: 310 , backgroundColor: '#fff', height: 43,borderRadius: 5, margin: 4}} ></Input>
        
        <TouchableOpacity style={styles.buttonContainer} onPress={() => handleSubmit()}>
            <Text style={styles.buttonTitle}>
                CADASTRA
            </Text>
        </TouchableOpacity>
        </View>
      <ScrollView>
        <Text style={styles.Text}>Lista de produtos</Text>
        {data.map((produto) => (
          <View key={produto.id} style={{borderWidth: 1,borderColor: '#FF7777',padding: 10,marginBottom: 10,width: 310}}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <Text style={{fontWeight: '700'}}>Titulo: </Text>
              <Text style={{fontSize: 14,}}>{produto.titulo}</Text>
            </View>
            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
              <Text style={{fontWeight: '700'}}>Valor:</Text>
              <Text style={{fontSize: 14,}}>{produto.valor}</Text>
            </View>
          </View>
        ))}
        
        
        
      </ScrollView>
    </View>
  );
}
