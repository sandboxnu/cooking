## gets the query from the recipe.sql file and runs it in postgres
cat ./test-data.sql | docker exec -i cooking_server psql -U postgres -d cooking