---
title: Portfolio
date: "2020-02-08"
description: A collection of projects showcasing my skills as a Software Developer
---

# dAVE Inden's Software Development Portfolio

Hi there! My name is dAVE Inden. I'm a software developer living in Seattle, Washington in the United States. I have worked in the technology industry at various levels for more than a decade. I have been both a Developer Advocate and Technical Support Engineer and this work has helped me to keep the voice of my customers at the front of my mind in all of my projects to ensure a great user experience. It also helped me develop the ability to communicate my thoughts clearly and quickly to members of other teams, like Product and Engineering, on the impact to customers from their work. You can find more details about my work experience on my [LinkedIn](https://www.linkedin.com/in/davidinden/) page. If you have questions for me about what you see here and would like to reach out please fill out my [Contact Form](https://forms.gle/UqLk3EjGZspfCavL7) or you can reach out to me on either [LinkedIn](https://www.linkedin.com/in/davidinden/) or [Twitter](https://twitter.com/daveskull81) as well.

I am currently going through the Full Stack Web Development program at [Lambda School](https://lambdaschool.com/courses/full-stack-web-development) working to graduate in Spring of 2020. Here is a collection of both Lambda School projects (made during the coursework working in teams of students) and personal projects (being an idea of mine and solely of my own design). They reflect my current progress in the course and as a Full Stack Web Developer.

The code for all of the projects mentioned here can be found on my [GitHub](https://github.com/daveskull81).

---

## Personal Projects

### **Coffee Recipe Tracker**

This application solves the problem of keeping track of the different ways someone has made coffee. Home coffee making enthusiasts have many factors to keep track of when brewing coffee. This application allows someone to keep track of those various factors and rate the quality of the resulting cup as well as make notes. This will help them to make better decisions in the future about how to brew coffee for the best tasting results.

The backend is a Node.js and Express API connected to a relational database (SQLite3 for local dev with Postgres in production). The frontend is a React client.

#### **Backend**

* [Code on GitHub](https://github.com/daveskull81/coffee-recipe-tracker-api)

**Demonstrates use of the following:**

* Node.js and Express for API development
* Data validation through use of Express middleware
* Relational database schema design
* Relational database data modeling
* Knex for working with both SQLite3 and Postgres databases (migrations, seeds, query building)
* Bcryptjs for hashing user passwords
* JSON Web Tokens for authentication and protecting routes from public access
* Backend testing with Jest and Supertest
* Implementing a test database with usage via an environment variable

#### **Frontend** (Work in Progress)  

*NOTE: This portion of the project is not yet complete and is a work in progress. The code found on GitHub is the current state of the project.*

* [Code on GitHub](https://github.com/daveskull81/coffee-recipe-tracker-front-end)

**Demonstrates use of the following:**

* React component development
* Routing with React Router
* Layout and styling with Material UI
* Frontend testing with React Testing Library
* Connecting a frontend client to a custom backend database and API
* Client side storage and management of Authentication data via session cookies

---

## Lambda School Projects

### Student ArtCo

I worked as a Full Stack Developer on a remote team of 10 people collaborating with iOS and Android developers for the project. As a team we built both the front end React client and the back end Node.js and GraphQL API with a Postgres database. I helped to implement the data model for the database and methods for database operations. I implemented the Context for authentication via Firebase along with pair programming on the user interface functionality and styling via Material-UI. I also did the Material-UI work for the main landing page of the site based on a design given to us by our UI Designer.

* [Front End Code on GitHub](https://github.com/daveskull81/student-art-collection-fe)
* [Back End Code on GitHub](https://github.com/daveskull81/student-art-collection-be)
* [Video demo of app](https://youtu.be/MW6pqBLxrAo)
* [Deployed Application](https://www.studentartco.com/)

**Demonstrates use of the following**

* GitHub workflow for code collaboration
* Node.js, Express, and GraphQL for API development
* Postgres database implementation
* Relational data modeling
* Firebase Authentication
* React component development
* React Context API
* Material-UI for layout and styling


### Guidr

I was assigned as the sole backend developer on a project called Guidr. It was an application that allowed for a professional guide to showcase their skills and build a resume of previous trips they have taken people on. They can log the individual trips and show information about them for how long the trip was for, the type of trip, the location, as well as distance covered. I was tasked with building a backend API and database to support user login/registration and CRUD actions on trips. I worked together with a team of two React devs making a web client and an iOS dev making a mobile client.

* [Code on GitHub](https://github.com/daveskull81/backend)

**Demonstrates use of the following:**

* Node.js and Express for API development
* Data validation through use of Express middleware
* Relational database schema design
* Relational database data modeling
* Knex for working with both SQLite3 and Postgres databases (migrations, seeds, query building)
* Bcryptjs for hashing user passwords
* JSON Web Tokens for authentication and protecting routes from public access

### **Gigapet**

I was put together with multiple students in a team and tasked to build an application called Gigapet where parents could track the food eaten by their children. As their child eats healthy foods more regularly an avatar (the "Gigapet") would become happier and happier. Eating right keeps the pet happy.

* [Code on GitHub](https://github.com/daveskull81/Gigapet-FE)
* [Video demo of app](https://youtu.be/5hbrnGxfslY)

**Demonstrates use of the following:**

* Team based Git workflow: Each developer worked on their own branch and changes were merged to master via coordinated Pull Requests
* React component development
* Connecting to and consuming data in components from a backend database via API
* Semantic UI for layout of card and button components
* Styled Components for custom layout and styling needs
* Consuming data in global state stored in Redux

<!-- ### **Refugee Stories**

I was put together with multiple students in a team and tasked with building two static pages to be a landing site for our project. One was to be a home page and another to provide information about the team members doing the work. The project was to build an application called Refugee Stories where displaced people can come to share their story of being a refugee. By helping them share their stories others can learn more about the real people at the heart of the refugee crisis.

* [Code on GitHub](https://github.com/daveskull81/refugee-stories)
* [Published Version](https://daveskull81.github.io/refugee-stories/)

**Demonstrates use of the following:**
* Semantic HTML
* CSS (preprocessed with [Less](http://lesscss.org))
* Flexbox for layout
* Responsive design principles
* Desktop first design -->