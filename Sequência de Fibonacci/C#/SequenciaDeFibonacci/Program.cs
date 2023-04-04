using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

int number = 0;
Console.WriteLine("Digite um valor!");
string numberstring = Console.ReadLine();
while (numberstring == "")
{
    Console.WriteLine("Digite um valor Válido:");
    numberstring = Console.ReadLine();
}
  number = int.Parse(numberstring);



int a = 0, b = 1, c;

while(a <= number)
{
    if(a == number)
    {
        Console.WriteLine($"{number} pertence à sequência de Fibonacci!");
        break;
    }
    c = a + b;
    a = b;
    b = c;

}

if(a != number)
{
    Console.WriteLine($"{number} não pertence à sequência de Fibonacci!");
}