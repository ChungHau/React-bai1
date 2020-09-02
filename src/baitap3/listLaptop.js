import React from "react";
import ItemProduct from './itemProduct'

export default function ListLaptop() {
    return (
        <div className="row">
            {
                ItemProduct("./img/lt_macbook.png")
            }
            {
                ItemProduct("./img/lt_rog.png")
            }
            {
                ItemProduct("./img/lt_hp.png")
            }
            {
                ItemProduct("./img/lt_lenovo.png")
            }
        </div >
    )
}