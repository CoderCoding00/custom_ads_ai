# Custom Advertisment Generator Using OpenAI GPT 3 

## Project Description

## Table of Contents

- [Custom Advertisment Generator Using OpenAI GPT 3](#custom-advertisment-generator-using-openai-gpt-3)
  - [Project Description](#project-description)
  - [Table of Contents](#table-of-contents)
  - [User Story](#user-story)
  - [Deployment](#deployment)
  - [Tech Used In The Project](#tech-used-in-the-project)
  - [Contributors](#contributors)
    - [Heroku Link](#heroku-link)
    - [Github Link](#github-link)

## User Story

```md

```

## Deployment
This application was deployed on Heroku. The link is provided below along with the github repository. 

## Tech Used In The Project

## Contributors 

### Heroku Link

### Github Link
https://github.com/CoderCoding00/mern_book_search_engine


# Project3_Team 5
PostGenAI 🤖

## The Challenge 🔐
Our user want to have a place to create a social media post automatically about the product that they sale in order to save their time. 


## The Concept 🔑
We want to create an application that client can use to generate a social media post for their business by using MERN Stack and use Bootstrap as a CSS. For the generate post, we're using OpenAI to fetch the data for our website. 

## User Story 📃

```
AS a user,
I WANT to have a post generator website for advertising product,
SO THAT I can have a post that I can copy and paste for my advertisement post about my product
```

## The Logic 🔍

```
GIVEN a post generator website,
WHEN I visit the site for the first time
THEN I am present with a login/sign up page 
WHEN I don't have an account
THEN I can put username, email, and password
WHEN I have an account already
THEN I can click Already have an account and I will lead to Log In page to put email and password to sign in
WHEN I am signed in to the site
THEN I am taken back to the homepage, where there are 3 boxes that I can put options for my post
WHEN I answer all the three questions and click the submit button
THEN I will see a list of post example for me to copy
WHEN I want to log out
THEN I can click Log Out on the top right of the page and sign out 
```

## The Process 📝
To sastify our user's needs, we created: 
- Components for the home page, 
- Created seeds to store all of the movies's information
- Created seeds to store user's information
- Created model and routes
- Created Handlebars and put the HTML in for each page
- Fixing error to make everything connect and work properly

Handlebars

```
Created 8 files for handlebars: 
Main, All Movies, Homepage, Login, Movie, Profile, Review, Sign Up.

```

CSS File

```
- Red navigation bar and white backgound
- Log in, Log Out, Movies, Profile buttons in the nav bar
- Cards of different movies with images and spread evenly
- User's viewport adaptability

```

Routes 

   Created routes for each page 
```

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const movieRoutes = require('./movieRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/reviews', reviewRoutes);


module.exports = router;
```

Seeds

   Created seed file for all movies:

```
title: 'The Godfather',
        director: 'Francis Ford Coppola',
        cast:'Marlon Brando, Al Pacino, James Caan',
        movie_id: 1,
        bark_score: 95,
        filename: '01-The-Godfather.jpg',

```

   Created seed for User: 

```
email: 'gus@hotmail.com',
      username: 'gus',
      password: 'password123'

```

## Heroku 💻
https://pacific-brook-50244.herokuapp.com


## The Result 🏆
After connecting all files, we were able to have a working page with movies so user can choose a movie to watch in a movie's night and can leave a review after finishing watching

## The Collaborators 👩🏻‍💻 🧑🏻‍💻 👩🏻‍💻
[Jenny Wang](https://github.com/aurorayihe)

[Gassan Bundakji](https://github.com/gbundakji)

[Daisy Lien](https://github.com/quynhlien2002)

## Submission 📬
[GitHub Repo](https://github.com/aurorayihe/Project2_team10)


















