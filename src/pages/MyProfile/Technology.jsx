import React from 'react';

const Technology = () => {
    return (
        <div className='flex justify-center items-center h-full bg-rose-50 dark:bg-gray-800 dark:text-gray-100 py-10'>
            <div className="card w-[450px] bg-base-100 shadow-xl image-full">
                <div className="card-body">
                    <h2 className="card-title text-info text-2xl font-bold">List of front-end technologies:</h2>
                    <p className="">React, React Bootstrap, React Font Awesome, Tailwind, Axios, React Query, React Router, React Spring, SWR, React Google Maps API,React Toastify, React Leaflet, React ,Hooks Forms, React Day Picker</p>
                    <h2 className="card-title text-info text-2xl font-bold">List of back-end technologies:</h2>
                    <p className=""> MongoDB, Firebase, Heroku, Netlify, Github, React Hooks Firebase</p>
                </div>
            </div>
        </div>
    );
};

export default Technology;