use time_tracking;
drop table task_rows;
drop database time_tracking;

create database time_tracking;

use time_tracking;

create table task_rows (
    ID INT auto_increment primary key,
    created_timestamp datetime not null,
    start_timestamp datetime not null,
    end_timestamp datetime, -- null ?
    hour_amount decimal(4,2), -- null ?
    task varchar(255), -- null ?
    project varchar(255) -- null ?
);

insert into task_rows (created_timestamp, start_timestamp, end_timestamp, hour_amount, task, project) values 
('2025-02-25 08:15:30','2025-02-25 08:15:30','2025-02-25 09:45:30',1.5,'poistoputken asennus','putkihommia'), 
('2025-02-24 14:00:00','2025-02-24 14:00:00','2025-02-24 14:30:00',0.5,null,'putkihommia'), 
('2025-02-24 11:00:00','2025-02-24 11:00:00','2025-02-24 12:15:00',1.25,'takapihan hoito','ruohonleikkuu'), 
('2025-02-24 10:00:00','2025-02-24 10:00:00','2025-02-24 11:00:00',1,'jalkapallokentän viivoitus','Ruohonleikkuu'), 
('2025-02-24 09:00:00','2025-02-24 09:00:00','2025-02-24 10:00:00',1,'hajulukon tyhjennys','putkihommia')
;