function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var ancText = document.getElementById("myAnc");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      ancText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      ancText.innerHTML = "Read less <i class='fas fa-caret-up'></i>";
      moreText.style.display = "inline";
    }
  }

var today = new Date();
document.getElementById("date").innerHTML = today;