import { Router } from 'express';
import { AuthMiddleware } from '../../../middlewares/auth-middleware';
import { TeacherController } from '../controllers/teacher.controller';

const teacherRouter: Router = Router();

teacherRouter
	.get('/getStudentsMarks', AuthMiddleware, TeacherController.getGroupMarks)
	.get('/getAllowedGroups', AuthMiddleware, TeacherController.getAllowedGroups)
	.put('/updateStudentMark', AuthMiddleware, TeacherController.updateStudentMark);

export { teacherRouter };