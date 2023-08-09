import React from "react";
import { Center } from "./Center/Center";
import { Footer } from "./Footer/Footer";
import { Main } from "./Main/Main";
import { Navbar } from "./Navbar/Navbar";
import { Slider } from "./Slider/Slider";

export const Component = () =>{
    return(
        <div>
            <Slider />
            <Center />
            <Main />
        </div>
    )
}