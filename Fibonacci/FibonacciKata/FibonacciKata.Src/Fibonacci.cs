﻿using System.Collections.Generic;

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
            return new List<int>();
        }
    }
}
