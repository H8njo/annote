'use client';

import React, { useState, useEffect } from 'react';
import 'regenerator-runtime/runtime';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

const Page = () => {
  const [speechRecognitionSupported, setSpeechRecognitionSupported] =
    useState(null); // null or boolean

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    // sets to true or false after component has been mounted
    setSpeechRecognitionSupported(browserSupportsSpeechRecognition);
  }, [browserSupportsSpeechRecognition]);

  const isServer = typeof window === 'undefined';
  if (!browserSupportsSpeechRecognition && !isServer) {
    return <div>Your browser does not support speech recognition.</div>;
  }

  //   if (speechRecognitionSupported === null) return null; // return null on first render, can be a loading indicator

  // //   if (!speechRecognitionSupported) {
  // //     return <span>Browser does not support speech recognition.</span>;
  // //   }

  return (
    <div>
      {/* <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button> */}
      <p>{transcript}</p>
    </div>
  );
};

export default Page;
