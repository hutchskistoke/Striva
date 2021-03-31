# Striva

- [Overview](#overview)
- [MVP](#mvp)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Striva** is an app striving to be strava, get it? Striva! Social media meets fitness in this app.  Share your activities with friends and see what they've been up to as well!_

<br>

## MVP

- Back End
  - Build a Ruby on Rails server
  - utilize RESTful JSON endpoints
  - Incorporate at least 1 association
  - Full CRUD functionality 
  - Incorporate user authentication

- Front End
  - Built with React
  - Consume from my Ruby on Rails API 
  - Render data using functional and class React components
  - Utilize React Router for client side routing
  - Full CRUD functionality 

- Styling
  - Styled with CSS
  - Implementation of at least 2 media queries

- Deployment
  - Fully functioning deployed front-end
  - Fully functioning deployed back-end via Heroku

<br>


### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _npm i react_ |
|   React Router   | _npm i react-router-dom_ |
|     Axios        | _npm i axios_ |
|     JWT          | _gem 'jwt'_ |
|     Bcrypt       | _gem 'bcrypt'_ |

<br>

### Client (Front End)

#### Wireframes

[Figma Prototype](https://www.figma.com/proto/WfBt6ZSacRgbctWnuDn0Mw/Striva?node-id=5%3A5&scaling=scale-down&page-id=0%3A1 "Figma Protoype")


![imgur](https://i.imgur.com/b3HAcy6.png)


#### Component Tree

![Component Tree Sample](https://i.imgur.com/D0ZnyH4.jpg)

#### Component Architecture

``` structure

src
|__ containers/
      |__ MainContainer
|__ screens/
      |__ Home
      |__ Feed
      |__ YourFeed
      |__ Details
      |__ CreateActivity
      |__ Login
      |__ Register
      |__ EditActivity
|__ components/
      |__ KudosButton
      |__ CommentButton
      |__ EditButton
      |__ DeleteButton 
|__ services/
      |__ api-config
      |__ auth
      |__ users
      |__ posts
      |__ comments
|__ layout/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Rails backend     |    H     |     5 hrs      |      hrs     |     TBD   |
| Create CRUD Actions |    H     |     6 hrs      |      hrs     |     TBD     |
| Seed Data     |    H     |     2 hrs      |      hrs     |     TBD   |
| Migrations and Schema |    H     |     1 hrs      |      hrs     |     TBD     |
| Create CRUD Actions |    H     |     6 hrs      |      hrs     |     TBD     |
| Routes   |    H     |     4 hrs      |      hrs     |     TBD   |
| Services files |    H     |     6 hrs      |      hrs     |     TBD     |
| Front end CRUD     |    H     |     6 hrs      |      hrs     |     TBD   |
| Debugging |    H     |     4 hrs      |      hrs     |     TBD     |
| CSS               |      H    |     12 hrs      |      hrs     |     TBD     |
| TOTAL               |          |     52 hrs      |      hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![Imgur](https://i.imgur.com/oe59MyG.png)
<br>

***

## Post-MVP

- Allow for users to make comments on others posts 
- Implement a 'like' or 'kudos' button
- Implement a map in some capacity

***

## Code Showcase

> Pending

## Code Issues & Resolutions

> Pending
