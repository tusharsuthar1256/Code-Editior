import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY); // Ensure your API key is set

// Function to generate code using the Gemini AI model
const ExecuteGeminiAPI = async (text) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `${text}. Provide only the required code in the specified programming language without any comments or explanations. Use the following format for Java:
public class Main {
  public static void main(String[] args) {
    // Write down all Java code here
  }
}
Ensure the code is properly indented, and do not include code block symbols or any other content except the code itself. If I ask for anything other than code or relevant outputs, respond with: 'Please ask relevant questions.'`;

    const result = await model.generateContent(prompt);

    // Extract the generated code from the response
    const generatedCode = await result.response.text();

    console.log("Generated Code:", generatedCode);
    return generatedCode; // Return the generated code
  } catch (error) {
    console.error("Error generating code from Gemini API:", error);
    return null;
  }
};

// Function to upload an image and get AI-generated content


export default  ExecuteGeminiAPI ;
