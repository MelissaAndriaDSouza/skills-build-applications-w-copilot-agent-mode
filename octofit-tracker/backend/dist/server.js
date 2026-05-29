"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT || 8000);
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/octofit';
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/api/health', (_req, res) => {
    res.json({
        status: 'ok',
        service: 'octofit-tracker-backend',
        port: PORT,
    });
});
mongoose_1.default
    .connect(MONGO_URI)
    .then(() => {
    console.log('MongoDB connected');
})
    .catch((error) => {
    console.error('MongoDB connection failed', error);
    process.exit(1);
});
app.listen(PORT, () => {
    console.log(`Backend server listening on port ${PORT}`);
});
