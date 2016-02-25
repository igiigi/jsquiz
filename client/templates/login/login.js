Template.login.events({
  "click #login-buttons-github": function(e, tmpl){
    Meteor.loginWithGithub({
      requestPermissions: ['user', 'public_repo']
    }, function (err) {
      if (err)
        Session.set('errorMessage', err.reason || 'Unknown error');
    });
  }
});