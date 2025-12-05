import express from 'express';
const app = express();

app.use('/users', (req, res, next) => {
  res.send('<h1>This a response from users path</h1>');
});

app.use('/', (req, res, next) => {
  console.log(`Second middleware`);
  res.send('<h1>This is a response from root path</h1>');
});

app.listen(8050, () => console.log(`Listening from assignment`));
