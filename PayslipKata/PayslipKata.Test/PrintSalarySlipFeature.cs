using NUnit.Framework;
using PayslipKata.Src;

namespace PayslipKata.Test
{
    public class PrintSalarySlipFeature
    {
        [TestCase( "EmployeeId", "John Doe", 24000, 2000, 159.40, 916.67, 1083.33, 216.67)]
        //[Ignore("too big"), TestCase( "AnotherEmployeeId", "Jane Doe", 40000, 3333.33, 319.40, 916.67, 2416.67, 483.33)]
        [TestCase( "AnotherEmployeeId", "Jane Doe", 40000, 3333.33, 319.40, 916.67, 1083.33, 216.67)]
        public void Print_Payslip_For_A_Given_Employee(string id, string name, decimal annualSalary, 
                                                    decimal grossSalary, decimal nationalInsuranceContributions, 
                                                    decimal taxFreeAllowance, decimal taxableIncome, 
                                                    decimal taxPayable)
        {
            var employee = new Employee(id, name, annualSalary);
            var payslip = new Payslip(employee, grossSalary, nationalInsuranceContributions, taxFreeAllowance,  taxableIncome, taxPayable);

            var salarySlipGenerator = new SalarySlipGenerator();

            Assert.That(salarySlipGenerator.GenerateFor(employee), Is.EqualTo(payslip));
        }

    }
}
