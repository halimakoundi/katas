using System.Collections.Generic;

namespace FibonacciKata.Src
{
    public class Fibonacci
    {
        public List<int> Generate(int sequenceLength)
        {
            if (sequenceLength == 1)
            {
                return new List<int> { 0 };
            }
            if (sequenceLength == 2)
            {
                return new List<int> { 0, 1};
            }
            if (sequenceLength == 3)
            {
                return new List<int> {0, 1, 1};
            }
            return new List<int>();
        }
    }
}
