use dharshan;

create table members(
member_id int primary key,
first_name varchar(100) not null,
last_name varchar(100) not null,
dob date,
email varchar(255) not null  unique,
phone varchar(20),
street varchar(255),
city varchar(100),
state varchar(50) default('TamilNadu'),
zip_code varchar(10),
membership_type varchar(20) not null
check (membership_type IN ('Basic', 'Premium', 'VIP'))
);

create table categories(
category_id int primary key,
category_name varchar(150) not null unique,
description varchar(500)
);

create table books(
book_id int primary key,
title varchar(255) not null,
author varchar(200) not null,
isbn varchar(20) not null unique,
publisher varchar(200),
pub_year int,
price double(10,2) not null,
total_copies int not null default(1),
category_id int not null,
foreign key (category_id) references categories(category_id)
);

create table borrows(
borrow_id int primary key,
member_id int not null,
foreign key(member_id) references members(member_id),
book_id int not null,
foreign key(book_id) references books(book_id),
borrow_date date not null,
due_date date not null,
return_date date,
status varchar(20) not null
check (status in ('Borrowed','Returned','Overdue'))
);

create table fines(
fine_id int primary key,
borrow_id int not null,
foreign key(borrow_id) references borrows(borrow_id),
member_id int not null,
foreign key(member_id) references members(member_id),
fine_amount double(10,2) not null,
paid_amount double(10,2) default(0),
fine_date date not null,
payment_status varchar(20) not null
check (payment_status in ('Paid','Unpaid','Waived'))
);

insert into members (member_id,first_name,last_name,dob,email,phone,street,city,state,zip_code,membership_type) 
values (101,'Darshan','Raj','2004-03-10','2k22cse021@kiot.ac.in','1234567890','car street','Salem','Tamil Nadu','123456','Basic'),
(102,'Jagadeep','KC','2005-04-15','2k22cse054@kiot.ac.in','9087654321','bike street','Salem','Tamil Nadu','123456','Premium'),
(103,'Vetrivel','B','2002-05-20','2k22cse0120@kiot.ac.in','1234509876','car street','Salem','Tamil Nadu','123456','VIP');

insert into categories(category_id,category_name,description)
values(01,'Thriller','This is thriller category'),
(02,'Romance','This is romantic category'),
(03,'Action','This is action category');

insert into books(book_id,title,author,isbn,publisher,pub_year,price,total_copies,category_id)
values(01,'Harry Potter','J-K-Rowling','10','Rowling',2024,2300,10,3),
(02,'Dune','James','11','James',2025,2500,165,1),
(03,'Harry Potter Last Night','J-K-Rowling','15','Rowling',2025,2700,10,3);

insert into borrows(borrow_id,member_id,book_id,borrow_date,due_date,return_date,status)
values(01,101,01,'2026-03-30','2026-04-30','2026-04-10','returned'),
(02,102,02,'2026-03-30','2026-04-30','2026-04-10','borrowed'),
(03,103,03,'2026-03-30','2026-04-30','2026-05-10','overdue');

insert into fines(fine_id,borrow_id,member_id,fine_amount,paid_amount,fine_date,payment_status)
values(01,01,101,200,200,'2026-04-30','Paid'),
(02,02,102,200,200,'2026-04-20','Paid'),
(03,03,103,200,200,'2026-04-30','Paid');


select * from members;
select * from categories;
select * from books;
select * from borrows;
select * from fines;