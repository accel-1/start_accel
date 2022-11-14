//import React , {useState} from 'react';
import PropTypes from 'prop-types';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PageTitle from '../components/pagetitle/PageTitle';
import { Link } from 'react-router-dom';
import img from '../assets/images/background/thumb-pagetitle.jpg'
import avt from '../assets/images/author/author-db.jpg'

import img1 from '../assets/images/product/product4.jpg'
import img2 from '../assets/images/product/product5.jpg'
import img3 from '../assets/images/product/product6.jpg'
import img4 from '../assets/images/product/product7.jpg'
import img5 from '../assets/images/product/product8.jpg'
import img6 from '../assets/images/product/product9.jpg'
import icon1 from '../assets/images/svg/icon-wallet-1.svg'
import icon2 from '../assets/images/svg/icon-wallet-2.svg'
import icon3 from '../assets/images/svg/icon-wallet-3.svg'
import icon4 from '../assets/images/svg/icon-wallet-4.svg'
import icon5 from '../assets/images/svg/icon-wallet-5.svg'
import icon6 from '../assets/images/svg/icon-wallet-6.svg'
import icon7 from '../assets/images/svg/icon-wallet-7.svg'
import icon8 from '../assets/images/svg/icon-wallet-8.svg'
import avt1 from '../assets/images/author/history-at1.jpg'
import avt2 from '../assets/images/author/history-at2.jpg'
import avt3 from '../assets/images/author/history-at3.jpg'
import avt4 from '../assets/images/author/history-at4.jpg'
import avt5 from '../assets/images/author/history-at5.jpg'
import avt6 from '../assets/images/author/history-at6.jpg'
import avtf1 from '../assets/images/author/author-follow1.jpg'
import avtf2 from '../assets/images/author/author-follow2.jpg'
import avtf3 from '../assets/images/author/author-follow3.jpg'
import avtf4 from '../assets/images/author/author-follow4.jpg'
import avtf5 from '../assets/images/author/author-follow3.jpg'
import avtf6 from '../assets/images/author/author-follow4.jpg'
import imgp1 from '../assets/images/product/product27.jpg'
import imgp2 from '../assets/images/product/product4.jpg'
import imgp3 from '../assets/images/product/product5.jpg'
import imgp4 from '../assets/images/product/product9.jpg'
import imgp5 from '../assets/images/product/product10.jpg'
import imgp6 from '../assets/images/product/product11.jpg'
import imgp7 from '../assets/images/product/product6.jpg'
import avtp1 from '../assets/images/author/avt-fv1.jpg'
import avtp2 from '../assets/images/author/avt-fv2.jpg'
import avtp3 from '../assets/images/author/avt-fv3.jpg'
import avtp4 from '../assets/images/author/avt-fv4.jpg'
import avtp5 from '../assets/images/author/avt-fv5.jpg'
import avtp6 from '../assets/images/author/avt-fv6.jpg'
import avtp7 from '../assets/images/author/avt-fv7.jpg'
import {useAddress,useContract} from "@thirdweb-dev/react"
import {useState} from "react"





Dashboard.propTypes = {
    
};

function Dashboard(props) {



    
    const [collections,setCollections]=useState("")

    const address=useAddress()
    
    async function getUserCollections(){
        let request=await fetch(`https://us-west-2.aws.data.mongodb-api.com/app/application-0-ukvyw/endpoint/getcreatorcollections?address=${address}`,{
            method:"get",
            headers:{
                "content-type":"application/json"
            }
        })
        
        let response=await request.json()
        setCollections(response)
        
        }

        getUserCollections()
        console.log(collections)
    
    



   
    return (
        <div>

            <section class="tf-page-title ">    
                <div class="tf-container">
                    <div class="row">
                        <div class="col-md-12">
                            <ul class="breadcrumbs">
                                <li><Link to="/">Home</Link></li>
                                <li>Profile</li>
                            </ul>
                        </div>
                    </div>
                </div>  
                <div class="container-fluid">
                    <div class="row">
                        <div class="thumb-pagetitle">
                            <img src={img} alt="images" />
                        </div>
                    </div>
                </div>                  
            </section>

            <section className="tf-dashboard tf-tab">
                <div className="tf-container">
                    <Tabs className='dashboard-filter'>
                        <div className="row ">                 
                            <div className="col-xl-3 col-lg-12 col-md-12">
                                <div className="dashboard-user">
                                    <div className="dashboard-infor">
                                        <div className="avatar">
                                            <img src={avt} alt="images" />
                                        </div>
                                        
                                        <div className="pax" style={{fontSize:"10px"}}><i className="fab fa-ethereum"></i>{address}</div>
                                        <div className="description">
                                            NFT Creator
                                        </div>
                                        <ul className="social-item">
                                            <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                            <TabList className='filter-menuu menu-tab'>

                                                
                                                
                                                <Tab><a  ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path className="svg-fill" d="M14.4916 13.0583L11.1249 10H8.86657L5.4999 13.0583C4.55823 13.9083 4.2499 15.2167 4.70823 16.4C5.16657 17.575 6.28323 18.3333 7.54157 18.3333H12.4499C13.7166 18.3333 14.8249 17.575 15.2832 16.4C15.7416 15.2167 15.4332 13.9083 14.4916 13.0583ZM11.5166 15.1167H8.48323C8.16657 15.1167 7.91657 14.8583 7.91657 14.55C7.91657 14.2417 8.1749 13.9833 8.48323 13.9833H11.5166C11.8332 13.9833 12.0832 14.2417 12.0832 14.55C12.0832 14.8583 11.8249 15.1167 11.5166 15.1167Z" fill="#3749E9"/>
                                                <path className="svg-fill" d="M15.2919 3.6013C14.8335 2.4263 13.7169 1.66797 12.4585 1.66797H7.54188C6.28355 1.66797 5.16688 2.4263 4.70855 3.6013C4.25855 4.78464 4.56688 6.09297 5.50855 6.94297L8.87521 10.0013H11.1335L14.5002 6.94297C15.4335 6.09297 15.7419 4.78464 15.2919 3.6013ZM11.5169 6.0263H8.48355C8.16688 6.0263 7.91688 5.76797 7.91688 5.45964C7.91688 5.1513 8.17522 4.89297 8.48355 4.89297H11.5169C11.8335 4.89297 12.0835 5.1513 12.0835 5.45964C12.0835 5.76797 11.8252 6.0263 11.5169 6.0263Z" fill="#3749E9"/>
                                                </svg> Inventory</a></Tab>
                                                
                            
                                                <Tab><a  ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path className="svg-fill" d="M16.2586 4.8763L11.3086 2.01797C10.5003 1.5513 9.50026 1.5513 8.68359 2.01797L3.74193 4.8763C2.93359 5.34297 2.43359 6.20964 2.43359 7.1513V12.8513C2.43359 13.7846 2.93359 14.6513 3.74193 15.1263L8.69193 17.9846C9.50026 18.4513 10.5003 18.4513 11.3169 17.9846L16.2669 15.1263C17.0753 14.6596 17.5753 13.793 17.5753 12.8513V7.1513C17.5669 6.20964 17.0669 5.3513 16.2586 4.8763ZM10.0003 6.11797C11.0753 6.11797 11.9419 6.98464 11.9419 8.05964C11.9419 9.13464 11.0753 10.0013 10.0003 10.0013C8.92526 10.0013 8.05859 9.13464 8.05859 8.05964C8.05859 6.99297 8.92526 6.11797 10.0003 6.11797ZM12.2336 13.8846H7.76693C7.09193 13.8846 6.70026 13.1346 7.07526 12.5763C7.64193 11.7346 8.74193 11.168 10.0003 11.168C11.2586 11.168 12.3586 11.7346 12.9253 12.5763C13.3003 13.1263 12.9003 13.8846 12.2336 13.8846Z" fill="#3749E9"/>
                                                </svg> Account Setting</a></Tab>
                
                                            
                                        </TabList>
                                    
     
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-12 col-md-12 overflow-table">

                                <div className="dashboard-content inventory content-tab">
                                        <TabPanel>
                                            <div className="inner-content inventory">
                                        <h4 className="title-dashboard">Inventory</h4>
                                        <div className="table-ranking top">
                                            <div className="title-ranking">

                                                <div className="col-rankingg"><Link to="#">Name</Link></div>
                                                <div className="col-rankingg"><Link to="#">Category</Link></div>
                                                <div className="col-rankingg"><Link to="#">Views</Link></div>
                                                
                                            </div>
                                        </div>
                                        <div className="table-ranking ">
                                            <div className="content-ranking">
                                                {
                                                collections !==""?<>
                                                
                                                {
                                                collections.map(obj=>{
                                                    <>
                                                    <p>{obj.owner}</p>
                                                    <div className="col-rankingg"><i style={{color:"white"}}>1</i>{obj.collectioname}</div>
                                                    <div className="col-rankingg">{obj.collectiontype}</div>
                                                    <div className="col-rankingg nofication"> <i className="fas fa-circle"></i>someview</div>
                                                    </>
 
                                                })}
                                                
                                                </>:<></>
                                                }
                                               
                                        
                                            </div>

                                        </div>
                                            </div>
                                        </TabPanel>

                                   
                                       
                                                    
                                           

                                    

                                        <TabPanel><div className="inner-content profile">
                                        <h4 className="title-dashboard">Edit Profile</h4>
                                        <form action="#" className="form-edit-profile">
                                            <div className="user-profile">
                                                <div className="title">Contact details</div>
                                                <fieldset>
                                                    <h6>Full Name</h6>
                                                    <input type="text" placeholder="Francisco Maia" required />
                                                </fieldset>
                                                <fieldset>
                                                    <h6>Gender</h6>
                                                    <input type="text" placeholder="Female" required />
                                                </fieldset>
                                                <fieldset>
                                                    <h6>Date of birth</h6>
                                                    <input type="text" placeholder="January 24, 1983" required />
                                                </fieldset>
                                            </div>
                                            <div className="user-profile">
                                                <div className="title">Contact details</div>
                                                <fieldset>
                                                    <h6>Email Address</h6>
                                                    <input type="text" placeholder="Francisco Maia" required />
                                                </fieldset>
                                                <fieldset>
                                                    <h6>Gender</h6>
                                                    <input type="text" placeholder="seb.bennett@gmail.com" required />
                                                </fieldset>
                                                <fieldset>
                                                    <h6>Address</h6>
                                                    <input type="text" placeholder="83222 Dicki View, South Pasqualeview, RI 79216-3100" required />
                                                </fieldset>
                                            </div>
                                            <button className="btn-form" type="submit">
                                                Update Settings
                                            </button>
                                        </form>
                                    </div></TabPanel>
                                    
                                    
                                    
                                    
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </Tabs> 
                    
                </div>
            </section>
            
        </div>
    );
}

export default Dashboard;