import React from 'react';

interface ButtonProps {
  onClick: () => void;
  disabled: boolean;
  loading: boolean;
  label: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  loading,
  label,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`text-white text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l rounded-lg px-4 py-2 text-center ${
      loading ? 'cursor-progress' : ''
    }`}
  >
    {label}
  </button>
);

export default Button;
