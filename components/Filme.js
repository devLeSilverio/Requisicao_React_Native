import React, {Component} from 'react';
import { Text } from 'react-native';

class Filme extends Component{
    render(){
        return(
            <>
                <Text>TÍTULO: {this.props.data.Title}</Text>
                <Text>ANO: {this.props.data.Year}</Text>
                <Text>TEMPO DE DURAÇÃO: {this.props.data.Runtime}</Text>
                <Text>GÊNERO: {this.props.data.Genre}</Text>
                <Text>DIRETOR: {this.props.data.Director}</Text>
            </>
        )
    }
}

export default Filme;