'use strict';

/*
 * @Author: xgj
 * @since: 2020-04-17 15:37:46
 * @lastTime: 2020-04-19 14:22:36
 * @LastAuthor: xgj
 * @FilePath: /tools-xu/src/main.js
 * @message: 
 */
// /**
//  * @description: 
//  * @param {type} 
//  * @return: 
//  */
// function permutate(str) {
//   var array = str.split('');
//   function loop(array, pre = []) {
//     if (array.length == 1) {
//       return [pre.concat(array).join('')];
//     }
//     let res = [];
//     for (let index = 0; index < array.length; index++) {
//       var first = array.pop();
//       res = res.concat(loop(array, [...pre, first]));
//       array.unshift(first);
//     }
//     return res;
//   }
//   return Array.from(new Set(loop(array)))
// }
// /**
// ok类，代表一个书本.
//  * @constructor
//  * @param {string} title - 书本的标题.
//  * @param {string} author - 书本的作者.
//  */
// function Book(title, author) {
//   this.title = title;
//   this.author = author;
// }
// Book.prototype = {
//   /**
//    * 获取书本的标题
//    * @returns {string|*}
//    */
//   getTitle: function () {
//     return this.title;
//   },
//   /**
//    * 设置书本的页数
//    * @param pageNum {number} 页数
//    */
//   setPageNum: function (pageNum) {
//     this.pageNum = pageNum;
//   }
// };
// /** @module tools */

/**
 * @description 防抖
 * @param {function}  fn  函数
 * @param {Number}  wait  延迟时间
 * @return {function} 
 * @default 1000 毫秒
 * @example debounce(()=>console.log(123),1000)
 */
function debounce(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  var timeout = null;
  return function () {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  };
}
/**
 * @description 节流
 * @param {function}  fn  函数
 * @param {Number}  delay  延迟时间
 * @return {function} 
 * @default 1000 毫秒
 * @example throttle(()=>console.log(123),1000)
 */


function throttle(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  var prev = 0;
  return function () {
    var now = Date.now();

    if (now - prev >= delay) {
      fn.apply(null, arguments);
      prev = Date.now();
    }
  };
}
/**
 * @description 一次函数
 * @param {function}  fn  函数
 * @return {function} 
 * @example const cli = once(() => console.log(123));
 */


function once(func) {
  var done;
  return function () {
    if (!done) {
      func.apply(null, arguments);
      done = true;
    }
  };
}
/**
 * @description 随机字符串
 * @return {String} 
 * @example randomString()
 */


function randomString() {
  return Math.random().toString(36).substr(2);
}
/**
 * @description 随机字符串
 * @param {Array}  arr  数字数组
 * @return {Array} 
 * @example arraySort([1,2,3,4])
 */


function arraySort() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return arr.sort(function (x, y) {
    return x - y;
  });
}

var main = {
  debounce: debounce,
  throttle: throttle,
  randomString: randomString,
  once: once,
  arraySort: arraySort
};

module.exports = main;
