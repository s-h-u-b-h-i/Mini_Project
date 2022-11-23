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