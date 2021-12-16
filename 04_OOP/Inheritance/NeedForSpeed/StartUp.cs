namespace NeedForSpeed
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            var vehicle = new RaceMotorcycle(100, 100);
            vehicle.Drive(10);
            System.Console.WriteLine(vehicle.Fuel);
        }
    }
}
