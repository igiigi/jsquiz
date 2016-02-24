Players = new Mongo.Collection("players");

// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
    Meteor.startup(function () {
        if (Players.find().count() === 0) {
            var names = [
                "Ignat Degterev",
                "Anton Lunev",
                "Sergei Rubcov",
                "Elena Zhdanova",
                "Anna Bogdanova",
                "Anastasia Gurevich",
                "Kostya Smotrin"
            ];
            _.each(names, function (name) {
                Players.insert({
                    name: name,
                    score: 0
                });
            });
        }
    });
}
