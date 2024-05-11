
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

async function run(message) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const chat = model.startChat({
        history: [
            {
                role: "user",
                parts: [{ text: "I'd like to use your assistance with sorting techniques for my project's sorting visualizer (insertion, bubble, selection sorts). Please answer my queries and provide code snippets if possible. Use emojis for explanation if helpful." }],
            },
            {
                role: "model",
                parts: [{ text: "Welcome to the Sorting Visualizer! Ask me anything about sorting techniques." }],
            },
        ],
        generationConfig: {
            maxOutputTokens: 2000,
        },
    });

    const msg = message

    const result = await chat.sendMessage(msg);
    console.log(result.response.text());

    return result.response.text();


}


// run("hi")

export default run;