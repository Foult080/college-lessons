const path = require('path');
const express = require('express');
const app = express();

app.use(express.json({ extended: false }));

// проверка работы сервиса
app.get('/api/', async (req, res) => {
  console.log('Пришел GET запрос');
  return res.status(200).json({ msg: 'Привет Мир!' });
});

// отправка сообщения
app.post('/api/', async (req, res) => {
  const { name } = req.body;
  console.log(`Запрос прислал ${name}`);
  return res.status(201).json({ msg: `Привет ${name}!` });
});

// константа с портом
const PORT = 5000;

// server app
const server = app.listen(PORT, () => console.log(`Сервер запущен на порту: ${PORT}`));
