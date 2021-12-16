using FightingArena;
using NUnit.Framework;
using System;
using System.Linq;

namespace Tests
{
    [TestFixture]
    public class ArenaTests
    {
        [Test]
        public void ConstructorShouldInitializeAllValues()
        {
            Arena arena = new Arena();

            Assert.IsNotNull(arena.Warriors);
        }

        [Test]
        public void EnrollMethodShouldAddWarriorIfDoesntExists()
        {
            Arena arena = new Arena();

            Warrior warrior = new Warrior("Sancho", 50, 50);
            Warrior warrior2 = new Warrior("Senko", 50, 50);

            arena.Enroll(warrior);
            arena.Enroll(warrior2);

            Assert.AreEqual(2, arena.Count);

            bool WarriorExists = arena.Warriors.Contains(warrior);
            bool Warrior2Exists = arena.Warriors.Contains(warrior2);

            Assert.True(WarriorExists);
            Assert.True(Warrior2Exists);
        }

        [Test]
        public void EnrollMethodShouldThrowExceptionWhenAddWarriorDoubled()
        {
            Arena arena = new Arena();

            Warrior warrior = new Warrior("Sancho", 50, 50);
            Warrior warrior2 = new Warrior("Sancho", 50, 50);

            arena.Enroll(warrior);
            
            Assert.Throws<InvalidOperationException>(()=> arena.Enroll(warrior2));
        }

        [Test]
        public void FightMethodShouldThrowExceptoinForInvalidWarriors()
        {
            Arena arena = new Arena();

            Warrior warrior = new Warrior("Sancho", 66, 66);
            Warrior warrior2 = new Warrior("Senko", 44, 77);

            Assert.Throws<InvalidOperationException>(() => arena.Fight("kiro", "stoyan"));
        }

        [Test]
        public void FightMethodShouldThrowExceptoinForInvalidAttacker()
        {
            Arena arena = new Arena();

            Warrior warrior = new Warrior("Sancho", 66, 66);

            arena.Enroll(warrior);

            Assert.Throws<InvalidOperationException>(() => arena.Fight("kiro", "Sancho"));
        }

        [Test]
        public void FightMethodShouldThrowExceptoinForInvalidDefender()
        {
            Arena arena = new Arena();

            Warrior warrior = new Warrior("Sancho", 66, 66);

            arena.Enroll(warrior);

            Assert.Throws<InvalidOperationException>(() => arena.Fight("Sancho", "semka"));
        }

        [TestCase("stoyan", 50, 50, "sevdalin", 50 , 50)]
        [TestCase("stoyan", 33, 33, "sevdalin", 33 , 33)]
        public void FightShouldReduceHP(string name, int damage, int health, string defenderName, int defenderDamage, int defenderHealth)
        {
            Arena arena = new Arena();

            Warrior warrior = new Warrior(name, damage, health);
            Warrior warrior2 = new Warrior(defenderName, defenderDamage, defenderHealth);

            arena.Enroll(warrior);
            arena.Enroll(warrior2);

            arena.Fight(name, defenderName);

            Assert.AreEqual(0, warrior.HP);
            Assert.AreEqual(0, warrior2.HP);
        }
    }
}
