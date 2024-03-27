import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { useEffect, useState } from "react";


const Root = () => {

   


    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;