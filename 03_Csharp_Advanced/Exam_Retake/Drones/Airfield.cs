using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Drones
{
    public class Airfield
    {

        public Airfield(string name, int capacity, double landingStrip)
        {
            Name = name;
            Capacity = capacity;
            LandingStrip = landingStrip;
            Drones = new List<Drone>();
        }

        public string Name { get; set; }
        public int Capacity { get; set; }
        public double LandingStrip { get; set; }
        public IReadOnlyCollection<Drone> Drones { get; private set; }

        public int Count => Drones.Count;

        public string AddDrone(Drone drone)
        {
            if (string.IsNullOrWhiteSpace(drone.Name) || string.IsNullOrWhiteSpace(drone.Brand) || drone.Range < 5 || drone.Range > 15)
            {
                return "Invalid drone.";
            }
            if (Drones.Count == Capacity)
            {
                return "Airfield is full.";
            }
            else
            {
                List<Drone> temp = Drones.ToList();
                temp.Add(drone);
                Drones = temp.AsReadOnly();

                return $"Successfully added {drone.Name} to the airfield.";


            }
        }

        public bool RemoveDrone(string name)
        {
            Drone current = this.Drones.FirstOrDefault(p => p.Name == name);

            if (current == null)
            {
                return false;
            }
            List<Drone> temp = Drones.ToList();
            temp.Remove(current);
            Drones = temp.AsReadOnly();
            return true;
        }

        public int RemoveDroneByBrand(string name)
        {
            int previousCount = Drones.Count;
            List<Drone> flying = Drones.Where(drone => drone.Brand == name).ToList();
            List<Drone> temp = Drones.ToList();
            foreach (var drone in flying)
            {
                Drone current = this.Drones.FirstOrDefault(p => p.Brand == name);
                temp.Remove(current);
                Drones = temp.AsReadOnly();
            }
            int removed = previousCount - temp.Count;

            if (removed == 0)
            {
                return 0;
            }
            
            return removed;
        }
        public Drone FlyDrone(string name)
        {
            var current = Drones.FirstOrDefault(drone => drone.Name == name);
            if (current == null)
            {
                return null;
            }

            current.Available = false;
            return current;
        }

        public List<Drone> FlyDronesByRange(int range)
        {
            List<Drone> flying = Drones.Where(drone => drone.Range >= range).ToList();
            foreach (var drone in flying)
            {
                FlyDrone(drone.Name);
            }
            return flying;
        }

        public string Report()
        {
            StringBuilder info = new StringBuilder();

            info.AppendLine($"Drones available at { Name}:");
            foreach (var drone in Drones)
            {
                if (drone.Available)
                {
                    info.AppendLine(drone.ToString());
                }

            }
            return info.ToString().TrimEnd();

        }
    }
}
