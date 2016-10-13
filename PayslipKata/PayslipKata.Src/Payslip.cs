namespace PayslipKata.Src
{
    public class Payslip
    {
        private readonly string _employeeId;
        private readonly string _employeeName;
        private readonly decimal _grossSalary;
        private readonly decimal _nationalInsuranceContributions;
        private readonly decimal _taxFreeAllowance;
        private readonly decimal _taxableIncome;
        private readonly decimal _taxPayable;

        public Payslip(Employee employee, decimal grossSalary, decimal nationalInsuranceContributions, 
            decimal taxFreeAllowance, decimal taxableIncome, decimal taxPayable)
        {
            _employeeId = employee.Id;
            _employeeName = employee.Name;
            _grossSalary = grossSalary;
            _nationalInsuranceContributions = nationalInsuranceContributions;
            _taxFreeAllowance = taxFreeAllowance;
            _taxableIncome = taxableIncome;
            _taxPayable = taxPayable;
        }

        protected bool Equals(Payslip other)
        {
            return string.Equals(_employeeId, other._employeeId) 
                   && string.Equals(_employeeName, other._employeeName) 
                   && _grossSalary == other._grossSalary 
                   && _nationalInsuranceContributions.Equals(other._nationalInsuranceContributions)
                   && _taxFreeAllowance == other._taxFreeAllowance 
                   && _taxableIncome == other._taxableIncome 
                   && _taxPayable == other._taxPayable;
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((Payslip) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                var hashCode = _employeeId?.GetHashCode() ?? 0;
                hashCode = (hashCode * 397) ^ (_employeeName?.GetHashCode() ?? 0);
                hashCode = (hashCode * 397) ^ _grossSalary.GetHashCode();
                hashCode = (hashCode * 397) ^ _nationalInsuranceContributions.GetHashCode();
                hashCode = (hashCode * 397) ^ _taxFreeAllowance.GetHashCode();
                hashCode = (hashCode * 397) ^ _taxableIncome.GetHashCode();
                hashCode = (hashCode * 397) ^ _taxPayable.GetHashCode();
                return hashCode;
            }
        }

        public override string ToString()
        {
            return $"{_employeeId},{ _employeeName},{_grossSalary},{ _nationalInsuranceContributions}"
                + $", {_taxFreeAllowance}, {_taxableIncome} , {_taxPayable}";
        }
    }
}