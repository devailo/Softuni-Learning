using NUnit.Framework;
using System;

namespace Tests
{
    public class CarTests
    {
        
        [Test]
        public void ConstructorTest()
        {
            Car car = new Car("Toyota", "Camry", 5, 80);

            Assert.AreEqual("Toyota", car.Make);
            Assert.AreEqual("Camry", car.Model);
            Assert.AreEqual(5, car.FuelConsumption);
            Assert.AreEqual(80, car.FuelCapacity);
            Assert.AreEqual(0, car.FuelAmount);
        }

        [TestCase(null)]
        [TestCase("")]
        public void MakeShouldNotBeNull(string make)
        {
            Car car = new Car("Toyota", "Camry", 5, 80);
           
            Assert.Throws<ArgumentException>(() => new Car(make, "camry", 22, 55)); 
        }

        [TestCase(null)]
        [TestCase("")]
        public void ModelShouldNotBeNull(string model)
        {
            Assert.Throws<ArgumentException>(() => new Car("Toyota", model, 22, 55));
        }

        [TestCase(-22)]
        [TestCase(0)]
        public void ConsumptionShouldNotBeNegativeOrZero(double consumption)
        {
            Assert.Throws<ArgumentException>(() => new Car("Toyota", "Camry", consumption, 55));
        }


        [Test]
        public void FuelCapacityShouldNotBeNegativeOrZero()
        {
            Assert.Throws<ArgumentException>(() => new Car("Toyota", "Camry", 7, -2));
        }

        [TestCase(0)]
        [TestCase(-5)]
        public void FuelToRefuelAmmountShouldNotBeNegative(int refuelAmount)
        {
            Car car = new Car("Toyota", "Camry", 5, 80);

            Assert.Throws<ArgumentException>(() => car.Refuel(refuelAmount));
        }

        [Test]
        public void RefuelMethodShouldBeCorrect()
        {
            Car car = new Car("Toyota", "Camry", 5, 80);

            car.Refuel(20);

            Assert.AreEqual(20, car.FuelAmount);
        }

        [Test]
        public void RefuelMethodShouldBeCorrectWhenOverFilled()
        {
            Car car = new Car("Toyota", "Camry", 5, 80);

            car.Refuel(100);

            Assert.AreEqual(80, car.FuelAmount);
        }

        [Test]
        public void DriveMethodShouldThrowExceptionWhenNotEnoughFuel()
        {
            Car car = new Car("Toyota", "Camry", 5, 80);

            car.Refuel(5);

            Assert.Throws<InvalidOperationException>(() => car.Drive(200));
        }

        [Test]
        public void DriveMethodShouldLowerFuelAmmountCorrectly()
        {
            Car car = new Car("Toyota", "Camry", 5, 80);

            car.Refuel(5);
            car.Drive(50);

            Assert.AreEqual(2.5, car.FuelAmount);
        }
    }
}