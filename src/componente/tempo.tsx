import { Component } from "react";
import Conversor from "../conversor/conversor";
import '../css/estilo.css'
import Entrada from "./entrada";

type props = {
    texto: string,
    mensagem: string
}
type state = {
    hora: string;
    minuto: string;
    segundo: string;
}
class Tempo extends Component<props, state> {
    private conversor = new Conversor()
    constructor(props) {
        super(props)
        this.state = {
            hora: '0',
            minuto: '0',
            segundo: '0'
        }
        this.obterHora = this.obterHora.bind(this)
        this.obterMinuto = this.obterMinuto.bind(this)
        this.obterSegundo = this.obterSegundo.bind(this)
    }

    obterHora(valorHora: string) {
        let convertido = this.conversor.obterNumero(valorHora)
        let valorMinuto = this.conversor.multiplicar(convertido)
        let valorSegundo = this.conversor.multiplicar(valorMinuto)
        this.setState({
            hora: convertido,
            minuto: valorMinuto,
            segundo: valorSegundo
        })
    }

    obterMinuto(valorMinuto: string) {
        let convertido = this.conversor.obterNumero(valorMinuto)
        let valorHora = this.conversor.dividir(convertido)
        let valorSegundo = this.conversor.multiplicar(convertido)
        this.setState({
            hora: valorHora,
            minuto: convertido,
            segundo: valorSegundo
        })
    }
    obterSegundo(valorSegundo: string) {
        let convertido = this.conversor.obterNumero(valorSegundo)
        let valorMinuto = this.conversor.dividir(convertido)
        let valorHora = this.conversor.dividir(valorMinuto)
        this.setState({
            hora: valorHora,
            minuto: valorMinuto,
            segundo: convertido
        })
    }
    render() {
        return (
            <div>
                <div>
                    <h1 className="centralizar">{this.props.texto}<i className="large material-icons centralizar">access_time</i></h1>
                </div>
                <div>
                    <div className="row centralizar">
                        <div className="col s12"><h3 className="centralizar">{this.props.mensagem}</h3></div>
                        <div className="col s4">
                            <Entrada funcao={this.obterHora} valor={this.state.hora} unidade="Hora" />
                        </div>
                        <div className="col s4">
                            <Entrada funcao={this.obterMinuto} valor={this.state.minuto} unidade="Minuto" />
                        </div>
                        <div className="col s4">
                            <Entrada funcao={this.obterSegundo} valor={this.state.segundo} unidade="Segundo" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Tempo