//Variáveis Globais
let MenorValorDia = 0
let MenorValor = 100000000
let MaiorValorDia = 0
let MaiorValor = 0
let SomaDaMedia = 0
let ValorMedia = 0
let DiasFDS = 0
let Dias_Bom_Faturamento = 0
let Soma_Dias_Bom_Faturamento = 0

//Puxa os dados do Arquivo Json
    fetch('dados.json')
    .then(response => response.json())
    .then(data => {
    
    for(i = 0; i < data.length; i++){
        //Soma os valores do mês
        SomaDaMedia = SomaDaMedia + data[i].valor
        /////////////////////////////////////////
        //Conta os Fins de Semana
        if(data[i].valor == 0){
            DiasFDS++
        }
        /////////////////////////////////////////
        //Calcula o menor Valor de Faturamento do Mês
        if(data[i].valor < MenorValor && data[i].valor != 0){
            MenorValor = data[i].valor
            MenorValorDia = data[i].dia
        }
        /////////////////////////////////////////
        //Calcula o maior Valor de Faturamento do Mês
        if(data[i].valor > MaiorValor){
            MaiorValor = data[i].valor
            MaiorValorDia = data[i].dia
        } 
        /////////////////////////////////////////
        //Calcula a Média do Mês
        ValorMedia = SomaDaMedia / (data.length - DiasFDS)
    }

    ///////////////////////////////////////////////////////////////
    //Conta os dias que foram acima da Média
    for(i = 0;i < data.length;i++){
        if(data[i].valor > ValorMedia){
            Dias_Bom_Faturamento++
            Soma_Dias_Bom_Faturamento += data[i].valor
        }
    }

    
    ///////////////////////////////////////////////////////////////
    //Formata para Moeda Local
    let moeda = { style: 'currency', currency: 'BRL' }

    //Mostra as informações ao úsuario no Alert
    window.alert(`
    Total De Faturamento: ${SomaDaMedia.toLocaleString('pt-BR', moeda)}
    Dias Com Faturamento: ${data.length - DiasFDS} Dias
    Média Mensal: ${ValorMedia.toLocaleString('pt-BR', moeda)}
   
    Dia Com Menor Faturamento: 
    Dia: ${MenorValorDia} 
    Valor: ${MenorValor.toLocaleString('pt-BR', moeda)}
    
    Dia Com Maior Faturamento: 
    Dia: ${MaiorValorDia} 
    Valor: ${MaiorValor.toLocaleString('pt-BR', moeda)}
   
    Quantidade e Soma dos Dias Com o Faturamento 
    Acima Da Média Mensal: 
    ${Dias_Bom_Faturamento} Dias, Soma: ${Soma_Dias_Bom_Faturamento.toLocaleString('pt-BR', moeda)}
    `)


    //Mostra as informações ao úsuario no Console
    console.log(`
    Total De Faturamento: ${SomaDaMedia.toLocaleString('pt-BR', moeda)}
    Dias Com Faturamento: ${data.length - DiasFDS} Dias
    Média Mensal: ${ValorMedia.toLocaleString('pt-BR', moeda)}
   
    Dia Com Menor Faturamento: 
    Dia: ${MenorValorDia} 
    Valor: ${MenorValor.toLocaleString('pt-BR', moeda)}
    
    Dia Com Maior Faturamento: 
    Dia: ${MaiorValorDia} 
    Valor: ${MaiorValor.toLocaleString('pt-BR', moeda)}
   
    Quantidade e Soma dos Dias Com o Faturamento 
    Acima Da Média Mensal: 
    ${Dias_Bom_Faturamento} Dias, Soma: ${Soma_Dias_Bom_Faturamento.toLocaleString('pt-BR', moeda)}
    `)
  });
