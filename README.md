$ sudo mysql
mysql> CREATE USER 'arroz'@'localhost' IDENTIFIED BY 'arroz';
mysql> GRANT ALL PRIVILEGES ON * . * TO 'arroz'@'localhost';
