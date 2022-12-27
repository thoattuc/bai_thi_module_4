import { listEmployee, getAddEmployee, addEmployee, getUpdatePage, postEmployee, deleteEmployee } from '../controllers/admin/management.controller'
import express from 'express';

export const router = express.Router();
router.get('/', listEmployee);
router.get('/add', getAddEmployee);
router.post('/add', addEmployee);
router.get('/update/:id', getUpdatePage);
router.post('/update/:id', postEmployee);
router.get('/delete/:id', deleteEmployee);