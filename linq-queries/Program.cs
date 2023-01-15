using linqquries.Data;

internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("Linq quries and their results.");
        DataContext dc = new DataContext();
        //GET All Employees.
        var employees = dc.Employees;

        //GET All DEPARTMENTS
        var departments = dc.Departments;

        //GET ALL Salaries 
        var salaries = dc.Salaries;


        //GET EMPLOYEE WITH DEPARTMENT
        var emp_depart = from e in employees
                         join d in departments on e.DepartmentRid equals d.Rid
                         select new { e, d };

        //GET EMPLOYEE WITH SALARY         
        var emp_Salary = from e in employees
                         join s in salaries on e.Rid equals s.EmployeeRid
                         select new { e, s };

        //GET EMPLOYEE WITH DEPARTMENT and SALARY
        var emp_details = from e in employees
                          join d in departments on e.DepartmentRid equals d.Rid
                          join s in salaries on e.Rid equals s.EmployeeRid
                          select new { e, d, s };

        //Get top 5 Salaries
        var top_salary = (from s in salaries
                         orderby s.AnnualSalary descending
                         select s).Take(5);


        //Get 2nd highest salary
        var top_2nd_salary = (from s in salaries
                         orderby s.AnnualSalary descending
                         select s).Take(2).Skip(1);

        //Get bottom 5 Salaries
        var bottom_salary = (from s in salaries
                         orderby s.AnnualSalary ascending
                         select s).Take(5);

    }
}