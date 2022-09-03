import '../css/md-image.css';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
export const ImageRenderer = (props: any) => {
    const [isFullSize, setFullSize] = useState(false);
    const [loading, setLoading] = useState(false);

    console.log('Got the props: ', props);

    if (isFullSize)
        return (
            <div
                className="image-renderer-open"
                onClick={() => setFullSize(false)}
            >
                <div className="close-btn">
                    <FontAwesomeIcon icon={faTimes} />
                </div>

                <img className="image-renderer-open-image" src={props.src} />
            </div>
        );
    else
        return (
            <div className="image-renderer-con">
                <img
                    className="image-renderer-image"
                    src={props.src}
                    onClick={() => setFullSize(true)}
                />
            </div>
        );
};
