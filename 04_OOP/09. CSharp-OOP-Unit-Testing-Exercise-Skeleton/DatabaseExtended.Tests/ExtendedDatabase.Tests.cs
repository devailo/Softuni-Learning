using NUnit.Framework;
using System;
using System.Linq;

namespace Tests
{
    public class ExtendedDatabaseTests
    {

        [Test]
        [TestCase(3)]
        [TestCase(5)]
        [TestCase(16)]
        [TestCase(0)]
        public void AddMethodShouldAddNewElementsWhileCountIsLessThan16(int count)
        {
            ExtendedDatabase database = new ExtendedDatabase();

            for (int i = 0; i < count; i++)
            {
                database.Add(new Person(i + 1, $"ha4o{i + 1}"));
            }

            Assert.AreEqual(count, database.Count);
        }

        [Test]

        public void AddRangeMethodShoudlThrowExceptionWhenProvidedDataLengthIsOutOfRange()
        {
            Person[] persons = new Person[] {
                new Person(1, "ala"),
                new Person(2, "bala"),
                new Person(3, "nica"),
                new Person(4, "alfa"),
                new Person(5, "beta"),
                new Person(6, "gama"),
                new Person(7, "abv"),
                new Person(8, "gd"),
                new Person(9, "uno"),
                new Person(10, "dos"),
                new Person(11, "tres"),
                new Person(12, "aincu"),
                new Person(13, "cvaincu"),
                new Person(14, "drun"),
                new Person(15, "alo"),
                new Person(16, "da"),
                new Person(17, "balo")
            };

            Assert.Throws<ArgumentException>(() => new ExtendedDatabase(persons));
        }


        [TestCase(16)]
        public void AddMethodShouldThrowExceptionWhenADdingOver16(int count)
        {
            ExtendedDatabase database = new ExtendedDatabase();

            for (int i = 0; i < count; i++)
            {
                database.Add(new Person(i + 1, $"ha4o{i + 1}"));
            }

            Assert.Throws<InvalidOperationException>(() => database.Add(new Person(22, "ha4oCool")));

        }

        [Test]
        public void RemoveMethodShouldThrowExceptionIfZero()
        {
            ExtendedDatabase database = new ExtendedDatabase();

            Assert.Throws<InvalidOperationException>(() => database.Remove());
        }

        [Test]
        public void RemoveMethodShouldLowerCount()
        {
            ExtendedDatabase database = new ExtendedDatabase();

            database.Add(new Person(11, "ha4o"));
            database.Add(new Person(22, "ha4o12"));

            database.Remove();

            Assert.AreEqual(1, database.Count);
        }

        [Test]
        public void AddMethodSHouldThrowExceptionWhenAddingDuplicateName()
        {
            ExtendedDatabase database = new ExtendedDatabase();

            database.Add(new Person(11, "ha4o"));
            database.Add(new Person(22, "ha4o12"));

            Assert.Throws<InvalidOperationException>(() => database.Add(new Person(33, "ha4o12")));
        }

        [Test]
        public void AddMethodSHouldThrowExceptionWhenAddingDuplicateID()
        {
            ExtendedDatabase database = new ExtendedDatabase();

            database.Add(new Person(11, "ha4o"));
            database.Add(new Person(22, "ha4o12"));

            Assert.Throws<InvalidOperationException>(() => database.Add(new Person(22, "pasqual")));
        }

        [Test]
        public void FindByNameMethodShouldThrowExceptionWhenNullName()
        {
            ExtendedDatabase database = new ExtendedDatabase();

            Assert.Throws<ArgumentNullException>(() => database.FindByUsername(null));

        }

        [Test]
        public void FindByNameMethodShouldThrowExceptionWhenMissingName()
        {
            ExtendedDatabase database = new ExtendedDatabase();

            database.Add(new Person(11, "ha4o"));

            Assert.Throws<InvalidOperationException>(() => database.FindByUsername("hachiko"));

        }

        [Test]
        public void FindByNameMethodShouldReturnTrueWHenFindingName()
        {
            ExtendedDatabase database = new ExtendedDatabase();

            database.Add(new Person(11, "ha4o"));

            Person person = database.FindByUsername("ha4o");

            Assert.AreEqual("ha4o", person.UserName);

        }

        [Test]
        public void FindByIDMethodShouldThrowExceptionWhenBelowZero()
        {
            ExtendedDatabase database = new ExtendedDatabase();

            Assert.Throws<ArgumentOutOfRangeException>(() => database.FindById(-12));

        }

        [Test]
        public void FindByIDMethodShouldThrowExceptionWhenMissingID()
        {
            ExtendedDatabase database = new ExtendedDatabase();

            database.Add(new Person(11, "ha4o"));

            Assert.Throws<InvalidOperationException>(() => database.FindById(12));

        }

        [Test]
        public void FindByIDMethodShouldReturnTrueWHenFindingName()
        {
            ExtendedDatabase database = new ExtendedDatabase();

            database.Add(new Person(11, "ha4o"));

            Person person = database.FindById(11);

            Assert.AreEqual(11, person.Id);

        }

    }
}