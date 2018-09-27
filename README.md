# Learning React Exercises

![Learning React Book Cover](https://github.com/wenderzxavier/learning-react-exercises/tree/master/src/img/book.jpg)

This project implements some of the projects presented on Learning Exercise Book. Although the book code samples can be found [here](https://github.com/MoonHighway/learning-react), the codes of this project are own implementations, this way, slightly different from the code provided on the book repository.

![Project Image 1](https://github.com/wenderzxavier/learning-react-exercises/tree/master/src/img/docs1.jpg)

![Project Image 2](https://github.com/wenderzxavier/learning-react-exercises/tree/master/src/img/docs2.jpg)

## Setup Instructions
  
* Download or fork and clone the [Learning React Exercises](https://github.com/wenderzxavier/learning-react-exercises) repository using `git clone`.
* run `npm install` to install the required dependencies.
* run `npm start` or `yarn start` to compile and run the application.
* The site can be accessed at http://localhost:3000.

## What's Included
```
+--public/    
 |-- favicon.ico - React Icon, You may change if you wish.
 |-- index.html - DO NOT MODIFY
 |-- manifest.json - Configuration files. Do not modify.
+-- src/
 +-- actions/ - Actionsfor the Redux Store
  |-- constants.js - All constants used to name the actions
  |-- index.js - Implementation of the redux store actions
 +-- components/ - Main components used on the app
  |-- App.js - Implements main routes for the app
  |-- ExerciseCard.js - Card containing exercise information displayed on the main page
  |-- Header.js - Main navigation header of the app. (default from create-react-app header)
 +-- exercises/ - Folder containing all exercise implementations.
   +-- components/ - Components used on the solution implementation.
    |-- AddColor.js - Used for solution Ex2 and Ex4 for the color implementation
    |-- Color.js - ...
    |-- ColorList.js - ...
    |-- Star.js - ...
    |-- StarRating.js ...
  |-- Ex1.js - Solution for exercise 1
  |-- Ex2.js - Solution for exercise 2
  |-- Ex3.js - Solution for exercise 3
  |-- Ex4.js - Solution for exercise 4
 +-- img/ - Images for your app. You can change or add new images. The images displayed on the Exercise Card are located on this folder
 +-- reducer/ - Reducer implementation for react redux store
  |-- index.js - Redux store reducer code
 +-- styles/ - Main styling scheme for the app
  |-- App.css
  |-- chapter6.css
  |-- index.css
  |-- prism.css - Used to highlight the prism code on the app
 +-- utils/ - Gather general information of the exercise chapter and the implemented solution
  |-- description.js - Add the exercise description and the location of the code on this file prior to implementing the solution
 +-- views/ - Views of the app
 |-- CardGrid.js - Display all ExerciseCards for the user.
 |-- Solution.js - Display a selected solution.
 |-- .gitignore 
 |-- README.MD - This README file.
 |-- package.json - npm package manager file. It's unlikely that you'll need to modify this.
```

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 

## Create React App
This project was boostraped with [Create React App](https://github.com/facebook/create-react-app).