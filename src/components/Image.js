import React from 'react';
import './Image.scss';
import { SocialIcon } from 'react-social-icons';
// Image placeholder

const Image = (props) => {
    return (
        <div className="info-container">
            <div className="redirect-container">
                <div className="name">{props.name}</div>
                <div className="link-container">
                    <span className="redirect">
                        <SocialIcon url="https://www.facebook.com/trungducnvx/" />
                    </span>
                    <span className="redirect">
                        <SocialIcon url="https://www.instagram.com/kheicheng2.4/" />
                    </span>
                    <span className="redirect">
                        <SocialIcon url="https://www.github.com/DuckToFo/" />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Image;
