using System;

namespace Pet_Shop
{
    class Program
    {
        static void Main(string[] args)
        {
            double dogs = double.Parse(Console.ReadLine());
            double others = double.Parse(Console.ReadLine());

            double dogsFood = dogs * 2.50;
            double othersFood = others * 4;

            double all = dogsFood + othersFood;

            Console.WriteLine($"{all} lv.");
        }
    }
}
