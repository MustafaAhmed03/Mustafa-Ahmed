# CSE330
Mustafa Ahmed - 499619 - MustafaAhmed03

Creative Portion

1. Users have profiles 
2. Users can view their posts and either edit or delete them
3. Delete users

http://ec2-184-72-192-125.compute-1.amazonaws.com/~MustafaAhmed03/Module_3_Group/login.php


TA Feedback:

-2: W3C Failed on mainpage.php: line 26: Error: Duplicate ID storyblock.

-2: Editing stories did not check with the database whether a user owns an entry. It executes the command regardless of ownership. Someone could forge an html form that contains arbitrary id and that change would go through.

-5: I wasn't able to figure out where delete account (1/3 of the creative score) is. I know that your implementation of deleteaccount is in the repo but it's not perfect (you should delete their comments and posts prior to their account if you've setted up foreign key) but if it is implemented please submit a regrade request on this and put in more details on how/where it is.
