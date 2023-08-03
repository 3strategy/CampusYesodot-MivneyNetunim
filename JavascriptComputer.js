// BY:         May Goldshtain
// DATE:       04/11/2020

$(window).load(function () {
    do_things();
});

// #region FLOATING COURSE MENU */
$(document).ready(function () {
    //turn on the scroll indicator 

    window.onscroll = function () { scrollIndicator() };
    //open discussion
    $('.nav-item.tab').on("click", function () {
        discussion_show();
    });
    $('.sequence-nav-button.button-next').on("click", function () {
        discussion_show();
    });
    $('.sequence-nav-button.button-previous').on("click", function () {
        discussion_show();
    });

    discussion_show();
});

function discussion_show() {
    $('.discussion-show.btn').click();
};




const els = document.querySelectorAll("[type='radio']");
for (const el of els)
    el.addEventListener("input", e => reorder(e.target, els));
reorder(els[0], els);

function reorder(targetEl, els) {
    const nItems = els.length;
    let processedUncheck = 0;
    for (const el of els) {
        const containerEl = el.nextElementSibling;
        if (el === targetEl) { //checked radio
            containerEl.style.setProperty("--w", "100%");
            containerEl.style.setProperty("--l", "0");
        } else { //unchecked radios
            containerEl.style.setProperty("--w", `${100 / (nItems - 1)}%`);
            containerEl.style.setProperty("--l", `${processedUncheck * 100 / (nItems - 1)}%`);
            processedUncheck += 1;
        }
    }
}





var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var hwidth = 100 / slides;
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
// When the user scrolls the page, execute myFunction


function scrollIndicator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scrollIndicatorBar").style.width = scrolled + "%";
    console.log(scrolled + "%")
}
$(document).ready(function () {
    $(".submit-label").text("׳‘׳“׳™׳§׳”");
    //$(".option-input").each(function () {
    //    $('option:first').text('lvlv');
    //});
});

// #endregion



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