import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../assets/style/section2.css';
import pic from '../assets/images/section2.png';
import second from '../assets/images/img_1.4df2ac48be1c06b2169f.png';
export const Section2 = ()=>{
    return(
        <div className="container-fluid section2">
            <div className='container'>
                <div className='row text-center'>
                    <div class="MuiContainer-root MuiContainer-fixed MuiContainer-maxWidthLg">
                        <div class="jss1"><img src="https://res.cloudinary.com/fahad-shahzad/image/upload/v1660239951/web3maker./companies/3_kiw6vb.png" alt="logo0"/>
                            <img src="https://res.cloudinary.com/fahad-shahzad/image/upload/v1660239950/web3maker./companies/1_s3y3kv.png" alt="logo1"/>
                                <img src="https://res.cloudinary.com/fahad-shahzad/image/upload/v1660239951/web3maker./companies/8_qbeqm9.png" alt="logo2"/>
                            <img src="https://res.cloudinary.com/fahad-shahzad/image/upload/v1660239950/web3maker./companies/5_wkziqi.jpg" alt="logo3"/>
                            <img src="https://res.cloudinary.com/fahad-shahzad/image/upload/v1660239950/web3maker./companies/2_idfmzd.png" alt="logo4"/>
                            <img src="https://res.cloudinary.com/fahad-shahzad/image/upload/v1660239950/web3maker./companies/7_vhsj8v.png" alt="logo5"/>
                            <img src="https://res.cloudinary.com/fahad-shahzad/image/upload/v1660239950/web3maker./companies/6_s6sqfc.jpg" alt="logo6"/>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12 col-md-12'>
                        <h1 class="font-bold-lato">Create your own Web3 Masterpiece </h1>
                        <p class="font-bold-light" style={{fontSize: "25px" , textAlign: "start"}}>Most entrepreneurs want to create their own web3 sites, unfortunately, they dont know much about creating one. Web3Makr makes it easier for newbies to create a blockchain-based collectibles solution without the hassle of leaving their favorite creation tools and by simple drag and drop functionality.</p>
                        <a href="https://web3makr.netlify.app/"><button class="btn font-bold-light btn-lg" style={{backgroundColor: "rgb(111, 52, 142)" ,color: "white"}}>Start Building</button></a>
                    </div>
                    <div className='col-lg-6 col-sm-12 col-md-12'>
                        <img src={pic} className='img-fluid section2pic' alt="Web3makr.com" style={{width: "90%", height:"100%"}}/>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <img src={second} alt="Web3makr.com" style={{width: "90%", height: "100%"}}/>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div class="col-sm-12 my-4 col-md-6 col-lg-6 col-xl-6">
                                <h1 class="font-bold-lato">You can also enjoy making sites with following technologies</h1>
                                <span class="font-bold-light" style={{color: "rgb(24, 173, 228)", fontSize: "24px"}}>01 </span> <span style={{fontSize: "24px"}}>NFT (ERC-721)</span>
                                <br/>
                                <span class="font-bold-light"  style={{color: "rgb(24, 173, 228)", fontSize: "24px"}}>02 </span> <span style={{fontSize: "24px"}}>DEFI</span>
                                <br/><span class="font-bold-light"  style={{color: "rgb(24, 173, 228)", fontSize: "24px"}}>03 </span> <span class="font-bold-light"style={{fontSize: "24px"}}>Smart Contracts</span>
                                <br/><span class="font-bold-light" style={{color: "rgb(24, 173, 228)", fontSize: "24px"}}>04 </span> <span class="font-bold-light" style={{fontSize: "24px"}}>GameFi</span><br/>
                                <span class="font-bold-light"  style={{color: "rgb(24, 173, 228)", fontSize: "24px"}}>05 </span> <span class="font-bold-light" style={{fontSize: "24px"}}>Metaverse</span>
                                <br/>
                                <a href="https://web3makr.netlify.app/"><button class="btn mt-4 font-bold-light btn-sm" style={{backgroundColor: "rgb(111, 52, 142)", color: "white;"}}>
                                    Start Building</button></a>
                                </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
} 