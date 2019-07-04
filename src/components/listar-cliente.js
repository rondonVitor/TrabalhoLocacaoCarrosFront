import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ListarCliente extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clientes: []
        }
    }

    componentWillMount() {
        axios.get("http://localhost:8080/atividade/cliente/listar-todos")
            .then(response => {
                this.setState({clientes: response.data});
            });
    }

    render() {
        return(
            <table id="customers">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>RG</th>
                        <th>Naturalidade</th>
                        <th>Data de Nascimento</th>
                        <th>Numero Cnh</th>
                        <th>Data Validade Cnh</th>
                        <th>Tipo Licença</th>
                        <th>Endereco Completo</th>
                        <th>telefone</th>
                        <th>Email</th>    
                        <th>Profissao</th>    
                    </tr>
                </thead>
                <tbody>
                    {this.state.clientes.map(clientes => 
                        <tr key={clientes.idCliente}>
                            <td>{clientes.nome}</td>
                            <td>{clientes.cpf}</td>
                            <td>{clientes.rg}</td>
                            <td>{clientes.naturalidade}</td>
                            <td>{clientes.dataNascimento}</td>
                            <td>{clientes.numCnh}</td>
                            <td>{clientes.dataValidadeCnh}</td>
                            <td>{clientes.tipoLicenca}</td>
                            <td>{clientes.enderecoCompleto}</td>
                            <td>{clientes.telefone}</td>
                            <td>{clientes.email}</td>
                            <td>{clientes.profissao}</td>
                            <td><Link to={`/cliente/cadastrar/${clientes.idCliente}`}>Editar</Link></td>
                        </tr>
                    )}   
                </tbody>                
            </table>
        )
    }


}

export default ListarCliente;