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
        state == "Georgia" ||
        state == "California" ||
        state == "Washington"
      ) {
        return (
          "OK Nice, I love " +
          state +
          "! " +
          state +
          " people are my people. Are you ready to start playing?"
        );
      } else if (state == "Florida") {
        return "What is up with you people? I have so many questions. I just don't think we can be friends, goodbye.";
      } else if (
        state === "Alabama" ||
        state === "Alaska" ||
        state === "Arizona" ||
        state === "Arkansas" ||
        state === "Colorado" ||
        state === "Connecticut" ||
        state === "Delaware" ||
        state === "Hawaii" ||
        state === "Idaho" ||
        state === "Illinois" ||
        state === "Indiana" ||
        state === "Iowa" ||
        state === "Kansas" ||
        state === "Kentucky" ||
        state === "Louisiana" ||
        state === "Maine" ||
        state === "Maryland" ||
        state === "Massachusetts" ||
        state === "Michigan" ||
        state === "Minnesota" ||
        state === "Mississippi" ||
        state === "Missouri" ||
        state === "Montana" ||
        state === "Nebraska" ||
        state === "Nevada" ||
        state === "New Hampshire" ||
        state === "New Jersey" ||
        state === "New Mexico" ||
        state === "New York" ||
        state === "North Carolina" ||
        state === "North Dakota" ||
        state === "Ohio" ||
        state === "Oklahoma" ||
        state === "Oregon" ||
        state === "Pennsylvania" ||
        state === "Rhode Island" ||
        state === "South Carolina" ||
        state === "South Dakota" ||
        state === "Tennessee" ||
        state === "Texas" ||
        state === "Utah" ||
        state === "Vermont" ||
        state === "Virginia" ||
        state === "West Virginia" ||
        state === "Wisconsin" ||
        state === "Wyoming"
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
      if (answer1 === "geography" || answer1 === "Geography") {
        return (
          answer1 +
          " is the correct answer. Well done! \n Next question: What is the second biggest country?"
        );
      } else {
        return "Wrong";
      }
    },
    isListening: true,
  },
  {
    label: "Question 2",
    // All prompts need to be different
    // Check below to make all lowercase and not have to have ||
    prompt: "Q2: What is #{answer2}?",
    handler: function (params) {
      const answer2 = params.answer2;
      if (answer2.toLowerCase() === "canada") {
        return (
          answer2 +
          " is the correct answer. Well done! \n Next question: What is the longest river in Africa?"
        );
      } else {
        return "Wrong";
      }
    },
    isListening: true,
  },
  {
    label: "Question 3",
    prompt: "Q3: What is the #{answer3}?",
    handler: function (params) {
      const answer3 = params.answer3;
      if (answer3 === "nile" || answer3 === "Nile") {
        return (
          "The " +
          answer3 +
          " is the correct answer. Well done! \n Next question: Mumbai, Chennai, and Kolkata are metropolitan cities in which country?"
        );
      } else {
        return "Wrong";
      }
    },
    isListening: true,
  },
  {
    label: "Question 4",
    prompt: "Q4: What is #{answer4}?",
    handler: function (params) {
      const answer4 = params.answer4;
      if (answer4 === "india" || answer4 === "India") {
        return (
          answer4 +
          " is the correct answer. Well done! \n Next question: What country calls itself Nippon?"
        );
      } else {
        return "Wrong";
      }
    },
    isListening: true,
  },
  {
    label: "Question 5",
    prompt: "Q5: What is #{answer5}?",
    handler: function (params) {
      const answer5 = params.answer5;
      if (answer5 === "japan" || answer5 === "Japan") {
        return (
          answer5 +
          " is the correct answer. Well done! \n Next question: Which countries share the longest border in the world?"
        );
      } else {
        return "Wrong";
      }
    },
    isListening: true,
  },
  {
    label: "Question 6",
    prompt: "Q6: What is the #{answer6}?",
    handler: function (params) {
      const answer6 = params.answer6;
      if (answer6 === "usa and canada" || answer6 === "USA and Canada") {
        return (
          "The " +
          answer6 +
          " is the correct answer. Well done! \n Next question: What is the line of latitude that runs around the center of the world called?"
        );
      } else {
        return "Wrong";
      }
    },
    isListening: true,
  },
  {
    label: "Question 7",
    prompt: "Q7: What is the #{answer7}?",
    handler: function (params) {
      const answer7 = params.answer7;
      if (answer7 === "equator" || answer7 === "Equator") {
        return (
          "The " +
          answer7 +
          " is the correct answer. Well done! \n Next question: What is the world’s second highest mountain after Everest in Asia?"
        );
      } else {
        return "Wrong";
      }
    },
    isListening: true,
  },
  {
    label: "Question 8",
    prompt: "Q8: What is #{answer8}?",
    handler: function (params) {
      const answer8 = params.answer8;
      if (answer8 === "k2" || answer8 === "K2") {
        return (
          answer8 +
          " is the correct answer. Well done! \n Next question: In which ocean is Fiji?"
        );
      } else {
        return "Wrong";
      }
    },
    isListening: true,
  },

  // Problem here
  {
    label: "Question 9",
    prompt: "Q9: What is the #{answer9}?",
    handler: function (params) {
      const answer8 = params.answer8;
      if (answer8 === "pacific" || answer8 === "Pacific") {
        return (
          "The " +
          answer8 +
          " is the correct answer. Well done! \n Next question: Which river rises in Peru, has no bridge crossing it and enters the sea in Brazil?"
        );
      } else {
        return "Wrong";
      }
    },
    isListening: true,
  },
  {
    label: "Question 10",
    prompt: "Q10: What is the #{answer10}?",
    handler: function (params) {
      const answer9 = params.answer9;
      if (answer9 === "amazon" || answer9 === "Amazon") {
        return (
          "The " +
          answer9 +
          " is the correct answer. Well done! Clearly, these are too easy for you. The questions are about to get a lot harder. \n Next question: What was the name of the supercontinent of 200 million years ago?"
        );
      } else {
        return "Wrong";
      }
    },
    isListening: true,
  },
  {
    label: "Question 11",
    prompt: "Q11: What is #{answer11}?",
    handler: function (params) {
      const answer10 = params.answer10;
      if (answer10 === "pangaea" || answer10 === "Pangaea") {
        return (
          answer10 +
          " is the correct answer. Well done! \n Next question: Name the countries surround the Czech Republic?"
        );
      } else {
        return "Wrong";
      }
    },
    isListening: true,
  },
  {
    label: "Question 12",
    prompt: "Q12: What is #{answer12}?",
    handler: function (params) {
      const answer10 = params.answer10;
      if (
        answer10 === "germany, poland, slovakia, and austria" ||
        answer10 === "Germany, Poland, Slovakia, and Austria"
      ) {
        return answer10 + " is the correct answer. Well done!";
      } else {
        return "Wrong";
      }
    },
    isListening: true,
  },
];

// I know I\'m just a Slackbot, but you\'re making me blush! What can I do with you? Sorry! I mean how can I help you

// Why can't we use variables outside each function?
// Why can't we use only one word for the input prompt?
