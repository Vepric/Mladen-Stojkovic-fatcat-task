import clsx from 'clsx';
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    className?: String;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className,
}) => {
    return (
        <button
            className={clsx(
                'rounded-lg',
                'px-4',
                'py-2',
                'bg-black',
                'text-white',
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
