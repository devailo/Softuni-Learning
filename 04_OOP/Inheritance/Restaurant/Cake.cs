using System;
using System.Collections.Generic;
using System.Text;

namespace Restaurant
{
    public class Cake : Dessert
    {

        private const double defaultCalories  = 1000;
        private const double defaultGrams = 250;
        private const decimal CakePrice = 5m;


        public Cake(string name) : base(name, CakePrice, defaultGrams, defaultCalories)
        {

        }

    }
}
