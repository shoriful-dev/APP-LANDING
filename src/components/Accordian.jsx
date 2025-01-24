import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: 'How to start using Upland Application?',
      content:
        'Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum amet eu dolore labore in aliquip.',
    },
    {
      title: 'How can I register?',
      content:
        'Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum amet eu dolore labore in aliquip.',
    },
    {
      title: 'Can I use free plan permanently?',
      content: 'Content for digital agency process section',
    },
  ];

  return (
    <div
      className="w-full max-w-[555px] mx-auto space-y-2"
      style={{ fontFamily: 'Darker' }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-3xl overflow-hidden bg-white shadow-2xl"
        >
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          >
            <span className="font-bold text-2xl text-gray-900">
              {item.title}
            </span>
            {openIndex === index ? (
              <AiOutlineMinus className="h-5 w-5 text-blue-500" />
            ) : (
              <AiOutlinePlus className="h-5 w-5 text-blue-500" />
            )}
          </button>
          <div
            className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${
              openIndex === index ? 'py-4' : 'max-h-0'
            }`}
          >
            <p className="text-gray-600">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
