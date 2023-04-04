using Newtonsoft.Json;

// ...



//Variáveis Globais
int MenorValorDia = 0;
double MenorValor = 100000000;
int MaiorValorDia = 0;
double MaiorValor = 0;
double SomaDaMedia = 0;
double ValorMedia = 0;
int DiasFDS = 0;
int Dias_Bom_Faturamento = 0;
double Soma_Dias_Bom_Faturamento = 0;

//Puxa os dados do arquivo Json
string jsonFilePath = @"dados.json";
string json = File.ReadAllText(jsonFilePath);
var objeto = JsonConvert.DeserializeObject<dynamic>(json);

foreach(var item in objeto)
{
    //Soma os valores do mês
    SomaDaMedia = SomaDaMedia + Convert.ToDouble(item.valor);
    /////////////////////////////////////////
    //Conta os Fins de Semana
    if (Convert.ToDouble(item.valor) == 0)
    {
        DiasFDS++;
    }
    /////////////////////////////////////////
    //Calcula o menor Valor de Faturamento do Mês
    if (Convert.ToDouble(item.valor) < MenorValor && Convert.ToDouble(item.valor) != 0)
    {
        MenorValor = Convert.ToDouble(item.valor);
        MenorValorDia = Convert.ToInt32(item.dia);
    }
    /////////////////////////////////////////
    //Calcula o maior Valor de Faturamento do Mês
    if (Convert.ToDouble(item.valor) > MaiorValor)
    {
        MaiorValor = Convert.ToDouble(item.valor);
        MaiorValorDia = Convert.ToInt32(item.dia);
    }
    /////////////////////////////////////////
    //Calcula a Média do Mês
    ValorMedia = SomaDaMedia / (objeto.Count - DiasFDS);
}

///////////////////////////////////////////////////////////////
//Conta os dias que foram acima da Média
foreach (var item in objeto)
{
    if (Convert.ToDouble(item.valor) > ValorMedia)
    {
        Dias_Bom_Faturamento++;
        Soma_Dias_Bom_Faturamento += Convert.ToDouble(item.valor);
    }
}

///////////////////////////////////////////////////////////////
//Formata para Moeda Local
var moeda = new System.Globalization.CultureInfo("pt-BR");

//Mostra as informações ao usuário no Console
Console.WriteLine(@$"
        Total De Faturamento: {SomaDaMedia.ToString("C", moeda)}
        Dias Com Faturamento: {objeto.Count - DiasFDS} Dias
        Média Mensal: {ValorMedia.ToString("C", moeda)}
    
        Dia Com Menor Faturamento: 
        Dia: {MenorValorDia} 
        Valor: {MenorValor.ToString("C", moeda)}
    
        Dia Com Maior Faturamento: 
        Dia: {MaiorValorDia} 
        Valor: {MaiorValor.ToString("C", moeda)}
    
        Quantidade e Soma dos Dias Com o Faturamento 
        Acima Da Média Mensal: 
        {Dias_Bom_Faturamento} Dias, Soma: {Soma_Dias_Bom_Faturamento.ToString("C", moeda)}
        ");

