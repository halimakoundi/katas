using System.Collections.Generic;
using System.Linq;

namespace FibonacciKata.Src
{
    public class Fibonacci
    {
        public List<int> Generate(int sequenceLength)
        {
            var generatedSequence = new List<int>();
            if (sequenceLength == 1)
            {
                generatedSequence.Add(0);
            }
            if (sequenceLength == 2)
            {
                generatedSequence = Generate(1);
                generatedSequence.Add(1);
            }
            if (sequenceLength > 2)
            {
                generatedSequence = Generate(sequenceLength - 1);
                var previousNumber = generatedSequence[sequenceLength - 3];
                var previousNumber2 = generatedSequence[sequenceLength - 2];

                generatedSequence.Add(previousNumber + previousNumber2);
            }
            return generatedSequence;
        }
    }
}
