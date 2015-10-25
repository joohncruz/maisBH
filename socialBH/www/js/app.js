angular.module('starter', ['ionic','starter.facebook', 'starter.instagram', 'starter.main', 'starter.menu', 'starter.twitter'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MenuController'
  })

  .state('app.main', {
    url: '/main',
    views: {
      'content': {
        templateUrl: 'templates/main.html',
        controller: 'MainController'
      }
    }
  })

  .state('app.facebook', {
    url: '/facebook',
    views: {
      'content': {
        templateUrl: 'templates/facebook.html',
        controller: 'FacebookController'
      }
    }
  })

  .state('app.instagram', {
    url: '/instagram',
    views: {
      'content': {
        templateUrl: 'templates/instagram.html',
        controller: 'InstagramController'
      }
    }
  })

  .state('app.twitter', {
    url: '/twitter',
    views: {
      'content': {
        templateUrl: 'templates/twitter.html',
        controller: 'TwitterController'
      }
    }
  })

  $urlRouterProvider.otherwise('/app/main');

})
