using api.Services;
using NUnit.Framework;

namespace NUnitTestProject
{
    public class RandomNumberTest
    {
        [Test]
        
        public void TestRandomCalInLimit()
        {
            RandomNumber randNum = new RandomNumber();
            
            int randNumber = randNum.Get(3);
            Assert.GreaterOrEqual(randNumber, 0);
            Assert.Less(randNumber, 3);
        }

        [Test]
        public void TestRandomCalOutsideLimit()
        {
            RandomNumber randNum = new RandomNumber();

            var exception = Assert.Throws<System.Exception>(() => randNum.Get(0));
            Assert.That(exception.Message, Is.EqualTo("max must be > 0"));
        }
    }
}