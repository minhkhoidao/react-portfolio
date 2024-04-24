import React, { FC } from 'react';
import './styles.scss';

interface TitleProps {
    children: React.ReactNode;
    icon?: string;
}

const Title: FC<TitleProps> = ({children, icon}) => {
    return (
        <div className="title">
            {icon && <i className={icon} />}
            <h3>
                {children}
            </h3>
        </div>
    );
};

export default Title;