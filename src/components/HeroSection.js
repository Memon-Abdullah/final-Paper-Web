import React from "react";
import '../assets/style/hero.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export const HeroSection = () => {
    return(
        <>
            <div className="container-fluid myhero">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 style={{fontSize:"100px"}} className="text-center text-white">Web3Makr Redefining</h1>
                            <h4  style={{fontSize:"60px"}} className="text-center text-white">How You Create</h4>
                            <h6  style={{fontSize:"40px"}} className="text-center text-white">Unlock the blockchain potential to create Web3 Applications</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center mt-5">
                            <button class="btn-demo ">
                                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PlayCircleFilledWhiteIcon" style={{color: "white"}}><path transform="scale(0.5, 0.5)" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 29V15l12 9-12 9z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="welcome-2 text-center text-white mt-5 pt-5">
                        <img class="welcome-image" src="https://res.cloudinary.com/fahad-shahzad/image/upload/v1663573014/web3maker./Screenshot_2022-09-19_at_12.36.09_PM_bysqew.png" alt="Web3makr.com" className="img-fluid"/>

                    </div>
                </div>
            </div>
        </>
    )
}