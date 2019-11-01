window.onload = function () {
  function onresise() {
    let design = 1920 / 1080;
    let real = document.documentElement.clientWidth / document.documentElement.clientHeight;

    let fontSize = (real > design ? design / real : 1) * document.documentElement.clientWidth / 10;

    document.documentElement.style.fontSize = fontSize;
  }
  window.addEventListener("resize", onresise)
}
let imglist = document.querySelector(".imglist");

for (let i = 0; i < 32; i++) {
  let subContainer = document.createElement("div");
  let a = document.createElement("a");
  a.href = "#";
  a.title = "空链接";
  subContainer.appendChild(a);
  let img = document.createElement("img");
  img.src = `./assets/${i}.jpg`;
  // window.devicePixelRatio
  // img.srcset = `./assets/0.jpg 1x,./assets/${i}.jpg 1.5x,./assets/2.jpg 2x`;
  img.srcset = `./assets/0.jpg 320w,./assets/1.jpg 480w,./assets/2.jpg 800w`
  img.sizes = "(min-width:320px) 280px,(min-width:480px) 440px,(min-width:1200px) 800px";
  img.title = i + ".jpg";
  img.alt = "图片缺失";
  a.appendChild(img);
  imglist.appendChild(subContainer);
}
`模板字符串
<picture>
<source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg">
<source media="(min-width: 800px)" srcset="elva-800w.jpg">
<img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva">
</picture>
`

function createPicture() {
  let pictureStr = ``
  let dom = new DOMParser().parseFromString(pictureStr, "text/html");
  imglist.appendChild(dom.querySelector("picture"))
}

function createPictureByText(txt) {
  let dom = document.createElement('div');
  dom.innerHTML = txt;
  return dom.childNodes;
}

function createPictureByText1(txt) {
  let range = document.createRange().createContextualFragment(txt);
  return range;
}

// createPicture();