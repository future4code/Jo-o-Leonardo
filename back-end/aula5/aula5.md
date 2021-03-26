1)
    CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);

2)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
);

-- Error Code: 1136. Column count doesn't match value count at row 1
-- "O numero de atributos não batia com o numero de linhas

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- Error Code: 1364. Field 'name' doesn't have a default value
-- o campo name não tem um valor default pra ser aceito vazio.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

-- Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
-- O formato da data está incorreto.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Tony Tornado",
  1500000,
  "1930-05-26", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Camila Pitanga",
  1500000,
  "1977-06-14", 
  "female"
);

CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    plot FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);

3)

SELECT * FROM Actor
WHERE gender = "female";

SELECT salary from Actor
WHERE name = "Tony Ramos";

SELECT * from Actor 
WHERE gender = "invalid";

SELECT id, name, salary from Actor 
WHERE salary < 500000;

SELECT id, name from Actor 
WHERE id = "002"

4)

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000

Um select de todo o conteudo da tabela Actor onde o nome comece com A ou J e o salario seja no menor que 300000

b
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

c
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

d
SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;

5)

CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
)

INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
);

INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
);

INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
  "2017-11-02",
  8
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);

6)

a-
SELECT id, title, rating FROM Movie WHERE id = "004";

b-
SELECT * FROM Movie WHERE name = "Deus é Brasileiro";

c-
SELECT id, title, synopsis FROM Movie WHERE rating > 7;

7)

SELECT * FROM Movie
WHERE title LIKE "%vida%";

SELECT * FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR
synopsis LIKE "%TERMO DE BUSCA%";

SELECT * FROM MOVIE
WHERE release_date < "2020-05-04";

SELECT * FROM MOVIE
WHERE release_date < "2020-05-04" AND 
(title LIKE "%TERMO DE BUSCA%" OR
synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;

