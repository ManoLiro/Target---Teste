var faturamentoEstados = new
{
    SP = 67836.43,
    RJ = 36678.66,
    MG = 29229.88,
    ES = 27165.48,
    Outros = 19849.53
};

var faturamentoTotal = faturamentoEstados.SP + faturamentoEstados.RJ + faturamentoEstados.MG + faturamentoEstados.ES + faturamentoEstados.Outros;
var percentualEstados = new
{
    SP = faturamentoEstados.SP / faturamentoTotal * 100,
    RJ = faturamentoEstados.RJ / faturamentoTotal * 100,
    MG = faturamentoEstados.MG / faturamentoTotal * 100,
    ES = faturamentoEstados.ES / faturamentoTotal * 100,
    Outros = faturamentoEstados.Outros / faturamentoTotal * 100
};

Console.WriteLine($@"
Faturamento Total: {faturamentoTotal.ToString("C2", System.Globalization.CultureInfo.GetCultureInfo("pt-BR"))}
São Paulo: {percentualEstados.SP.ToString("F2")}%
Rio de Janeiro: {percentualEstados.RJ.ToString("F2")}%
Minas Gerais: {percentualEstados.MG.ToString("F2")}%
Espirito Santo: {percentualEstados.ES.ToString("F2")}%
Outros: {percentualEstados.Outros.ToString("F2")}%
");