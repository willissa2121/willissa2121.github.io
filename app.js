// alert()

let openMenu = () => {
  document.getElementById("sidebar-links").style.width="250px"
  document.getElementById("main").style.marginLeft="250px"
  


}

let closeMenu = () => {
document.getElementById("sidebar-links").style.width="0"
document.getElementById("main").style.marginLeft="0"
}

let openContent = (id, btnId) => {
  let tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display="none"
  }

  let tablinks = document.getElementsByClassName("tablink");
  for (var i = 0; i < tablinks.length; i++){
    console.log("working")
    tablinks[i].style.backgroundColor=""
    tablinks[i].style.color=''
    
    
  }
  
  document.getElementById(id).style.display="block";
  //This works, but the buttons will not unturn chosen color
  document.getElementById(btnId).style.backgroundColor="teal"
  document.getElementById(btnId).style.color="white"



}
document.getElementById("default").click();
