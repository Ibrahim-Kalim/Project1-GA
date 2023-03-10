My game is going to be question game with 4 questins with four possible answers. the game with display question on the top and the 4 answers for the player to chose from. On the bottom with see the submit button that will take to the next question as well as recoreds the score. In HTMl will include first div with the ques and another div that hold all the anwsers, and last div to hold the button.

[The first page of the Game](/imag/theFirstPage.jpeg.png)
The HTML will gave the question as h2 tagElement and all the choices will be hold inside Ul unordered lists.

Javascript will have most of the work. I created a object called quizData that hold all the three quistions with the four answers under each quiz. The main function of the game is the loadQuizDataAndStart() wich display the game and guid us through the next quiz.

The next important function of the game is getCheckedAnswer() that help us by looping through all the choices and captured the selected answer and using if condition to campare the selected answer to the correct answer.

Another use of the getCheckedAnswer() is through teh addEventListner since we're using only one button to navigate throguh the game. Moreover is the another if condition that add the score++ after each correct answer and then add more quiz to the currentQuiz++.

The quiz game is my first ever game that shows me the important of the eventLister and the callback function. Eventhough is not totally where it should be, but I'm totally satisfied by the results and more to learn and apply.
[The last page of the Game](/imag/the%20lastPageOfTheGame.jpeg.png)

https://ibrahim-kalim.github.io/Project1-GA/
