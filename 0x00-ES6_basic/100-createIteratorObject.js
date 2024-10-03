export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const employeeList = [];

  for (const department in employees) {
    if (Object.prototype.hasOwnProperty.call(employees, department)) {
      for (const employee of employees[department]) {
        employeeList.push(employee);
      }
    }
  }
  return employeeList[Symbol.iterator]();
}
