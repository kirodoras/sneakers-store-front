import { Oval } from 'react-loader-spinner';

export default function Loading({ size }) {
    return (
        <Oval color='#293141' secondaryColor="#7D7E80" strokeWidth={5} height={size} width={size} />
    );
}