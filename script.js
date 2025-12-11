
document.getElementById("downloadBtn").addEventListener("click", function () {
  const a = document.createElement("a");
  a.href = "suukalzab.apk";
  a.click();
  // Clean up
  URL.revokeObjectURL(url);
});
    document.getElementById("mylink1").addEventListener("click", function(event) {
    event.preventDefault(); 

    document.getElementById("mylink1").style.color = "red";
    document.getElementById("mylink2").style.color = "white";
    document.getElementById("mylink3").style.color = "white";

    document.getElementById("mybox2").style.display = "";
    document.getElementById("mybox3").style.display = "none";
    document.getElementById("mybox4").style.display = "none";
  });
    document.getElementById("mylink2").addEventListener("click", function(event) {
    event.preventDefault();

    document.getElementById("mylink1").style.color = "white";
    document.getElementById("mylink2").style.color = "red";
    document.getElementById("mylink3").style.color = "white";

    document.getElementById("mybox2").style.display = "none";
    document.getElementById("mybox3").style.display = "";
    document.getElementById("mybox4").style.display = "none";
  });
    document.getElementById("mylink3").addEventListener("click", function(event) {
    event.preventDefault(); 

    document.getElementById("mylink1").style.color = "white";
    document.getElementById("mylink2").style.color = "white";
    document.getElementById("mylink3").style.color = "red";

    document.getElementById("mybox2").style.display = "none";
    document.getElementById("mybox3").style.display = "none";
    document.getElementById("mybox4").style.display = "";
  });
  window.onload = function() {
      
    document.getElementById("mylink1").style.color = "red";
    document.getElementById("mylink2").style.color = "white";
    document.getElementById("mylink3").style.color = "white";

    document.getElementById("mybox2").style.display = "";
    document.getElementById("mybox3").style.display = "none";
    document.getElementById("mybox4").style.display = "none";
      
  };