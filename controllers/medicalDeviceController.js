const { where } = require('sequelize');
const MedicalDevice = require('../models/MedicalDevice');
const MedicalDeviceManage = require('../models/MedicalDeviceManage');

const index = async (req, res) => {
    try {
        const rs = await MedicalDeviceManage.findAll();
        res.render('index', { title: 'Dashboard Medical Device Management', data: rs })
        // res.json(users);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const detail = async (req, res) => {
    const { id } = req.params;
    try {
        const rs = await MedicalDevice.findAll({ where: { medicalDeviceManageId: id } });
        res.render('detail', { title: 'Medical Device Detail', data: rs });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

const addMedicalDeviceManagement = async (req, res) => {
    const { tenQuanLy } = req.body;

    try {
        const newMedicalDeviceManage = await MedicalDeviceManage.create({
            tenQuanLy
        });
        res.redirect('/')
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const addMedicalDevices = async (req, res) => {
    const {
        khoa,
        kySu,
        tenThietBi,
        soModel,
        soSeri,
        namSuDung,
        tinhTrang,
        yKien,
        noiDung,
        chiPhi
    } = req.body;
    try {
        const newMedicalDevice = await MedicalDevice.create({
            khoa,
            kySu,
            tenThietBi,
            soModel,
            soSeri,
            namSuDung,
            tinhTrang,
            yKien,
            noiDung,
            chiPhi
        });
        res.render('index')
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { index, addMedicalDeviceManagement, addMedicalDevices, detail };
