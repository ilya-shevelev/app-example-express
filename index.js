const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.get('/src/main.ts', (req, res) => {
  const filePath = path.join(__dirname, 'src', 'main.ts');
  res.sendFile(filePath); // Отправляем файл без указания MIME-типа
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
