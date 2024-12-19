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
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'medical_device_manage'
});

module.exports = MedicalDeviceManage;
