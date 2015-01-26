var app = angular.module('vent', ['ngCookies']);

app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
});