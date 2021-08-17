DROP TABLE IF EXISTS pictures;
DROP TABLE IF EXISTS recipes;

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    author varchar(255),
    title varchar(255),
    description varchar(255),
    ingredients varchar(1024),
    steps varchar(65535) -- longest possible
);

CREATE TABLE pictures (
    id SERIAL PRIMARY KEY,
    author varchar(255),
    description varchar(255),
    picture_url varchar(255),
    recipe_id INT,
    CONSTRAINT fk_recipe FOREIGN KEY(recipe_id) REFERENCES recipes(id) -- picture should respond to one recipe
);