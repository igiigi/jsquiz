var answers =  new ReactiveVar([
    { id: 1, text: ""},
    { id: 2, text: ""},
    { id: 3, text: ""},
    { id: 4, text: ""}
]);

Template.addQuestion.onRendered(function () {
    var elem = new Foundation.Dropdown($("#example-dropdown"));
});

Template.addQuestion.helpers({
    answers: function () {
        return answers.get();
    }
});

Template.addQuestion.events({
    'change .answer': function (e) {
        console.log(this);
        var newAnswers = answers.get();
        newAnswers[this.id -1].text = e.currentTarget.value;
        answers.set(newAnswers);
    }
});