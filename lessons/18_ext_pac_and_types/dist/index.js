"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multiply_1 = __importDefault(require("./multiply"));
const a = 5;
const b = 9;
console.log(`${a} * ${b} = ${multiply_1.default(a, b)}`);
