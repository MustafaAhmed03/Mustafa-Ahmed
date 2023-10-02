<?php

 /*
 * Name: Mustafa Ahmed
 * Email: a.mustafa@wustl.edu
 * Assignment: Module 3 - News Sharing Site
 */

    ///////////////////////////
    /////Edit Story Action/////
    ///////////////////////////

  require 'database.php';
  session_start();

  if ($_SESSION['token'] !== $_POST['token']) {
      var_dump($_SESSION['token']);
      var_dump($_POST['token']);
      die("Request forgery detected");
  }

  //token

  $newsid = $_POST['newsid'];
  $title_text = $_POST['title_text'];
  $commentary_text = $_POST['commentary_text'];

  //parameter initialization

  if ($_POST['story_action'] == 'delete') {
      $stmt = $mysqli->prepare("DELETE FROM newstories WHERE story_id = $newsid");
      if (!$stmt) {
          printf("Query Prep Failed: %s\n", $mysqli->error);
          exit;
      }

      //using sql function delete to remove data from the newstories table

      $stmt->execute();

      $stmt->close();
  } else {
      $stmt = $mysqli->prepare("UPDATE newstories SET title='$title_text', commentary='$commentary_text' WHERE story_id = $newsid");
      if (!$stmt) {
          printf("Query Prep Failed: %s\n", $mysqli->error);
          exit;
      }

      //using sql funtion upate to modify data for editing feature

      $stmt->execute();

      $stmt->close();
  }

  $user = $_POST['user'];
  header("Location: profilepage.php?name=$user");
  exit();
