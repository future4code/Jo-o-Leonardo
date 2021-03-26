Leia os comandos abaixo e indique o que eles fazem. **Não** os rode nas tabelas desse projeto! Explique o que elas fariam **se fossem** rodadas.  Você, provavelmente, terá que fazer algumas pesquisas para responder

*a.*

```sql
ALTER TABLE Actor DROP COLUMN salary;
```
Altera a tabela Actor dropando (Retirando) a coluna salario.

*b.*

```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

Altera a tabela Actor, trocando genero por sex.

*c.* 

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

Altera a tabela Actor mudando genero pra genero só que como um VARCHAR(255)

*d. Agora,  altere a coluna `gender` da tabela `ACTOR` para que ele aceite strings com até 100 caracteres*

```sql
ALTER TABLE Actor CHANGE gender gender CHAR(100);
```