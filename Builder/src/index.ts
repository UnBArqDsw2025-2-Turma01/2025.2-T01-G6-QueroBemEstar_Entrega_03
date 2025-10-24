import express, { Request, Response } from "express";
import { router } from "./api/routes";

const app = express();
app.use(express.json());
app.use("/api", router);

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
}

export default app;
