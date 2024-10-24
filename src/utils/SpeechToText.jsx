import React, { useState, useRef, useEffect } from 'react'; 

const SpeechToText = React.forwardRef(({ onTranscriptChange }, ref) => {
  const [transcript, setTranscript] = useState('');
  const [status, setStatus] = useState('Click the button to start listening...');
  const recognitionRef = useRef(null);
  const silenceTimeoutRef = useRef(null);

  // Initialize Speech Recognition logic
  useEffect(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setStatus("Sorry, your browser doesn't support Speech Recognition.");
    } else {
      recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.interimResults = true;
      recognitionRef.current.continuous = true;

      recognitionRef.current.onresult = (event) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          finalTranscript += event.results[i][0].transcript;
        }
        setTranscript(finalTranscript);
        onTranscriptChange(finalTranscript); // Pass the transcript back to the parent
        resetSilenceTimeout();
      };

      recognitionRef.current.onstart = () => {
        setStatus('Listening...');
        resetSilenceTimeout();
      };

      recognitionRef.current.onend = () => {
        setStatus('Stopped listening.');
        clearTimeout(silenceTimeoutRef.current);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setStatus('Error occurred while listening.');
      };
    }
  }, [onTranscriptChange]);

  // Function to start speech recognition
  const startRecognition = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
    }
  };

  // Stop recording after 3 seconds of silence
  const resetSilenceTimeout = () => {
    clearTimeout(silenceTimeoutRef.current);
    silenceTimeoutRef.current = setTimeout(() => {
      recognitionRef.current.stop();
      setStatus('Stopped due to inactivity.');
    }, 3000);
  };

  // Expose the startRecognition method to the parent via ref
  React.useImperativeHandle(ref, () => ({
    startRecognition,
  }));

  return (
    <div className="container">
      <p>Status: {status}</p>

    </div>
  );
});

export default SpeechToText;
