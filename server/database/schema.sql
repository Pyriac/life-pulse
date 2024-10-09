create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table dayNotes (
  id int unsigned primary key auto_increment not null,
  sport INT NOT NULL,
  sleep INT NOT NULL,
  mental INT NOT NULL,
  date DATE NOT NULL
);
