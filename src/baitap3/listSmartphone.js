import React from "react";
import ItemProduct from './itemProduct'

export default function ListSmartphone() {
    return (
        <div className="row">
            {
                ItemProduct("./img/sp_iphoneX.png")
            }
            {
                ItemProduct("./img/sp_note7.png")
            }
            {
                ItemProduct("./img/sp_vivo850.png")
            }
            {
                ItemProduct("./img/sp_blackberry.png")
            }
        </div >
    )
}