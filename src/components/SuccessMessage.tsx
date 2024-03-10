// SuccessMessage.tsx
import React from 'react';

interface SuccessMessageProps {
  message: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message }) => {
  return (
    <div className="p-4 bg-green-500 text-white rounded">
      {message}
    </div>
  );
};

export default SuccessMessage;