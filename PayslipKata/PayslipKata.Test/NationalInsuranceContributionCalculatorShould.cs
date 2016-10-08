using NUnit.Framework;
using PayslipKata.Src;

namespace PayslipKata.Test
{
    [TestFixture]
    public class NationalInsuranceContributionCalculatorShould
    {

        [TestCase(5000, 0)]
        [TestCase(8060, 0)]
        [TestCase(9060, 10)]
        [TestCase(40000, 319.40)]
        [TestCase(43000, 349.40)]
        [TestCase(50000, 349.40)]
        public void calculate_contribution_for_basic_contribution_band(decimal annualSalary, decimal expectedContribution)
        {
            var calculator  = new NationalInsuranceContributionCalculator();

            var calculatedContribution = calculator.NationalInsuranceContributions(annualSalary);

            Assert.That(calculatedContribution, Is.EqualTo(expectedContribution));
        }
    }
}
