const employees = [
      {

        "id": 1,
        "email": "john.doe@example.com",
        "password": "123",
        "tasks": [
          {
            "id": 101,
            "title": "Quarterly Report Analysis",
            "description": "Review Q4 sales data and prepare analysis report",
            "date": "2025-04-15",
            "category": "Reports",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "id": 102,
            "title": "Client Presentation",
            "description": "Prepare slides for the upcoming client meeting",
            "date": "2025-04-10",
            "category": "Meetings",
            "active": true,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "id": 103,
            "title": "Budget Planning",
            "description": "Create 2025 Q3 budget plan",
            "date": "2025-05-01",
            "category": "Finance",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 2,
        "email": "jane.smith@example.com",
        "password": "123",
        "tasks": [
          {
            "id": 201,
            "title": "Website Redesign",
            "description": "Update company website with new branding",
            "date": "2025-04-20",
            "category": "Design",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "id": 202,
            "title": "Social Media Campaign",
            "description": "Plan and execute April social media strategy",
            "date": "2025-04-12",
            "category": "Marketing",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "id": 203,
            "title": "Email Newsletter",
            "description": "Design and send monthly customer newsletter",
            "date": "2025-04-05",
            "category": "Communication",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "id": 204,
            "title": "Competitor Analysis",
            "description": "Research and document main competitors' strategies",
            "date": "2025-04-18",
            "category": "Research",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "id": 205,
            "title": "Brand Guidelines Update",
            "description": "Revise brand guidelines document with new logo specs",
            "date": "2025-04-30",
            "category": "Design",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 3,
        "email": "michael.johnson@example.com",
        "password": "123",
        "tasks": [
          {
            "id": 301,
            "title": "Backend API Development",
            "description": "Create new endpoints for mobile app integration",
            "date": "2025-04-22",
            "category": "Development",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "id": 302,
            "title": "Database Optimization",
            "description": "Optimize query performance for customer database",
            "date": "2025-04-11",
            "category": "Database",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "id": 303,
            "title": "Code Review",
            "description": "Review pull requests for payment module",
            "date": "2025-04-09",
            "category": "Development",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "id": 304,
            "title": "Security Audit",
            "description": "Perform security review of authentication system",
            "date": "2025-04-17",
            "category": "Security",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "id": 305,
            "title": "Cloud Migration Planning",
            "description": "Create migration plan for moving services to AWS",
            "date": "2025-05-03",
            "category": "Infrastructure",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "id": 306,
            "title": "Server Maintenance",
            "description": "Apply security patches to development servers",
            "date": "2025-04-03",
            "category": "Maintenance",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          },
          {
            "id": 307,
            "title": "Documentation Update",
            "description": "Update API documentation with new endpoints",
            "date": "2025-04-25",
            "category": "Documentation",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 4,
        "email": "emily.williams@example.com",
        "password": "123",
        "tasks": [
          {
            "id": 401,
            "title": "Customer Support Training",
            "description": "Train new support staff on ticketing system",
            "date": "2025-04-14",
            "category": "Training",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "id": 402,
            "title": "Support Process Documentation",
            "description": "Document escalation procedures for support team",
            "date": "2025-04-19",
            "category": "Documentation",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "id": 403,
            "title": "Customer Satisfaction Survey",
            "description": "Create and distribute quarterly satisfaction survey",
            "date": "2025-04-07",
            "category": "Customer Relations",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "id": 404,
            "title": "Support Ticket Analysis",
            "description": "Analyze March support ticket trends",
            "date": "2025-04-12",
            "category": "Analysis",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "id": 405,
            "title": "Knowledge Base Update",
            "description": "Update FAQ section with new product features",
            "date": "2025-04-21",
            "category": "Documentation",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "id": 406,
            "title": "Customer Feedback Review",
            "description": "Compile and analyze customer feature requests",
            "date": "2025-04-28",
            "category": "Customer Relations",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "id": 407,
            "title": "Support Team Meeting",
            "description": "Lead weekly support team status meeting",
            "date": "2025-04-11",
            "category": "Meetings",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "id": 408,
            "title": "Help Desk Software Evaluation",
            "description": "Research new help desk software options",
            "date": "2025-05-05",
            "category": "Research",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "id": 409,
            "title": "Call Center Metrics Review",
            "description": "Analyze call center performance metrics for Q1",
            "date": "2025-04-16",
            "category": "Analysis",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "id": 410,
            "title": "Customer Onboarding Improvement",
            "description": "Develop plan to streamline customer onboarding process",
            "date": "2025-04-23",
            "category": "Process Improvement",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 5,
        "email": "david.brown@example.com",
        "password": "123",
        "tasks": [
          {
            "id": 501,
            "title": "Employee Performance Reviews",
            "description": "Complete Q1 performance evaluations for team",
            "date": "2025-04-13",
            "category": "HR",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "id": 502,
            "title": "Recruitment Plan",
            "description": "Finalize hiring plan for engineering department",
            "date": "2025-04-18",
            "category": "Recruitment",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "id": 503,
            "title": "Team Building Event",
            "description": "Organize department team building activity",
            "date": "2025-04-27",
            "category": "Culture",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "id": 504,
            "title": "Benefits Review",
            "description": "Review and update employee benefits package",
            "date": "2025-05-02",
            "category": "HR",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          }
        ]
      }
    ]


const admin = [
        {
          "id": 101,
          "email": "admin@example.com",
          "password": "123"
        }
      ]


export const setLocalStorage = () => {          
        localStorage.setItem('employees', JSON.stringify(employees))    
      }
