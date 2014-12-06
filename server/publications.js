Meteor.publish('tweets', function() {
  return Tweets.find();
})

Meteor.publish('profile', function(username) {
  return Meteor.users.find({username: username}, {fields: {emails: 0, services: 0}});
});
Meteor.publish('profileTweets', function(username) {
  user = Meteor.users.findOne({username: username}, {fields: {emails: 0, services: 0}});
  return Tweets.find({userId: user._id})
});
