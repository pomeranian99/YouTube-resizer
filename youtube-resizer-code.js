document.getElementById("submit").addEventListener("click", function (e) {
    var x = document.getElementById("URLhere").value;
    var y = x.indexOf("=");
    var screenWidth = Math.floor(window.innerWidth * .95);
    var screenHeight = Math.floor(window.innerWidth * .56 * .95);
    var videoID = x.slice(y + 1);
    var srcCode = "https://www.youtube.com/embed/" + videoID;
    var playerCode = '<iframe width="' + screenWidth + '" height="' + screenHeight + '" src="' + srcCode + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    document.getElementById("playerGoesHere").innerHTML = playerCode;
    e.preventDefault();
  });