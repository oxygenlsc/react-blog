const S = require('string');

/**
 *
 * @param min 随机数范围的最小值
 * @param max 随机数范围的最大值
 */
export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 *
 * @param _ 滚动到最上面的方法
 */
export const scrollToTop = _ => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

export const waterFull = (classname, contentname, itemwidth, cloum) => {
  var domArr = document.getElementsByClassName(classname);
  var colY = new Array(cloum);
  colY.fill(0);
  if (domArr.length == 0) {
    return;
  }
  var contentwidth = 960;
  itemwidth = parseInt(domArr[0].style.width);
  var gap = (contentwidth - itemwidth * cloum) / (cloum + 1);
  for (var i = 0; i < domArr.length; i++) {
    var ele = domArr[i];
    var miny = Math.min(...colY);
    var colIndex = colY.indexOf(miny);
    var lefts = gap * (colIndex + 1) + colIndex * itemwidth;
    ele.style.left = gap * (colIndex + 1) + colIndex * itemwidth + 'px';
    ele.style.top = miny + 'px';
    colY[colIndex] += parseInt(ele.offsetHeight) + gap;
  }
  document.getElementById(contentname).style.height = Math.max(...colY) + 'px';
};

export const getStringArr = (str, fstr) => {
  console.log(str);
  if (!str) {
    return ['nothing'];
  }
  let dataArr: any = [];
  str.split('#').forEach(el => {
    const data = el.split('\n').forEach(item => {
      if (item.includes(fstr)) {
        item = item.replace(fstr, '');
        dataArr.push(item?.trim());
      }
    });
  });

  if (!dataArr) {
    return [];
  }
  console.log(dataArr);
  return dataArr;
};

export const CookieDo = {
  set(key: any, value: any, delay: any): any {
    if (delay == 'undefined') delay = '7d';
    delay = delay.toLowerCase();

    var expireDate = new Date();

    var num = parseInt(delay);
    if (delay.indexOf('d') !== -1) {
      expireDate.setDate(expireDate.getDate() + num);
    } else if (delay.indexOf('h') !== -1) {
      expireDate.setHours(expireDate.getHours() + num);
    } else if (delay.indexOf('m') !== -1) {
      expireDate.setMinutes(expireDate.getMinutes() + num);
    } else if (delay.indexOf('s') !== -1) {
      expireDate.setSeconds(expireDate.getSeconds() + num);
    } else {
      expireDate.setDate(expireDate.getDate() + num);
    }
    if (typeof value == 'object') {
      value = JSON.stringify(value);
    }
    value = escape(value);
    document.cookie =
      key + '=' + value + ';expires=' + expireDate.toGMTString();
    return this.get(key);
  },
  get(key: string): any {
    var objCookie = {};
    var cookie = document.cookie;
    var keyValueList = cookie.split(';');
    for (var index in keyValueList) {
      var keyValue = keyValueList[index].split('=');
      var k = keyValue[0].trim();
      var v = keyValue[1];
      v = unescape(v);
      v = this.decodeJson(v);
      objCookie[k] = v;
    }

    if (typeof key == 'undefined') {
      return objCookie;
    }

    return objCookie[key];
  },
  decodeJson(value: any) {
    //数组转成的对象字符串
    var regAryStr = /^\[[\s|\S]*\]$/;
    //对象转成的对象字符串
    var regObjStr = /^\{([\"\s|\S]+\"\:\"[\s|\S]*)+\"\}$/;
    if (regAryStr.test(value)) {
      return eval('(' + value + ')');
    }
    if (regObjStr.test(value)) {
      return JSON.parse(value);
    }
    return value;
  },
};
