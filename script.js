var onep = document.getElementById("onep"); //L1
var two = document.getElementById("two"); //L2
var threep = document.getElementById("threep"); //L3
var four = document.getElementById("four"); //L4
var five = document.getElementById("five"); //L5
const score = document.getElementById("results"); //question no display
const topic = document.getElementById("topic"); //subject display
const lvl = document.getElementById("lvl"); //rightwrong display

const sphy = document.getElementById("sphy"); //subject display
const smth = document.getElementById("smth"); //subject display
const schm = document.getElementById("schm"); //subject display

const pbin = sessionStorage.getItem("PHY"); //toggle for physics
const mbin = sessionStorage.getItem("MAT"); //toggle for maths
const cbin = sessionStorage.getItem("CHE"); //toggle for chem

var pno = sessionStorage.getItem("PN"); //qn no for physics
var mno = sessionStorage.getItem("MN"); //qn no for maths
var cno = sessionStorage.getItem("CN"); //qn no for chem

var pqn = sessionStorage.getItem("PQ"); //lvl for physics
var mqn = sessionStorage.getItem("MQ"); //lvl no for maths
var cqn = sessionStorage.getItem("CQ"); //lvl no for chem

var pt = sessionStorage.getItem("PT"); //score for physics
var mt = sessionStorage.getItem("MT"); //score for maths
var ct = sessionStorage.getItem("CT"); //score for chem

var Rmodal = document.getElementById("myModalR");
var Rbtn = document.getElementById("myBtnR");

var Imodal = document.getElementById("myModalI");
var Ibtn = document.getElementById("myBtnI");

var yes = document.getElementById("yes");
var cancel = document.getElementById("cancel");

const finals = document.getElementById("finals");
const fscore = document.getElementById("fscore");
const sel = document.getElementById("sub");
const tri = document.getElementById("anis");
const subbut = document.getElementById("finalsub");


//physics object
let p = {
  no: 1,
  qn: 1,
  t: 0,
};

//chems object
let c = {
  no: 1,
  qn: 1,
  t: 0,
};

//maths object
let m = {
  no: 1,
  qn: 1,
  t: 0,
};

//loader
window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});


//physicstoggle
function physics() {
  sessionStorage.setItem("PHY", 1);
  sessionStorage.setItem("MAT", 0);
  sessionStorage.setItem("CHE", 0);
}

//mathstoggle
function maths() {
  sessionStorage.setItem("PHY", 0);
  sessionStorage.setItem("MAT", 1);
  sessionStorage.setItem("CHE", 0);
}

//mathstoggle
function chemistry() {
  sessionStorage.setItem("PHY", 0);
  sessionStorage.setItem("MAT", 0);
  sessionStorage.setItem("CHE", 1);
}

if (pbin == 1) {
  topic.innerHTML = "Physics:";
  if (pno > 1) {
    score.innerHTML = `Question no: ${pno}`;
    p.no = pno;
  } else {
    pno = 1;
    score.innerHTML = `Question no: ${1}`;
    p.no = pno;
  }
  if (pqn > 1) {
    checkqn(pqn);
    p.qn = pqn;
  } else {
    pqn = 1;
    checkqn(pqn);
    p.qn = pqn;
  }
  p.t = pt;
} else if (mbin == 1) {
  topic.innerHTML = "Maths:";
  if (mno > 1) {
    score.innerHTML = `Question no: ${mno}`;
    m.no = mno;
  } else {
    mno = 1;
    score.innerHTML = `Question no: ${1}`;
    m.no = mno;
  }
  if (mqn > 1) {
    checkqn(mqn);
    m.qn = mqn;
  } else {
    mqn = 1;
    checkqn(mqn);
    m.qn = mqn;
  }
  m.t = mt;
} else if (cbin == 1) {
  topic.innerHTML = "Chemistry:";
  if (cno > 1) {
    score.innerHTML = `Question no: ${cno}`;
    c.no = cno;
  } else {
    cno = 1;
    score.innerHTML = `Question no: ${1}`;
    c.no = cno;
  }
  if (cqn > 1) {
    checkqn(cqn);
    c.qn = cqn;
  } else {
    cqn = 1;
    checkqn(cqn);
    c.qn = cqn;
  }
  c.t = ct;
}

if (pbin == 1 || mbin == 1 || cbin == 1) {
} else {
  if (pno === null) {
    pno = 1;
  }
  if (cno === null) {
    cno = 1;
  }
  if (mno === null) {
    mno = 1;
  }
}


//clickonright
function green() {
  score.style = "color:#01fe1f;"; //greencolourofqnno

  if (pbin == 1) {
    score.innerHTML = `Question no: ${parseInt(p.no) + 1}`;
    p.no++;
    sessionStorage.setItem("PN", p.no);
    rightqn(p);
    if(p.no>=41){
      score.innerHTML="Physics Completed!<br>Please return to complete the remaining<br> question or Sumbit your score.";
      lvl.innerHTML="";
    }
    p.qn++;
    sessionStorage.setItem("PQ", p.qn);
    sessionStorage.setItem("PT", p.t);
  } else if (mbin == 1) {
    score.innerHTML = `Question no: ${parseInt(m.no) + 1}`;
    m.no++;
    sessionStorage.setItem("MN", m.no);
    rightqn(m);
    if(m.no>=41){
      score.innerHTML="Maths Completed!<br>Please return to complete the remaining<br> question or Sumbit your score.";
      lvl.innerHTML="";
    }
    m.qn++;
    sessionStorage.setItem("MQ", m.qn);
    sessionStorage.setItem("MT", m.t);
  } else if (cbin == 1) {
    score.innerHTML = `Question no: ${parseInt(c.no) + 1}`;
    c.no++;
    sessionStorage.setItem("CN", c.no);
    rightqn(c);
    if(c.no>=41){
      score.innerHTML="Chemistry Completed!<br>Please return to complete the remaining<br> question or Sumbit your score.";
      lvl.innerHTML="";
    }
    c.qn++;
    sessionStorage.setItem("CQ", c.qn);
    sessionStorage.setItem("CT", c.t);
  }
}

function red() {
  score.style = "color:#c62323;"; //redcolorofqnnno

  if (pbin == 1) {
    score.innerHTML = `Question no: ${parseInt(p.no) + 1}`;
    p.no++;
    sessionStorage.setItem("PN", p.no);
    wrongqn(p);
    if(p.no>=41){
      score.innerHTML="Physics Completed!<br>Please return to complete the remaining<br> question or Sumbit your score.";
      lvl.innerHTML="";
    }
    p.qn--;
    sessionStorage.setItem("PQ", p.qn);
  } else if (mbin == 1) {
    score.innerHTML = `Question no: ${parseInt(m.no) + 1}`;
    m.no++;
    sessionStorage.setItem("MN", m.no);
    wrongqn(m);
    if(m.no>=41){
      score.innerHTML="Maths Completed!<br>Please return to complete the remaining<br> question or Sumbit your score.";
      lvl.innerHTML="";
    }
    m.qn--;
    sessionStorage.setItem("MQ", m.qn);
  } else if (cbin == 1) {
    score.innerHTML = `Question no: ${parseInt(c.no) + 1}`;
    c.no++;
    sessionStorage.setItem("CN", c.no);
    wrongqn(c);
    if(c.no>=41){
      score.innerHTML="Chemistry Completed!<br>Please return to complete the remaining<br> question or Sumbit your score.";
      lvl.innerHTML="";
    }
    c.qn--;
    sessionStorage.setItem("CQ", c.qn);
  }
}

function rightqn(obj) {
  if (obj.qn == 1) {
    obj.t =+obj.t+ 11;
    onep.style.backgroundColor = "#ffffff";
    two.style.backgroundColor = "#8993d7";
  } else if (obj.qn == 2) {
    obj.t =+obj.t+ 13;
    two.style.backgroundColor = "#ffffff";
    threep.style.backgroundColor = "#8993d7";
  } else if (obj.qn == 3) {
    obj.t =+obj.t+ 15;
    threep.style.backgroundColor = "#ffffff";
    four.style.backgroundColor = "#8993d7";
  } else if (obj.qn == 4) {
    obj.t =+obj.t+ 17;
    four.style.backgroundColor = "#ffffff";
    five.style.backgroundColor = "#8993d7";
  } else if (obj.qn == 5 || obj.qn > 5) {
    obj.qn = 4;
    obj.t =+obj.t+ 19;
  }
}

function wrongqn(obj) {
  if (obj.qn == 1 || obj.qn < 1) {
    obj.qn = 2;
    onep.style.backgroundColor = "#8993d7";
  } else if (obj.qn == 2) {
    onep.style.backgroundColor = "#8993d7";
    two.style.backgroundColor = "#ffffff";
  } else if (obj.qn == 3) {
    two.style.backgroundColor = "#8993d7";
    threep.style.backgroundColor = "#ffffff";
  } else if (obj.qn == 4) {
    threep.style.backgroundColor = "#8993d7";
    four.style.backgroundColor = "#ffffff";
  } else if (obj.qn == 5) {
    four.style.backgroundColor = "#8993d7";
    five.style.backgroundColor = "#ffffff";
  }
}

function checkqn(obj) {
  if (obj == 1) {
    onep.style.backgroundColor = "#8993d7";
  } else if (obj == 2) {
    two.style.backgroundColor = "#8993d7";
  } else if (obj == 3) {
    threep.style.backgroundColor = "#8993d7";
  } else if (obj == 4) {
    four.style.backgroundColor = "#8993d7";
  } else if (obj == 5) {
    five.style.backgroundColor = "#8993d7";
  }
}
function gb() {
  sessionStorage.setItem("PHY", 0);
  sessionStorage.setItem("MAT", 0);
  sessionStorage.setItem("CHE", 0);
}

$(document).ready(function() {
  var button = $("#myButton");
  var dd = $("#dc");

  button.mouseenter(function() {
    $(this).addClass("grow");
  });
  button.mouseleave(function() {
    $(this).removeClass("grow");
  });
  dd.mouseenter(function() {
    button.addClass("grow");
  });
  dd.mouseleave(function() {
    button.removeClass("grow");
  });
});

if(pno>40){
  sphy.innerHTML += `<br><br><br><br><br>${pno - 1}/40`;
  sphy.style ="pointer-events:none;";
}
else{
  sphy.innerHTML += `<br><br><br><br><br>${pno - 1}/40`;
}
if(mno>40){
  smth.innerHTML += `<br><br><br><br><br>${mno - 1}/40`;
  smth.style ="pointer-events:none;";
}
else{
  smth.innerHTML += `<br><br><br><br><br>${mno - 1}/40`;
}
if(cno>40){
  schm.innerHTML += `<br><br><br><br><br>${cno - 1}/40`;
  schm.style ="pointer-events:none;";
}
else{
  schm.innerHTML += `<br><br><br><br><br>${cno - 1}/40`;
}





Rbtn.onclick = function() {
  Rmodal.style.display = "block";
}
function xR() {
  Rmodal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == Rmodal) {
    Rmodal.style.display = "none";
  }
}

Ibtn.onclick = function() {
  Imodal.style.display = "block";
}
function xI() {
  Imodal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == Imodal) {
    Imodal.style.display = "none";
  }
}

cancel.onclick = function() {
  Rmodal.style.display = "none";
}

function reset() {
  location.href='index.html';
  sessionStorage.setItem("PT", 0);
  sessionStorage.setItem("MT", 0);
  sessionStorage.setItem("CT", 0);
  sessionStorage.setItem("PQ", null);
  sessionStorage.setItem("MQ", null);
  sessionStorage.setItem("CQ", null);
  sessionStorage.setItem("PN", 1);
  sessionStorage.setItem("MN", 1);
  sessionStorage.setItem("CN", 1);

}

function sub() {
  console.log(pt,ct,mt);
  if ( pt === null) {
    pt=0;
  }
  if ( ct === null) {
    ct=0;
  }
  if ( mt === null) {
    mt=0;
  }
  finals.style="display:inline-block;";
  fscore.innerHTML+=(`Final Score:  ${parseInt(pt) + parseInt(ct) + parseInt(mt)}`);
  tri.innerHTML="";
  subbut.style="display:none;";
  sel.innerHTML="";
}

