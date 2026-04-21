import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/generate-plan", async (req, res) => {
  try {
    const { input } = req.body;

    const prompt = `
You are a software architect.

Convert the following requirement into structured JSON.

Return ONLY JSON in this format:
{
  "summary": "",
  "features": [],
  "tasks": {
    "frontend": [],
    "backend": []
  },
  "apis": [],
  "database": [],
  "questions": []
}

Requirement:
${input}
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const text = response.choices[0].message.content;

    res.json(JSON.parse(text));

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});