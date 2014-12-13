Template.TweetStream.helpers({
  settings: function() {
    return {
      position: "bottom",
      limit: 5,
      rules: [
        {
          token: '@',
          collection: 'Users',
          field: "username",
          subscription: 'usernames',
          matchAll: true,
          template: Template.userPill
        }
      ]
    }
  }
});

Template.TweetStream.events({
  'submit form': function(event, template) {
    event.preventDefault();
    tweet = template.$('.tweet-text').val();
    Tweets.insert({text: tweet}, function() {
      template.$('.tweet-text').val(null)
    })
  }
});
