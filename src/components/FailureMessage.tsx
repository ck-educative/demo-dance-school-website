// FailureMessage.tsx
import React from 'react';

interface FailureMessageProps {
  message: string;
}

const FailureMessage: React.FC<FailureMessageProps> = ({ message }) => {
  return (
    <div className="p-4 bg-red-500 text-white rounded">
      {message}
    </div>
  );
};

export default FailureMessage;