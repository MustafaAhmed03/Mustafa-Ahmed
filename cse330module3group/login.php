<!DOCTYPE html>
<html>
<head>
    <title>Welcome</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

  <?php

  /*
 * Name: Mustafa Ahmed
 * Email: a.mustafa@wustl.edu
 * Assignment: Module 3 - News Sharing Site
 */

    ////////////////
    /////Login/////
    ////////////////

  session_start();

  $_SESSION['token'] = bin2hex(openssl_random_pseudo_bytes(32));

  if (isset($_SESSION["user"])) {
      if ($_SESSION["user"] == "failed") {
          print("<h2 id=loginfail>Couldn't find an account with that username. Try again.</h2>");
      }
  }
  ?>

    <h1 class="title">Welcome to my News Sharing Site!</h1>

    <h3>Enter Username and Password below to get started or Register if you are a first time user!</h3>
    
        <form method="POST" action="verify.php">
                <p>
                    <label for="usernameinput">Username:</label>
                    <input type="text" name="user" id="usernameinput" />
                    <label for="passwordinput">Password:</label>
                    <input type="password" name="pass" id="passwordinput"/>
                    <input type="submit" value="Login" />
                    <input type="hidden" name="token" value="<?php echo $_SESSION['token'];?>" />

                </p>
        </form>

        <!--labels and form data-->

        <form method="GET" action="createuser.php">
                <input type="submit" value="Register"/>
        </form>



</body>
</html>
