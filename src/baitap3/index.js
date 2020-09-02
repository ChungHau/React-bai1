import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import ListSmartphone from "./listSmartphone";
import ListLaptop from "./listLaptop";
import Promotion from "./promotion";

export default function Baitap3() {
    return (
        <>
            <Header />
            <Carousel />
            <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
                <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                <ListSmartphone />
            </section>
            <section id="smartphone" className="container-fluid pt-5 pb-5">
                <h1 className="text-dark text-center">BEST LAPTOP</h1>
                <ListLaptop />
            </section>
            <Promotion />
        </>
    )
}
