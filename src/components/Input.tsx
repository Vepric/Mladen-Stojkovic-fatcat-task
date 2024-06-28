import clsx from 'clsx';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
    id: string;
    label: string;
    register: UseFormRegisterReturn<string>;
    error?: boolean;
    helperText?: string;
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    register,
    error,
    helperText,
}) => {
    return (
        <div className="mb-4">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray60"
            >
                {label}
            </label>
            <input
                id={id}
                {...register}
                className={clsx(
                    'mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm',
                    error
                        ? 'border-red text-red placeholder-red focus:border-red focus:ring-red'
                        : 'border-gray60'
                )}
            />
            {helperText && (
                <p className="mt-2 text-sm text-red">{helperText}</p>
            )}
        </div>
    );
};

export default Input;
