export default class Conversor {
    private converterNumero(valor: string): number {
        return Number.parseFloat(valor)
    }
    public obterNumero(valor: string): string {
        let numero = this.converterNumero(valor)
        let conversao = ''
        if (!Number.isNaN(numero)) {
            conversao = numero.toString()
        }
        return conversao
    }
    public multiplicar(valorHora: string): string {
        let valor = this.converterNumero(valorHora)
        let conversao = ''
        if (!Number.isNaN(valor)) {
            conversao = (valor * 60).toString()
        }
        return conversao
    }
    public dividir(valorHora: string): string {
        let valor = this.converterNumero(valorHora)
        let conversao = ''
        if (!Number.isNaN(valor)) {
            conversao = (valor / 60).toString()
        }
        return conversao
    }
}