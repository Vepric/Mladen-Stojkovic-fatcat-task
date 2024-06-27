import { IUser } from '@homework-task/models';
import clsx from 'clsx';

export const User: React.FC<IUser> = ({ id, name, username, email, phone }) => {
    return (
        <div className={clsx('p-4', 'bg-gray60', 'rounded')}>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};
