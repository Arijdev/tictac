let boxtext = document.getElementsByClassName("boxtext");
let audio= new Audio("ting.mp3");
let info = document.getElementsByClassName("info");
let reset = document.getElementById("reset")
let box= Array.from(document.getElementsByClassName("box"));
let tern ="X";
let over=false;
const changeTurn=()=>{
    return tern==="X"?"0":"X";
}
box.forEach((element,i)=>{
    element.addEventListener("click", (e)=>{
        if(boxtext[i].innerText===""){
            boxtext[i].innerText=tern
            tern=changeTurn();
            audio.play();
            check();
        }
        if(!over){
            info[0].innerText=`Turn for ${tern}`;
            
        }
    })
    reset.addEventListener("click",()=>{
        boxtext[i].innerHTML="";
        over=false;
        info[0].innerText=`Turn for ${tern}`;
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0";
        document.querySelector('.line').style.width="0vw";
    })
})
const check=()=>{

let win =[
    [0,1,2,0,5,0],
    [3,4,5,0,15,0],
    [6,7,8,0,25,0],
    [0,3,6,-10,15,90],
    [1,4,7,0,15,90],
    [2,5,8,10,15,90],
    [0,4,8,0,15,-135],
    [2,4,6,0,15,135],
]
win.forEach(e=>{
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=="")){
        info[0].innerText=(boxtext[e[0]].innerText+" won");
        over=true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        audio1= new Audio("mixkit.wav");
        audio1.play();
        document.querySelector('.line').style.width="30vw";
        document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
    }
})
}