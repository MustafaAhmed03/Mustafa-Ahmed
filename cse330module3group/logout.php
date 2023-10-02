
<?php

/*
 * Name: Mustafa Ahmed
 * Email: a.mustafa@wustl.edu
 * Assignment: Module 3 - News Sharing Site
 */

    ////////////////
    /////Logout/////
    ////////////////

//logout function
      session_start();

      session_destroy();
//located at homepage
      header("Location: homepage.php");
      exit;
?>
