// Generated by CoffeeScript 1.7.1
var API, BASE_API_PATH, IsDebug, LOC, api;

LOC = location;

IsDebug = LOC["port"] === "9000";

BASE_API_PATH = "/api/index.php";

API = {
  user: "/user/usersession/user",
  userInfo: "/user/userinfo/user/id",
  ask: "/ask/askinfo/ask",
  answer: "/ask/askinfo/answer",
  news: "/feed/feedinfo/feeds",
  notice: "/common/message/msgcount",
  myask: "/user/me/myask",
  myanswer: "/user/me/myanswer",
  askme: "/ask/askinfo/asks",
  follow: "/user/friend/follow",
  unfollow: "/user/friend/unfollow",
  loveanswer: "/ask/askinfo/loveanswer",
  answerme: "/feed/feedinfo/answerme",
  comment: "/ask/askinfo/comment",
  getComment: "/ask/askinfo/comments",
  loveme: "/user/feedinfo/loveanswers"
};

if (IsDebug) {
  BASE_API_PATH = "/data";
  API = {
    user: "/user.json",
    userInfo: "/user-info.json",
    ask: "/ask.json",
    answer: "/answer.json",
    news: "/news.json",
    myask: "/myask.json",
    myanswer: "/myanswer.json",
    notice: "/msgcount.json",
    askme: "/askme.json",
    follow: "/follow.json",
    unfollow: "/unfollow.json",
    loveanswer: "/loveanswer.json",
    answerme: "/answerme.json",
    comment: "/comment.json",
    getComment: "/comments_list.json",
    loveme: "/loveanswers.json"
  };
}

for (api in API) {
  API[api] = "" + BASE_API_PATH + API[api];
}

// Generated by CoffeeScript 1.7.1
var BODY, DOC, IsAndroid, IsAndroidPad, IsBlackBerry, IsChrome, IsDebug, IsIE, IsIEMobile, IsIOS, IsIPad, IsIPhone, IsPhone, IsTouch, IsWebapp, IsWeixin, IsWindowsPhone, LOC, NA, NG, UA, WIN;

DOC = document;

WIN = window;

LOC = location;

BODY = DOC['body'];


/*
设备是否支持触摸事件
这里使用WIN.hasOwnProperty('ontouchend')在Android上会得到错误的结果
@type {boolean}
 */

IsTouch = "ontouchend" in WIN;

NA = WIN.navigator;

UA = NA.userAgent;

IsAndroid = /Android|HTC/i.test(UA) || /Linux/i.test(NA.platform + "");

IsAndroidPad = IsAndroid && /Pad/i.test(UA);

IsIPad = !IsAndroid && /iPad/i.test(UA);

IsIPhone = !IsAndroid && /iPod|iPhone/i.test(UA);

IsIOS = IsIPad || IsIPhone;

IsWindowsPhone = /Windows Phone/i.test(UA);

IsBlackBerry = /BB10|BlackBerry/i.test(UA);

IsIEMobile = /IEMobile/i.test(UA);

IsIE = !!DOC.all;

IsWeixin = /MicroMessenger/i.test(UA);

IsChrome = !!WIN['chrome'];

IsPhone = IsIPhone || (IsAndroid && !IsAndroidPad);

IsWebapp = !!NA["standalone"];

NG = WIN['angular'];

IsDebug = LOC["port"] === "9000";
