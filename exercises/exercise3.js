// Set this assignment to true if you do want to use it.
module.exports.ACTIVATE_BOT = true;

module.exports.botScripts = [
  {
    label: 'Introduction',
    prompt: 'Start',
    handler: function () {
      return 'Hi there! Before we get started, I just need to point out that I don\'t like one word answers. \nSo instead of answering with "Bob", try "It\'s Bob". Why don\'t you start by telling me your name?';
    },
    isListening: true,
  },
  {
    label: 'Name',
    prompt: 'It\'s #{name}',
    handler: function (params) {
      const firstName = params.name;
      return 'Great ' + firstName + '! Now let\'s find out a bit more about you. What state are you from?';
    },
    isListening: true,
  },
  {
    label: 'State',
    prompt: 'I\'m from #{state}',
    handler: function (params) {
      const state = params.state;
      if (state == 'Georgia' || state == 'California' || state == 'Washington') {
        return 'OK Nice, I love ' + state + '! ' + state + ' people are my people. Are you ready to start playing?';
      } else if (state == 'Florida') {
        return 'What is up with you people? I have so many questions. I just don\'t think we can be friends, goodbye.'
      } else if (state == 'Alabama' || state == 'Alaska' || state == 'Arizona' || state == 'Arkansas' || state == 'Colorado' || state == 'Connecticut' || state == 'Delaware' || state == 'Hawaii' || state == 'Idaho' || state == 'Illinois' || state == 'Indiana' || state == 'Iowa' || state == 'Kansas' || state == 'Kentucky' || state == 'Louisiana' || state == 'Maine' || state == 'Maryland' || state == 'Massachusetts' || state == 'Michigan' || state == 'Minnesota' || state == 'Mississippi' || state == 'Missouri' || state == 'Montana' || state == 'Nebraska' || state == 'Nevada' || state == 'New Hampshire' || state == 'New Jersey' || state == 'New Mexico' || state == 'New York' || state == 'North Carolina' || state == 'North Dakota' || state == 'Ohio' || state == 'Oklahoma' || state == 'Oregon' || state == 'Pennsylvania' || state == 'Rhode Island' || state == 'South Carolina' || state == 'South Dakota' || state == 'Tennessee' || state == 'Texas' || state == 'Utah' || state == 'Vermont' || state == 'Virginia' || state == 'West Virginia' || state == 'Wisconsin' || state == 'Wyoming') {
        return 'I think we\'ll be OK. Are you ready to start playing?';
      } else {
        return 'You don\'t spell so good do you? Please try again.'
      }
    },
    isListening: true,
  },
  {
    label: 'Start Game',
    prompt: 'Yes I am',
    handler: function (params) {
      return 'Great! Now that we\'ve hopefully got rid of those Florida people, let\'s start playing!\n This is a game to test your Geography skills. \n It\'s very simple, as long as you keep answering correctly, you keep progressing through the different levels. \n There are 15 levels and each level should get harder. \n This year we lost a Alex Trebek (host of Jeopardy) to cancer, to pay homage to him we will answer all questions in the form of a question - Jeopardy style! \n To start the game, answer this question: ________ is the study of places and the relationships between people and their environments.';
    },
    isListening: true,
  },
  {
    label: 'Question 1',
    prompt: 'What is #{answer1}?',
    handler: function (params) {
      const answer1 = params.answer1;
      if (answer1 === 'geography' || answer1 === 'Geography') {
        return answer1 + ' is the correct answer. Well done!';
      } else {
        return 'We have something for you! Cut and copy this link into a browser window to find out what it is: http://gph.is/1UTxE3u';
      }
    },
    isListening: true,
  },
];



// I know I\'m just a Slackbot, but you\'re making me blush! What can I do with you? Sorry! I mean how can I help you

// Why can't we use variables outside each function?
// Why can't we use only one word for the input prompt?