import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Page = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return <Outlet />;
};

export default Page;