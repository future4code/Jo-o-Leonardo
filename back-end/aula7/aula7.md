1)
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}

console.log( getActorById("001") )

a-
O Raw retorna um array contendo um array com o resultado da Query e outro Array com informações complementares.

b-
const SearchActorByName = async (name: string): Promise <any> => {
	const result = await connection.raw(`
	SELECT * FROM Actor WHERE name = "${name}"
    `);

return result [0][0]


c-
const countActorsByGender = async (gender: string): Promise<any> =>{
	const result = await connection.raw(`
	SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
	`);

	const count = result[0][0].count;
	return count;
};


2)

a-
const updateActorSalary = async (id: string, salary: number): Promise<any> =>{
	await connection("Actor")
	.update({
	salary: salary,
	})
	.where("id", id);
};

b-
const deleteActor = async (id: string): Promise<any> =>{
	await connection("Actor")
	.delete()
	.where("id", id);
};

c-
const avgSalary = async (gender: string): Promise<any> => {
	await connection("Actor")
	.avg("Salary as Media")
	.where({gender});

	return result[0].average;
};

3)
a-
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

b-
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

4)

a-