import axios from "axios";

// http://localhost:8080/api/
const API = axios.create({
  baseURL: "http://localhost:8080/api/",
});

export const GetPosts = async () => await API.get("/post/");
export const CreatePost = async (data) => await API.post("/post/", data);
export const GenerateImageFromPrompt = async (data) =>
  await API.post("/generateImage/", data);







// import axios from "axios";
// import { Configuration, OpenAIApi } from "openai";

// // Axios instance configuration with baseURL
// const API = axios.create({
//   baseURL: "http://localhost/8080",
// });

// // OpenAI API instance configuration
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY, // Ensure you set your OpenAI API key in your environment variables
// });
// const openai = new OpenAIApi(configuration);

// // Function to get posts with error handling
// export const GetPosts = async () => {
//   try {
//     const response = await API.get("/post/");
//     return response.data; // Return only the data
//   } catch (error) {
//     console.error("Error fetching posts:", error.message); // Log original error message
//     throw error; // Propagate the error for further handling
//   }
// };

// // Function to create a post with error handling
// export const CreatePost = async (data) => {
//   try {
//     const response = await API.post("/post/", data);
//     return response.data; // Return only the data
//   } catch (error) {
//     console.error("Error creating post:", error.message); // Log original error message
//     throw error; // Propagate the error for further handling
//   }
// };

// // Function to generate AI image with OpenAI API
// export const GenerateAIImage = async (data) => {
//   try {
//     const response = await openai.images.generate({
//       model: "dall-e-3",
//       prompt: data.prompt, // Assuming `data` contains a `prompt` property
//       n: 1,
//       size: "1024x1024",
//     });
//     return response.data; // Return only the data
//   } catch (error) {
//     console.error("Error generating AI image:", error.message); // Log original error message
//     throw error; // Propagate the error for further handling
//   }
// };

// // Export the OpenAI instance if needed in other files
// export { openai }; 
