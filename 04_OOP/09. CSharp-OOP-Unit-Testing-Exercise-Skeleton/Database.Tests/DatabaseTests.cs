using NUnit.Framework;
using System;
using System.Linq;

namespace Tests
{
    public class DatabaseTests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        [TestCase(3)]
        [TestCase(5)]
        [TestCase(16)]
        [TestCase(0)]
        public void AddMethodShouldAddNewElementsWhileCountIsLessThan16(int count)
        {
            Database database = new ExtendedDatabase();

            for (int i = 0; i < count; i++)
            {
                database.Add(i);
            }

            Assert.AreEqual(count, database.Count);
        }

        [Test]

        public void AddMethodShouldShouldThrowExceptionWhenItemsAreAbove16()
        {
            Database database = new ExtendedDatabase();

            for (int i = 0; i < 16; i++)
            {
                database.Add(i);
            }

            Assert.Throws<InvalidOperationException>(() => database.Add(5));
        }

        [Test]
        [TestCase(1, 4)]
        [TestCase(1, 15)]
        [TestCase(1, 3)]
        [TestCase(1, 9)]
        public void ConstructorShouldAddAllItemsWhileTheyAreBelow16(int start, int count)
        {
            int[] elements = Enumerable.Range(start, count).ToArray();

            Database database = new ExtendedDatabase(elements);

            Assert.AreEqual(count, database.Count);
        }

        [TestCase(1, 27)]
        [TestCase(1, 17)]

        public void AddMethodShouldShouldThrowExceptionWhenItemsAreAbove16(int start, int count)
        {
            int[] elements = Enumerable.Range(start, count).ToArray();


            Assert.Throws<InvalidOperationException>(() => new ExtendedDatabase(elements));
        }

        [TestCase(1, 3, 1)]
        [TestCase(1, 10, 5)]
        [TestCase(1, 15, 11)]
        [TestCase(1, 7, 6)]
        [Test]
        public void RemoveMethodShouldRemoveElementsWhenTheyAreAbove0(int start, int count, int toRemove)
        {
            int[] elements = Enumerable.Range(start, count).ToArray();

            Database database = new ExtendedDatabase(elements);
            for (int i = 0; i < toRemove; i++)
            {
                database.Remove();

            }

            Assert.AreEqual(count - toRemove, database.Count);
        }

        [Test]
        public void RemoveMethodShouldThrowExceptionWhenElementsAre0()
        {
            Database database = new ExtendedDatabase();

            Assert.Throws<InvalidOperationException>(() => database.Remove());

        }
        [Test]
        public void FetchShouldReturnAllValidItems()
        {
            Database database = new ExtendedDatabase(1,2,3);

            database.Add(4);
            database.Add(5);

            database.Remove();
            database.Remove();
            database.Remove();

            int[] fetchedData = database.Fetch();

            int[] expectedData = new int[] { 1, 2 };

            Assert.AreEqual(expectedData, fetchedData);
        }

    }
}
