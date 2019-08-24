function onClick(id) {
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

function scrll2Bttm() {
    var element = document.getElementsByTagName("BODY");
    window.scrollTo(0, element[0].scrollHeight);
}

function onResize() {
    var x = window.document.body.clientWidth;
    var y = window.document.body.clientHeight;
    var elem = document.getElementById("fallbackui");
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.replace("https://m-mittal.github.io/mob-profile/");
    }
    if (x < 1200 || y < 580) {
        elem.style.display = "block";
    } else {
        elem.style.display = "none";
    }
}

function showPopup(){
    document.getElementById("loginpopup").style.display = "block";
}

function hidePopup(){
    document.getElementById("loginpopup").style.display = "none";
}

function dwnldNhidePopup(){
    if(document.getElementById("dwnldCv").href.indexOf("/Resume.pdf") > -1 ){
        document.getElementById("loginpopup").style.display = "none";
    }
}

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
    }
    return false;
}

function validateMob(num) {
    if (/^\d{10}$/.test(num)) {
        return true;
    }
    return false;
}

function validateName(nam) {
    if (nam.length >= 3) {
        return true;
    }
    return false;
}

var currIndex = -1, lastIndex = -1 , animeId = -1, selectedElemId = "", inptFormVals = {};
var numStr = "0123456789";

function extractAndStore(id){
    var elem = document.getElementById(id);
    var count = elem.childElementCount;
    var str = "";
    for(var i = 0 ; i < count ; i++){
        str = str + document.getElementById(id).getElementsByTagName("span")[i].innerText;
    }
    inptFormVals[id] = str;
    inptFormVals[id + "-valid"] = false;
}

function validateValues(id){
    if(id == "inpEml1" || id == "inpEml2"){
        if( inptFormVals.hasOwnProperty("inpEml1") && inptFormVals.hasOwnProperty("inpEml2") ){
            var email = inptFormVals.inpEml1 + "@" + inptFormVals.inpEml2;
            if( !validateEmail(email) ){
                document.getElementById("inpEml1").classList.remove('valid');
                document.getElementById("inpEml2").classList.remove('valid');
                document.getElementById("inpEml1").classList.add("invalid");
                document.getElementById("inpEml2").classList.add("invalid");
                inptFormVals["inpEml-valid"] = false;
            }else{
                document.getElementById("inpEml1").classList.remove('invalid');
                document.getElementById("inpEml2").classList.remove('invalid');
                document.getElementById("inpEml1").classList.add("valid");
                document.getElementById("inpEml2").classList.add("valid");
                inptFormVals["inpEml-valid"] = true;
            };
        };
    }else if( id == "inpMob" ){
        if( inptFormVals.hasOwnProperty("inpMob") ){
            if( !validateMob(inptFormVals.inpMob ) ){
                document.getElementById("inpMob").classList.remove('valid');
                document.getElementById("inpMob").classList.add("invalid");
                inptFormVals[id + "-valid"] = false;
            }else{
                document.getElementById("inpMob").classList.remove('invalid');
                document.getElementById("inpMob").classList.add("valid");
                inptFormVals[id + "-valid"] = true;
            }
        }
    }else if( id == "inptName" ){
        if( inptFormVals.hasOwnProperty("inptName") ){
            if( !validateName(inptFormVals.inptName ) ){
                document.getElementById("inptName").classList.remove('valid');
                document.getElementById("inptName").classList.add("invalid");
                inptFormVals[id + "-valid"] = false;
            }else{
                document.getElementById("inptName").classList.remove('invalid');
                document.getElementById("inptName").classList.add("valid");
                inptFormVals[id + "-valid"] = true;
            }
        }
    }else if( id == "inpCompny" ){
        if( inptFormVals.hasOwnProperty("inpCompny") ){
            if( !validateName(inptFormVals.inpCompny ) ){
                document.getElementById("inpCompny").classList.remove('valid');
                document.getElementById("inpCompny").classList.add("invalid");
                inptFormVals[id + "-valid"] = false;
            }else{
                document.getElementById("inpCompny").classList.remove('invalid');
                document.getElementById("inpCompny").classList.add("valid");
                inptFormVals[id + "-valid"] = true;
            }
        }
    }

    if( inptFormVals["inpCompny-valid"] == true && inptFormVals["inpEml-valid"] == true && inptFormVals["inpMob-valid"] == true && inptFormVals["inptName-valid"] == true ){
        document.getElementById("dwnldCv").setAttribute("href", "./Resume.pdf");
    }else{
        document.getElementById("dwnldCv").removeAttribute('href');
    }
}

/* 
inpCompny: "n"
inpCompny-valid: false
inpEml1: "n"
inpEml1-valid: false
inpEml2: "nbn.com"
inpEml2-valid: false
inpEml-valid: true
inpMob: "9999999999"
inpMob-valid: true
inptName: "n"
inptName-valid: false */


function onFocussed(id){
    selectedElemId = id;
    clearInterval(animeId);
    var inptLngth = document.getElementById(id).childElementCount;
    if(inptLngth == 1){
        lastIndex = inptLngth -1;
        var elem = document.getElementById( selectedElemId + "-0");
        if( elem.innerHTML.indexOf("&nbsp;") == -1 ){
            addPos(id);
            currIndex = lastIndex;
        }else{
            currIndex = 0;
        }
    }else if(inptLngth > 1){
        lastIndex = inptLngth -1;
        addPos(id);
        currIndex = lastIndex;
    }
    animatePos( selectedElemId + "-" + currIndex );
}

function onFocusOut(id){
    clearInterval(animeId);
    var currPos = document.getElementById(id + "-" + currIndex);
    currPos.style.textDecoration = "underline";
    var elem = document.getElementById(id);
    if(lastIndex > 0){
        var delPos = document.getElementById(id + "-" + lastIndex);
        elem.removeChild(delPos);
    }
    currIndex = -1;
    lastIndex = -1;
    selectedElemId = "";
    extractAndStore(id);
    validateValues(id);
}

function moveCurrPos(direct){
    if( !(direct == 'left' && currIndex == 0) || !(direct == 'right' && currIndex == lastIndex) ){
        var elem = document.getElementById( selectedElemId + "-" + currIndex );
        clearInterval(animeId);
        elem.style.textDecoration = "underline";
        direct == 'right' ? ++currIndex : --currIndex;
        animatePos(selectedElemId + "-" + currIndex);
    }
}

function resetElemDom(index, operation){
    if(operation == 'del'){
        for(let i = index; i <= lastIndex; i++){
            var newId = i-1;
            document.getElementById(selectedElemId + "-" + i).id = selectedElemId + "-" + newId;
        }
        --lastIndex;
    }else if(operation == 'add'){
        for(let i = lastIndex; i >= currIndex; i--){
            var newId = i+1;
            document.getElementById( selectedElemId + "-" + i ).id = selectedElemId + "-" + newId;
        }
        ++lastIndex;
    }
}

function deletePos(id){
    var elem = document.getElementById(id);
    var delPosIndx = currIndex -1;
    var delPos = document.getElementById( selectedElemId + "-" + delPosIndx );
    elem.removeChild(delPos);
    resetElemDom(currIndex, 'del');
    --currIndex;
}

function addPos(id){
    var elem = document.getElementById(id);
    var newID = ++lastIndex;
    var newElem = document.createElement('span');
    newElem.className = 'def';
    newElem.id = selectedElemId + "-" + newID;
    newElem.innerHTML = "&nbsp;";
    elem.appendChild(newElem);
    var inrHtml = elem.innerHTML;
    elem.innerHTML = inrHtml + `
    
    `;
}

function addPosInMid(id){
    var elem = document.getElementById(id);
    var newElem = document.createElement('span');
    newElem.className = 'def';
    newElem.id = selectedElemId + "-" + currIndex;
    newElem.innerHTML = "&nbsp;";
    var insrtBfrId = currIndex + 1;
    elem.insertBefore(newElem, document.getElementById( selectedElemId + "-" + insrtBfrId )); 
    var textNode = document.createTextNode(`

    `);
    elem.insertBefore(textNode, document.getElementById( selectedElemId + "-" + insrtBfrId )); 
}

function onKeyPress(e, id){
    if( (e.keyCode >= 65 && e.keyCode <= 122) || (numStr.indexOf(e.key) > -1) || e.key == '.'){  //A-Z a-z . key press
        if(currIndex == lastIndex){
            var elem = document.getElementById( selectedElemId + "-" + currIndex );
            elem.innerText = e.key;
            addPos(id);
            moveCurrPos("right");
        }else{
            resetElemDom('', 'add');
            addPosInMid(id);
            var elem = document.getElementById( selectedElemId + "-" + currIndex );
            elem.innerText = e.key;
            moveCurrPos("right");
        }
    }else if( e.keyCode == 8 && currIndex >= 0 ){  // backspace
        if(currIndex != 0){
            deletePos(id);
        }
    }else if( e.keyCode == 39 && currIndex < lastIndex ){  // right arrow
        var elem = document.getElementById( selectedElemId + "-" + currIndex );
        if( currIndex < lastIndex ){
            moveCurrPos("right");
        }else if(currIndex == lastIndex){
            addPos(id);
        }
    }else if( e.keyCode == 37 && currIndex > 0 ){  // left arrow
        moveCurrPos("left");
    }else if( e.key == '@'/* 64 */ && selectedElemId == 'inpEml1'){
        document.getElementById("inpEml2").focus();
    }
}

function animatePos(id){
    var elem = document.getElementById(id);
    animeId = setInterval(function(){
        elem.style.textDecoration == "underline" ? elem.style.textDecoration = "none" : elem.style.textDecoration = "underline";
    },
    250)
}