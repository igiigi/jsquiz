Question = new Mongo.Collection('question');
// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Question.find().count() === 0) {
      var questions = [{
        text: "Text for a question",
        answerOptions: ['First','Second','Third','Fourth'],
        answer: 1,
        explanation: 'Just couze',
        links: [{url:'http://google.com', description:'google it'}],
        category: 'notId',
        question: 'noId'
      }];
      _.each(questions, function (question) {
        Question.insert(question);
      });
    }
  });
}