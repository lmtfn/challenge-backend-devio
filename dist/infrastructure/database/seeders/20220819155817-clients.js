'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clients_model_1 = __importDefault(require("../../../domain/clients/clients.model"));
exports.default = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield clients_model_1.default.bulkCreate([{
                    id: "ffec8efd-6dde-41f3-8475-c571caa048ba",
                    name: 'Laura',
                    cpf: "102.000.000-00"
                }, {
                    id: "8e423547-175f-4b89-b4d6-df971f1181b2",
                    name: "Teresa",
                    cpf: "101.000.000-11"
                }, {
                    id: "855ee2e3-9741-48fa-875b-a3daec60dc55",
                    name: "João",
                    cpf: "103.000.000-11"
                }], {});
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield clients_model_1.default.destroy({ truncate: true });
        });
    }
};
