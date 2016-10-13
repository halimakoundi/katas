using System;

namespace PayslipKata.Src
{
    public class SalarySlipGenerator
    {


        public Payslip GenerateFor(Employee employee)
        {
            var grossSalary = MonthlyGrossSalary(employee);
            var nationalInsuranceContributions = new NationalInsuranceContributionCalculator().NationalInsuranceContributions(employee.AnnualSalary);
            var payslip = new Payslip(employee, grossSalary, nationalInsuranceContributions, TaxFreeAllowance(), TaxableIncome(employee), 216.67m);
            return payslip;
        }

        private static decimal MonthlyGrossSalary(Employee employee)
        {
            return Math.Round(employee.AnnualSalary / 12m, 2);
        }

        private static decimal TaxFreeAllowance()
        {
            return 916.67m;
        }

        private static decimal TaxableIncome(Employee employee)
        {
            return Math.Round((employee.AnnualSalary - 11000m) / 12m, 2);
        }
    }
}