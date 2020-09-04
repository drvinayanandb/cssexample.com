function myFunction() {
  var box = document.getElementById("redBox");
  box.style.backgroundColor = "blue";
  topValueString = getComputedStyle(box).top;
  topValueSubString = topValueString.substr(0,topValueString.indexOf("px"));
  console.log(topValueSubString);


}



function myMouseOverFunction(e) {

  var hello = document.getElementById(e);
  var childArray = ["New Account","Existing Account","Cancelling Account","View Balance" ];
  for (var i=0; i<childArray.length; i++) {
    if (childArray[i] != e ) document.getElementById(childArray[i]).style.opacity=""+ 0.2;
  }


  var id = setInterval(frame, 10);

  var fSize=26;

  function frame(){
    if(fSize >= 50) {
      clearInterval(id);

    }
    else {
      fSize++;

      hello.style.fontSize = "" +fSize+"px";



    }
  }



}

function myMouseOutFunction(e) {
  var hello = document.getElementById(e);
  var childArray = ["New Account","Existing Account","Cancelling Account","View Balance" ];
  for (var i=0; i<childArray.length; i++) {
    if (childArray[i] != e ) document.getElementById(childArray[i]).style.opacity=""+1;
  }


  var id = setInterval(frame, 10);
  var fSize=50;

  function frame(){
    if(fSize <= 26) {
      clearInterval(id);

    }
    else {
      fSize--;
      hello.style.fontSize = ""+fSize+"px";


    }
  }
}
