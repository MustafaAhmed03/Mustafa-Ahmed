<?php
		
//database check

	$mysqli = new mysqli('localhost', 'MustafaAhmed03', 'superhypermega03', 'news_website');
	 
	if($mysqli->connect_errno) {
		printf("Connection Failed: %s\n", $mysqli->connect_error);
		exit;
	}
?>
