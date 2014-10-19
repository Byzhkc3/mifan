// Generated by CoffeeScript 1.7.1
(function(window, angular) {
  var Time, ago, time;
  time = function(timestamp) {
    var date;
    date = new Date(timestamp - 0);
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  };
  ago = function(timestamp) {
    var agoTime, curTime, int, timeDiff;
    if (String(timestamp).length === 10) {
      timestamp *= 1000;
    }
    int = parseInt;
    curTime = +new Date();
    timeDiff = curTime - timestamp;
    agoTime = time(timestamp);
    if (1000 * 60 > timeDiff) {
      agoTime = "刚刚";
    } else if (1000 * 60 <= timeDiff && 1000 * 60 * 60 > timeDiff) {
      agoTime = int(timeDiff / (1000 * 60)) + "分钟前";
    } else if (1000 * 60 * 60 <= timeDiff && 1000 * 60 * 60 * 24 > timeDiff) {
      agoTime = int(timeDiff / (1000 * 60 * 60)) + "小时前";
    } else if (1000 * 60 * 60 * 24 <= timeDiff && 1000 * 60 * 60 * 24 * 30 > timeDiff) {
      agoTime = int(timeDiff / (1000 * 60 * 60 * 24)) + "天前";
    } else if (1000 * 60 * 60 * 24 * 30 <= timeDiff && 1000 * 60 * 60 * 24 * 30 * 12 > timeDiff) {
      agoTime = int(timeDiff / (1000 * 60 * 60 * 24 * 30)) + "月前";
    } else {
      if (1000 * 60 * 60 * 24 * 30 * 12 <= timeDiff) {
        agoTime = int(timeDiff / (1000 * 60 * 60 * 24 * 30 * 12)) + "年前";
      }
    }
    return agoTime;
  };
  Time = angular.module("binnng.time", []);
  Time.factory("$time", function() {
    return time;
  });
  Time.filter("date", function() {
    return function(timestamp) {
      var day, month, year, _ref;
      _ref = time("" + timestamp + "000"), year = _ref.year, month = _ref.month, day = _ref.day;
      return "" + year + "年" + month + "月" + day + "日";
    };
  });
  return Time.filter("ago", function() {
    return function(timestamp) {
      return ago(timestamp);
    };
  });
})(window, angular);
