# QuadBTech_Assignment_InternshipTest

Welcome to the QuadBTech_Assignment_InternshipTest This React-based assignment allows users to browse jobs. It showcases proficiency in React.js and includes features such as jobs display, searching jobs by programming language. It also has a Signup and Login feature. And you can apply job by filling in some details.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Challenges Faced](#challenges-faced)

## Demo

You can see a live demo of this component [here](https://revent-ai-frontend-assignment-n38x.vercel.app/).

## Features

- *Job Display:* Display a list of jobs with their title, description, salary, work-from-home or location, company type, and programming language.
- *Search Functionality:* Include a search bar allowing users to search for jobs by programming language or anything based on data.
- *Signup:* If a user is new to the site and wants to apply for a job then the user needs to sign up first.
- *Login*: If a user has an account but does not log in then the user has to log in first before applying for any jobs.
- *Job Apply*: By filling out a form and uploading a resume users can able to apply for jobs.
- *Responsive Design:* Ensure all the components are fully responsive and provide an optimal user experience across various devices and screen sizes.

## Getting Started

### Installation

1. Clone the repository: https://github.com/subhamukherjee321/QuadBtecch-Assignment-InternshipTest
2. Navigate to the frontend directory: `cd QuadBtecch-Assignment-InternshipTest/frontend`
3. Install frontend dependencies: `npm install`

### Running the Application
1. Start the frontend development server: `npm start`
2. Start the JSON server: `npm run server` to start the JSON data but it's not needed I did deploy the JSON Server
3. Link for Deployed Mock Server: [here](https://subha-json.vercel.app/).
4. The endpoint for the Mock Server is "/auth" for user Login and signup, and "/jobs" for getting job data.
5. Open your web browser and navigate to http://localhost:3000. You should now see the application running on your computer.

## Usage
1. Open your web browser and go to the provided localhost port to use the chat app.
2. You can see limited jobs then at the bottom you can see pagination with the previous and next buttons to see more jobs.
3. For Searching you can see the search bar there is no button because the search works on changing input with debouncing.
4. For Signup you have to provide a proper email and for the password, there are some rules that the password length should be 8 or more, the password should contain a number a letter, and a special character. New password and confirm password both should be matched. Then you can able to sign up.
5. Login you need to provide the correct email or password which email is already registered. 

## Technologies Used
- React.js
- React-Router-Dom
- CSS
- Chakra UI
- Redux
- Redux-Thunk

## Challenges Faced
- During the development of this project, I encountered the following challenges:

- To show the Resume PDF data for the preview application.

- Responsive Design: Ensuring that the component provides an optimal user experience across various devices and screen sizes, including handling layout and styling.

- State Management: Managing all the states from Redux there are lots of states.

## Author
- Subha Mukherjee
- GitHub: [itsAkash12](https://github.com/subhamukherjee321)
