<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <h1>Delete or Edit Story:</h1>
  <?php

  /*
 * Name: Mustafa Ahmed
 * Email: a.mustafa@wustl.edu
 * Assignment: Module 3 - News Sharing Site
 */

    ////////////////////
    /////Edit Story/////
    ////////////////////
    
    require 'database.php';
    session_start();
    if ($_SESSION['token'] !== $_POST['token']) {
        die("Request forgery detected");
    }

    $token = $_SESSION['token'];
    $newsIdentification = $_POST['newsid'];

    if (isset($_SESSION["user"])) {
      $statement = $mysqli->prepare("SELECT user, title, commentary from newstories WHERE story_id = $newsIdentification LIMIT 1");
        if (!$statement) {
            printf("Query Prep Failed: %s\n", $mysqli->error);
            exit;
        }

        //checks that the user is logged
        //ensures that only a user can edit or delete their own content

        $statement->execute();

        $statement->bind_result($user, $title, $commentary);

      while ($statement->fetch()) {
          $title = htmlentities($title);
          $commentSuper = htmlentities($commentary);
          printf("
            <form method='POST' action='editstoryaction.php'>
              <label for='title_text'>Edit title:</label>
              <input type='text' name='title_text' id='title_text_input' value='$title'>
              <label for='commentary_text'>Edit commentary:</label>
              <input type='text' name='commentary_text' id='commentary_text_input' value='$commentSuper'>
              <input type='hidden' name='newsid' value='$newsIdentification' />
              <input type='hidden' name='user' value='$user' />
              <button name='story_action' value='edit' type='submit'>Edit</button>
              <button name='story_action' value='delete' type='submit'>Delete</button>
              <input type='hidden' name='token' value=$token>
            </form>"
          );
      }

        $statement->close();
    }
  ?>

</body>
</html>
