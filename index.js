function onClick(id){
    document.getElementById('main_abtMe').style.display = "none";
/*     document.getElementById('abtMe').style.backgroundColor = 'black';
    document.getElementById('abtMe').style.color = 'white';
    document.getElementById('abtMe').style.border = 'none'; */
    document.getElementById('abtMe').classList.remove("active");

    document.getElementById('main_exp').style.display = "none";
/*     document.getElementById('exp').style.backgroundColor = 'black';
    document.getElementById('exp').style.color = 'white';
    document.getElementById('exp').style.border = 'none'; */
    document.getElementById('exp').classList.remove("active");

    document.getElementById('main_sklset').style.display = "none";
/*     document.getElementById('sklset').style.backgroundColor = 'black';
    document.getElementById('sklset').style.color = 'white';
    document.getElementById('sklset').style.border = 'none'; */
    document.getElementById('sklset').classList.remove("active");

    document.getElementById('main_edu').style.display = "none";
/*     document.getElementById('edu').style.backgroundColor = 'black';
    document.getElementById('edu').style.color = 'white';
    document.getElementById('edu').style.border = 'none'; */
    document.getElementById('edu').classList.remove("active");
    
    document.getElementById('main_pic').style.display = "none";
    var id1 = 'main_' + id;
    document.getElementById(id1).style.display = 'grid';
    document.getElementById(id).classList.add("active");
/*     document.getElementById(id).style.background = 'transparent';
    document.getElementById(id).style.color = 'black';
    document.getElementById(id).style.border = '2px solid black'; */
}
