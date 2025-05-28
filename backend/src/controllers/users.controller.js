import UsersService from '../services/users.services.js';

class UserController {

   async getAll(req, res) {
    try {
      const users = await UsersService.getAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener usuarios' });
    }
  }

  async getById(req, res) {
    try {
      const user = await UsersService.getById(req.params.id);
      if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener usuario' });
    }
  }

  async create(req, res) {
    try {
      const newUser = await UsersService.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: 'Error al crear usuario', error: error.message });
    }
  }

  async update(req, res) {
    try {
      const updated = await UsersService.update(req.params.id, req.body);
      if (!updated) return res.status(404).json({ message: 'Usuario no encontrado' });
      res.status(200).json(updated);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar usuario' });
    }
  }

  async delete(req, res) {
    try {
      const deleted = await UsersService.delete(req.params.id);
      if (!deleted) return res.status(404).json({ message: 'Usuario no encontrado' });
      res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar usuario' });
    }
  }
}

export default new UserController();
