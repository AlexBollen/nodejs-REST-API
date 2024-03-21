const { Router } = require('express');
const router = Router();

import('node-fetch').then(async (fetch) => {
  router.get('/', async (req, res) => {
    const response = await fetch.default('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    res.json(users);
  });
}).catch(err => {
  console.error('Error al importar el módulo node-fetch:', err);
});

module.exports = router;
