// Set this assignment to true if you do want to use it.
module.exports.ACTIVATE_BOT = true;

module.exports.botScripts = [
  {
    label: "Introduction",
    prompt: "Start",
    handler: function () {
      return 'Hi there! Before we get started, I just need to point out that I don\'t like one word answers. \n So instead of answering with "Bob", try "It\'s Bob". Why don\'t you start by telling me your name?';
    },
    isListening: true,
  },
  {
    label: "Name",
    prompt: "It's #{name}",
    handler: function (params, state) {
      let firstName = params.name;
      state.firstName = params.name;
      return (
        "OK, " +
        state.firstName +
        " now let's find out a bit more about you. What state are you from?"
      );
    },
    isListening: true,
  },
  {
    label: "State",
    prompt: "I'm from #{state}",
    handler: function (params) {
      const state = params.state;
      if (
        state.toLowerCase() === "georgia" ||
        state.toLowerCase() === "california" ||
        state.toLowerCase() === "washington"
      ) {
        return (
          "OK Nice, I love " +
          state +
          "! " +
          state +
          " people are my people. Are you ready to start playing?"
        );
      } else if (state.toLowerCase() === "florida") {
        return "What is up with you people? I have so many questions. I just don't think we can be friends, goodbye.";
      } else if (
        state.toLowerCase() === "alabama" ||
        state.toLowerCase() === "alaska" ||
        state.toLowerCase() === "arizona" ||
        state.toLowerCase() === "arkansas" ||
        state.toLowerCase() === "colorado" ||
        state.toLowerCase() === "connecticut" ||
        state.toLowerCase() === "delaware" ||
        state.toLowerCase() === "hawaii" ||
        state.toLowerCase() === "idaho" ||
        state.toLowerCase() === "illinois" ||
        state.toLowerCase() === "indiana" ||
        state.toLowerCase() === "iowa" ||
        state.toLowerCase() === "kansas" ||
        state.toLowerCase() === "kentucky" ||
        state.toLowerCase() === "louisiana" ||
        state.toLowerCase() === "maine" ||
        state.toLowerCase() === "maryland" ||
        state.toLowerCase() === "massachusetts" ||
        state.toLowerCase() === "michigan" ||
        state.toLowerCase() === "minnesota" ||
        state.toLowerCase() === "mississippi" ||
        state.toLowerCase() === "missouri" ||
        state.toLowerCase() === "montana" ||
        state.toLowerCase() === "nebraska" ||
        state.toLowerCase() === "nevada" ||
        state.toLowerCase() === "new hampshire" ||
        state.toLowerCase() === "new jersey" ||
        state.toLowerCase() === "new mexico" ||
        state.toLowerCase() === "new york" ||
        state.toLowerCase() === "north carolina" ||
        state.toLowerCase() === "north dakota" ||
        state.toLowerCase() === "ohio" ||
        state.toLowerCase() === "oklahoma" ||
        state.toLowerCase() === "oregon" ||
        state.toLowerCase() === "pennsylvania" ||
        state.toLowerCase() === "rhode island" ||
        state.toLowerCase() === "south carolina" ||
        state.toLowerCase() === "south dakota" ||
        state.toLowerCase() === "tennessee" ||
        state.toLowerCase() === "texas" ||
        state.toLowerCase() === "utah" ||
        state.toLowerCase() === "vermont" ||
        state.toLowerCase() === "virginia" ||
        state.toLowerCase() === "west virginia" ||
        state.toLowerCase() === "wisconsin" ||
        state.toLowerCase() === "wyoming"
      ) {
        return "I think we'll be OK. Are you ready to start playing?";
      } else {
        return "You don't spell so good do you? Please try again.";
      }
    },
    isListening: true,
  },
  {
    label: "Start Game",
    prompt: "Yes I am",
    handler: function (params) {
      return "Great! Now that we've hopefully got rid of those Florida people, let's start playing! \n This is a game to test your Geography skills. \n It's very simple, as long as you keep answering correctly, you keep progressing through the different levels. \n There are 16 levels and each level gets harder. \n To answer a question simply put in the question number followed by the answer, like this: Q1: Answer \n To start the game, answer this question: ________ is the study of places and the relationships between people and their environments.";
    },
    isListening: true,
  },
  {
    label: "Question 1",
    prompt: "Q1: #{answer1}",
    handler: function (params, state) {
      const answer1 = params.answer1;
      if (answer1.toLowerCase() === "geography") {
        return (
          "Nice job " +
          state.firstName +
          ", " +
          answer1 +
          " is the correct answer. Well done! \n Next question: What is the second biggest country in the world?"
        );
      } else {
        return "Sorry, that's wrong. Thanks for playing and goodbye!";
      }
    },
    isListening: true,
  },
  {
    label: "Question 2",
    prompt: "Q2: #{answer2}",
    handler: function (params, state) {
      const answer2 = params.answer2;
      if (answer2.toLowerCase() === "canada") {
        return (
          "Nice job " +
          state.firstName +
          ", " +
          `${
            answer2.charAt(0).toUpperCase() + answer2.slice(1).toLowerCase()
          }` +
          " is the correct answer. Well done! \n Next question: What is the longest river in Africa?"
        );
      } else {
        return "Sorry, that's wrong. Thanks for playing and goodbye!";
      }
    },
    isListening: true,
  },
  {
    label: "Question 3",
    prompt: "Q3: #{answer3}",
    handler: function (params, state) {
      const answer3 = params.answer3;
      if (answer3.toLowerCase() === "nile") {
        return (
          "Nice job " +
          state.firstName +
          ", " +
          "the " +
          `${
            answer3.charAt(0).toUpperCase() + answer3.slice(1).toLowerCase()
          }` +
          " is the correct answer. Well done! \n Next question: Mumbai, Chennai, and Kolkata are metropolitan cities in which country?"
        );
      } else {
        return "Sorry, that's wrong. Thanks for playing and goodbye!";
      }
    },
    isListening: true,
  },
  {
    label: "Question 4",
    prompt: "Q4: #{answer4}",
    handler: function (params, state) {
      const answer4 = params.answer4;
      if (answer4.toLowerCase() === "india") {
        return (
          "Nice job " +
          state.firstName +
          ", " +
          `${
            answer4.charAt(0).toUpperCase() + answer4.slice(1).toLowerCase()
          }` +
          " is the correct answer. Well done! \n Next question: What country calls itself Nippon?"
        );
      } else {
        return "Sorry, that's wrong. Thanks for playing and goodbye!";
      }
    },
    isListening: true,
  },
  {
    label: "Question 5",
    prompt: "Q5: #{answer5}",
    handler: function (params, state) {
      const answer5 = params.answer5;
      if (answer5.toLowerCase() === "japan") {
        return (
          "Nice job " +
          state.firstName +
          ", " +
          `${
            answer5.charAt(0).toUpperCase() + answer5.slice(1).toLowerCase()
          }` +
          " is the correct answer. Well done! \n Next question: What is the largest non-continental island in the world?"
        );
      } else {
        return "Sorry, that's wrong. Thanks for playing and goodbye!";
      }
    },
    isListening: true,
  },
  {
    label: "Question 6",
    prompt: "Q6: #{answer6}",
    handler: function (params, state) {
      const answer6 = params.answer6;
      if (answer6.toLowerCase() === "greenland") {
        return (
          "Nice job " +
          state.firstName +
          ", " +
          "the " +
          answer6 +
          " is the correct answer. Well done! \n Next question: What is the line of latitude that runs around the center of the world called?"
        );
      } else {
        return "Sorry, that's wrong. Thanks for playing and goodbye!";
      }
    },
    isListening: true,
  },
  {
    label: "Question 7",
    prompt: "Q7: #{answer7}",
    handler: function (params, state) {
      const answer7 = params.answer7;
      if (answer7.toLowerCase() === "equator") {
        return (
          "Nice job " +
          state.firstName +
          ", " +
          "the " +
          `${
            answer7.charAt(0).toUpperCase() + answer7.slice(1).toLowerCase()
          }` +
          " is the correct answer. Well done! \n Next question: What is the world’s second highest mountain after Everest in Asia?"
        );
      } else {
        return "Sorry, that's wrong. Thanks for playing and goodbye!";
      }
    },
    isListening: true,
  },
  {
    label: "Question 8",
    prompt: "Q8: #{answer8}",
    handler: function (params, state) {
      const answer8 = params.answer8;
      if (answer8.toLowerCase() === "k2") {
        return (
          "Nice job " +
          state.firstName +
          ", " +
          `${
            answer8.charAt(0).toUpperCase() + answer8.slice(1).toLowerCase()
          }` +
          " is the correct answer. Well done! \n Next question: In which ocean is Fiji?"
        );
      } else {
        return "Sorry, that's wrong. Thanks for playing and goodbye!";
      }
    },
    isListening: true,
  },
  {
    label: "Question 9",
    prompt: "Q9: #{answer9}",
    handler: function (params, state) {
      const answer9 = params.answer9;
      if (answer9.toLowerCase() === "pacific") {
        return (
          "Nice job " +
          state.firstName +
          ", " +
          "the " +
          `${
            answer9.charAt(0).toUpperCase() + answer9.slice(1).toLowerCase()
          }` +
          " is the correct answer. Well done! \n Next question: Which river rises in Peru, has no bridge crossing it and enters the sea in Brazil?"
        );
      } else {
        return "Sorry, that's wrong. Thanks for playing and goodbye!";
      }
    },
    isListening: true,
  },
  {
    label: "Question 10",
    prompt: "Q10: #{answer10}",
    handler: function (params, state) {
      const answer10 = params.answer10;
      if (answer10.toLowerCase() === "amazon") {
        return (
          "Nice job " +
          state.firstName +
          ", " +
          "the " +
          `${
            answer10.charAt(0).toUpperCase() + answer10.slice(1).toLowerCase()
          }` +
          " is the correct answer. Well done! Clearly, these are too easy for you. The questions are about to get a lot harder. \n Next question: What was the name of the supercontinent of 200 million years ago?"
        );
      } else {
        return "Sorry, that's wrong. Thanks for playing and goodbye!";
      }
    },
    isListening: true,
  },
  {
    label: "Question 11",
    prompt: "Q11: #{answer11}",
    handler: function (params, state) {
      const answer11 = params.answer11;
      if (answer11.toLowerCase() === "pangaea") {
        return (
          "Nice job " +
          state.firstName +
          ", " +
          `${
            answer11.charAt(0).toUpperCase() + answer11.slice(1).toLowerCase()
          }` +
          " is the correct answer. Well done! \n Next question: What is the largest of the Channel Islands?"
        );
      } else {
        return "Sorry, that's wrong. Thanks for playing and goodbye!";
      }
    },
    isListening: true,
  },
  {
    label: "Question 12",
    prompt: "Q12: #{answer12}",
    handler: function (params, state) {
      const answer12 = params.answer12;
      if (answer12.toLowerCase() === "jersey") {
        return (
          "Nice job " +
          state.firstName +
          ", " +
          `${
            answer12.charAt(0).toUpperCase() + answer12.slice(1).toLowerCase()
          }` +
          " is the correct answer. Well done! \n Next question: Which country shares the same peninsula as Spain?"
        );
      } else {
        return "Sorry, that's wrong. Thanks for playing and goodbye!";
      }
    },
    isListening: true,
  },
  {
    label: "Question 13",
    prompt: "Q13: #{answer13}",
    handler: function (params, state) {
      const answer13 = params.answer13;
      if (answer13.toLowerCase() === "portugal") {
        return (
          "Nice job " +
          state.firstName +
          ", " +
          `${
            answer13.charAt(0).toUpperCase() + answer13.slice(1).toLowerCase()
          }` +
          " is the correct answer. Well done! \n Next question: Kuala Lumpur is the capital of which country?"
        );
      } else {
        return "Sorry, that's wrong. Thanks for playing and goodbye!";
      }
    },
    isListening: true,
  },
  {
    label: "Question 14",
    prompt: "Q14: #{answer14}",
    handler: function (params, state) {
      const answer14 = params.answer14;
      if (answer14.toLowerCase() === "malaysia") {
        return (
          "Nice job " +
          state.firstName +
          ", " +
          answer14 +
          " is the correct answer. Well done! \n Next question: Which country is called the Land of Rising Sun?"
        );
      } else {
        return "Sorry, that's wrong. Thanks for playing and goodbye!";
      }
    },
    isListening: true,
  },
  {
    label: "Question 15",
    prompt: "Q15: #{answer15}",
    handler: function (params, state) {
      const answer15 = params.answer15;
      if (answer15.toLowerCase() === "japan") {
        return (
          "Nice job " +
          state.firstName +
          ", " +
          `${
            answer15.charAt(0).toUpperCase() + answer15.slice(1).toLowerCase()
          }` +
          " is the correct answer. Well done! \n The next question is the final question, it's hard. \n Next question: What is the capital city of Slovenia, formerly part of the state of Yugoslavia?"
        );
      } else {
        return "Sorry, that's wrong. Thanks for playing and goodbye!";
      }
    },
    isListening: true,
  },
  {
    label: "Final Answer",
    prompt: "Q16: #{answer16}",
    handler: function (params, state) {
      const answer16 = params.answer16;
      if (answer16.toLowerCase() === "ljubljana") {
        return (
          "Nice job " +
          state.firstName +
          ", " +
          `${
            answer16.charAt(0).toUpperCase() + answer16.slice(1).toLowerCase()
          }` +
          " is the correct answer. Well done! \n Your Geography skills are on point. Go off and teach this stuff instead of trying to punch code."
        );
      } else {
        return "Sorry, that's wrong. Thanks for playing and goodbye!";
      }
    },
    isListening: true,
  },
];
