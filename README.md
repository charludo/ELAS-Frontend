# Exploratory Learning Analytics Toolkit for Students (ELAS) - Frontend
# edit by nassim for testing
## Table of Contents

* [Project info](#project-info)
* [Project structure](#project-structure)
* [Technologies](#technologies)
* [Additional applications](#Additional-applications)
* [Setup](#setup)

## Project info

This repository consists of the web application made with ReactJS library for the ELAS Lab Project. Each group will
receive access to a branch and should only work on the project inside ```Projects``` folder they are assigned to.

## Project structure

```
│   .gitignore
│   example.env                             # Rename the file to .env
│   package-lock.json
│   package.json                            # Necessary packages to run the project
│   README.md
│
└───src
    │   index.js
    │   reportWebVitals.js
    │   setupTests.js
    │
    ├───assets
    │   ├───data
    │   │       data.js                     # project details data
    │   │
    │   └───functions
    │           AuthorizedRoute.js          # Authorized route function
    │           Backend.js                  # Axios for making HTTP Requests
    │
    └───components
        │   App.js
        │
        ├───Projects                        # Projects folder consists of all projects
        │   ├───CourseInsights
        │   │   │   CourseInsights.js       # CourseInsights project component
        │   │   │
        │   │   └───components              # Additional CourseInsight project components goes inside this folder
        │   ├───E3Selector
        │   │   │   E3Selector.js           # E3Selector project component
        │   │   │
        │   │   └───components              # Additional E3Selector project components goes inside this folder
        │   ├───Spoa
        │   │   │   Spoa.js                 # Spoa project component
        │   │   │
        │   │   └───components              # Additional Spoa project components goes inside this folder
        │   └───Intogen
        │       │   Intogen.js              # Intogen project component
        │       │
        │       └───components              # Additional Intogen project components inside goes this folder
        ├───Reuseable
        │   ├───ScrollToTop
        │   │       ScrollToTop.js          # Reuseable scroll to top component
        │   │
        │   └───SnackbarMessage
        │           SnackbarMessage.js      # Reuseable Snackbar message component
        │
        └───Website
            ├───Footer
            │       Footer.js               # Footer component
            │
            ├───Home
            │       Home.js                 # Home component
            │
            ├───Login
            │       Login.js                # Login component
            │
            ├───NavigationBar
            │       NavigationBar.js        # Navigation bar component
            │
            ├───ProjectCards
            │       ProjectCards.js         # Project card component
            │
            └───Registration
                    Registration.js         # Registration component
```

## Technologies

Project is created with:

* [React](https://reactjs.org/docs/getting-started.html) (v17.0.2)
* [Material Design](https://material-ui.com/getting-started/installation/) (v4.11.3)
* [NodeJS](https://nodejs.org/dist/v14.15.3/) (v14.15.3)

## Additional applications

* [Visual Studio Code](https://code.visualstudio.com/download)
  or [Intellij Ultimate](https://www.jetbrains.com/de-de/idea/download/#section=windows)
* [Google Chrome Browser](https://www.google.com/intl/de_de/chrome/)

## Setup

Step 1:- Download the latest LTS version of Node from [NodeJS official website](https://nodejs.org/de/download/).

Step 2:- Rename the file ```example.env``` to ```.env```.

Step 3:- Run the project, install it locally using npm:

```
$ npm install
$ npm start
```

Open [localhost:3000](http://localhost:3000) to view it in the browser.

the change
