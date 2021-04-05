const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection('tasks')
      .count();

    const tasks = await connection('tasks')
      .join('users', 'users.id', '=', 'tasks.user_id')
      .limit(5)
      .offset((page -1) * 5)
      .select([
        'tasks.*',
        'users.name',
        'users.email',
        'users.dataNascimento',
        'users.cpf',
        'users.cep',
        'users.endereco',
        'users.numero',    
    ]);

    response.header('X-Total-Count', count['count(*)'])
  
    return response.json(tasks);
  },  

  async create(request, response) {
    const { name, description, dataEntrega, dataConclusao } = request.body;
    const user_id = request.headers.authorization;

    const [id] = await connection('tasks').insert({
      name, 
      description,
      dataEntrega,
      dataConclusao,
      user_id
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const user_id = request.headers.authorization;

    const task = await connection('tasks')
      .where('id', id)
      .select('user_id')
      .first();
    
    if (task.user_id !== user_id) {
      return response.status(401).json({ error: 'Operation not permitted.'})
    }

    await connection('tasks').where('id', id).delete();

    return response.status(204).send();
  },  
};