import { Component } from "react";

type props = {
    unidade: string,
    valor: string,
    funcao: Function
}

class Entrada extends Component<props> {
    constructor(props) {
        super(props)
        this.obterEntrada = this.obterEntrada.bind(this)
        this.bloquerSubmissao = this.bloquerSubmissao.bind(this)
    }

    bloquerSubmissao(evento) {
        evento.preventDefault()
    }

    obterEntrada(evento) {
        let valor = evento.target.value
        this.props.funcao(valor)
    }

    render() {
        return (
            <form onSubmit={this.bloquerSubmissao}>
                <div className="input-field">
                    <span>{this.props.unidade}: </span><br />
                    <input value={this.props.valor} onChange={this.obterEntrada} id="tempo" type="text" className="validate centralizar" />
                </div>
            </form>
        )
    }
}
export default Entrada