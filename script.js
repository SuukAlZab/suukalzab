// زر التحميل
document.getElementById("downloadBtn").addEventListener("click", function () {
  const a = document.createElement("a");
  a.href = "suukalzab.apk"; // تأكد من وجود الملف في نفس المجلد
  a.download = "suukalzab.apk";
  a.click();
});

// تغيير الصناديق والألوان
function showBox(selected) {
  const boxes = ["mybox2", "mybox3", "mybox4"];
  const links = ["mylink1", "mylink2", "mylink3"];
  
  boxes.forEach((id, index) => {
    document.getElementById(id).style.display = (index === selected) ? "" : "none";
  });
  
  links.forEach((id, index) => {
    document.getElementById(id).style.color = (index === selected) ? "red" : "white";
  });
}

// إضافة أحداث النقر
document.getElementById("mylink1").addEventListener("click", e => { e.preventDefault(); showBox(0); });
document.getElementById("mylink2").addEventListener("click", e => { e.preventDefault(); showBox(1); });
document.getElementById("mylink3").addEventListener("click", e => { e.preventDefault(); showBox(2); });

// إعداد الصفحة عند التحميل
window.onload = function() {
  showBox(0);
};
