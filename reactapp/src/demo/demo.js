
  function closeForm() {
    document.getElementById("popupForm2").style.display = "none";
  }
  function validate(){
 var coupencode=document.getElementById('coupencode').value;
 var regx=/ZOMAA407/i;
 if(regx.test(coupencode)){
    document.write("valid coupencode")
 }
 else{
    alert("invalid username")
 }
  }