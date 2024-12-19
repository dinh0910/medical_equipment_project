const express = require('express');
const router = express.Router();
const medicalDeviceController = require('../controllers/medicalDeviceController');

router.get('/', medicalDeviceController.index);
router.post('/add-medical-device-management', medicalDeviceController.addMedicalDeviceManagement);
router.post('/add-medical-device', medicalDeviceController.addMedicalDevices);

module.exports = router;
