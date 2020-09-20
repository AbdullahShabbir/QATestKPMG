using System;

namespace api.Services
{
    public class FactorialCalculator
    {
        private const int MaxN = 10;

        public int Calculate(int n) => n > MaxN
            ? throw new NotSupportedException($"n > {MaxN} is not supported")
            : Factorial(n);

        private static int Factorial(int n)
        {
            int i, fact = 1;

            for (i = 1; i <= n; i++)
            {
                fact = fact * i;
            }

            return fact;
        }
    }
}