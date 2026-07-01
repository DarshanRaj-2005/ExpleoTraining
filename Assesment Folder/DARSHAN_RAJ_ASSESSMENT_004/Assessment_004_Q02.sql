create table employeedb(
    employee_id int primary key,
    first_name varchar(20),
    last_name varchar(20),
    year_of_experience int,
    city varchar(50),
    country_id varchar(10),
    salary int,
    commission decimal(5,2),
    department_id int,
    job_id varchar(20)
);


insert into employeedb(employee_id,first_name,last_name,year_of_experience,city,country_id,salary,commission,department_id,job_id)
values(101,'Darshan','Raj',28,'Tamil Nadu', 'India', 200000,20,1001,2001),
(102,'Jagadeep','KC',30,'Tamil Nadu', 'India', 300000,30,1002,2002),
(103,'Vetrivel','B',35,'Tamil Nadu', 'India', 400000,30,1003,2003);

select country_id, count(city) as number_of_cities from employeedb group by country_id;

select * from employeedb where salary * 1.25 > 10000;

select first_name,last_name,year_of_experience from employeedb where year_of_experience > 27;

select job_id from employeedb group by(job_id) having avg(salary) > 10000;
