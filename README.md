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


## Palolo Instructions

Build a budget app for a kid who just got their first bank account. Integrate with a bank API to access an account and build a user interface for creating a budget. A user should be able to create categories and assign money to those categories. There should also be some guardrails, warnings, etc to help guide the user. 

We estimate this assignment to take < 4 hours. Here are the requirements: 

* **Use our stack**: Typescript, React, Express 
* **Include documentation**; it should be easy for a reviewer to run (and it must run to pass) 
* **Flex your skills!** This assignment is intended to be a base for you to extend. Choose a flex that plays to your strengths and show us what you can do. Senior candidates are encouraged to add at least one feature. You do not need to include things like users or authentication. Focus on demonstrating what the app can do. For example, you can integrate a bank API like [Plaid](https://plaid.com/docs/sandbox/) to pull in real transactions. 
* **Optional: Interact with us!** Ask questions, bounce ideas, or even request a round of feedback before final submitting. We’re a very collaborative team and we love to work with candidates on their project! 

Email fn@palolo.com any time with questions, ideas, or if you'd like early feedback. 

Read about how we evaluate this assignment below or skip to [Quickstart](#quickstart).

## What we do differently  

**We want to see how you normally work**, not how well you code with an audience or whether you can figure out a riddle. There’s no tricks here and you can use the same tools that you use to do your job, including Google. 

**We don’t believe the number of years in the field is an accurate signal of your capabilities**. Engineer jobs are widely varied; we want to know if you can do this one. This assignment is similar in nature to what you would work on at Palolo. 

**We’re not looking for cogs in a machine.** Every engineer brings something unique to the team and we want you to show us what that is. The assignment is meant to be extended so you can demonstrate your top skills. 

**We want you to understand the assignment** so we share how we evaluate your submission. We know different jobs expect you to optimize for different things so we tell you exactly what to optimize for. If you have any questions shoot us an email! 

### How we evaluate you 

We evaluate candidates in the following areas across both the assignment and the technical discussion interview afterwards (some of this you’ll be able to speak to in the interview instead of demonstrating in the code). 

**Building a product**
* Design: Discoverability, intuitiveness, and user control
* Problem-solving: Knowledge of the problem-space, bigger picture
* Decision-making: Feature selection, trade-offs, roadmap

**Writing code**
* Structure: Separation of concerns, organization of code, use of interfaces, long-term codebase health
* Implementation details: Data type choices, variable naming, coding patterns, testing 

**Being a team player**
* Documentation: Self-documenting code, README 
* Feedback receptivity: Ability to accept feedback and learn from it
* Self-awareness: Ability to discuss personal strengths and areas for improvement 

### Submission 

Push your code to the main branch of this repo. Email fn@palolo.com to confirm you are done and we will review as quickly as we can. We look forward to seeing what you build!

## Quickstart 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). In the project directory, you can run:

#### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). To learn React, check out the [React documentation](https://reactjs.org/).

Check out Plaid [Sandbox docs](https://plaid.com/docs/sandbox/) and [API Keys](https://dashboard.plaid.com/account/keys).