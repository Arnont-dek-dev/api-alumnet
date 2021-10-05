var express = require('express');
var router = express.Router();
const db = require('./queries');

router.get('/student',db.getStudents);
router.post('/student',db.createStudents);
router.put('/student/:id',db.updateStudents);
router.delete('/student/:id',db.deleteStudents);
router.get('/address',db.getAddress);
router.get('/admin',db.getAdmin);
router.get('/campus',db.getCampus);
router.get('/faculty',db.getFaculty);
router.get('/major',db.getMajor);
router.get('/public_relation',db.getPublic_Relation);
router.get('/student_contact',db.getStudent_Contact);
router.get('/workplace',db.getWorkplace);
router.get('/workplace_history',db.getWorkplace_history);

router.post('/address',db.createAddress);
router.post('/admin',db.createAdmin);
router.post('/campus',db.createCampus);
router.post('/faculty',db.createFaculty);
router.post('/major',db.createMajor);
router.post('/public_relation',db.createPublic_Relation);
router.post('/student_contact',db.createStudent_contact);
router.post('/workplace',db.createWorkplace);
router.post('/workplace_history',db.createWorkplace_history);

router.put('/address',db.updateAddress);
router.put('/admin',db.updateAdmin);
router.put('/campus',db.updateCampus);
router.put('/faculty',db.updateMajor);
router.put('/major',db.updateMajor);
router.put('/public_relation',db.updatePublic_Relation);
router.put('/student_contact',db.updateStudent_contact);
router.put('/workplace',db.updateWorkplace);
router.put('/workplace_history',db.updateWorkplace_history);

router.delete('/address',db.deleteAddress);
router.delete('/admin',db.deleteAdmin);
router.delete('/campus',db.deleteCampus);
router.delete('/faculty',db.deleteFaculty);
router.delete('/major',db.deleteMajor);
router.delete('/public_relation',db.deletePublic_Relation);
router.delete('/student_contact',db.deleteStudent_contact);
router.delete('/workplace',db.deleteworkplace);
router.delete('/workplace_history',db.deleteworkplace_history);




module.exports = router;