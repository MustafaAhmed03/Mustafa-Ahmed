<?php

  /*
 * Name: Mustafa Ahmed
 * Email: a.mustafa@wustl.edu
 * Assignment: Module 3 - News Sharing Site
 */

    /////////////////////////////
    /////Edit Comment Action/////
    /////////////////////////////

  require 'database.php';
  session_start();
  if ($_SESSION['token'] !== $_POST['token']) {
      die("Request forgery detected");
  }
  $commentID = $_POST['cid'];
  $comment_text = $_POST['comment_text'];

  if ($_POST['comment_action'] == 'delete') {
      $stmt = $mysqli->prepare("DELETE FROM comments WHERE comment_id = $commentID");
      if (!$stmt) {
          printf("Query Prep Failed: %s\n", $mysqli->error);
          exit;
      }

      //if the desire action is to delete a comment

      $stmt->execute();

      $stmt->close();
  } else {
      $stmt = $mysqli->prepare("UPDATE comments SET comment='$comment_text' WHERE comment_id = $commentID");
      if (!$stmt) {
          printf("Query Prep Failed: %s\n", $mysqli->error);
          exit;
      }

      //updates the comment with the respective edit

      $stmt->execute();

      $stmt->close();
  }

  $user = $_POST['user'];
  header("Location: homepage.php");
  exit();
