<?php

  /*
 * Name: Mustafa Ahmed
 * Email: a.mustafa@wustl.edu
 * Assignment: Module 3 - News Sharing Site
 */

    //////////////////////////
    /////Account Deletion/////
    //////////////////////////

  session_start();
  require 'database.php';

  $user = $_SESSION['user'];

  $stmt = $mysqli->prepare("DELETE FROM users WHERE username = '$user'");
  if (!$stmt) {
      printf("Query Prep Failed: %s\n", $mysqli->error);
      exit;
  }

  //deletes the user from the sql table

  $stmt->execute();

  $stmt->close();

  header("Location: logout.php");
  exit();
?>
