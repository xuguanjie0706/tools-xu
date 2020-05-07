/*
 * @Author: xgj
 * @since: 2020-04-17 15:37:46
 * @lastTime: 2020-04-24 11:48:53
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
function debounce(fn, wait = 1000) {
  var timeout = null;
  return function () {
    if (timeout !== null)
      clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  }
}


/**
 * @description 节流
 * @param {function}  fn  函数
 * @param {Number}  delay  延迟时间
 * @return {function} 
 * @default 1000 毫秒
 * @example throttle(()=>console.log(123),1000)
 */
function throttle(fn, delay = 1000) {
  var prev = 0
  return function () {
    var now = Date.now();
    if (now - prev >= delay) {
      fn.apply(null, arguments);
      prev = Date.now();
    }
  }
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
      func.apply(null, arguments)
      done = true
    }
  }
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
function arraySort(arr = []) {
  return arr.sort((x, y) => x - y)
}

/**
 * @description 字符串复制的转成数组 通过空格分开 支持多空格
 * @param {String}  str  字符串
 * @param {arr}  arr  属性数字
 * @return {Array} 
 * @example getArray("1231 dsafda",["index"])
 */

function getArray(str, arr) {
  var len = arr.length
  var reg = /(^\s*)|(\s*$)/g
  var a = str.replace(reg, "").replace(/\s+/g, " ").split(" ")
  if (!len) {
    return a
  }
  let array = []
  for (let i = 0; i < Math.ceil((a.length - 1) / len); i++) {
    let obj = {}
    let index = 0
    for (let j in arr) {
      obj[arr[j]] = a[len * i + index]
      index = (index + 1) % len
    }
    array.push(obj)
  }
  return array;
}









export default {
  debounce,
  throttle,
  randomString,
  once,
  arraySort,
  getArray
}