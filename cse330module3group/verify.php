<?php
    
/*
 * Name: Mustafa Ahmed
 * Email: a.mustafa@wustl.edu
 * Assignment: Module 3 - News Sharing Site
 */

    //////////
    //Verify//
    //////////

    //the purpose of this file is to check if the username and password entered are correct or in other words, linked to each other
    session_start();
    require 'database.php';
    if ($_SESSION['token'] !== $_POST['token']) {
        die("Request forgery detected verify.php");
    }

    $stmt = $mysqli->prepare("SELECT COUNT(*), username, password FROM users WHERE username=?");

    $stmt->bind_param('s', $user);
    $user = $_POST['user'];
    // use of bind parameter here to define string as the data type
    $stmt->execute();

    $stmt->bind_result($cnt, $username, $pwd_hash);
    $stmt->fetch();

    $pwd_guess = $_POST['pass'];
    // we then do a comparison with the submitted password and the password hash

    if ($cnt == 1 && password_verify($pwd_guess, $pwd_hash)) {
        $_SESSION['user'] = $username;
        $_SESSION['token'] = bin2hex(openssl_random_pseudo_bytes(32));
        header("Location: homepage.php");
        //redirect to home page if login successful
        exit;
    } else {
        session_destroy();
        header("Location: login.php?failed=1");
        //redirect to login screen if login unsuccessful
        exit;
    }
