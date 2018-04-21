<?php
//connect to DB and store at conn
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "todo1";
$conn = new mysqli($servername, $username, $password,$dbname);

//to establish route?
if($_GET){
if($_GET['function']=='getTasks') getTasks();
if($_GET['function']=='addTask') addTask();
if($_GET['function']=='editTask') editTask($_GET['id']);
if($_GET['function']=='deleteTask') deleteTask($_GET['id']);


}


//wala sa code ni sir
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// } 

function getTasks(){
$sql = "SELECT * FROM `lists`";
$result = $GLOBALS['conn']->query($sql);
if ($result->num_rows > 0) {
	//open JSON
    $resp = '[';
     while($row = $result->fetch_assoc()) {
            $resp .= '{"id" : '.'"'.$row['id'].'",';
            $resp .= '"task" : '.'"'.$row['task'].'"},';
            //$resp .= '"lname" : '.'"'.$row['lname'].'"},';
        }
        //echo "<a href='view.php?id=".$row['id']."'>View Profile</a>".$row['fname']." ".$row['lname']."<br>";
    
    $resp .= ']';
    $resp = str_replace(',]',']',$resp);//since output is [{"fname":"fname","lname":"lname",} remove last unnecessary comma
    echo $resp;
    //same with phplogin
}
}



function addTask(){
$task=$_POST['task'];
// $lname=$_POST['lname'];
// $email=$_POST['email'];
// $password=$_POST['password'];
// $number=$_POST['number'];

$sql = "INSERT INTO `lists` (`id`, `task`) VALUES (NULL, '".$task."');";

//$sql = "INSERT INTO `users` (`id`, `fname`, `lname`, `email`, `password`, `number`) VALUES (NULL, '".$fname."', '".$lname."', '".$email."', MD5('".$password."'), '".$number."');";
//get from JS using form data
$result = $GLOBALS['conn']->query($sql);
}

function deleteTask($id){
$sql = "DELETE FROM `lists` WHERE `id` = ".$id."";
$result = $GLOBALS['conn']->query($sql);
}


function editTask($id){
$task=$_POST['task'];
// $lname=$_POST['lname'];
// $email=$_POST['email'];
// $password=$_POST['password'];
// $number=$_POST['number'];

$sql = "UPDATE `lists` SET `task` = '".$task."' WHERE `id` = ".$id."";
$result = $GLOBALS['conn']->query($sql);
}




?>
