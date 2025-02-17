'use client';
import React from "react";

export default function CopyButton() {
  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent the default anchor behavior
    const textToCopy = "lutony040720@gmail.com";
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Copied email address to clipboard!");
    }).catch((err) => {
      alert("Failed to copy text: " + err);
    });
  };

  return (
    <a href="#" onClick={handleCopy}>
      <img src='/icons/email.png' alt='discord' className='rounded-full mx-auto h-20 w-20'></img>
    </a>
  );
};
