using System;
using System.Collections.Generic;
using System.Text;

namespace Person
{
    public class Person
    {
        private string name;
        private int age;

        public Person(string name, int age)
        {
            Name = name;
            Age = age;
        }

        public string Name { get; set; }
        public int Age { 
            get
            {
                return age;
            }
            set
            {
             
                age = value;
            }
        }

        public override string ToString()
        {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.Append(string.Format($"Name: {Name}, Age: {Age}"));

            return stringBuilder.ToString();
        }

    }
}
