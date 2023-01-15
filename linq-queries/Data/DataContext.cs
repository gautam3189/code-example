using linqquries.model;

namespace linqquries.Data
{
    public class DataContext
    {
        public List<Department> Departments => new List<Department>(){
            new Department{Rid=1, Name="Payroll"},
            new Department{Rid=2, Name="Finance"},
            new Department{Rid=3, Name="HR"},
            new Department{Rid=4, Name="Logistics"}
        };

        public List<Employee> Employees = new List<Employee>{
            new Employee{DepartmentRid = 1,Rid = 1, Name="John"},
            new Employee{DepartmentRid = 1,Rid = 2, Name="Mark"},
            new Employee{DepartmentRid = 1,Rid = 3, Name="Josua"},
            new Employee{DepartmentRid = 2,Rid = 4, Name="Josh"},
            new Employee{DepartmentRid = 2,Rid = 5, Name="Morris"},
            new Employee{DepartmentRid = 2,Rid = 6, Name="Tomi"},
            new Employee{DepartmentRid = 3,Rid = 7, Name="Tony"},
            new Employee{DepartmentRid = 4,Rid = 8, Name="Maya"},
            new Employee{DepartmentRid = 3,Rid = 9, Name="Tina"},
            new Employee{DepartmentRid = 4,Rid = 10, Name="Mona"},
            new Employee{DepartmentRid = 4,Rid = 11, Name="Soniya"},
            new Employee{DepartmentRid = 3,Rid = 12, Name="Rebeca"}
        };

        public List<Salary> Salaries = new List<Salary>{
            new Salary{Rid=1, EmployeeRid = 2, AnnualSalary = 10000000},
            new Salary{Rid=2, EmployeeRid = 4, AnnualSalary = 12000000},
            new Salary{Rid=3, EmployeeRid = 6, AnnualSalary = 17000000},
            new Salary{Rid=4, EmployeeRid = 1, AnnualSalary = 12000000},
            new Salary{Rid=5, EmployeeRid = 3, AnnualSalary = 10000000},
            new Salary{Rid=6, EmployeeRid = 5, AnnualSalary = 19000000},
            new Salary{Rid=7, EmployeeRid = 7, AnnualSalary = 10000000},
            new Salary{Rid=8, EmployeeRid = 9, AnnualSalary = 8000000},
            new Salary{Rid=9, EmployeeRid = 11, AnnualSalary = 10000000},
            new Salary{Rid=10, EmployeeRid = 8, AnnualSalary = 11000000},
            new Salary{Rid=11, EmployeeRid = 10, AnnualSalary = 20000000},
            new Salary{Rid=12, EmployeeRid = 10, AnnualSalary = 9000000}
        };
    }
}