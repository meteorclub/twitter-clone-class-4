Template.TweetStream.helpers({
  tweetedTime: function() {
    return moment(this.tweetedAt).fromNow();
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
