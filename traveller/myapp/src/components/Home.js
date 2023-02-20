import React from 'react';
import { Carousel } from './Carousel';
import { Booking } from './Booking';
import { AboutUs } from './AboutUs';
import { Feature } from './Feature';
import { Destination } from './Destination';
import { Service } from './Service';
import { Packages } from './Packages';
import { Registration } from './Registration';
import { Team } from './Team';
import { Blog } from './Blog';


export const Home = () => {
    return (
        <div>
            <Carousel />
            <Booking />
            <AboutUs />
            <Feature />
            <Destination />
            <Service />
            <Packages />
            <Registration />
            <Team />
            <Blog />
        </div>
    );
}