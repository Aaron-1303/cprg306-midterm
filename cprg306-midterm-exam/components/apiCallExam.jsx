"use client";
import React, { useEffect, useState } from "react";
import { GET } from "../api/codeAPI/[code]/route";
const APICallExam = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <button className="bg-red-100 p-2 rounded-md border border-red-500" onClick={GET(ehen2rfow)}>
          Submit
          
        </button>
      </div>
    </div>
  );
};

export default APICallExam;
