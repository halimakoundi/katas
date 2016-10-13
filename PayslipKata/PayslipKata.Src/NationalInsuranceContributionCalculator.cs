using System;

namespace PayslipKata.Src
{
    public class NationalInsuranceContributionCalculator
    {
        private const decimal LowerLimit = 8060m;
        private const decimal UpperLimit = 43000m;
        private const decimal BasicContributionRate = 0.12m;

        public decimal NationalInsuranceContributions(decimal annualSalary)
        {
            var annualContribution = BasicContributionBandExcess(annualSalary) * BasicContributionRate;
            var monthlyContribution = annualContribution / 12m;
            return Math.Round(monthlyContribution, 2, MidpointRounding.AwayFromZero);
        }

        private decimal BasicContributionBandExcess(decimal annualSalary)
        {
            return IsBelowBasicBandLowerLimit(annualSalary) ? 0 : SalaryExcess(annualSalary);
        }

        private static decimal SalaryExcess(decimal annualSalary)
        {
            return Math.Min(annualSalary, UpperLimit) - LowerLimit;
        }

        private static bool IsBelowBasicBandLowerLimit(decimal annualSalary)
        {
            return annualSalary < LowerLimit;
        }
    }
}