document.querySelector("#file-btn").addEventListener("click",()=>{
    closeBtns();
    document.querySelector("#createfile").style.display = "initial";
})

document.querySelector("#folder-btn").addEventListener("click",()=>{
    closeBtns();
    document.querySelector("#createfolder").style.display = "initial";
})

const closeBtns = ()=>{
    document.querySelector("#createfile").style.display = "none";
    document.querySelector("#createfolder").style.display = "none";
}