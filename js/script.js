// alert("Loading Page");
function addNewWEField(){
//    console.log("Adding New Field  ");
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","EnterHere");

    let weOb=document.getElementById("we");
    let weAddButtonOb= document.getElementById("weAddButtom");


    weOb.insertBefore(newNode, weAddButtonOb);

 }

 //generating resume
 function generateResume(){
    // console.log("new field");
    let nameField = document.getElementById('namefield').value;
    let nameT1 = document.getElementById('nameT1');
    nameT1.innerHTML = nameField;
    document.getElementById("nameT2").innerHTML = nameField;
    // console.log(nameField);
    //contact
    document.getElementById("contactT").innerHTML = document.getElementById("contactfield").value;
    // console.log( document.getElementById("contactfield").value);
    //address
    // console.log( document.getElementById("addfield").value);
    document.getElementById("addressT").innerHTML = document.getElementById("addfield").value;
    
    //linkedin
    document.getElementById("lh").href= document.getElementById("LinkedInfield").value;
    document.getElementById("lh").innerHTML = document.getElementById("LinkedInfield").value;
    //github
    document.getElementById("gh").href= document.getElementById("GitHubfield").value;
    document.getElementById("gh").innerHTML = document.getElementById("GitHubfield").value;
    //twitter
    document.getElementById("th").href= document.getElementById("Twitterfield").value;
    document.getElementById("th").innerHTML = document.getElementById("Twitterfield").value;
    //leetcode
    document.getElementById("lch").href= document.getElementById("LeetCodefield").value;
    document.getElementById("lch").innerHTML = document.getElementById("LeetCodefield").value;
    
    //objective
    document.getElementById("objectiveField").innerHTML = document.getElementById("objectivefield").value;
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
}

    function printResume(){
        window.print();
    }
 