
let task=[];

let inputPage1= `<div id="todoBodyContentClass">
          <input type="text" class="taskInputBoxClass" id="inputTask">
          <button id="buttonWithIconClass" onclick="ok()">ok</button>
          <button id="buttonWithIconClass" onclick="cancel()">Cancel</button>
        </div>`

let firstEnterTaskPage= `<h1 class="todoHeaderTextClass emptytodo">Please first Enter some task to add</h1>`

let emptyPage=`<h1 class="todoHeaderTextClass emptytodo">Oops ! No task present. To add new task click on 'plus' button below.</h1>`
//getting task from user
const addtodo=()=>{
  // console.log("added")
  let bodyC=document.getElementById('todoBodyClass');
  bodyC.innerHTML=inputPage1;
}

//add input to task array
function ok(){
  // console.log("ok pressed")
  let inputTask=document.getElementById("inputTask")
  // console.log("user entered value:",inputTask.value)
  let inputValue=inputTask.value;
  let bodyC=document.getElementById('todoBodyClass');
  if(inputValue.trim()===''){ // if input field is empty 
    // console.log("please first enter something")
    bodyC.innerHTML=firstEnterTaskPage; // changing the element 
  }
  else{ // if input field is not empty
    task.push(inputValue); //adding task to task array
    inputTask.value='' //empty input field
    bodyC.innerHTML=''
    loadTask();
  }
  console.log(task)
  
}


//cancel the input taken
const cancel=()=>{
  // console.log("cancelled")
  let bodyC=document.getElementById('todoBodyClass');
  if(task.length===0){ //initial if user pressed cancel when no task present
    // console.log("empty")
    bodyC.innerHTML=emptyPage; // show the empty task page again
  }
  else{ // if task present then load all of them
    // console.log("else");
    bodyC.innerHTML=''
    loadTask();
  }
}

//to load all the task in the page
const loadTask=()=>{
  console.log("number of task present:",task.length);
  console.log("tasks name:", task);
  let bodyC=document.getElementById('todoBodyClass');
  if(task.length===0){
    bodyC.innerHTML=emptyPage;
  }
  task.forEach((value,index)=>{
    bodyC.innerHTML=bodyC.innerHTML+`<div id="todoBodyContentClass">
          <input type="checkbox" id="TaskStatus${index}" class="taskCheckBoxClass">
          <h1 id="todoBodyTextClass">${value}</h1>
          <button id="buttonWithIconClass1" onclick="oneDel(${index})"><span class="material-symbols-outlined">delete</span></button>
        </div>`;
  })
  
}

//delete one by one task from array
const oneDel=(index)=>{
  task.splice(index,1);
  let bodyC=document.getElementById('todoBodyClass');
  bodyC.innerHTML=""
  loadTask();
}

//to reomve all task from the array in one go 
const removeAll=()=>{
  // console.log("removeall")
  task=[];
  let bodyC=document.getElementById('todoBodyClass');
  bodyC.innerHTML=emptyPage;
  // console.log(task);
}

//to remove selected task from the array
const removeSel=()=>{
  // console.log("remove selected");
  let sel=[];
  task.forEach((value,index)=>{
    let items=document.getElementById(`TaskStatus${index}`);
    if(items.checked){ 
      sel.push(index)
      // console.log(index)
      // oneDel(index);
      // let bodyC=document.getElementById('todoBodyClass');
      // bodyC.innerHTML='';
      // loadTask();
    }
    })
  console.log(sel)
  let flag=true;
    let count=0;
    sel.forEach((v,i)=>{
      // console.log("delete:",v)
      if(flag){
        flag=false;
        oneDel(v);
        count++;
      }
      else{
        v=v-count;
        oneDel(v);
        count++;
      }
    // console.log(task)
    // console.log(sel)
  })
}

