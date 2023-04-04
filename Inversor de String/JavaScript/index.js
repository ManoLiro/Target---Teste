
document.getElementById('btn').addEventListener('click',function(){
    const div = document.getElementById('palavraInvertida')
    try{
    const deletechild = document.getElementById('word')
    div.removeChild(deletechild)
    }catch{
        //Tratar erro!

    }

   let stringElement = document.getElementById('input')
   let string = stringElement.value
   let ReverseString = '';
for(i = string.length - 1; i >= 0; i--){
     ReverseString = ReverseString + string[i]; 
}
const Resposta = document.createElement('h3')
Resposta.innerText = ReverseString
Resposta.id = 'word'


div.appendChild(Resposta)

})

