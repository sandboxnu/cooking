DROP TABLE IF EXISTS recipes;

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    author varchar(255),
    ingredients varchar(1024),
    steps varchar(65535), -- longest possible
    image_url varchar(255)
);