import React, { Component } from 'react';
import axios from 'axios';
import ErroComponent from './erro-component';

class CriarVeiculo extends Component {
  constructor(props) {
      super(props);

      this.state = {
            id: null,
            marca: "",
            modelo: "",
            anoModelo: "",
            cor: "",
            placa: "",
            km: "",
            tipoCombustivel: "",
            valorDiaria: "",
            tipoVeiculo: "",
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
          axios.get(`http://localhost:8080/atividade/veiculo/buscar-por-id/${id}`)
          .then(res => {
              const veiculo = res.data;
              this.setState({
                id: veiculo.idUsuario,
                marca: veiculo.marca,
                modelo: veiculo.modelo,
                anoModelo: veiculo.anoModelo,
                placa: veiculo.placa,
                km: veiculo.km,
                tipoCombustivel: veiculo.tipoCombustivel,
                valorDiaria: veiculo.valorDiaria,
                tipoVeiculo: veiculo.tipoVeiculo,
              })
          }).catch(res => {
              console.log(res);
          })
      }
  }

  salvar(e) {
      e.preventDefault();

      const veiculo = {
          idCliente: this.state.id,
          marca: this.state.marca,
          modelo: this.state.modelo,
          anoModelo: this.state.anoModelo,
          cor: this.state.cor,
          placa: this.state.placa,
          km: this.state.km,
          tipoCombustivel: this.state.tipoCombustivel,
          valorDiaria: this.state.valorDiaria,
          tipoVeiculo: this.state.tipoVeiculo,
      }
      
      axios
        .post('http://localhost:8080/atividade/veiculo/salvar', 
        veiculo)
        .then(res => {
            this.setState({
                marca: "",
                modelo: "",
                anoModelo: "",
                cor: "",
                placa: "",
                km: "",
                tipoCombustivel: "",
                valorDiaria: "",
                tipoVeiculo: "",
                errors: [],
                mensagem: "Veiculo salvo com sucesso!"
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

                <label>Marca: </label>
                <input type="text" name="marca" onChange={this.onChange} value={this.state.marca}/>
                <ErroComponent erro={this.state.errors.marca} />
                <br/>

                <label>Modelo: </label>
                <input type="text" name="modelo" onChange={this.onChange} value={this.state.modelo}/>
                <ErroComponent erro={this.state.errors.modelo} />
                <br/>

                <label>Ano do Modelo: </label>
                <input type="text" name="anoModelo" onChange={this.onChange} value={this.state.anoModelo}/>
                <ErroComponent erro={this.state.errors.anoModelo} />
                <br/>

                <label>Cor: </label>
                <input type="text" name="cor" onChange={this.onChange} value={this.state.cor}/>
                <ErroComponent erro={this.state.errors.cor} />
                <br/>

                <label>Placa: </label>
                <input type="text" name="placa" onChange={this.onChange} value={this.state.placa}/>
                <ErroComponent erro={this.state.errors.placa} />
                <br/>

                <label>Kilometros: </label>
                <input type="text" name="km" onChange={this.onChange} value={this.state.km}/>
                <ErroComponent erro={this.state.errors.km} />
                <br/>

                <label>Tipo de Combustivel: </label>
                <input type="text" name="tipoCombustivel" onChange={this.onChange} value={this.state.tipoCombustivel}/>
                <ErroComponent erro={this.state.errors.tipoCombustivel} />
                <br/>

                <label>Valor da Diaria: </label>
                <input type="text" name="valorDiaria" onChange={this.onChange} value={this.state.valorDiaria}/>
                <ErroComponent erro={this.state.errors.valorDiaria} />
                <br/>

                <label>Tipo do Veiculo: </label>
                <input type="text" name="tipoVeiculo" onChange={this.onChange} value={this.state.tipoVeiculo}/>
                <ErroComponent erro={this.state.errors.tipoVeiculo} />
                <br/>

                <button type="Submit">Salvar</button>

            </form>

		</div>
	  );
  }
}

export default CriarVeiculo;
