// Generated by CoffeeScript 1.7.1
Mifan.controller("homeAnswer", function($scope, $http) {
  var news;
  $scope.$emit("clearAnswerRemind");
  $scope.ansMeCollect = [];
  news = {
    init: function() {
      return news.get();
    },
    get: function() {
      var cb, url;
      url = "" + API.answerme + $scope.privacyParamDir;
      if (IsDebug) {
        url = API.answerme;
      }
      cb = function(data) {
        var ret;
        ret = data.ret;
        if (String(ret) === "100000") {
          return $scope.ansMeCollect = data.result;
        }
      };
      return $http.get(url, {
        cache: "lruCache"
      }).success(cb);
    }
  };
  return news.init();
});
