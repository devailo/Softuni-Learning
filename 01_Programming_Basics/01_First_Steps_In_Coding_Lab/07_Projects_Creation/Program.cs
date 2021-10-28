using System;

namespace Projects_Creation
{
    class Program
    {
        static void Main(string[] args)
        {
            string name = Console.ReadLine();
            int projNum = int.Parse(Console.ReadLine());
            int hours = projNum * 3;

            Console.WriteLine($"The architect {name} will need {hours} hours to complete {projNum} project/s.");
        }
    }
}
