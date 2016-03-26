const formData = new ReactiveVar({
    text: '',
    answerOptions: [
        {id: 1, text: '1'},
        {id: 2, text: '2'},
        {id: 3, text: '3'},
        {id: 4, text: '4'}
    ],
    answer: 1,
    explanation: '',
    links: [
        {url: 'url', title: 'title'}
    ],
    category: '',
    question: ''
});

Template.addQuestion.helpers({
    formData() {
        return formData.get();
    },
    checkLast(index, lastIndex) {
        return index === lastIndex - 1 || lastIndex - 1 === 0;
    },
    checkLength(length) {
        return length > 1;
    }
});

Template.addQuestion.events({
    'keyup .answer-option': function (e) {
        let data = formData.get();
        data.answerOptions[this.id - 1].text = e.currentTarget.value;
        formData.set(data);
    },
    'change .answer': function (e) {
        let data = formData.get();
        data.answer = e.currentTarget.value;
        formData.set(data);
    },
    'keyup #text': function (e) {
        let data = formData.get();
        data.text = e.currentTarget.value;
        formData.set(data);
    },
    'keyup #explanation': function (e) {
        let data = formData.get();
        data.explanation = e.currentTarget.value;
        formData.set(data);
    },
    'keyup .links input': function (e) {
        const target = e.target;
        let data = formData.get();
        data.links[target.dataset.index][target.name] = target.value;
        formData.set(data);
    },
    'click .remove-link': function (e) {
        const target = e.target;
        let data = formData.get();
        data.links.splice(target.dataset.index, 1);
        formData.set(data);
    },
    'click .add-link': function () {
        let data = formData.get();
        data.links.push({url: '', title: ''});
        formData.set(data);
    },
    'submit form.card': function (e) {
        e.preventDefault();
        // Quiz.insert(formData.get());
        formData.set({
            text: '',
            answerOptions: [
                {id: 1, text: '1'},
                {id: 2, text: '2'},
                {id: 3, text: '3'},
                {id: 4, text: '4'}
            ],
            answer: 1,
            explanation: '',
            links: [
                {url: 'url', title: 'title'}
            ],
            category: '',
            question: ''
        });
    }
});
