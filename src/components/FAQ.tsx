import React from "react";
import { FaqData } from "@/lib/types";

interface FAQProps {
  data: FaqData;
}

const FAQ: React.FC<FAQProps> = ({ data }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 mt-20px">{data.title}</h2>
      {data.questionCollection.items.map((item, index) => (
        <div key={index} className="border-b border-gray-300 py-4">
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer text-pink-500 font-semibold text-lg">
              {item.question}
              <span className="text-gray-500 group-open:rotate-180 transition-transform">
                ▼
              </span>
            </summary>
            <p className="mt-2 text-gray-700">{item.answer}</p>
          </details>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
