module.exports = {
    mainPrompt: {
        type: 'list',
        name: 'choices',
        message: 'Welcome to the Employee Tracker!',
        choices: [
                'View departments',
                'View roles',
                'View employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update employee roles',
                'Exit',
        ],
    },

    addDept: {
        name: "departments",
        type: "input",
        message: "Enter the name of the department to be added."
    },

    addingRole: (deptOptions) => [
        {
            type: 'input',
            name: 'role_title',
            message: 'Enter the new role to be added.'
          },
          {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for the new role.'
          },
          {
            type: 'list',
            name: 'department_id',
            message: 'Enter the department for the new role.',
            choices: deptOptions
          },
    ],

    addingEmps: (roleChoices, managerIdChoices) => [
        {
            type: 'input',
            name: 'first_name',
            message: 'Enter the employee first name.'
          },
          {
            type: 'input',
            name: 'last_name',
            message: 'Enter the employee last name.'
          },
          {
            type: 'list',
            name: 'role_id',
            message: 'Choose the employee role.',
            choices: roleChoices
          },
          {
            type: 'list',
            name: 'manager_id',
            message: 'Choose the new employee manager.',
            choices: managerIdChoices
          },
    ],

    updateRoles: (empChoice, roleChoice) => [
        {
            type: 'list',
            name: 'empId',
            message: 'Choose which employee to update.',
            choices: empChoice
          },
      
          {
            type: 'list',
            name: 'newRole',
            message: 'Choose the new role for the employee.',
            choices: roleChoice
          },
    ],
};