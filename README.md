# Walt Jr - My First Budget App

This was a fun challenge! I dove deep into the world of React Hooks, integrating out of the box hooks and even creating some custom hooks. I also enjoyed adding my own styling (I included bootstrap for specific components such as the progress bar and modal, but the rest was done myself!). Since there is no authentication, another cool thing I added was storing all of the user information in local storage, that way the information persists even if the window is closed. Below, you can find a couple of the main features as well as instructions on how to deploy this application locally!

[Walt Jr](https://walt-jr-336l2.ondigitalocean.app/)

## Installation & Local Deployment

1) Create a clone of this repository
2) Cd into the correct directory, which should be the client folder

```bash
cd client
```

3) Run the command npm install

```bash
npm install
```

4) Run the command npm start

```bash
npm start
```

4) Congrats! You have successfully deployed this application locally

## Core Features

* **Adding a Budget Category**: A user can add a budget category which specifies the max amount that should in that category
* **Adding Expenses**: A user can add expenses into a budget category, or simply add it into uncategorized 
* **Removing a Budget Category**: If a user no longer wishes to keep track of a certain category, they can simply remove the category with the click of a button. This will reallocate all of the expenses stored in the deleted category to the uncategorized section
* **Removing Expenses**: Expenses that wish to be removed can be done so with one click
* **Total Expenses and Budgets Tracking**: A user will be able to view their total spending as well as their total budget allocation (sum of all budget categories)

## Tech Stack

* **ReactJS**
* **TypeScript**
* **Sass**

## Final Notes

* This was designed for a mobile app or tablet, responsive design was not incorporated. A mobile first approach design was taken.