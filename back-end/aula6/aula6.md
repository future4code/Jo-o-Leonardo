1)

a-
ALTER TABLE Actor DROP COLUMN salary;

Altera a tabela ator retirando a coluna salario

b-
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

Altera a tabela ator trocando o genero para sex varchar de 6 caracteres.

c-
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

Altera a tabela ator trocando o genero novamente agora para um varchar de 255 caracteres

d-

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

2)

a-
UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";

b-
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

c-
UPDATE Actor
SET 
		name = "Moacyr Franco",
		birth_date = "2020-02-10",
    salary = 600000,
    gender = "male"
WHERE id = "005";

d-

UPDATE Actor
SET 
		name = "Lazaro Ramos",
		birth_date = "2020-03-05",
    salary = 900000,
    gender = "male"
WHERE id = "025";

Ele exibe uma msg de sucesso porém nada é alterado. 

3)

a-
DELETE FROM Actor WHERE name = "Fernanda Montenegro"

b-
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000

4)

a-
SELECT MAX(salary) FROM Actor

b-
SELECT MIN(salary) FROM Actor WHERE gender = "female"

c-
SELECT COUNT(*) FROM Actor WHERE gender = "female"

d-
SELECT SUM(salary) FROM Actor

5)

a-
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender

A Query retornou a contagem de atores divididos por genero (4 homens, 2 mulheres)

b- 
SELECT id, name FROM Actor
ORDER BY name DESC;

c-
SELECT * FROM Actor
ORDER BY salary;

d-
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e-
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

6)

a-
ALTER TABLE Movie ADD playing_limit_date DATE;

b-
ALTER TABLE Movie CHANGE rating rating FLOAT;

c-
UPDATE Movie SET playing_limit_date = "2020-05-20"
WHERE id = "002"

UPDATE Movie SET playing_limit_date = "2021-05-20"
WHERE id = "003"

d-
DELETE FROM Movie WHERE id = "001";

UPDATE Movie SET synopsis = "Um filme muito louco"
WHERE id = "001";

Ele mostra que nenhuma linha foi alterada já que o id correpondente não foi encontrado.

0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

7)

a-
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;

b-
SELECT AVG(rating) FROM Movie;

c-
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();

d-
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();

e-
SELECT MAX(rating) FROM Movie;

f-
SELECT MIN(rating) FROM Movie;

8)

a-
SELECT * FROM Movie ORDER BY title;

b-
SELECT * FROM Movie ORDER BY title LIMIT 5;

c-
SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;

d-
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;