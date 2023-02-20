import React from "react";
import { Header } from "./Header";
import { Booking } from "./Booking";
import { AboutUs } from "./AboutUs";
import { Feature } from "./Feature";
import { Registration } from "./Registration";

export const About = () => {
    return (
        <div>
            <Header />
            <Booking />
            <AboutUs />
            <Feature />
            <Registration />
        </div>
    );
}