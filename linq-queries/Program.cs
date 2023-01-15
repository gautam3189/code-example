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

        Console.WriteLine($"{"Rid", 5} | {"Employee Rid", 10} | {"Annual Salary", 10}");
        Console.WriteLine($"---------------------------------------------------");
        foreach(var item in salaries){
            Console.WriteLine($"{item.Rid, 5} | {item.EmployeeRid, 10} | {item.AnnualSalary, 10}");
        }

        //GET EMPLOYEE WITH DEPARTMENT
        var emp_depart = from e in employees
                         join d in departments on e.DepartmentRid equals d.Rid // INNER JOIN 
                         select new { e, d }; //Anonymous object.

        //Print Output
        //Loop through each record and print details
        Console.WriteLine("{0,-15} | {1, -15} | {2, -15}", "Employee_Rid", "Employee_Name", "Department_Name");
        Console.WriteLine("----------------------------------------------------------------");
        foreach(var item in emp_depart){
            Console.WriteLine($"{item.e.Rid,15} | {item.e.Name,-15} | {item.d.Name,-15}");
        }
        /*
        OUTPUT
        Employee_Rid    | Employee_Name   | Department_Name
        --------------------------------------------------------
                      1 | John            | Payroll        
                      2 | Mark            | Payroll        
                      3 | Josua           | Payroll        
                      4 | Josh            | Finance        
                      5 | Morris          | Finance        
                      6 | Tomi            | Finance        
                      7 | Tony            | HR
                      8 | Maya            | Logistics      
                      9 | Tina            | HR
                     10 | Mona            | Logistics      
                     11 | Soniya          | Logistics      
                     12 | Rebeca          | HR
        */
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

        //Department wise Annual Salary
        var dept_Pay = from e in employees
                          join d in departments on e.DepartmentRid equals d.Rid                         
                          join s in salaries on e.Rid equals s.EmployeeRid 
                          group new{e,d,s} by new {d.Rid, d.Name} into depatment_group
                          select new { 
                                        department_Rid = depatment_group.Key.Rid, 
                                        department_name = depatment_group.Key.Name, 
                                        Annual_Salary = depatment_group.Sum(_ => _.s.AnnualSalary) 
                                    };
        
        Console.WriteLine("Department with annual Salary");
        Console.WriteLine($"{"Rid",5} | {"Name",-10} | {"Annual Salary",15}");
        Console.WriteLine("_________________________________________");
        foreach(var item in dept_Pay){
            Console.WriteLine($"{item.department_Rid,5} | {item.department_name,-10} | {item.Annual_Salary,15}");
        }
        /* OUTPUT
        Department with annual Salary
        Rid | Name       |   Annual Salary
        _________________________________________
          1 | Payroll    |        32000000
          2 | Finance    |        48000000
          3 | HR         |        18000000
          4 | Logistics  |        50000000
        */         

    }
}
