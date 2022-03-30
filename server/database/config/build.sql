BEGIN;
DROP  TABLE  IF EXISTS users , posts CASCADE;
 
CREATE TABLE users(
 id SERIAL PRIMARY KEY,
 user_name varchar(125) NOT NULL,
 email varchar(255) NOT NULL,
 password varchar (255) NOT NULL

 );

 CREATE TABLE posts(
 id SERIAL PRIMARY Key,
 content text NOT NULL,
  user_id int,
  FOREIGN KEY (user_id) REFERENCES users(id)
 );

 INSERT INTO users(user_name , email,password)Values('maram','m@gmail.com','123456');

COMMIT;