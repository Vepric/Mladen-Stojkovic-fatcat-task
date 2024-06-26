import { IUser } from '@homework-task/models';

export const User: React.FC<IUser> = ({ id, name, username, email, phone }) => {
    return (
        <div>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};
