const FaturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
}

const FaturamentoTotal = FaturamentoEstados.SP + FaturamentoEstados.RJ + FaturamentoEstados.MG + FaturamentoEstados.ES + FaturamentoEstados.Outros
const PercentualEstados = {
    SP: 67836.43 / FaturamentoTotal * 100,
    RJ: 36678.66 / FaturamentoTotal * 100,
    MG: 29229.88 / FaturamentoTotal * 100,
    ES: 27165.48 / FaturamentoTotal * 100,
    Outros: 19849.53 / FaturamentoTotal * 100
}

let moeda = { style: 'currency', currency: 'BRL' }

console.log(`
Faturamento Total: ${FaturamentoTotal.toLocaleString('pt-BR', moeda)}
São Paulo: ${PercentualEstados.SP.toFixed(2)}%
Rio de Janeiro: ${PercentualEstados.RJ.toFixed(2)}%
Minas Gerais: ${PercentualEstados.MG.toFixed(2)}%
Espirito Santo: ${PercentualEstados.ES.toFixed(2)}%
Outros: ${PercentualEstados.Outros.toFixed(2)}%
`)