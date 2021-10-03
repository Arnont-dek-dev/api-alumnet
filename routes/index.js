var express = require('express');
var router = express.Router();

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL='postgresql://tfjupltyynvjwa:0d20ce307bedc98f3f5d4ce740b26c187e21d468f94055a8761ed46e0f5e009e@ec2-44-198-196-149.compute-1.amazonaws.com:5432/dbbufi8tv9mjkh',
  ssl: {
    rejectUnauthorized: false
  }
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });  
});

router.get('/db', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users');
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})

module.exports = router;
