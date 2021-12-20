<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/MP-Project-Sahar/server">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Rental website</h3>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" /> <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express" /> <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />

  <p align="center">
    Server side Rental website built with Node.js, Express.js, and MongoDB.
    <br />
    <a href="https://github.com/MP-Project-Sahar/server"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com">Demo</a>
    ·
    <a href="https://trello.com/b/79ifE5eG/mp-project-sahar">Trello</a>
    ·
    <a href="https://github.com/MP-Project-Sahar/clinet">Clinet</a>
  </p>
</div>

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy) 

<details>
  <summary>📝 Table of Contents</summary>
    <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#user-stories">User Stories</a></li>
    <li><a href="#entity-relationship-diagram">Entity Relationship Diagram</a></li>
    <li><a href="#uml-diagram">UML Diagram</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#models">Models</a></li>
    <li><a href="#api-documentation">API Documentation</a></li>
    <li><a href="#error-handling">Error Handling</a></li>
   </ul>
</details>



## About

### 🎯 Features
- **NoSQL database**: [MongoDB](https://www.mongodb.com) object data modeling using [Mongoose](https://mongoosejs.com)
- **Logging**: using [morgan](https://github.com/expressjs/morgan)
- **Error handling**: centralized error handling mechanism
- **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv)
- **Security**: set security HTTP headers using [helmet](https://helmetjs.github.io)
- **CORS**: Cross-Origin Resource-Sharing enabled using [cors](https://github.com/expressjs/cors)
- **Linting**: with [Prettier](https://prettier.io)


## User Stories 
- As a user, I can register for the website by entering my username, phone number and password

- As a user, I will receive a confirmation SMS once I have registered for the website

- As a user, I am required to enter a strong password when creating my account

- Acceptance criteria:
  - Must have at least 8 characters
  - Must contain at least 1 digit
  - Must contain at least 1 uppercase letter
  - Must contain at least 1 lowercase letter
  - Must contain at least 1 symbol

- As a user, I am required to enter a valid phone format when creating my account

- As a user, I can log into the website by entering my username or phone number and password

- As a user, I can reset my password if I have forgotten my password

- As a user, I can logout from the platform so no one else can use it

- As a user, I can view my profile and others profile

- As a user, I can change my password. I will receive a confirmation email to my email

- As a user, I can add my email. I will receive a confirmation email to my email

- As a user, I can view my ads and ratings

- As a user, I can add ads.

- Acceptance criteria:
  - Must have select type of ads.
  - Must have description
  - Must have available time
  - Must have image

- As a user, I can delete, edit my ads.

- As a user, I can rating and review a user who I rent from

- As a user, I can rating and review a user who I rent from me

- As a user, I can search for ads. by city and type

- As a user, I can chatting another user

- As an admin,  I can confirm, delete, edit, create users

- As an admin,  I can delete, edit ads.

- As an admin,  I can delete, edit rating

## Entity Relationship Diagram

<img src="https://user-images.githubusercontent.com/92248067/146760708-4c3121ce-2bfb-4060-add7-0cf4242a1da1.jpg" width="500">

## UML Diagram

## Getting started
### Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)
- Install [MongoDB](https://docs.mongodb.com/manual/installation/)
- Install [VS Code](https://code.visualstudio.com/)


Clone the repository
```
$ git clone <project_name>
```
Install dependencies. [`npm`](https://www.npmjs.com/) installed in your system.
```
cd <project_name>
$ npm install
```
Start the local server
```
$ npm run dev
```

## Project Structure

## Models

➤ User

| Key               | Type                 | Options             | Default value    |
| ----------------- | -------------------- | ------------------- | ---------------- |
| Email             | String               | Required, Unique    | -                |
| Password          | String               | Required            | -                |
| FirstName         | String               | Required            | -                |
| LastName          | String               | Required            | -                |
| PhoneNum          | Number               | Required, Unique    | -                |
| Avatar            | String               | Default             | Img URL          |
| City              | String               | -                   | -                |
| Bio               | String               | -                   | -                |
| Role              | Schema               | Default             | User role        |
| Active            | Boolean              | Default             | False            |
| VerifyCode        | Number               | Unique              | -                |
| isDel             | Boolean              | Default             | False            |
| timestamp         | Date                 | Default             | Now Date         |

➤ Item

| Key               | Type                 | Options             | Default value    |
| ----------------- | -------------------- | ------------------- | ---------------- |
| CoverImg          | String               | Required            | -                |
| Img               | Array                | -                   | -                |
| Title             | String               | Required            | -                |
| Category          | String               | -                   | -                |
| Description       | Number               | Required            | -                |
| PriceDay          | Number               | Required            | -                |
| PriceWeek         | Number               | -                   | -                |
| PriceMonth        | Number               | -                   | -                |
| PostCode          | Number               | Required            | -                |
| Renter            | Schema               | -                   | -                |
| Available         | Boolean              | Default             | False            |
| isDel             | Boolean              | Default             | False            |
| timestamp         | Date                 | Default             | Now Date         |

➤ Role

| Key               | Type                 | Options             | Default value    |
| ----------------- | -------------------- | ------------------- | ---------------- |
| Role              | String               | -                   | -                |
| Permissions       | Array                | -                   | -                |

➤ Bill

| Key               | Type                 | Options             | Default value    |
| ----------------- | -------------------- | ------------------- | ---------------- |
| Item              | Schema               | -                   | -                |
| Renter            | Schema               | -                   | -                |
| Owner             | Schema               | -                   | -                |
| StartDate         | Date                 | -                   | -                |
| EndDate           | Date                 | -                   | -                |
| Price             | Number               | -                   | -                |
| Checkedout        | Boolean              | Default             | False            |
| timestamp         | Date                 | Default             | Now Date         |

➤ Review

| Key               | Type                 | Options             | Default value    |
| ----------------- | -------------------- | ------------------- | ---------------- |
| User              | Schema               | -                   | -                |
| Reviwer           | Schema               | -                   | -                |
| rate              | Number               | Required            | -                |
| Reviw             | String               | -                   | -                |
| timestamp         | Date                 | Default             | Now Date         |

## API Documentation

## Error Handling



<p align="right"><a href="#top">back to top</a></p>

