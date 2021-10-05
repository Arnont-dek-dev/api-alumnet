const { request } = require('express');
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL = 'postgresql://qekgfutlujgbgg:804aa0198e293807df7e9c3a309947c83e1aae417a8165829ee9bacc2b4e5c25@ec2-34-202-115-62.compute-1.amazonaws.com:5432/d3gkfkho29g7rs',
  ssl: {
    rejectUnauthorized: false
  }
});


const getStudents = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT student_id, firstname, lastname, dob, sex, email, epigram, status, education_status, graduate_year, major_id, public_relation_id, image_profile FROM public.student');
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const createStudents = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`INSERT INTO public.student(student_id, firstname, lastname, dob, sex, email, epigram, status, education_status, graduate_year, major_id, public_relation_id, image_profile) VALUES('${req.body.student_id}', '${req.body.firstname}', '${req.body.lastname}', '${req.body.dob}', '${req.body.sex}', '${req.body.email}', '${req.body.epigram}','${req.body.status}', '${req.body.education_status}', '${req.body.graduate_year}', '${req.body.major_id}', '${req.body.public_relation_id}', '${req.body.image_profile}')`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const updateStudents = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`UPDATE public.student SET student_id='${req.body.student_id}', firstname='${req.body.fristname}', lastname='${req.body.lastname}', dob='${req.body.dob}', sex='${req.body.sex}', email='${req.body.email}', epigram='${req.body.epigram}', status='${req.body.status}', education_status='${req.body.education_status}', graduate_year='${req.body.graduate_year}', major_id='${req.body.major_id}', public_relation_id='${req.body.public_relation_id}', image_profile='${req.body.image_profile}' where student_id = '${req.params.id}'`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const deleteStudents = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`DELETE FROM public.student WHERE student_id = '${req.params.id}'`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const getAddress = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT address_id, student_id, name, house_number, soi, street, tumbon, amphoe, province, postcode, country, latittude, longitude FROM public.address');
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}
const createAddress = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`INSERT INTO public.address (address_id, student_id, "name", house_number, soi, street, tumbon, amphoe, province, postcode, country, latittude, longitude)
    VALUES('${req.body.address_id}', '${req.body.student_id}', '${req.body.name}', '${req.body.house_number}', '${req.body.soi}', '${req.body.street}', '${req.body.tumbon}', '${req.body.amphone}', '${req.body.province}', '${req.body.postcode}', '${req.body.country}', '${req.body.latitude}', '${req.body.longitude}');
    )`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const updateAddress = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`UPDATE public.address
    SET address_id='${req.body.address_id}', student_id='${req.body.student_id}', name='${req.body.name}', house_number='${req.body.house_number}', soi='${req.body.soi}', street='${req.body.street}', tumbon='${req.body.tumbon}', amphoe='${req.body.amphone}', province='${req.body.province}', postcode='${req.body.postcode}', country='${req.body.country}', latittude='${req.body.latitude}', longitude='${req.body.longitude}'  where address_id = '${req.params.id}'`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const deleteAddress = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`DELETE FROM public.address WHERE address_id = '${req.params.id}'`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const getAdmin = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT email, faculty_id, campus_id, fristname, lastnameFROM public."admin"');
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}
const createAdmin = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`INSERT INTO public."admin"
    (email, faculty_id, campus_id, fristname, lastname)
    VALUES('${req.body.email}', '${req.body.faculty_id}', '${req.body.campus_id}', '${req.body.fristname}', '${req.body.lastname}')`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}


const updateAdmin = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`UPDATE public."admin"
    SET email='${req.body.email}', faculty_id='${req.body.faculty_id}', campus_id='${req.body.campus_id}', fristname='${req.body.fristname}', lastname='${req.body.lastname}' where email = '${req.params.id}'`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const deleteAdmin = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`DELETE FROM public."admin" WHERE email = '${req.params.id}'`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}
const getCampus = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT campus_id, "name" FROM public.campus');
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const createCampus = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`INSERT INTO public.campus
    (campus_id, "name")
    VALUES('${req.body.campus_id}', '${req.body.name}')`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const updateCampus = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`UPDATE public.campus
    SET campus_id='${req.body.campus_id}', "name"='${req.body.name}' where campus_id = '${req.params.id}'`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const deleteCampus = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`DELETE FROM public.campus WHERE campus_id = '${req.params.id}'`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const getFaculty = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT faculty_id, "name", campus_id FROM public.faculty');
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const createFaculty = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`INSERT INTO public.faculty
    (faculty_id, "name", campus_id)
    VALUES('${req.body.faculty_id}', '${req.body.name}', '${req.body.campus_id}')`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const updateFaculty = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`UPDATE public.faculty
    SET faculty_id='${req.body.faculty_id}', "name"='${req.body.name}', campus_id='${req.body.campus_id}' where faculty_id = '${req.params.id}'`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const deleteFaculty = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`DELETE FROM public.faculty WHERE faculty = '${req.params.id}'`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const getMajor = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT major_id, "name", faculty_id FROM public.major');
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const createMajor = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`INSERT INTO public.major
    (major_id, "name", faculty_id)
    VALUES('${req.body.major_id}', '${req.body.name}', '${req.body.faculty_id}')`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const updateMajor = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`UPDATE public.faculty
    SET faculty_id='${req.body.faculty_id}', "name"='${req.body.name}', campus_id='${req.body.campus_id}' where faculty_id = '${req.params.id}'`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const deleteMajor = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`DELETE FROM public.major WHERE major_id = '${req.params.id}'`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const getPublic_Relation = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT public_relation_id, title, "content", image, start_activity, finish_activity, graduate_year, status, major_id, create_by FROM public.public_relation');
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const createPublic_Relation = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`INSERT INTO public.public_relation (public_relation_id, title, "content", image, start_activity, finish_activity, graduate_year, status, major_id, create_by)
    VALUES('${req.body.public_relation_id}', '${req.body.title}', '${req.body.content}', '${req.body.image}', '${req.body.start_activity}', '${req.body.finish_activity}', '${req.body.graduate_year}', '${req.body.status}', '${req.body.major_id}', '${req.body.create_by}')`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const updatePublic_Relation = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`UPDATE public.public_relation
    SET public_relation_id='${req.body.public_relation_id}', title='${req.body.title}', "content"='${req.body.content}', image='${req.body.image}', start_activity='${req.body.start_activity}', finish_activity='${req.body.finish_activity}', graduate_year='${req.body.graduate_year}', status='${req.body.status}', major_id='${req.body.major_id}', create_by='${req.body.create_by}' where public_relation_id = '${req.params.id}'`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const deletePublic_Relation = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`DELETE FROM public.public_relation WHERE public_relation_id = '${req.params.id}'`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}


const getStudent_Contact = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT student_contact_id, student_id, contact_type, contact_url FROM public.student_contact');
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const createStudent_contact = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`INSERT INTO public.student_contact
    (student_contact_id, student_id, contact_type, contact_url)
    VALUES('${req.body.student_contact_id}', '${req.body.student_id}', '${req.body.contact_type}', '${req.body.contact_url}')`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const updateStudent_contact = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`UPDATE public.student_contact
    SET student_contact_id='${req.body.student_contact_id}', student_id='${req.body.student_id}', contact_type='${req.body.contact_type}', contact_url='${req.body.contact_url}' where student_contact_id = '${req.params.id}'`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const deleteStudent_contact = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`DELETE FROM public.student_contact WHERE student_contact_id = '${req.params.id}'`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}


const getWorkplace = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT workplace_id, "name", house_number, soi, street, tumbon, amphoe, province, postcode, country, latitude, longitude FROM public.workplace');
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const createWorkplace = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`INSERT INTO public.workplace (workplace_id, "name", house_number, soi, street, tumbon, amphoe, province, postcode, country, latitude, longitude)
    VALUES('${req.body.workplace_id}', '${req.body.name}', '${req.body.house_number}', '${req.body.soi}', '${req.body.street}', '${req.body.tumbon}', '${req.body.amphone}', '${req.body.province}', '${req.body.postcode}', '${req.body.country}', '${req.body.latitude}', '${req.body.longitude}');
    `);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const updateWorkplace = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`UPDATE public.workplace
    SET workplace_id='${req.body.workplace_id}', "name"='${req.body.name}', house_number='${req.body.house_number}', soi='${req.body.soi}', street='${req.body.street}', tumbon='${req.body.tumbon}', amphoe='${req.body.amphone}', province='${req.body.province}', postcode='${req.body.postcode}', country='${req.body.country}', latitude='${req.body.latitude}', longitude='${req.body.longitude}' where workplace_id = '${req.params.id}'`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const deleteworkplace = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`DELETE FROM public.workplace WHERE workplace_id = '${req.params.id}'`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const getWorkplace_history = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT workplace_history_id, workplace_id, student_id, "position", start_work, finish_work FROM public.workplace_history');
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}



const createWorkplace_history = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`INSERT INTO public.workplace_history (workplace_history_id, workplace_id, student_id, "position", start_work, finish_work)
    VALUES('${req.body.workplace_history_id}', '${req.body.workplace_id}', '${req.body.student_id}', '${req.body.position}', '${req.body.start_work}', '${req.body.finish_work}')`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const updateWorkplace_history = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`UPDATE public.workplace_history
    SET workplace_history_id='${req.body.workplace_history_id}', workplace_id='${req.body.workplace_id}', student_id='${req.body.student_id}', "position"='${req.body.position}', start_work='${req.body.start_work}', finish_work='${req.body.finish_work}' where workplace_history_id = '${req.params.id}'`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}

const deleteworkplace_history = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`DELETE FROM public.workplace_history WHERE workplace_id = '${req.params.id}'`);
    const results = { 'results': (result) ? result.rows : null };
    res.json(results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
}



module.exports = {
  getStudents,
  createStudents,
  updateStudents,
  deleteStudents,
  getAddress,
  getAdmin,
  getCampus,
  getFaculty,
  getMajor,
  getPublic_Relation,
  getStudent_Contact,
  getWorkplace,
  getWorkplace_history,
  createAddress,
  createAdmin,
  createCampus,
  createFaculty,
  createPublic_Relation,
  createStudent_contact,
  createWorkplace,
  createWorkplace_history,
  createMajor,
  updateAddress,
  updateAdmin,
  updateCampus,
  updateFaculty,
  updateMajor,
  updatePublic_Relation,
  updateStudent_contact,
  updateWorkplace,
  updateWorkplace_history,
  deleteAddress,
  deleteAdmin,
  deleteCampus,
  deleteFaculty,
  deleteMajor,
  deletePublic_Relation,
  deleteStudent_contact,
  deleteworkplace,
  deleteworkplace_history
}
