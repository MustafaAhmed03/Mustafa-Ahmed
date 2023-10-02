<!--Page for user to create account-->
<!DOCTYPE html>
<html>
<head>
    <title>Create an account</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <h1>Register:</h1>
    <form method="POST" action="accountcreator.php">
        <label for="desiredusername">Username:</label>
        <input type="text" name="user" id="desiredusername" />
        <label for="desiredpass">Password:</label>
        <input type="password" name="pass" id="desiredpass" />
        <label for="verifypassinput">Confirm Password:</label>
        <input type="password" name="passver" id="verifypassinput" />
        <input type="submit" value="Create Account" />
    </form>
        <?php
            //display failure alert if necessary based on query string
            if (isset($_GET['failed'])) {
                switch ($_GET['failed']) {
                    case "nomatch":
                        echo "Passwords are not identical.";
                        break;
                    case "passlength":
                        echo "Password must be 6 characters or more in length.";
                        break;
                    case "usernametaken":
                        echo "Username taken. Try another.";
                        break;
                    default:
                        echo 'Unknown error. Try again.';
                        break;
                }
            }
        ?>
</body>
</html>
