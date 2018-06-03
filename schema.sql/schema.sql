/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE burger_db;
USE burger_db;

-- Create the table tasks.
CREATE TABLE burgers
(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(255) NOT NULL,
devoured BOOLEAN NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO burgers (burger_name, devoured) VALUES ('Cheese Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Veggie Burger', false);
