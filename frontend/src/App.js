import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import CreatePost from "./pages/createPost";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 3;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Wrapper>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/post" exact element={<CreatePost />} />
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;








// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [inputText, setInputText] = useState('');
//   const [imageUrl, setImageUrl] = useState('');
//   const [loading, setLoading] = useState(false);

//   const generateImage = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         'https://api.openai.com/v1/images/generations',
//         {
//           prompt: inputText,
//           n: 1,
//           size: "1024x1024"
//         },
//         {
//           headers: {
//             'Authorization': Bearer ${process.env.OPENAI_API_KEY},
//             'Content-Type': 'application/json',
//           }
//         }
//       );
//       setImageUrl(response.data.data[0].url);
//     } catch (error) {
//       console.error('Error generating image:', error);
//     }
//     setLoading(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     generateImage();
//   };

//   return (
//     <div className="App">
//       <h1>AI Image Generator</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter image description"
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//           required
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? 'Generating...' : 'Generate Image'}
//         </button>
//       </form>
//       {imageUrl && (
//         <div>
//           <h2>Generated Image:</h2>
//           <img src={imageUrl} alt="Generated from OpenAI" style={{ width: '100%', height: 'auto' }} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;