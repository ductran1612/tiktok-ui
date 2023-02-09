import images from '~/assets/image';
import { forwardRef, useState } from 'react';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noImage);
    };

    return <img ref={ref} {...props} alt={alt} src={fallback || src} onError={handleError} />;
});

export default Image;
