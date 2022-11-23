// alert("Loading Page");
function addNewWEField(){
//    console.log("Adding New Field  ");
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","EnterHere");

    let weOb=document.getElementsById("we");
    let weAddButtonOb= document.getElementsById("weAddButtom");


    weOb.insertBefore(newNode, weAddButtonOb);

 }

 //generating resume
 function generateResume(){
    // console.log("new field");
    let nameField = document.getElementById('namefield').value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = nameField;
    document.getElementById("nameT2").innerHTML = namefield;
 }

    //contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    //address
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    //linkedin
    document.getElementById("LinkedInfield").innerHTML = document.getElementById("linkedinF").value;
    //github
    document.getElementById("GitHubfield").innerHTML = document.getElementById("githubF").value;
    //twitter
    document.getElementById("Twitterfield").innerHTML = document.getElementById("twitterF").value;
    //leetcode
    document.getElementById("LeetCodefield").innerHTML = document.getElementById("leetcodeF").value;
    //objective
    document.getElementById("objectivefield").innerHTML = document.getElementById("objectiveField").value;
    //work experience
    let wes = document.getElementsByClassName('weField');
    let str = "";
    for(let e of wes){
        str = str + `<li>${e.value}</li>`;
    }
    document.getElementById('wet').innerHTML = str;
    // academic qualification
    let aqs = document.getElementsByClassName('edField');
    let str1 = "";
    for(let e of aqs){
        str1 += `<li>${e.value}</li>`;
    }
    document.getElementById('aq').innerHTML = str1;

    document.getElementById('resume-form').style.display='none';
    document.getElementById('resume-template').style.display='block';

    function printResume(){
        window.print();
    }
 