var style = document.createElement("style");
document.head.appendChild(style);
//fyp view
style.sheet.insertRule(".jsx-3143759217.event-delegate-mask { display: none ;}", 0);

//Comment view
style.sheet.insertRule(".jsx-766879148.event-delegate-mask { display: block ; transform: translate(-50%, -50%) ; top: 50% !important ; left: 50% !important ; height: 70px !important ; width: 70px !important ;}", 0);

//Direct link
style.sheet.insertRule(".tiktok-qigcch-DivVideoControlContainer { position: initial ; width: 0px ; height: 0px ;}",0);
style.sheet.insertRule(".tiktok-i8t918-SvgPlayIcon {display: none ;}", 0);

//Hack to make direct links to play when clicking video.
function VideoControl(){
    let video =  document.getElementsByTagName("video")[0];
    if (video.paused){
        video.play();
    } else {
        video.pause();
    }
}

function AddListener(){
    let video = document.getElementsByTagName("video")[0];
    video.addEventListener("click", VideoControl, false);
}

AddListener();

window.addEventListener('click', function () {
    AddListener();
});