

let checkout_modal=document.querySelector("#checkout_modal");
        let paymenttForm = document.querySelector("#pmtForm");
        let close = document.querySelector(".close");
        let overlay = document.querySelector(".overlay");
        // let ContentWrapper = querySelector(".contentwrapper");

        checkout_modal.addEventListener("click",()=>{
            // paymenttForm.style.display="block";
            paymenttForm.style.opacity="1";
            paymenttForm.style.visibility="visible";
            paymenttForm.style.opacity.hover="rgba(0,0,0,0.7)";
            

        });

        close.addEventListener("click",()=>{
            // paymenttForm.style.display="";
            paymenttForm.style.opacity="0";
            paymenttForm.style.visibility="hidden";


        });