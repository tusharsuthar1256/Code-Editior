import React, { useState } from "react";
import { GoogleGenerativeAI } from '@google/generative-ai';
import { getBase64 } from "../Helper/ImageHelper";
import { useAuth } from "../utils/AuthContent";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Text,
  IconButton,
  Img,
} from "@chakra-ui/react";
import { ArrowUpFromLine, FolderPlus } from "lucide-react";

function SizeExample() {
  // Opens the file upload modal
  const handleSizeClick = () => {
    onOpen();
  };

const { setResponse } = useAuth();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState(null);
  const [filePreview, setFilePreview] = useState(null);




  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY); // Ensure your API key is set

  const [imageInlineData, setImageInlineData] = useState('');




  const aiImageRun = async () => {
  

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const result = await model.generateContent([
            'I give you image with hand written code!! so extract only code content from that image without any other content only gives code note:(other than any type of image having give only output as "Upload valid code file ")',
            imageInlineData,
        ]);

        const response =  result.response;
        const text = response.text();
        setResponse(text);

        console.log("Response is :",text);
        
    } catch (error) {
        console.error('Error generating AI response:', error);
        setResponse('Error generating response. Please try again.');
    } 
};



  // Handles the file submission
  const handleSubmit = async () => {
    if (imageInlineData) {
      
      aiImageRun();
    }else {
      alert('Please upload an image first.');
  }
  };

  // Handles file input change
  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];


    if (uploadedFile) {
      setImage(uploadedFile);
      setFilePreview(URL.createObjectURL(uploadedFile)); // Create a file preview URL
    } else {
      setImage(null);
      setFilePreview(null);
    }


     if (uploadedFile) {
            getBase64(uploadedFile)
                .then((result) => {
                    setImage(result);
                })
                .catch((e) => console.log(e));

            fileToGenerativePart(uploadedFile).then((inlineData) => {
                setImageInlineData(inlineData);
            });
        }

  };

  async function fileToGenerativePart(file) {
    const base64EncodedDataPromise = new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]);
        reader.readAsDataURL(file);
    });

    return {
        inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
}



  return (
    <>
      <IconButton
        onClick={handleSizeClick}
        isRound={true}
        aria-label="Upload file"
        icon={<ArrowUpFromLine />}
      />

      <Modal onClose={onClose} size="lg" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload Your File</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display="flex" flexDirection="column" width="100%" >
              <Box
                width="100%"
                height="300px"
                p={6}
                mb={4}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                border="2px dashed"
                borderColor="purple.300"
                borderRadius="lg"
                bg="purple.50"
                transition="all 0.3s"
                _hover={{ bg: "purple.100", borderColor: "purple.400" }}
              >
                <div className="w-[120px] h-[200px] overflow-hidden">
                  {filePreview && (
                    <Img
                      src={filePreview}
                      alt="File Preview"
                      className="w-full h-full object-fit"
                    />
                  )}
                </div>
                {/* {filePreview &&<div className=""><Img src={filePreview} alt="File Preview" /></div> } */}
                <FolderPlus size={48} color="purple.500" />
                <Text mt={4} fontWeight="bold" textAlign="center">
                  Upload your file here
                </Text>

                <Button
                  mt={4}
                  leftIcon={<ArrowUpFromLine />}
                  colorScheme="purple"
                  variant="outline"
                  position="relative"
                  overflow="hidden"
                >
                  Select File
                  <input
                    onChange={handleFileChange}
                    type="file"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      opacity: 0,
                      width: "100%",
                      height: "100%",
                      cursor: "pointer",
                    }}
                  />
                </Button>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
            <Button
              onClick={handleSubmit}
              colorScheme="purple"
              isDisabled={!image}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SizeExample;
