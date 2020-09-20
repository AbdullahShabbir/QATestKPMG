using api.Services;
using NUnit.Framework;

namespace NUnitTestProject
{
    public class FibonacciTest
    {
        [Test]
        [TestCase(0, ExpectedResult = 0)]
        [TestCase(1, ExpectedResult = 1)]
        [TestCase(2, ExpectedResult = 1)]
        [TestCase(10, ExpectedResult = 55)]
        public int TestFibonacciInLimit(int number)
        {
            FibonacciCalculator fibCal = new FibonacciCalculator();
            return fibCal.Calculate(number);
        }

        [Test]
        public void TestFibonacciOutsideLimit()
        {
            FibonacciCalculator fibCal = new FibonacciCalculator();

            var exception = Assert.Throws<System.NotSupportedException>(() => fibCal.Calculate(11));
            Assert.That(exception.Message, Is.EqualTo("n > 10 is not supported"));
        }
    }
}