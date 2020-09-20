using api.Services;
using NUnit.Framework;

namespace NUnitTestProject
{
    class FactorialTest
    {
        [Test]
        [TestCase(0, ExpectedResult = 1)]
        [TestCase(1, ExpectedResult = 1)]
        [TestCase(2, ExpectedResult = 2)]
        [TestCase(3, ExpectedResult = 6)]
        [TestCase(4, ExpectedResult = 24)]
        [TestCase(5, ExpectedResult = 120)]
        [TestCase(6, ExpectedResult = 720)]
        [TestCase(7, ExpectedResult = 5040)]
        [TestCase(8, ExpectedResult = 40320)]
        [TestCase(9, ExpectedResult = 362880)]
        [TestCase(10, ExpectedResult = 3628800)]
        public int TestFactorialInLimit(int number)
        {
            FactorialCalculator facCal = new FactorialCalculator();
            return facCal.Calculate(number);
        }

        [Test]
        public void TestFactorialOutsideLimit()
        {
            FactorialCalculator facCal = new FactorialCalculator();

            var exception = Assert.Throws<System.NotSupportedException>(() => facCal.Calculate(11));
            Assert.That(exception.Message, Is.EqualTo("n > 10 is not supported"));
        }
    }
}