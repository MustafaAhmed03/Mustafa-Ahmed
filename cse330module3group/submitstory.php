<?php

/*
 * Name: Mustafa Ahmed
 * Email: a.mustafa@wustl.edu
 * Assignment: Module 3 - News Sharing Site
 */

    ////////////////
    //Submit Story//
    ////////////////

  session_start();

  require('database.php');
  if ($_SESSION['token'] !== $_POST['token']) {
      var_dump($_SESSION['token']);
      var_dump($_POST['token']);
      die("Request forgery detected submit story");
  }

  if (isset($_SESSION["user"])) {

      if (isset($_POST['title']) && isset($_POST['commentary'])) {
          $title = $_POST['title'];
          $commentary = $_POST['commentary'];
        
        //linking a url is optional but it must be https secure
        //example: https://google.com 

        $link = null;
          if ($_POST['link'] !== "") {
            $link = $_POST['link'];
          }
   
        $stmt = $mysqli->prepare("INSERT into newstories
         (user, title, commentary, link)
         values (?,?,?,?)");
          if (!$stmt) {
              printf("Query Prep Failed: %s\n", $mysqli->error);
              exit;
          }

          //4 strings for the binding parameter

          $stmt->bind_param('ssss', $_SESSION['user'], $title, $commentary, $link);
          $stmt->execute();
          $stmt->close();
      }
  }
  else {
      header("Location: homepage.php?submit=userfailure");
      exit;
  }

  header("Location: homepage.php?submit=success");
  exit;
