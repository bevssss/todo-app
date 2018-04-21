function getTasks(){
var endPoint= "functions.php?function=getTasks";
var xhr = new XMLHttpRequest();
xhr.open('GET', endPoint, true);
xhr.onload = function() {
  if (this.status == 200) {
    var r = JSON.parse(this.response);
    var x='';

      for (var i = 0, len = r.length; i < len; i++) {
      x += '<div class="task-list" id="'+r[i].id+'">'+r[i].task+'<div class="icon-buttons"><button class="btn btn-light icon-button" onclick="editTaskForm('+r[i].id+')"><i class="far fa-edit"></i></button><button class="btn btn-light icon-button" onclick="deleteTask('+r[i].id+')"><i class="far fa-trash-alt"></i></button></div></div>';
         // x += '<div id="'+r[i].id+'"><button onclick="editTaskForm('+r[i].id+')">edit</button><button onclick="deleteTask('+r[i].id+')">delete</button>'+r[i].task+'</div>';
      
      // x += '<div id="'+r[i].id+'"><li><div class="side-button"><div class="edit"><i onclick="editTaskForm('+r[i].id+') class="far fa-edit"></i></div><div class="remove"><i onclick="deleteTask('+r[i].id+')" class="far fa-trash-alt"></i></div></div></li></div>';
//       <!-- <i class="far fa-edit"></i> -->
// <!-- <i class="far fa-trash-alt"></i> -->
// <!-- <i class="fas fa-plus"></i> -->

      
      }
    document.getElementById('app').innerHTML = x;

  };
};
xhr.send();
}

function addTaskForm(){
  var x='';
  x+='<input class="add-task" type="text" name="task"><br>';
  // x+='Last Name: <input type="text" name="lname"><br>';
  // x+='Email: <input type="text" name="email"><br>';
  // x+='Password: <input type="text" name="password"><br>';
  // x+='Number: <input type="text" name="number"><br>';
  x+='<input type="hidden" name="id"><br>';
  x+='<div class="add"><button class="btn btn-light" onclick="addTask()">Add Task</button></div>';
  document.getElementById('app').innerHTML = x;
}

function addTask(){
var endPoint= "functions.php?function=addTask";

var formData = new FormData();

formData.append("task", document.getElementsByName("task")[0].value);
// formData.append("lname", document.getElementsByName("lname")[0].value);
// formData.append("email", document.getElementsByName("email")[0].value);
// formData.append("password", document.getElementsByName("password")[0].value);
// formData.append("number", document.getElementsByName("number")[0].value);


var xhr = new XMLHttpRequest();
xhr.open('POST', endPoint, true);

xhr.onload = function() {
  if (this.status == 200) {
    getTasks();
  };
};
xhr.send(formData);
}


function deleteTask(id){
var endPoint= "functions.php?function=deleteTask&id="+id;

var xhr = new XMLHttpRequest();
xhr.open('GET', endPoint, true);

xhr.onload = function() {
  if (this.status == 200) {
    getTasks();
  };
};
xhr.send();
}

function editTaskForm(id){
  var endPoint= "functions.php?function=editTask&id="+id;
  var x='';
  var xhr = new XMLHttpRequest();
  xhr.open('POST', endPoint, true);
  xhr.onload = function() {
  if (this.status == 200) {
      x+='<input class="edit-task" type="text" name="task"><br>';
      // x+='Last Name: <input type="text" name="lname"><br>';
      // x+='Email: <input type="text" name="email"><br>';
      // x+='Password: <input type="text" name="password"><br>';
      // x+='Number: <input type="text" name="number"><br>';
      x+='<div class="add"><button class="btn btn-light" onclick="editTask('+id+')">Save Changes</button></div>';
      document.getElementById('app').innerHTML = x;
  };
};
xhr.send();


}

function editTask(id){
var endPoint= "functions.php?function=editTask&id="+id;

var formData = new FormData();

formData.append("task", document.getElementsByName("task")[0].value);
// formData.append("lname", document.getElementsByName("lname")[0].value);
// formData.append("email", document.getElementsByName("email")[0].value);
// formData.append("password", document.getElementsByName("password")[0].value);
// formData.append("number", document.getElementsByName("number")[0].value);


var xhr = new XMLHttpRequest();
xhr.open('POST', endPoint, true);

xhr.onload = function() {
  if (this.status == 200) {
    getTasks();
  };
};
xhr.send(formData);
}
