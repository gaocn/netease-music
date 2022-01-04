function remSize() {
  // 设备宽度
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
  // 一般设计高度按照750设置
  if (deviceWidth >= 750) {
    // 电脑宽度设置为最大宽度
    deviceWidth = 750;
  }

  if (deviceWidth <= 320) {
    deviceWidth = 320;
  }

  // 由于最大宽度为750，除以7.5得到1ren为100px，这样方便计算
  // 设计稿宽度为750px，设置一半的宽度为375px，由于1ren == 100px的设计稿宽度，
  // 则表达一半的宽度就是3.75ren
  document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
  // 设置body字体大小为16px
  document.querySelector("body").style.fontSize = 0.16 + "rem";
}

remSize();

window.onresize = function () {
  remSize();
};
