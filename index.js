function onClick(id){
    document.getElementById('main_abtMe').style.display = "none";
    document.getElementById('abtMe').classList.remove("active");
    document.getElementById('main_exp').style.display = "none";
    document.getElementById('exp').classList.remove("active");
    document.getElementById('main_sklset').style.display = "none";
    document.getElementById('sklset').classList.remove("active");
    document.getElementById('main_edu').style.display = "none";
    document.getElementById('edu').classList.remove("active");
    document.getElementById('main_pic').style.display = "none";
    var id1 = 'main_' + id;
    document.getElementById(id1).style.display = 'grid';
    id != "pic" ? document.getElementById(id).classList.add("active") : "";
}

function scrll2Bttm(){
/*     setTimeout(() => {
        var element = document.getElementsByTagName("BODY");
        console.log("---------------------------   " , element[0])
        element.scrollTop = element[0].scrollHeight;    
    }, 3000); */
    var element = document.getElementsByTagName("BODY");
    console.log("---------------------------   " , element[0])
    window.scrollTo(0, element[0].scrollHeight);
}