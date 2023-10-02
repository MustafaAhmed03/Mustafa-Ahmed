<?php
    require 'database.php';
    
    $user = $_POST['user'];
    $password = $_POST['pass'];
    $passver = $_POST['passver'];
    
    //security check for password matching
    if ($password !== $passver) {
        header("Location: createuser.php?failed=nomatch");
        exit();
    }
    
    //security check for password length
    //at least 6 characters
    if (strlen($password) < 6) {
        header("Location: createuser.php?failed=passlength");
        exit();
    }
    
    //security check for uplicate usernames
    $statement = $mysqli->prepare("SELECT COUNT(*) FROM users WHERE username=?");
    
    $statement->bind_param('s', $user);
    $statement->execute();
    
    $statement->bind_result($count);
    $statement->fetch();
    
    $statement->close();
    
    if ($count > 0) {
        header("Location: createuser.php?failed=usernametaken");
        exit();
    }
    
    else {
        session_start();
        $_SESSION['user'] = $user;
        $hashcodePassword = password_hash($password, PASSWORD_DEFAULT);
        echo var_dump($user);
        echo var_dump($hashcodePassword);
        
        //add new username and password to the table
        $statement = $mysqli->prepare("INSERT into users (username, password) values (?,?)");
        if(!$statement){
            printf("Query Prep Failed: %s\n", $mysqli->error);
            exit;
        }
        
        $statement->bind_param('ss', $user, $hashcodePassword);
        
        $statement->execute();
 
        $statement->close();
        
        header("Location: homepage.php?accountcreated=1");
        exit();
    }
 ?>
