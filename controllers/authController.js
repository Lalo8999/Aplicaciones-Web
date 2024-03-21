const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Controlador para manejar el proceso de inicio de sesión
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar al usuario por su correo electrónico
    const user = await User.findOne({ email });

    // Si el usuario no existe
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Comparar la contraseña proporcionada con la contraseña almacenada en la base de datos
    const passwordMatch = await bcrypt.compare(password, user.password);

    // Si las contraseñas no coinciden
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Crear un token de acceso utilizando JSON Web Token (JWT)
    const token = jwt.sign({ userId: user._id, email: user.email }, 'secreto', { expiresIn: '1h' });

    // Devolver el token de acceso al cliente
    res.status(200).json({ token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};
