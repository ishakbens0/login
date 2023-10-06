const express = require('express');
const app = express();
const port = 3000; // يمكنك تغييره حسب الحاجة

app.use(express.json());

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // يمكنك هنا حفظ البيانات في ملف أو قاعدة البيانات
  console.log('Email:', email);
  console.log('Password:', password);

  res.send('Login successful!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
