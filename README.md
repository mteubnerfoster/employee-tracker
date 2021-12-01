# employee-tracker
I built a command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL. This Content Management System (CMS) application allows non-developers to easily view and interact with information stored in databases.

Because this application won’t be deployed, I also created a walkthrough video that demonstrates its functionality.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Mock-Up

The following video shows an example of the application being used from the command line:

[![A video thumbnail shows the command-line employee management application with a play button overlaying the view.](./Assets/12-sql-homework-video-thumbnail.png)](https://2u-20.wistia.com/medias/2lnle7xnpk)

## Getting Started

I used the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to my MySQL database and perform queries, the [Inquirer package](https://www.npmjs.com/package/inquirer) to interact with the user via the command line, and the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.

I designed the database schema as shown in the following image:

![Database schema includes tables labeled “employee,” role,” and “department.”](./Assets/12-sql-homework-demo-01.png)


## Technical Acceptance Criteria

* Uses the [Inquirer package](https://www.npmjs.com/package/inquirer).
* Uses the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to a MySQL database.
* Uses the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.
