const connection = require('./connection');

class DB {
    constructor(connection){
        this.connection = connection;
    }

viewDepartments(){
    return this.connection.query(`SELECT * FROM departments ORDER BY id ASC`);
};
    
viewRoles() {
    return this.connection.query(`SELECT * from roles ORDER BY id ASC`);
};
    
viewEmployees() {
    return this.connection.query(`SELECT * from employees ORDER BY id ASC`);
};

addDepartment(departments) {
    return this.connection.query('INSERT INTO departments SET ?', {
          dept_name: departments
        });
};

addRole(roles) {
    return this.connection.query(`INSERT INTO roles SET ?`, roles);
};

addEmployee(employees) {
    return this.connection.query(`INSERT INTO employees SET ?`, employees);
};
    
updateEmpRoles(newEmpRole) {
    console.log(newEmpRole);
    return this.connection.query(
        `UPDATE employees SET role_id = ${newEmpRole.newRole} WHERE id = ${newEmpRole.empId}`, newEmpRole
    );
}

}

module.exports = new DB(connection);