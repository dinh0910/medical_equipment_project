const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const MedicalDeviceManage = sequelize.define('MedicalDeviceManage', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tenQuanLy: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'medical_device_manage'
});

module.exports = MedicalDeviceManage;
