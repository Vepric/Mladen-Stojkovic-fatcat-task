import { IUser } from '@homework-task/models';
import clsx from 'clsx';

export const User: React.FC<IUser> = ({ id, name, username, email, phone }) => {
    return (
        <div
            className={clsx(
                'flex',
                'flex-col',
                'p-4',
                'gap-2',
                'text-black',
                'bg-white',
                'rounded-2xl'
            )}
        >
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};
