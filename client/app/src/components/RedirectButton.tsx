import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface RedirectButtonProps {
 to: string;
 children: ReactNode;
}

const RedirectButton: React.FC<RedirectButtonProps> = ({ to, children }) => {
 const navigate = useNavigate();

 const handleClick = () => {
    navigate(to);
 };

 return (
    <button className="btn btn-primary" onClick={handleClick}>{children}</button>
 );
};

export default RedirectButton;
