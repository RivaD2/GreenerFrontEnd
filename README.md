# Greener:  A terrarium focused app that helps clients relax on multiple tech fronts. 

**Note**: This repo is for the Greener frontend. For the backend visit [Greener Backend](https://github.com/RivaD2/GreenerBackend)


**Authors:**
Darius Lee Pasilaban
Bryant Davis, Leah Russo
Riva Davidowski
Robert Rizo

### Using Greener:

User will need to sign in to create an account. They can then login into our React Native application manually or through OAuth. Once logged in, they are redirected to the Collection page. Here they are given a starter Terrarium.

Once selected, they are taken to the Happy Terrarium page. It is here that they can perform actions on the plant they have selected and earn currency. Actions include: Water plant, Talk to Plant, and Sunlight.


### User Stories

* A User will be able to login manually or through OAuth inorder to play the game
* A MongoDB backend API will be utilized to generate all of the assets so that the app will have consistent rendering of the items
* A User will be able to water their plants in order to have a fun interactive experience
* A User will be able to generate in game currency in order to expand their collection of plants and terrarium

### On the frontend:
- React Native
- Redux
- expo Google Sign In
- expo App Auth
- Axios

### On the backend:
- MongoDB and Mongoose
- Node.js and Nodemon
- google-auth library
- JWT


### .ENV requirements on backend:

- PORT=
- MONGODB_URI=
- CLIENT_ID=


### Version Update

Version 1.0.1: Set up the repo and the docs before we begin an actual build

### ERD

<!-- ![ERD]('./assets/ERD.png') -->

<img src="./assets/ERD.png">


### Wireframe

<!-- ![Wireframe](https://github.com/401Final/onewiththeplants/blob/dev/assets/wireframe.png) -->

<img src="./assets/wireframe.png">

#### Testing:  `jest` was used for testing the frontend and backend as well as   "@code-fellows/supergoose": "^1.0.11"

#### Credits to:

Plant Vectors from Vecteezy free with atribution from Authors: 

  - watchtaxinyc, Mini Stock, Diana, and MoonStarer 

##### Tick Tac Toe Minigame tutorial from:

  - Jeff Terrell at: [tutorial](https://gitlab.com/unc-app-lab/react-native-tutorial-tic-tac-toe/-/blob/master/App.js)

##### Plant UI tutorial from:

[Krissanawat Kaewsanmuang](https://kriss.io/react-native-plant-app-ui-2-implementing-custom-components/#.X9_A5WRKhb9)