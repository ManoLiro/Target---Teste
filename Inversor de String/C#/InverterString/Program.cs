
Console.WriteLine("Insira uma palavra a ser Invertida:");
string Word = Console.ReadLine();
string ReverseWord = "";
while(Word.Length == 0)
{
    Console.WriteLine("Insira uma Palavra!");
    Word = Console.ReadLine();
}

    for(var i = Word.Length - 1; i >= 0; i--)
    {
        char letter = Word[i];
        ReverseWord += letter;

    }
    Console.WriteLine($"A Palavra Invertida é: {ReverseWord}");
