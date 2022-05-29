DROP DATABASE W13D01_Revision;
CREATE DATABASE W13D01_Revision;
USE W13D01_Revision;

-- creating the roles table:
CREATE TABLE roles(
    id INT AUTO_INCREMENT NOT NULL,
    role VARCHAR(255),
    PRIMARY KEY (id)
);

-- creating the permissions table:
CREATE TABLE permissions(
    id INT AUTO_INCREMENT NOT NULL,
    permission VARCHAR(255),
    PRIMARY KEY (id)
);

-- creating the role_permission table:
CREATE TABLE role_permission(
    id INT AUTO_INCREMENT NOT NULL,
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles (id),
    permission_id INT,
    FOREIGN KEY (permission_id) REFERENCES permissions (id),
    PRIMARY KEY (id)
);

-- creating the users table:
CREATE TABLE users(
    id INT AUTO_INCREMENT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles (id),
    PRIMARY KEY (id)
);

-- creating the tasks table:
CREATE TABLE tasks(
    id INT AUTO_INCREMENT NOT NULL,
    taskName VARCHAR(255),
    isCompleted TINYINT DEFAULT 1,
    isDeleted TINYINT DEFAULT 0,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users (id),
    PRIMARY KEY (id)
);





-- mysql -u root <"schema.sql" -p
