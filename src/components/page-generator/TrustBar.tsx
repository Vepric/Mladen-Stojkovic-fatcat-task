import Marquee from 'react-fast-marquee';

export interface ITrustBarProps {
    images: string[];
}

export const TrustBar: React.FC<ITrustBarProps> = ({ images }) => {
    return (
        <Marquee>
            {images.map((image) => (
                <img width={100} key={image} src={image} className="mx-10" />
            ))}
        </Marquee>
    );
};
