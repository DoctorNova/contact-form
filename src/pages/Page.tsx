import React from 'react';
import './Page.scss';

interface Props {
    children: React.ReactNode
}

const Page = ({ children }: Props) => (
    <div className="page-wrapper">
        <div className="page-content">
            {children}
        </div>
    </div>
);

export default Page;