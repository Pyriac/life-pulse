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
  date DATE NOT NULL,
  user_id INT NOT NULL
);

insert into user (email, password) VALUES ("milo@chien.com", "$argon2id$v=19$m=19456,t=2,p=1$wnYumdiz/dAgtaLCV3N8qg$rer8VKsrmMkkxYj7Q2xn061o3HcKM7L8aj4zp4tWexs");

INSERT INTO dayNotes (sport, sleep, mental, date, user_id)
VALUES 
(2, 7, 7, '2024-10-10', 1),
(1, 10, 9, '2024-10-11', 1),
(4, 8, 4, '2024-10-12', 1),
(5, 6, 8, '2024-10-13', 1),
(1, 5, 3, '2024-10-14', 1);


