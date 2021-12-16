using FightingArena;
using NUnit.Framework;
using System;

namespace Tests
{
    public class WarriorTests
    {
        [TestCase("Stoyan", 50, 70)]
        [TestCase("Sancho", 22, 22)]
        [TestCase("Stoyan", 11, 5)]
        [TestCase("Kir4o", 1, 0)]
        public void ConstructorShouldSetEverythingIfDataIsValid(string name, int damage, int health)
        {
            Warrior warrior = new Warrior(name, damage, health);

            Assert.AreEqual(name, warrior.Name);
            Assert.AreEqual(damage, warrior.Damage);
            Assert.AreEqual(health, warrior.HP);
        }

        [TestCase(null)]
        [TestCase("")]
        [TestCase(" ")]
        public void ConstrutorShouldThrowArgumentExceptionForInvalidName(string name)
        {
            Assert.Throws<ArgumentException>(() => new Warrior(name, 40, 50));
        }

        [TestCase(0)]
        [TestCase(-1)]
        [TestCase(-100)]
        public void ConstrutorShouldThrowArgumentExceptionForInvalidDamage(int damage)
        {
            Assert.Throws<ArgumentException>(() => new Warrior("Stoyan", damage, 50));
        }

        [TestCase(-1)]
        [TestCase(-100)]
        public void ConstrutorShouldThrowArgumentExceptionForInvalidHealth(int health)
        {
            Assert.Throws<ArgumentException>(() => new Warrior("Stoyan", 55, health));
        }

        [TestCase("Stoyan", 20, 20, "Niki", 50, 50)]
        [TestCase("Stoyan", 30, 20, "Niki", 50, 50)]
        [TestCase("Stoyan", 55, 55, "Niki", 1, 22)]
        public void AttackMethodShouldThrowExceptionWhenHPIsBelowOrEqual30(string name, int damage, int health, string enemyName, int enemyDamage, int enemyHealth)
        {
            Warrior warrior = new Warrior(name, damage, health);
            Warrior enemy = new Warrior(enemyName, enemyDamage, enemyHealth);

            Assert.Throws<InvalidOperationException>(() => warrior.Attack(enemy));
            
        }

        [TestCase("Stoyan", 33, 33, "Niki", 34, 75)]
        [TestCase("Stoyan", 33, 33, "Niki", 50, 50)]
        [TestCase("Stoyan", 55, 55, "Niki", 88, 44)]
        public void AttackMethodShouldThrowExceptionWhenHPIsBelowEnemyDamage(string name, int damage, int health, string enemyName, int enemyDamage, int enemyHealth)
        {
            Warrior warrior = new Warrior(name, damage, health);
            Warrior enemy = new Warrior(enemyName, enemyDamage, enemyHealth);

            Assert.Throws<InvalidOperationException>(() => warrior.Attack(enemy));

        }

        [TestCase("Stoyan", 50, 100, "Niki", 60, 100)]
        [TestCase("Stoyan", 66, 77, "Niki", 55, 68)]
        [TestCase("Stoyan", 100, 100, "Niki", 55, 100)]
        [TestCase("Stoyan", 100, 111, "Niki", 80, 100)]
        public void AttackMethodShouldReduceHPForWarriorAndEnemy(string name, int damage, int health, string enemyName, int enemyDamage, int enemyHealth)
        {
            Warrior warrior = new Warrior(name, damage, health);
            Warrior enemy = new Warrior(enemyName, enemyDamage, enemyHealth);

            warrior.Attack(enemy);

            
            Assert.AreEqual(health - enemyDamage, warrior.HP);
            Assert.AreEqual(enemyHealth - damage, enemy.HP);


        }
    }
}