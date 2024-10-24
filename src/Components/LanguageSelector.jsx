import React, { useState } from "react";
import { Button } from '@chakra-ui/react'
import { LANGUAGE_VERSIONS } from '../constants'; // Assuming LANGUAGE_VERSIONS is an object
import { executeCode } from "../api";

const languages = Object.entries(LANGUAGE_VERSIONS);

export default function LanguageSelector({ language, onSelect,editorRef }) {

  const [output,setOutput] = useState(null);

  const runCode = async() => {
    const sourceCode = editorRef.current.getValue();

    if(!sourceCode) return;

    try {
      const {run:result} = await executeCode(language,sourceCode);
      setOutput(result)
    } catch (error) {
      console.log("Error while sending code to api : ",error);
      
    }
    
  }
  return (
    <div className="w-full h-10 flex  text-white px-1.5 md:px-8 justify-between items-center">
      <div className="left ">

      <label htmlFor="language-selector" className="mr-2 text-sm sm:text-lg">Languages:</label>
      <select
        id="language-selector"
        value={language}
        onChange={(e) => onSelect(e.target.value)}
        className="bg-gray-800 text-white px-2 py-1 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-base"
      >
        {languages.map(([lang, version]) => (
          <option key={lang} value={lang} className="bg-gray-800 text-white">
            {lang} ({version})
          </option>
        ))}
      </select>
      </div>

      <Button onClick={runCode} colorScheme='teal' size='md' variant='outline'>
    Button
  </Button>
    </div>
  );
}
