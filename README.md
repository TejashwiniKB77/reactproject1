Project Overview

This project is an extension of an existing React mini project where a Node.js backend is integrated to handle all data operations through APIs.
The application follows a full-stack architecture using React for the frontend, Node.js & Express for the backend, and MongoDB Atlas for database storage.
All frontend data handling using static data or LocalStorage has been completely replaced with real-time API communication.
Technology Stack

Frontend
•	React.js
•	HTML
•	CSS
•	JavaScript
Backend
•	Node.js
•	Express.js
Database
•	MongoDB Atlas
Tools
•	Postman (API Testing)
•	GitHub (Version Control)

Features Implemented
•	Contact form submission using REST APIs
•	Admission form submission using REST APIs
•	Full CRUD operations (Create, Read, Update, Delete) for Contact module
•	MongoDB Atlas used for persistent data storage
•	React and Node.js integration using fetch and async/await
•	Server-side validation and proper error handling
•	Project continuity maintained without changing frontend design

 API Endpoints
Contact APIs
Method	Endpoint	Description
POST	/api/contacts	Create a new contact
GET	/api/contacts	Fetch all contacts
PUT	/api/contacts/:id	Update contact details
DELETE	/api/contacts/:id	Delete a contact

Admission APIs
Method	Endpoint	Description
POST	/api/admissions	Submit admission enquiry
GET	/api/admissions	Fetch all admission enquiries

React & Node.js Integration Summary
•	React forms submit data using fetch() and async/await
•	Backend APIs handle all CRUD operations
•	MongoDB Atlas stores all submitted data permanently
•	Success and error messages are displayed based on API responses
•	Forms are reset after successful submission
•	LocalStorage usage is completely removed

How to Run the Project
Backend Setup
cd src/backend
npm install
node server.js
Backend will run at:
http://localhost:5000

 Frontend Setup
npm install
npm run dev
Frontend will run at:
http://localhost:5173
Database Details
•	MongoDB Atlas is used as the cloud database
•	Collections:
o	contacts
o	admissions
•	Data added from frontend is stored directly in MongoDB through APIs

API Testing
•	All APIs were tested using Postman
•	CRUD operations for Contact module verified
•	Screenshots of API testing are included for submission
Project Outcome
This project successfully demonstrates:
•	Real-world full-stack application development
•	Proper separation of frontend and backend concerns
•	RESTful API design
•	Secure and persistent data storage using MongoDB Atlas

