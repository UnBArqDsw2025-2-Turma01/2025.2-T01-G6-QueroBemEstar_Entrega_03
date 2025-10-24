"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./api/routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api", routes_1.router);
app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
});
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
if (require.main === module) {
    app.listen(port, () => {
        console.log(`🚀 Server running on http://localhost:${port}`);
    });
}
exports.default = app;
