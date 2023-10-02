localhost/news_website/comments/		http://ec2-184-72-192-125.compute-1.amazonaws.com/phpmyadmin/tbl_sql.php?db=news_website&table=comments
Your SQL query has been executed successfully.

SHOW CREATE TABLE comments



comments	CREATE TABLE `comments` (
  `username` varchar(50) NOT NULL,
  `comment` varchar(500) NOT NULL,
  `story_id` int(50) NOT NULL,
  `comment_id` int(50) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`comment_id`),
  KEY `username` (`username`,`story_id`),
  KEY `story_id` (`story_id`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`story_id`) REFERENCES `newstories` (`story_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1	









localhost/news_website/newstories/		http://ec2-184-72-192-125.compute-1.amazonaws.com/phpmyadmin/tbl_sql.php?db=news_website&table=newstories
Your SQL query has been executed successfully.

SHOW CREATE TABLE newstories

newstories	CREATE TABLE `newstories` (
  `user` varchar(50) NOT NULL,
  `title` varchar(100) NOT NULL,
  `commentary` varchar(500) DEFAULT NULL,
  `link` varchar(200) DEFAULT NULL,
  `story_id` int(50) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`story_id`),
  KEY `user` (`user`),
  CONSTRAINT `newstories_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1	









localhost/news_website/users/		http://ec2-184-72-192-125.compute-1.amazonaws.com/phpmyadmin/tbl_sql.php?db=news_website&table=users
Your SQL query has been executed successfully.

SHOW CREATE TABLE users

users	CREATE TABLE `users` (
  `username` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1	

