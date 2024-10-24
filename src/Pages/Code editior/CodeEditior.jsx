import { Editor } from "@monaco-editor/react";
import { useAuth } from "../../utils/AuthContent";
import {
  Button,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Textarea,
} from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { LANGUAGE_VERSIONS, CODE_SNIPPETS } from "../../constants"; // Separate imports
import { executeCode } from "../../api";
import SpeechToText from "../../utils/SpeechToText"; // Ensure to import your SpeechToText component
import { Mic, MoveRight, Search, SearchIcon } from "lucide-react";
import SizeExample from "../../Components/Model";
import  ExecuteGeminiAPI from "../../config/GeminiAPI";

function CodeEditor() {

  const { aiResponse } = useAuth();



  const editorRef = useRef();
  const [output, setOutput] = useState(null);
  const [isError, setIsError] = useState(false);
  const [codeValues, setCodeValues] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [isLoading, setIsLoading] = useState(false);
  const [isVertical, setIsVertical] = useState(window.innerWidth < 700);
  const [searchBarVisible, setSearchBarVisible] = useState(false);


  const speechRef = useRef(null);
  const [transcript, setTranscript] = useState(""); // State to hold the transcript
  const handleStartListening = () => {
    if (speechRef.current) {
      speechRef.current.startRecognition(); // Trigger the speech recognition in the child
    }
  };

  const [displayedText, setDisplayedText] = useState("");
  const words = codeValues.split(" ");  // Split the text into individual words
  const [index, setIndex] = useState(0);

  let speed = 100;
  useEffect(() => {
    if (index < words.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + " " + words[index]);
        setIndex(index + 1);
      }, 10); // Adjust the delay as needed
      return () => clearTimeout(timer);
    }
  }, [index, words]);


  const handleSearch = async () => {
    const searchQuery = transcript || searchInput; // Either speech or manual input
    try {
      const result = await ExecuteGeminiAPI(searchQuery);
      setCodeValues(result);
    } catch (error) {
      console.error("Error generating text:", error);
    }
  };


  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth < 700);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const editorHeight = isVertical
    ? "calc(100vh - 120px)"
    : "calc(100vh - 85px)";

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    const newCode =
      CODE_SNIPPETS[language] || `// No code snippet available for ${language}`;
    setDisplayedText(newCode);
  };

  const languages = Object.entries(LANGUAGE_VERSIONS);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    try {
      setIsLoading(true);
      const result = await executeCode(language, sourceCode);
      let re = result.run.output;
      setOutput(re.split("\n"));
      result.run.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      setIsError(true);
      setOutput(["Error while executing the code. Please try again."]);
      console.log("Error while sending code to API: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="w-full h-10 flex text-white px-1.5 md:px-8 justify-between items-center">
        <div className="left ">
          <label
            htmlFor="language-selector"
            className="mr-2 text-sm sm:text-lg"
          >
            Languages:
          </label>
          <select
            id="language-selector"
            value={language}
            onChange={(e) => onSelect(e.target.value)}
            className="bg-gray-800 text-white px-2 py-1 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs sm:text-base"
          >
            {languages.map(([lang, version]) => (
              <option
                key={lang}
                value={lang}
                className="bg-gray-800 text-white"
              >
                {lang} ({version})
              </option>
            ))}
          </select>
        </div>

        <Button
          onClick={runCode}
          colorScheme="teal"
          size="md"
          variant="outline"
          isLoading={isLoading}
        >
          Run Code
        </Button>
      </div>

      <div
        className="relative overflow-hidden flex justify-center items-center flex-col editor"
        style={{ height: isVertical ? "85.5vh" : "84.4vh" }}
      >
        <PanelGroup
          className="px-1.5 md:px-1"
          direction={isVertical ? "vertical" : "horizontal"}
        >
          <Panel className="m-2 rounded-2xl" defaultSize={isVertical ? 80 : 50}>
            <Editor
              theme="vs-dark"
              height="100%"
              width="100%"
              defaultLanguage={language} // Set language dynamically
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={ aiResponse ?  aiResponse : displayedText}
              onChange={(value) => setCodeValues(value)}
              options={{
                wordWrap: "on",
                scrollBeyondLastLine: false,
                smoothScrolling: true,
                scrollbar: {
                  verticalScrollbarSize: 5,
                  horizontalScrollbarSize: 5,
                  vertical: "visible",
                  horizontal: "visible",
                  handleMouseWheel: true,
                },
              }}
            />
          </Panel>

          <PanelResizeHandle
            className={`${
              isVertical ? "w-full h-[2px]" : "h-full w-[2px]"
            } hover:bg-white`}
          />

          <Panel
            className={`m-2 rounded-2xl ${
              isError
                ? "border-2 border-red-500"
                : "border-[2px] border-slate-400-500"
            }`}
            minSize={isVertical ? 2 : 30}
            maxSize={90}
          >
            <div
              className={`h-screen overflow-auto ${
                isError ? "text-red-600" : "text-gray-200"
              }`}
              style={{ padding: "10px" }}
            >
              {output
                ? output.map((line, i) => <p key={i}>{line}</p>)
                : 'Click "Run Code" to see the output here'}
            </div>
          </Panel>
        </PanelGroup>

        <div className="absolute bottom-10 right-10 flex justify-between items-center flex-col">
          <div className=" p-2 mb-4 fixed bottom-20 right-8 ">
            <SizeExample />
          </div>

          <div className="flex flex-row fixed bottom-10 right-10">
            {searchBarVisible && (
              <div className="flex justify-center items-center w-full h-10">
                {" "}
                <InputGroup color="white" size="md">
                  <Textarea
                    pr="4.5rem"
                    placeholder="Enter your text here"
                    value={transcript}
                    onChange={(e) => setTranscript(e.target.value)}
                    maxHeight="100px"
                    overflowY="auto"
                    resize="none"
                    style={{
                      whiteSpace: "pre-wrap",
                      wordWrap: "break-word",
                    }}
                  />

                  <InputRightElement width="4.5rem">
                    <Button
                      onClick={() => handleSearch()}
                      w="45px"
                      _hover="none"
                      h="1.75rem"
                      size="sm"
                      bg="black"
                      color="white"
                      border="1px"
                      borderColor="black"
                      mr="0.2rem"
                      position="absolute"
                      top="0.5rem"
                      right="0"
                    >
                      <MoveRight />
                    </Button>

                    <Button
                      onClick={() => handleStartListening()}
                      _hover="none"
                      h="1.75rem"
                      size="sm"
                      bg="black"
                      color="white"
                      border="1px"
                      borderColor="black"
                      mr="0.2rem"
                      position="absolute"
                      bottom="-2rem"
                      right="0"
                    >
                      <Mic size={20} />
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </div>
            )}

            <IconButton
              onClick={() => {
                setSearchBarVisible((prev) => !prev);
              }}
              isRound={true}
              aria-label="Search database"
              icon={<SearchIcon />}
            />
          </div>
        </div>
      </div>

      <SpeechToText ref={speechRef} onTranscriptChange={setTranscript} />
    </>
  );
}

export default CodeEditor;
