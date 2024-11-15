

const employees = [
  {
    "id": 1,
    "firstName": "John",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Complete project report",
        "taskDescription": "Prepare the final project report for review.",
        "taskDate": "2024-10-22",
        "category": "Work",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Client meeting",
        "taskDescription": "Attend the client meeting for project discussion.",
        "taskDate": "2024-10-23",
        "category": "Meeting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team feedback",
        "taskDescription": "Collect feedback from team members on the ongoing project.",
        "taskDate": "2024-10-24",
        "category": "Work",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Jane",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Update website content",
        "taskDescription": "Revise and update the content on the company website.",
        "taskDate": "2024-10-25",
        "category": "Work",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Submit expense report",
        "taskDescription": "Submit the monthly expense report to accounting.",
        "taskDate": "2024-10-20",
        "category": "Administrative",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Mike",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Software testing",
        "taskDescription": "Run tests on the new software release.",
        "taskDate": "2024-10-22",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Code review",
        "taskDescription": "Review the code for the new feature implementation.",
        "taskDate": "2024-10-23",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Prepare presentation",
        "taskDescription": "Prepare a presentation for the next team meeting.",
        "taskDate": "2024-10-24",
        "category": "Meeting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 3,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Anna",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Design logo",
        "taskDescription": "Create a new logo for the upcoming product launch.",
        "taskDate": "2024-10-25",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Prepare mockups",
        "taskDescription": "Prepare design mockups for client approval.",
        "taskDate": "2024-10-26",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Client feedback",
        "taskDescription": "Gather feedback from clients on the new design proposals.",
        "taskDate": "2024-10-21",
        "category": "Meeting",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "David",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Marketing strategy",
        "taskDescription": "Develop a marketing strategy for the new product.",
        "taskDate": "2024-10-22",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Social media campaign",
        "taskDescription": "Plan and execute a social media campaign.",
        "taskDate": "2024-10-23",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  }
];

  
  const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123",
  }];
  
  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }

  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return{employees,admin}
  }