"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const uuid_1 = require("uuid");
const database_1 = __importDefault(require("../../infrastructure/database"));
class ClientsModel extends sequelize_1.Model {
}
ClientsModel.init({
    id: {
        type: sequelize_1.DataTypes.STRING(36),
        primaryKey: true,
        allowNull: false,
        defaultValue: (0, uuid_1.v4)()
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    tableName: "clients",
    timestamps: true,
    underscored: true,
    sequelize: database_1.default
});
exports.default = ClientsModel;
