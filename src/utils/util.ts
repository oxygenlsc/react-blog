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

export const getStringArr = (str, left, right) => {
  return S(str)
    .parseCSV(left)
    .map(el => {
      return el.split(right)[0];
    })
    .filter((el, i) => i != 0);
};
