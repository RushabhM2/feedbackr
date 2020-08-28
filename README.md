# What is Feedbackr
It's a web application where we can create multiple choice quizzes, share them, and ofcourse, try these quizzes and see how well we did using the score report feature. In today's world of online teaching, I found that a lot of teachers were having to manually create assignments on Google Classroom or Microsoft teams. These tools also only allow for basic text and multiple choice answer types. This project was started to create a platform where teachers can share assignments they built with each other so that they can spend more time with their students, and less time building assignments that their collegues have already built.

# Getting started
1. Fork the repo and clone your fork to your development environment
 
2. Navigate to the server folder and run `npm install` in your terminal to install dependencies. Then simply run `node index.js` to get the backend running. You should be greeted with `server listening on http://localhost:3001` 
 
3. In a second terminal navigate to the client folder and run `npm install` in your terminal to install dependencies. Then simply run `npm start` to get the react frontend running. You should see the app open up in your browser at http://localhost:3000 - the default react port.

4. If you want to play around with the styling on SASS, you can `npm run watch:sass` on a terminal on while in the client folder. This will keep the page refreshing as you add or remove styling.
 
And that's it!! Happy coding

# The App itself
## The create a quiz page
![Create Quiz](/screenshots/Create_a_Quiz.png)

## The view quizzes page
![View Quizzes](/screenshots/View_Quiz.png)

## The quiz page
![Do a Quiz](/screenshots/Doing_a_Quiz.png)

# Observations
## Improvements on the current code base
* The SASS could do with a bit of refactoring, the SCSS is not as DRY as it could be
* Setting up multipart questions
* Use Redux for better state management
* Allow for the name of quiz to be saved before questions start being made
* Unit testing could have made development smoother
* Move to a relational database because the data is more... well relational

## The Future
* Add a page where teacher's can request for extra features to be added
* Add authentication to allow teachers and students to have their own profiles and have a record of the quizzes they've made, saved and completed, along with a historical score report
* Create a question type library - so that quizzes can be more dynamic. Examples of question types including: Matching questions to answers, Drawing out chemical formulas, Diagram annotation, Graph creation
* Allow for PDF to quiz converters so that teachers can turn past papers (that are publicly and freely available) into online quizzes

# Collaborators
Checkout [https://github.com/rikiDalvarez/feedbackr](https://github.com/rikiDalvarez/feedbackr) where testing scripts were added. Contributors include:
1. [Ricardo D Alvarez](https://github.com/rikiDalvarez)
2. [Marijana Del Bianco](https://github.com/mjdelbianco)
3. [Mohammed Abdul Khader](https://github.com/MohammedAK1991)
4. Martin Rodl
