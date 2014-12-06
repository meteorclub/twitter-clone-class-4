Router.configure({
  layoutTemplate: 'base',
  loadingTemplate: 'loading'
});

Router.map(function() {
  this.route('tweet_stream', {
    path: '/',
    waitOn: function() {
      return Meteor.subscribe('tweets');
    },
    data: function() {
      return {
        tweets: Tweets.find()
      }
    }
  });
  this.route('notifications', {path: '/notifications'});
  this.route('profile', {path: '/profile'});
});
