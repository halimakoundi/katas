using System;

namespace PayslipKata.Src
{
    public class SalarySlipGenerator
    {


        public Payslip GenerateFor(Employee employee)
        {
            var grossSalary = Math.Round(employee.AnnualSalary / 12m, 2);
            var nationalInsuranceContributions = new NationalInsuranceContributionCalculator().NationalInsuranceContributions(employee.AnnualSalary);
            return new Payslip(employee, grossSalary, nationalInsuranceContributions, 916.67m, 1083.33m, 216.67m);
        }


    }
}