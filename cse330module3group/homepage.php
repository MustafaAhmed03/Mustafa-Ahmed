<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <!-- Shows articles which are ordered by date posted -->
    <?php

/*
 * Name: Mustafa Ahmed
 * Email: a.mustafa@wustl.edu
 * Assignment: Module 3 - News Sharing Site
 */

    ////////////////////
    /////Home///////////
    ////////////////////

        session_start();
        require 'database.php';

        $statement = $mysqli->prepare("SELECT user, title, commentary, link, story_id from newstories ORDER BY story_id DESC");
        if (!$statement) {
            printf("Story Query Prep Failed: %s\n", $mysqli->error);
            exit;
        }

        //query to display the stories

        $statement->execute();

        $output = $statement->get_result();

        if (isset($_SESSION["user"])) {
            $token = $_SESSION['token'];

            printf("<div id=\"header\">
            <h1>The Economist</h1>
            <h3>Welcome! Username: %s.</h3>
            ", htmlentities($_SESSION['user']));

            //Input fields for logging out

            printf("
                    <form method=\"POST\" action=\"logout.php\">
                      <input type=\"submit\" value=\"Logout\"/>
                      <input type=\"hidden\" name=\"token\" value=$token />
                    </form>

                    ");

            //Input fields for posting a story
            printf("
            <br>

            <h4>Share something!</h4>
            <form method=\"POST\" action=\"submitstory.php\">
                  <p>
                      <label for=\"title\">Title:</label>
                      <input type=\"text\" name=\"title\" id=\"titleinput\" />

                      <label for=\"commentary\">Description:</label>
                      <textarea rows='1' columns='40' name=\"commentary\" id=\"commentaryinput\">Comment</textarea>
                      <label for=\"link\">Link (Optional):</label>
                      <input type=\"text\" name=\"link\" id=\"linkinput\"/>
                      <input type=\"hidden\" name=\"token\" value=$token />

                      <input type=\"submit\" value=\"submit\" />
                  </p>
            </form>
            </div>

            ");

            //Credit from wiki^^

        } else {
            printf("<div id=\"header\">
            <h1>The Times of New South 40</h1>
            Welcome! Click <a href='login.php'>here</a> to login.
            </div>");
        }

        $superQuery = $mysqli->prepare("SELECT username from users JOIN newstories on (users.username = newstories.user) group by newstories.user having count(*) > 0 order by count(*) desc");
        if (!$superQuery) {
            printf("Query Prep Failed: %s\n", $mysqli->error);
            exit;
        }

        $superQuery->execute();

        $prof_result = $superQuery->get_result();
        printf("<nav>
                  <ul>
                      <li><a href=\"homepage.php\">Home</a></li>
                      <li>Top Posters:</li>
                  "
              );

        $counter = 1;
        while ($prof_row = $prof_result->fetch_assoc()) {
            printf("<li>$counter. <a href=\"profilepage.php?name=%s\"> %s</a> </li>",
                htmlentities($prof_row["username"]), htmlentities($prof_row["username"])
            );
            $counter = $counter + 1;
        }

        printf("</ul>
      </nav>"
      );
        $superQuery->close();


        while ($row = $output->fetch_assoc()) {
            $sid = $row["story_id"];


            if ($row["link"]) {
                $linky = $row["link"];
                printf("<div class=\"storyblock\">
                            <h2><a href=\"$linky\">%s</a></h2>", htmlentities($row["title"]));
            } else {
                printf("<div id=\"storyblock\">
                            <h2>%s</h2>", htmlentities($row["title"]));
            }
            //If there is a link, it will be set as a hyperlink with the title text
            //Example: If the title is "Giraffe" and the url is google.com/giraffe, "Giraffe" will be hyperlinked and take you to the google search


            //Printing out the stories
            printf("
                        <h6><strong>Submitted by:</strong> %s</h6>
                        <p>%s</p>
                        <p>Comments:</p>
                        ", htmlentities($row["user"]), htmlentities($row["commentary"]));

            $commquery = $mysqli->prepare("SELECT comment_id, username, comment, story_id from comments");

            if (!$commquery) {
                printf("Comment Query Prep Failed: %s\n", $mysqli->error);
                exit;
            }

            $commquery->execute();
            $commquery->bind_result($cid, $usernam, $comm, $newsid);
            while ($commquery->fetch()) {

                if ($newsid == $row["story_id"]) {
                    printf(
                    "
                    <p>&nbsp;&nbsp;&nbsp;<a href=\"profilepage.php?name=%s\">%s</a>: %s
                    ", htmlentities($usernam), htmlentities($usernam), htmlentities($comm)
                    );
                    if (isset($_SESSION['user'])) {
                        if ($_SESSION['user'] == $usernam) {
                            printf(
                          "
                            <form method='POST' action='editcomment.php'>
                              <input type='hidden' name='cid' value='$cid' />
                              <input type=\"hidden\" name=\"token\" value=$token />
                              <input type='submit' value='Edit or Delete Comment' />
                            </form>
                            </p>

                        ");
                        }
                    }
                }
            }

            //HTML input form for commenting feature
            if (isset($_SESSION["user"])) {
                printf("
                      <form method=\"POST\" action=\"commentmanager.php\">
                        <p>
                        <input type=\"hidden\" name=\"sid\" value=\"$sid\"/>
                        <label for=\"comment\">Comment:</label>
                        <input type=\"text\" name=\"comment\" id=\"commentinput\" />
                        <input type=\"submit\" value=\"Submit Comment\" />
                        <input type=\"hidden\" name=\"token\" value=$token />
                        </p>
                      </form>");
            }

            printf("</div>");
        }
        printf("<h6 id='footer'>Totally not #FakeNews! Thank you for visiting out website. </h6>");

        $statement->close();
    ?>



    </body>
</html>
