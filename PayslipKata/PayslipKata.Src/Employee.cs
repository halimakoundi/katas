namespace PayslipKata.Src
{
    public class Employee
    {
        public string Id { get;  }
        public decimal AnnualSalary { get;  }
        public string Name { get; }

        public Employee(string id, string name, decimal annualSalary)
        {
            Id = id;
            Name = name;
            AnnualSalary = annualSalary;
        }
    }
}