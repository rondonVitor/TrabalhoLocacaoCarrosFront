import React, { Component } from 'react';
import axios from 'axios';
import ErroComponent from './erro-component';

class CriarCliente extends Component {
  constructor(props) {
      super(props);

      this.state = {
            id: null,
            nome: "",
            cpf: "",
            rg: "",
            naturalidade: "",
            dataNascimento: "",
            numCnh: "",
            dataValidadeCnh: "",
            tipoLicenca: "",
            enderecoCompleto: "",
            telefone: "",
            email: "",
            profissao: "",
            errors: [],
            mensagem: null
      };

      //this.onChange = this.onChange.bind(this);
      this.salvar = this.salvar.bind(this);
  }

  onChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      });
  }

  componentWillMount() {
      const id = this.props.match.params.id;
      if (id) {
          axios.get(`http://localhost:8080/atividade/cliente/buscar-por-id/${id}`)
          .then(res => {
              const cliente = res.data;
              this.setState({
                id: cliente.idUsuario,
                nome: cliente.nome,
                cpf: cliente.cpf,
                rg: cliente.rg,
                naturalidade: cliente.naturalidade,
                dataNascimento: cliente.dataNascimento,
                numCnh: cliente.numCnh,
                dataValidadeCnh: cliente.dataValidadeCnh,
                tipoLicenca: cliente.tipoLicenca,
                enderecoCompleto: cliente.enderecoCompleto,
                telefone: cliente.telefone,
                email: cliente.email,
                profissao: cliente.profissao
              })
          }).catch(res => {
              console.log(res);
          })
      }
  }

  salvar(e) {
      e.preventDefault();

      const cliente = {
          idCliente: this.state.id,
          nome: this.state.nome,
          cpf: this.state.cpf,
          rg: this.state.rg,
          naturalidade: this.state.naturalidade,
          dataNascimento: this.state.dataNascimento,
          numCnh: this.state.numCnh,
          dataValidadeCnh: this.state.dataValidadeCnh,
          tipoLicenca: this.state.tipoLicenca,
          enderecoCompleto: this.state.enderecoCompleto,
          telefone: this.state.telefone,
          email: this.state.email,
          profissao: this.state.profissao
      }
      
      axios
        .post('http://localhost:8080/atividade/cliente/salvar', 
            cliente)
        .then(res => {
            this.setState({
                nome: "",
                cpf: "",
                rg: "",
                naturalidade: "",
                dataNascimento: "",
                numCnh: "",
                dataValidadeCnh: "",
                tipoLicenca: "",
                enderecoCompleto: "",
                telefone: "",
                email: "",
                profissao: "",
                errors: [],
                mensagem: "Cliente salvo com sucesso!"
            });
        })
        .catch(error => {
            this.setState({
                errors: error.response.data,
                mensagem: null
            });
        })
  }

  render() {
    return (
		<div>
            {this.state.mensagem && (
                <div>{this.state.mensagem}</div>
            )}
            <form onSubmit={this.salvar}>

                <label>Nome: </label>
                <input type="text" name="nome" onChange={this.onChange} value={this.state.nome}/>
                <ErroComponent erro={this.state.errors.nome} />
                <br/>

                <label>Cpf: </label>
                <input type="text" name="cpf" onChange={this.onChange} value={this.state.cpf}/>
                <ErroComponent erro={this.state.errors.cpf} />
                <br/>

                <label>Rg: </label>
                <input type="text" name="rg" onChange={this.onChange} value={this.state.rg}/>
                <ErroComponent erro={this.state.errors.rg} />
                <br/>

                <label>Naturalidade: </label>
                <input type="text" name="naturalidade" onChange={this.onChange} value={this.state.naturalidade}/>
                <ErroComponent erro={this.state.errors.naturalidade} />
                <br/>

                <label>Data Nascimento: </label>
                <input type="text" name="dataNascimento" onChange={this.onChange} value={this.state.dataNascimento}/>
                <ErroComponent erro={this.state.errors.dataNascimento} />
                <br/>

                <label>Numero da Cnh: </label>
                <input type="text" name="numCnh" onChange={this.onChange} value={this.state.numCnh}/>
                <ErroComponent erro={this.state.errors.numCnh} />
                <br/>

                <label>Data de Validade da Cnh: </label>
                <input type="text" name="dataValidadeCnh" onChange={this.onChange} value={this.state.dataValidadeCnh}/>
                <ErroComponent erro={this.state.errors.dataValidadeCnh} />
                <br/>

                <label>tipo da Licenca: </label>
                <input type="text" name="tipoLicenca" onChange={this.onChange} value={this.state.tipoLicenca}/>
                <ErroComponent erro={this.state.errors.tipoLicenca} />
                <br/>

                <label>Endereço Completo: </label>
                <input type="text" name="enderecoCompleto" onChange={this.onChange} value={this.state.enderecoCompleto}/>
                <ErroComponent erro={this.state.errors.enderecoCompleto} />
                <br/>

                <label>telefone: </label>
                <input type="text" name="telefone" onChange={this.onChange} value={this.state.telefone}/>
                <ErroComponent erro={this.state.errors.telefone} />
                <br/>

                <label>Email: </label>
                <input type="text" name="email" onChange={this.onChange} value={this.state.email}/>
                <ErroComponent erro={this.state.errors.email} />
                <br/>

                <label>Profissao: </label>
                <input type="text" name="profissao" onChange={this.onChange} value={this.state.profissao}/>
                <ErroComponent erro={this.state.errors.profissao} />
                <br/>

                <button type="Submit">Salvar</button>

            </form>

		</div>
	  );
  }
}

export default CriarCliente;
