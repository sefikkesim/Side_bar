let toggleBar = document.querySelector(".side-toggle");
let sideBarCls = document.querySelector(".side-bar-cls");
let sideBar = document.querySelector(".side-bar");


toggleBar.addEventListener("click",()=>{
    // if(sideBar.classList.contains("show-side-bar")){
    //     sideBar.classList.remove("show-side-bar")
    // }else{
    //     sideBar.classList.add("show-side-bar")
    // }
   sideBar.classList.toggle("show-side-bar")
})
sideBarCls.addEventListener("click",()  =>{
    sideBar.classList.remove("show-side-bar")
    {
        
}})