import React from 'react';

interface InputProps {
    id: string;
    type: string;
    value: string;
    onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ id, type, value, onChange }) => {
    return (
        <div>
            <input
                id={id}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="mt-1 block w-1/2 rounded-md border-2 border-gray-800 shadow-sm"
                required
            />
        </div>
    );
};

export default Input;