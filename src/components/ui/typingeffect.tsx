"use client";
import React, { useEffect, useState } from 'react';

const TypingEffect = () => {
  const [typedText, setTypedText] = useState('');
  const textToType = "AI-Assisted Note taking";

  useEffect(() => {
    let index = 0;

    function typeText() {
      setTypedText(textToType.slice(0, index));
      if (index < textToType.length) {
        setTimeout(function () {
          index += 1;
          typeText();
        }, 100);
      }
    }

    typeText();
  }, []);

  return (
    <div className="font-bold whitespace-no-wrap overflow-hidden border-r-2">
      <p id="typingText" className='max-w-prose text-center'>
        {typedText}
      </p>
    </div>
  );
};

export default TypingEffect;
