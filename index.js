let open=document.querySelector("#open"); 
    let close=document.querySelector("#close");
    let ul= document.querySelector("#ul");

    open.addEventListener("click", function () {
        if (open.classList.contains("show")) {
            console.log("open");

            open.classList.remove("show");
            open.classList.add("hide");
            ul.classList.remove("ulHide");
            close.classList.add("show");
            
        } 
    })
        close.addEventListener("click", function () {
        if (close.classList.contains("hide")) {
            console.log("close");

           close.classList.remove("show"); 
           open.classList.add("show");
           open.classList.remove("hide");
           ul.classList.add("ulHide");
        } 
    })
     