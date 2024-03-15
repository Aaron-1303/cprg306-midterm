"use client";
import { useState } from "react";
import APICallExam from "@/components/apiCallExam";
import { GET } from "../api/codeAPI/[code]/route";

const fetchSecretCode = async () => {

  const url = `https://webdev2-class-demo.vercel.app/api/sampleReqs/?passcode=${passcode}`;

  try {
    const response = await GET(url); // Using GET function

    const data = await response.json();
    return data.secretCode;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

const CodeSample3 = () => {
  const [secretCode, setSecretCode] = useState(null);

  const handleAPICall = async () => {
    const fetchedSecretCode = await fetchSecretCode();
    setSecretCode(fetchedSecretCode);
  };

  const myList = ["Cat", "Dog", "Chicken", "Cow"];

  return (
    <div className="h-screen bg-white p-2 text-black">
      <h1 className="pb-2 text-blue-600">Code sample 3: Making an API Call</h1>
      <div className="p-2 text-sm text-gray-600">
        <p className="pb-2">
          Create a function that calls the following URL{" "}
          <code>
            https://webdev2-class-demo.vercel.app/api/sampleReqs/
          </code>
          . The function should be called on the click of the button below. This
          call is a GET request and it requires a passcode as part of the URL for
          it to work.
        </p>
        <p>
          This passcode is: "ehen2rfow". It is to be appended to the URL. The
          response from this call will contain a JSON with a single field called
          "secretCode". This is the answer to your question.{" "}
        </p>
      </div>

      <div className="p-4">
        <APICallExam list={myList} onClick={handleAPICall} />
     
      </div>
    </div>
  );
};

export default CodeSample3;
