using System;

namespace inch_cm
{
    class Program
    {
        static void Main(string[] args)
        {
            double a = double.Parse(Console.ReadLine());
            double conv = a * 2.54;

            Console.WriteLine(conv);
        }
    }
}