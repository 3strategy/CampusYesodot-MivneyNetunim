// BY:         May Goldshtain
// DATE:       04/11/2020

$(window).load(function () {
    do_things();
});


function do_things() {
    try { }
    catch (err) { }
}
 

function toggle_upgrade_btn() {
    var x = document.getElementById("upgrade_expand");
    y = document.getElementById("upgrade_title");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.setAttribute("aria-expanded", true);
    } else {
        x.style.display = "none";
        y.setAttribute("aria-expanded", false);
    }
}


function toggle_visibility(id) {
    if (id.includes("topic")) {
        toggle_title(id)
    }
    else if (id.includes("corner")) {
        toggle_corner(id)
    }
    else {
        var e = document.getElementById(id);
        if (e.style.display == 'block') {
            e.style.display = 'none';
        }
        else {
            e.style.display = 'block';
        }
    }
}
function toggle_corner(id) {
    var corner = document.getElementById(id);
    var the_corner = document.getElementById("the_" + id);
    splitedData = id.split('_');
    contID = "cont"
    for (i = 1; i < splitedData.length; i++) {
        contID += "_" + splitedData[i]
    }
    var contRead = document.getElementById(contID);
    if (contRead.style.display == 'none') {
        corner.style.display = 'none';
        contRead.style.display = 'inline-block';
        the_corner.setAttribute("aria-expanded", false);
    }
    else {
        corner.style.display = 'block';
        contRead.style.display = 'none';
        the_corner.setAttribute("aria-expanded", true);
    }
}
// OLD!!! 
// function toggle_title(id) {
//     var e = document.getElementById(id);
//     var name = document.getElementsByName(id);
//     if (e.style.display == 'block') {
//         e.style.display = 'none';
//         name[0].setAttribute("aria-expanded", false);
//     }
//     else {
//         e.style.display = 'block';
//         name[0].setAttribute("aria-expanded", true);
//     }
// }
function toggle_title(id) {
    var e = document.getElementById(id);
    var name = document.getElementsByClassName("box_title");
    topicNumber = parseInt(id[id.length - 1]) - 1;
    // alert(name.length + " - " + topicNumber)
    if (e.style.display == 'block') {
        e.style.display = 'none';
        name[topicNumber].setAttribute("aria-expanded", false);
    }
    else {
        e.style.display = 'block';
        name[topicNumber].setAttribute("aria-expanded", true);
    }
}

function expand_code(codeid, buttonid) {
    var c = document.getElementById(codeid);
    var b = document.getElementById(buttonid);
    c.style.display = 'block';
    c.focus();
    b.style.display = 'none';
}

function show_answer(id) {
    var e = document.getElementById(id);
    e.style.display = 'block';
    e.focus();
}

function openGraphPopup(imgFileName, pWidth = 200, pHeight = 100) {
    var baseUrl = "https://courses.campus.gov.il/asset-v1:MoE+EDU_Matric_ComputerScienceA_HE+2023_1+type@asset+block@";
    //alert(".js: "+pWidth+"  "+pHeight+"  "+baseUrl+imgFileName);
    window.open(baseUrl + imgFileName, 'popU', 'width=' + pWidth + ',height=' + pHeight); return false;
}

function openCodePopup(imgFileName, pWidth = 800, pHeight = 600) {
    var baseUrl = window.location.origin ;
    var path = window.location.pathname;
    path = path.replace("courses/course-v1:", "asset-v1:");
    path = path.substring(0, path.indexOf('/courseware'));
    baseUrl += path + "+type@asset+block@";
    //alert(baseUrl);
    window.open(baseUrl + imgFileName, 'popU', 'width=' + pWidth + ',height=' + pHeight);
    return false;
}

function toggleSwiftly() {
    var list = document.querySelectorAll('div.code, div.code2');
    for (var i = 0; di = list[i]; i++) {
        di.classList.toggle("code");
        di.classList.toggle("code2");
        di.classList.toggle("swiftly");
        di.classList.toggle("swift2ly");
    }
}

function daniTest() {
    alert("Dani Rubin")
}