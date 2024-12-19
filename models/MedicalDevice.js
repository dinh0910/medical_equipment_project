const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const MedicalDevice = sequelize.define('MedicalDevice', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    medicalDeviceManage: {
        type: DataTypes.INTEGER,
        allowNullL: false
    },
    khoa: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    kySu: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tenThietBi: {
        type: DataTypes.STRING,
        allowNull: true
    },
    soModel: {
        type: DataTypes.STRING,
        allowNull: true
    },
    soSeri: {
        type: DataTypes.STRING,
        allowNull: true
    },
    namSuDung: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tinhTrang: {
        type: DataTypes.STRING,
        allowNull: true
    },
    yKien: {
        type: DataTypes.STRING,
        allowNull: true
    },
    noiDung: {
        type: DataTypes.STRING,
        allowNull: true
    },
    chiPhi: {
        type: DataTypes.STRING,
        allowNull: true
    },

}, {
    tableName: 'medical_devices'
});

module.exports = MedicalDevice;
