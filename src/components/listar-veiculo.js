import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ListarVeiculo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            veiculos: []
        }
    }

    componentWillMount() {
        axios.get("http://localhost:8080/atividade/veiculo/listar-todos")
            .then(response => {
                this.setState({veiculos: response.data});
            });
    }

    render() {
        return(
            <table id="customers">
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Ano do Modelo</th>
                        <th>Cor</th>
                        <th>Placa</th>
                        <th>Kilometros</th>
                        <th>Tipo do Combustivel</th>
                        <th>Valor da Diaria</th>
                        <th>Tipo do Veiculo</th>    
                    </tr>
                </thead>
                <tbody>
                    {this.state.veiculos.map(veiculos => 
                        <tr key={veiculos.idVeiculo}>
                            <td>{veiculos.marca}</td>
                            <td>{veiculos.modelo}</td>
                            <td>{veiculos.anoModelo}</td>
                            <td>{veiculos.cor}</td>
                            <td>{veiculos.placa}</td>
                            <td>{veiculos.km}</td>
                            <td>{veiculos.tipoCombustivel}</td>
                            <td>{veiculos.valorDiaria}</td>
                            <td>{veiculos.tipoVeiculo}</td>
                            <td><Link to={`/veiculo/cadastrar/${veiculos.idVeiculo}`}>Editar</Link></td>
                        </tr>
                    )}   
                </tbody>                
            </table>
        )
    }

}

export default ListarVeiculo;