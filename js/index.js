function textView () {
    const profileView = document.querySelector ("#image-block img");
    profileView.style.width = "600px";
    profileView.style.height = "600px"

}
function imageView (){
    const profileView = document.querySelector ("#image-block img");
    profileView.style.width ="500px"
    profileView.style.height = "500px"
    
}
function menuToggle (){
    const navBar = document.querySelector ("#nav-bar a");
    if (navBar.style.display = "none") {
        navBar.style.display = "block";
    }
    else{
        navBar.style.display = "none";
    }
}
