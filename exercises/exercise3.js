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
    handler: function (params) {
      const firstName = params.name;
      return (
        "Great " +
        firstName +
        "! Now let's find out a bit more about you. What state are you from?"
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
      return "Great! Now that we've hopefully got rid of those Florida people, let's start playing! \n This is a game to test your Geography skills. \n It's very simple, as long as you keep answering correctly, you keep progressing through the different levels. \n There are 15 levels and each level should get harder. \n This year we lost a Alex Trebek (host of Jeopardy) to cancer, to pay homage to him we will answer all questions in the form of a question - Jeopardy style! \n To start the game, answer this question: ________ is the study of places and the relationships between people and their environments.";
    },
    isListening: true,
  },
  {
    label: "Question 1",
    prompt: "Q1: What is #{answer1}?",
    handler: function (params) {
      const answer1 = params.answer1;
      if (answer1.toLowerCase() === "geography") {
        return (
          answer1 +
          " is the correct answer. Well done! \n Next question: What is the second biggest country?"
        );
      } else {
        return "Sorry, that's wrong. Thanks for playing and goodbye!";
      }
    },
    isListening: true,
  },
  {
    label: "Question 2",
    prompt: "Q2: What is #{answer2}?",
    handler: function (params) {
      const answer2 = params.answer2;
      if (answer2.toLowerCase() === "canada") {
        return (
          answer2 +
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
    prompt: "Q3: What is the #{answer3}?",
    handler: function (params) {
      const answer3 = params.answer3;
      if (answer3.toLowerCase() === "nile") {
        return (
          "The " +
          answer3 +
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
    prompt: "Q4: What is #{answer4}?",
    handler: function (params) {
      const answer4 = params.answer4;
      if (answer4.toLowerCase() === "india") {
        return (
          answer4 +
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
    prompt: "Q5: What is #{answer5}?",
    handler: function (params) {
      const answer5 = params.answer5;
      if (answer5.toLowerCase() === "japan") {
        return (
          answer5 +
          " is the correct answer. Well done! \n Next question: Which countries share the longest border in the world?"
        );
      } else {
        return "Sorry, that's wrong. Thanks for playing and goodbye!";
      }
    },
    isListening: true,
  },
  {
    label: "Question 6",
    prompt: "Q6: What is the #{answer6}?",
    handler: function (params) {
      const answer6 = params.answer6;
      if (answer6.toLowerCase() === "usa and canada") {
        return (
          "The " +
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
    prompt: "Q7: What is the #{answer7}?",
    handler: function (params) {
      const answer7 = params.answer7;
      if (answer7.toLowerCase() === "equator") {
        return (
          "The " +
          answer7 +
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
    prompt: "Q8: What is #{answer8}?",
    handler: function (params) {
      const answer8 = params.answer8;
      if (answer8.toLowerCase() === "k2") {
        return (
          answer8 +
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
    prompt: "Q9: What is the #{answer9}?",
    handler: function (params) {
      const answer9 = params.answer9;
      if (answer9.toLowerCase() === "pacific") {
        return (
          "The " +
          answer9 +
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
    prompt: "Q10: What is the #{answer10}?",
    handler: function (params) {
      const answer10 = params.answer10;
      if (answer10.toLowerCase() === "amazon") {
        return (
          "The " +
          answer10 +
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
    prompt: "Q11: What is #{answer11}?",
    handler: function (params) {
      const answer11 = params.answer11;
      if (answer11.toLowerCase() === "pangaea") {
        return (
          answer11 +
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
    prompt: "Q12: What is #{answer12}?",
    handler: function (params) {
      const answer12 = params.answer12;
      if (answer12.toLowerCase() === "jersey") {
        return answer12 + " is the correct answer. Well done!";
      } else {
        return "Sorry, that's wrong. Thanks for playing and goodbye!";
      }
    },
    isListening: true,
  },
];
