--create table example

CREATE TABLE table_name (
     id INT NOT NULL AUTO_INCREMENT,
     map_name CHAR(40) NOT NULL,
     map_type CHAR(10) NOT NULL,
     map_tier INT NOT NULL,
     map_notes CHAR(30),
     map_completed BOOLEAN NOT NULL,
     PRIMARY KEY (id)
 );