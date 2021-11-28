// get references
let inputRef = document.getElementById("inputEnterTask")
let addTaskBtnRef = document.getElementById('addbtn');

addTaskBtnRef.addEventListener("click", ()=>{
    // get reference 
    let inputRefValue = inputRef.value;

      //   new line br tag
  let br = document.createElement("br");



  // create paragraph
  let pRef = document.createElement("p");
  pRef.append(inputRefValue);
  pRef.style.marginLeft = "40%"
    pRef.style.display = "inline"
   pRef.style.marginTop = "1rem"
  pRef.style.marginRight = "2rem"

  //   create edit button
  let editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.style.padding = "3px";
  editButton.style.width = "6rem";
  editButton.style.marginTop = "1rem";
  editButton.style.marginRight = "2rem";
  editButton.style.backgroundColor = "green";
  editButton.style.border = "none";
  editButton.style.color = "#ffff";

  //   create delete button
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.style.padding = "3px";
  deleteButton.style.width = "7rem";
  deleteButton.style.backgroundColor = "red";
  deleteButton.style.border = "none";
  deleteButton.style.color = "#ffff";

  //append elements on document
  document.querySelector("div").appendChild(pRef);
  document.querySelector("div").appendChild(editButton);
  document.querySelector("div").appendChild(deleteButton);
  document.querySelector("div").appendChild(br);
})
