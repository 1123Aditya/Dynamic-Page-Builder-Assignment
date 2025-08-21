Dynamic Page Builder
🚀 Project Overview

The Dynamic Page Builder is a web application with Role-Based Access Control (RBAC) that allows Admins to dynamically create pages, define fields, and manage records, while Users can view, filter, and perform CRUD operations on dynamic pages. The application supports real-time updates, dynamic forms, tables, and dashboard stats.

📌 Features
Admin

Full access to create/edit dynamic pages.

Add/edit fields with types and validations.

Sidebar auto-refresh with newly created pages.

Dynamic tables with search, pagination, and stats.

Dynamic form creation for each page.

User

View pages accessible to them.

Dynamic rendering of forms and tables.

CRUD operations with validations.

Real-time table and dashboard updates.

🛠 Technology Stack

Frontend: React.js

Backend: Node.js, Express.js

Database: MySQL

HTTP Client: Axios

⚡ Workflow
Admin Side

Create a new page → define sections & fields → save schema.

Schema stored in MySQL → table created/updated dynamically.

Sidebar and UI automatically refresh to show new pages.

User Side

Fetch schema from backend.

Render forms and tables dynamically based on schema.

Submit data → validations applied automatically.

Table and dashboard widgets update in real-time
