var app = angular.module('vent');

app.factory('httpRequestInterceptor', function() {
  return {
    request: function(config) {
      config.headers = {'X-Parse-Application-Id': 'tRSnGROwERncUM4z51nyki8OY0nAPhahyIHmO9Sk', 'X-Parse-REST-API-Key': 'L77SBwMFogoxkMiUmUCSmVnuixxJFfbrtX3Tl4pB'}
      return config;
    }
  };
});