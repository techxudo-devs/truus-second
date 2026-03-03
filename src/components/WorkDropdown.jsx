// src/components/WorkDropdown.jsx
import React from 'react';
import hemaImg from '../assets/hema.jpg';
import kfcImg from '../assets/kfc.jpg';
import netflixImg from '../assets/netflix.jpg';

const workItems = [
    { img: hemaImg, brand: 'hema', title: 'hema socials' },
    { img: kfcImg, brand: 'kfc', title: 'kipsalon' },
    { img: netflixImg, brand: 'netflix', title: 'squid game' },
];

const WorkDropdown = () => {
    return (
        <div className="bg-stone-100 rounded-2xl p-6 w-72 shadow-xl">
            <ul className="space-y-4">
                {workItems.map((item) => (
                    <li key={item.title} className="flex items-center gap-4 cursor-pointer group">
                        <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
                        <div>
                            <span className="text-sm text-purple-600 font-semibold">{item.brand}</span>
                            <p className="font-medium group-hover:underline">{item.title}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <button className="mt-6 w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                All our work
            </button>
        </div>
    );
};

export default WorkDropdown;