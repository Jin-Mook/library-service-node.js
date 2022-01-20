FROM mysql:5.7

COPY my.cnf /etc/mysql/conf.d/my.cnf
COPY initialize.sql /docker-entrypoint-initdb.d/

COPY elice_library.xlsx /var/lib/mysql-files/