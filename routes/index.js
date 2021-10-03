var express = require('express');
var router = express.Router();

// const { Pool } = require('pg');
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL='postgresql://qekgfutlujgbgg:804aa0198e293807df7e9c3a309947c83e1aae417a8165829ee9bacc2b4e5c25@ec2-34-202-115-62.compute-1.amazonaws.com:5432/d3gkfkho29g7rs',
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });  
});

// router.get('/db', async (req, res) => {
//   try {
//     const client = await pool.connect();
//     const result = await client.query('SELECT student_id, firstname, lastname, citizen_id, dob, sex, email, epigram, status, education_status, graduate_year, major_id, public_relation_id, image_profile FROM public.student');
//     const results = { 'results': (result) ? result.rows : null };
//     res.json(results);
//     client.release();
//   } catch (err) {
//     console.error(err);
//     res.send("Error " + err);
//   }
// })

module.exports = router;
