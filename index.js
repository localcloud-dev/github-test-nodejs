const polka = require('polka');
const app = polka();

//Checking if all microservices work
app.get('/', (req, res) => {
  res.statusCode = 200;
  res.end(JSON.stringify({message:'hey github   ! :)'}));
});
      
app.listen(4008, err => {
    if (err) throw err;
    console.log(`> Started at 4008`);
});
        