!function () {
  var duration = 50
  $('.actions').on('click', 'button', function (e) {
    let $button = $(e.currentTarget) // button
    let speed = $button.attr('data-speed')
    $button.addClass('active')
      .siblings('.active').removeClass('active')
    switch (speed) {
      case 'slow':
        duration = 100
        break
      case 'normal':
        duration = 50
        break
      case 'fast':
        duration = 1
        break
    }
  })
  function writeCode(prefix, code, fn) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id
    id = setTimeout(function run() {
      n += 1
      container.innerHTML = code.substring(0, n)
      styleTag.innerHTML = code.substring(0, n)
      container.scrollTop = container.scrollHeight
      if (n < code.length) {
        id = setTimeout(run, duration)
      } else {
        fn && fn.call()
      }
    }, duration)
  }
  let code = `/*
 * 首先，需要准备背景颜色
 */
.preview{
  background-color: #c4edf7;
  margin: 0 auto;
}


.contain {
  width: 12px;
  margin: auto;
  position: relative;
} 
/*
 * 接下来，画小黄鸭的头
 */
.head {
  background-color: #fbc252;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  position: absolute;
  top: 18px;
  -webkit-animation: bob 2s infinite;
}
/*
 * 接下来，画小黄鸭的头发
 */
.hair {
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 9px solid #fbc252;
  position: absolute;
  -webkit-transform: rotate(-85deg);
  left: 48px;
  top: 15px;
  -webkit-animation: bob-hair 2s infinite;
}
/*
 * 第二撮头发
 */
.hair-2 {
  left: 42px;
}
/*
 * 接下来，画小黄鸭的鼻子
 */
.nose-top {
  width: 54px;
  height: 24px;
  background-color: #db7c1d;
  border-radius: 50%;
  position: absolute;
  top: 54px;
  left: 18px;
  z-index: 3;
}
/*
 * 接下来，画小黄鸭的嘴巴
 */
.mouth {
  width: 52px;
  height: 6px;
  border-bottom: 2px solid #b7670f;
  position: absolute;
  top: 11px;
  border-radius: 50%;
  left: 1px;
  opacity: .90;
}
/*
 * 接下来，画小黄鸭的眼睛
 */
.eye {
  width: 12px;
  height: 12px;
  background-color: white;
  position: absolute;
  border-radius: 50%;
  top: 50px;
  left: 21px;
}

.eye-right {
  left: 58px;
}
/*
 * 眼珠子
 */
.pupil {
  height: 4px;
  width: 4px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  top: 4px;
  left: 4px;
}
/*
 * 接下来，画小黄鸭的身体
 */
.body {
  height: 120px;
  width: 90px;
  background-color: #fbc252;
  border-radius: 400% 400% 400% 400%;
  position: absolute;
  top: 102px;
  
}
/*
 * 接下来，画小黄鸭的翅膀
 */
.wing {
  height: 90px;
  width: 36px;
  background-color: #fbc252;
  border-radius: 50%;
  position: absolute;
  -webkit-transform: rotate(80deg);
  top: 6px;
  left: -27px;
  -webkit-animation: fly 2s infinite;
}
/*
 * 右边翅膀
 */
.wing-right {
  -webkit-transform: rotate(-80deg);
  left: 81px;
  -webkit-animation: fly-2 2s infinite;
}
/*
 * 接下来，画小黄鸭的腿
 */
.legs {
  width: 6px;
  height: 36px;
  background-color: #db7c1d;
  position: absolute;
  top: 210px;
  left: 30px;
}

.leg-right {
  left: 54px;
}
/*
 * 右腿在右边（废话）
 */
.feet {
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 9px solid #db7c1d;
  position: absolute;
  top: 30px;
  left: -9px;
}
/*
 * 接下来，画个草地
 */
.grass {
  width: 100%;
  height: 210px;
  background-color: #a1d197;
  position: absolute;
  top: 249px;
  
}

.legs {
  position: absolute;
  -webkit-animation: walk 2s infinite;
}

.leg-right {
  position: absolute;
  -webkit-animation: walk 2s infinite;
  -webkit-animation-delay: 1s;
}

@-webkit-keyframes bob {
  50% {
    top: 16px;
  }
  100% {
    top: 18px;
  }
}

@-webkit-keyframes bob-hair {
  50% {
    top: 14px;
  }
  100% {
    top: 15px;
  }
}
/*
 * 接下来，让小黄鸭的翅膀动起来
 */
@-webkit-keyframes fly {
  0% {
    top: 0;
  }
  50% {
    top: 12px;
    -webkit-transform: rotate(65deg);
  }
  100% {
    top: 0
  }
}

@-webkit-keyframes fly-2 {
  0% {
    top: 0;
  }
  50% {
    top: 12px;
    -webkit-transform: rotate(-65deg);
  }
  100% {
    top: 0
  }
}
/*
 * 最后让小黄鸭动动脚，饭后走一走，活到九十九
 */
@-webkit-keyframes walk {
  0% {
    top: 210px;
  }
  50% {
    top: 195px;
  }
  100% {
    top: 210px;
  }
}
/*
 * 好了，这只小黄鸭送给你
 */
`
  writeCode('', code)

}.call()