const images=document.querySelector(".images");
const next=document.querySelector("#next");
const prev=document.querySelector("#prev");

next.addEventListener("click",clickButton);
prev.addEventListener("click",clickButton);

function clickButton(evt){
    let i=images.dataset.index*1;
    const direction=evt.target.id;
    if(direction=="next"){
        i+=100;
        if(i==400)
            i=0;
    }
    else{
        i-=100;
        if(i==-100)
            i=300;
    }
    images.style.transform=`translateX(-${i}%)`;
    images.dataset.index=i;
}


/// --- below the code for make images change automatically

// const slideShow=setInterval(() => {
//     i+=100;
//     if(i==400)
//         i=0;
//     images.style.transform=`translateX(-${i}%)`;
// },1500);



///  ----- below the code for the next image functionality

// next.addEventListener("click",()=>{
//     let i=images.dataset.index*1+100;
//     if(i==400)
//         i=500;
//     images.dataset.index=i;
//     images.style.transform=`translateX(-${i}%)`;
//     if(i==500){
//         i=0;
//         images.dataset.index=i;
//         images.style.transform=`translateX(-${i}%)`;
//     }
// })