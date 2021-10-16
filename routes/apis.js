var express = require('express');
var router = express.Router();
const db = require('./queries');

router.get('/student',db.getStudents);
router.get('/student/:id',db.getStudent);
router.post('/student',db.createStudents);
router.put('/student/:id',db.updateStudents);
router.delete('/student/:id',db.deleteStudents);

router.get('/address',db.getAddress);
router.post('/address',db.createAddress);
router.put('/address/:id',db.updateAddress);
router.delete('/address/:id',db.deleteAddress);

router.get('/admin',db.getAdmin);
router.get('/admin/:id',db.getAdminByemail);
router.post('/admin',db.createAdmin);
router.put('/admin/:id',db.updateAdmin);
router.delete('/admin/:id',db.deleteAdmin);

router.get('/campus',db.getCampus);
router.post('/campus',db.createCampus);
router.put('/campus/:id',db.updateCampus);
router.delete('/campus/:id',db.deleteCampus);

router.get('/faculty',db.getFaculty);
router.post('/faculty',db.createFaculty);
router.put('/faculty/:id',db.updateMajor);
router.delete('/faculty/:id',db.deleteFaculty);

router.get('/major',db.getMajor);
router.post('/major',db.createMajor);
router.put('/major/:id',db.updateMajor);
router.delete('/major/:id',db.deleteMajor);

router.get('/public_relation',db.getPublic_Relation);
router.post('/public_relation',db.createPublic_Relation);
router.put('/public_relation/:id',db.updatePublic_Relation);
router.delete('/public_relation/:id',db.deletePublic_Relation);

router.get('/student_contact',db.getStudent_Contact);
router.post('/student_contact',db.createStudent_contact);
router.put('/student_contact/:id',db.updateStudent_contact);
router.delete('/student_contact/:id',db.deleteStudent_contact);

router.get('/workplace',db.getWorkplace);
router.post('/workplace',db.createWorkplace);
router.put('/workplace/:id',db.updateWorkplace);
router.delete('/workplace/:id',db.deleteworkplace);

router.get('/workplace_history',db.getWorkplace_history);
router.post('/workplace_history',db.createWorkplace_history);
router.put('/workplace_history/:id',db.updateWorkplace_history);
router.delete('/workplace_history/:id',db.deleteworkplace_history);

router.get('student_contact:/id',db.getStudent_Contacts);
router.get('/search/:id',db.getSearch);
router.get('/image_profile/:id',db.getSearch);
router.put('student/image_profile/:id',db.updateImage_profile);
router.put('/epigram/:id',db.updateEqigram);
router.put('/status/:id',db.updateStatus);
router.get('/timeline/:id',db.getTimeline);
router.post('/timeline/',db.createTimeline);
router.get('/search/:id',db.getEventByid);
router.get('/modelhouse',db.getmodelhouse);
router.put('/student/updateemail/:id', db.updateEmail);
router.get('/student/infomation/:id',db.getdetailUniversity);
router.put('/student/epigram_status/:id',db.updateEpigramStatus);
router.post('/student/company',db.createCompany);
router.get('/student/profile/:id',db.getdetailprofile);




module.exports = router;