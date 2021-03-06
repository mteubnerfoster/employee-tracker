const logo = require('asciiart-logo');
const config = require('./package.json');
console.log(logo(config).render());
const inquirer = require('inquirer');
require('console.table');
const db = require('./db/methods.js');
const prompt = require('./db/prompts.js');

// Initiate const
const initialChoice = () => {
    inquirer.prompt(prompt.mainPrompt).then(function ({ choices }) {
        switch (choices) {
          case 'View departments': return viewDepartments();
          case 'View roles': return viewRoles();
          case 'View employees': return viewEmployees();
          case 'Add a department': return addDepartment();
          case 'Add a role': return addRole();
          case 'Add an employee': return addEmployee();
          case 'Update employee roles': return updateEmpRoles();
          case 'Exit': process.exit();
        };
    });
};

// View functions
async function viewDepartments() {
    const viewDept = await db.viewDepartments();
    console.table(viewDept);
    console.log('================================');
    initialChoice();
  };

async function viewRoles() {
    const viewRole = await db.viewRoles();
    console.table(viewRole);
    console.log('================================');
    initialChoice();
  };

async function viewEmployees() {
    const viewEmps = await db.viewEmployees();
    console.table(viewEmps);
    console.log('================================');
    initialChoice();
  };

// Add functions
async function addDepartment() {
    const addDep = await inquirer.prompt(prompt.addDept);
    const res = await db.addDepartment(addDep.departments);
    console.log(`Added ${addDep.departments} to the the database.`);
    viewDepartments();
    console.log('================================');
};

async function addRole() {
    const checkDepts = await db.viewDepartments();
    const deptOptions = checkDepts.map(({ id, dept_name }) => ({
      name: dept_name,
      value: id
    }));
  
    const roles = await inquirer.prompt(prompt.addingRole(deptOptions));
    await db.addRole(roles);
    viewRoles();
    console.log('================================');
  };

  async function addEmployee() {
    const roles = await db.viewRoles();
    const roleChoices = roles.map(({ id, role_title }) => ({
      name: role_title,
      value: id
    }));
  
    const managers = await db.viewEmployees();
    const managerIdChoices = managers.map(({ first_name, last_name, manager_id }) => ({
      name: `${first_name} ${last_name}`,
      value: manager_id
    }));
  
    const employees = await inquirer.prompt(prompt.addingEmps(roleChoices, managerIdChoices))
    await db.addEmployee(employees);
    viewEmployees();
    console.log('================================');
  };

// Update functions
async function updateEmpRoles() {
    const checkRoles = await db.viewRoles();
    const roleChoice = checkRoles.map(({ id, role_title }) => ({
      name: role_title,
      value: id
    }));
    const checkEmps = await db.viewEmployees();
    const empChoice = checkEmps.map(({ id, first_name, last_name}) => ({
      name: `${first_name} ${last_name}`,
      value: id
    
    })); 
  
    const newEmpRole = await inquirer.prompt(prompt.updateRoles(empChoice, roleChoice));
    await db.updateEmpRoles(newEmpRole);
    viewEmployees();
    console.log('================================');
  };
// Start const
  initialChoice();