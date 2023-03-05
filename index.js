const employee = {
    name: "Joe",
    streetAddress: "21 Broadwater Ave",
};

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const newEmployee = {...employee};
    newEmployee[name] = streetAddress;
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const newEmployee = {...employee};
    newEmployee[name] = streetAddress;
    employee.name = "Sam"
    employee.streetAddress = "12 Broadway";
    return newEmployee
}

function deleteFromEmployeeByKey(employee, name, streetAddress) {
    return {
        ...employee,
        [name]: streetAddress,
    };
}

function destructivelyDeleteFromEmployeeByKey(employee, name, streetAddress) {
    employee[name] = streetAddress;
    return employee;
}