Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
});

Router.route('/', function () {
    this.render('home', {to: 'aside'});
    this.render('question', {to: 'content'});
});
