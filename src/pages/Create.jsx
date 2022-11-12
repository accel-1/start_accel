import  React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../components/pagetitle/PageTitle';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { createRoutesFromChildren, Link } from 'react-router-dom';
import icon1 from '../assets/images/svg/metamask.svg'
import icon2 from '../assets/images/svg/coinbase.svg'
import icon3 from '../assets/images/svg/torus.svg'
import icon4 from '../assets/images/svg/fortmatic.svg'
import icon5 from '../assets/images/svg/drap-upload.svg'
import img1 from '../assets/images/collection/add-collection.jpg'
import img from '../assets/images/product/product4.jpg'
import ico1 from '../assets/images/icon/rain1.svg'
import ico2 from '../assets/images/icon/rain2.svg'
import ico3 from '../assets/images/icon/ethe.svg'
import avt from '../assets/images/author/author1.png'
import {useAddress,useDisconnect,useContract,useSDK} from "@thirdweb-dev/react"
import {useState} from "react"
import axios  from 'axios';

Create.propTypes = {
    
};

function Create(props) {

    const address=useAddress()
    //const disconnect=useDisconnect()
    const sdk=useSDK()
    const [createcollection,createCol]=useState(false)
    const [collectionName,setCollectionName]=useState("")
    const [collectionType,setCollectionType]=useState("")
    /////////////////////////////////////////////////////////////////////////////////////
    

const [Title, setTitle] = useState("");
 const [Description, setDescription] = useState("");
 const [Name, setName] = useState("");
 const [nfttype, setNfttype] = useState("erc721");
const [choice,setChoice]=useState("")
const [Quantity, setQuantity] = useState(1);
 const [picture, setPicture] = useState({
   preview: "/img.jpg",
   img: ""
 });


const {contract:erc721}=useContract(choice,"nft-collection")
const {contract:erc1155}=useContract( choice,"edition")

     
    const metadata_erc1155 = {

        name: Name,
        title: Title,
        description: Description,
        image: picture.img,
        quantity:Quantity  
      
      }

      const metadata_erc721 = {

        name: Name,
        title: Title,
        description: Description,
        image: picture.img,
      
      
      }

 /////////////////////////////////////////////////////////////////////////////////////////




async function CreateCollection1(e){

e.preventDefault()
 
 try{
 
 
 const contractAddress = await sdk?.deployer.deployNFTCollection({
  name:collectionName,
  primary_sale_recipient:address,
 
 
 });
 

 var data = JSON.stringify({
    
        "owner":address,
        "collectionAddress":contractAddress,
        "collectionName": collectionName,
        "collectionType":collectionType
      
 });
             
 let request=await fetch("./netlify/functions/savecreator",{
    method:"post",
    headers:{
        "content-type":"application/json"
    },
    body:data
 })
let response=await request.json()

if(response.status==200){
    alert("done")
}
 
 }
 catch(e){
  console.log(e)
 }
 
 
 }



 async function CreateCollection2(e){
    e.preventDefault()
   
   try{
   
   
   const contractAddress = await sdk.deployer.deployEdition({
    name:collectionName,
    primary_sale_recipient:address,
   

   });
   
   let request=await  fetch (`/api/savecreatordata`,{
    method:"post",
   headers:{
   "content-type":"application/json",
   "accept":"application/json"
   },
   body:JSON.stringify({
   
    address:`${address}`,
    collectionname:`${collectionName}`,
    collectionaddress:`${contractAddress}`,
    collectionType:`${collectionType}`
   
   })
   })
   
   let response=await request.json()
   if(response.status==true){
    //setStatus(true)
   }
   
   }
   catch(e){
    console.log(e)
   }
   
   
   }



   async function ERC721(e) {
    e.preventDefault()
     const t =await erc721?.mintTo(address,metadata_erc721);
     
     //const tx = await contract?.mintTo(address, metadata_erc1155);
     const receipt = t?.receipt; // the transaction receipt
     const tokenId = t?.id; // the id of the NFT minted
    
     //const nft = await tx?.data();
     console.log("Receipt" + receipt + "  " + "tokenid" + tokenId)
    
    
    }


    async function ERC1155(){

        const t =await erc1155?.mintTo(address,metadata_erc1155);
        
        //const tx = await contract?.mintTo(address, metadata_erc1155);
        const receipt = t?.receipt; // the transaction receipt
        const tokenId = t?.id; // the id of the NFT minted
       
        //const nft = await tx?.data();
        console.log("Receipt" + receipt + "  " + "tokenid" + tokenId)
       
       
       
       }






    return (
        <div>
        
{

createcollection==true?
<>
<section className="tf-page-title">    
                <div className="tf-container">
                <h2>Collection </h2>
                <button onClick={()=>createCol(false)}>Close</button>
                </div>                    
</section>
<fieldset>
    
     <label >Enter Collection Name</label>
    <input type="text"  placeholder="E.G. After Purchase You Will Get A  T-Shirt" onChange={(e)=>setCollectionName(e.target.value)} />
    <input type="text" onChange={(e)=>setCollectionType(e.target.value)}  placeholder="Type" class=""/>
    <section className="tf-page-title">    
                <div className="tf-container">
                <h2>Collection </h2>
                {
                  
                  collectionType=="erc721"
                  ?
                  <>
                  <button onClick={(e)=>CreateCollection1(e)}>create 721 collection</button>
                  
                  </>
                  :
                  <>
                  <button onClick={(e)=>CreateCollection2(e)}>create 1155 collection</button>
                  </>
                
                }
                  
                </div>                    
</section>
     </fieldset>


</>
:
<>
<section className="tf-page-title">    
                <div className="tf-container">
                <h2> Create Collection</h2>
                <button onClick={()=>createCol(true)}>Create Collection</button>
                </div>                    
</section>

</>

}
        



            <PageTitle none='none'  title='Create' />

            <section className="tf-add-nft">
                <div className="tf-container">
                    <div className="row ">
                        <div className="col-xl-9 col-lg-8 ">
                            <div className="add-nft-inner">
                                

                                <h6 className="title">Select Item Type</h6>
                                <p className="sub">They All Serve The Same Purpose, But Each One Takes.</p>

                                <Tabs className='tf-tab'>
                       
                                    <TabList className='create-button menu-tab'>
                                        
                                        <Tab>
                                            <div className="create-item">
                                                <div className="icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0ZM4.47 5.72C4.76 5.43 5.24 5.43 5.53 5.72C6.24 6.43 7.4 6.43 8.11 5.72C8.4 5.43 8.88 5.43 9.17 5.72C9.46 6.01 9.46 6.49 9.17 6.78C8.52 7.43 7.67 7.75 6.82 7.75C5.97 7.75 5.12 7.43 4.47 6.78C4.18 6.48 4.18 6.01 4.47 5.72ZM10 16.78C7.31 16.78 5.12 14.59 5.12 11.9C5.12 11.2 5.69 10.62 6.39 10.62H13.59C14.29 10.62 14.86 11.19 14.86 11.9C14.88 14.59 12.69 16.78 10 16.78ZM15.53 6.78C14.88 7.43 14.03 7.75 13.18 7.75C12.33 7.75 11.48 7.43 10.83 6.78C10.54 6.49 10.54 6.01 10.83 5.72C11.12 5.43 11.6 5.43 11.89 5.72C12.6 6.43 13.76 6.43 14.47 5.72C14.76 5.43 15.24 5.43 15.53 5.72C15.82 6.01 15.82 6.48 15.53 6.78Z" fill="white"/>
                                                    </svg></div>
                                                <span>Create ERC721</span>
                                            </div>
                                            </Tab>
                                        <Tab>
                                        <div className="create-item">
                                                <div className="icon"><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.748 1H4.74805C3.08805 1 1.74805 2.34 1.74805 4V10C1.74805 11.66 3.08805 13 4.74805 13H9.24805C9.24805 10.52 11.268 8.5 13.748 8.5V4C13.748 2.34 12.408 1 10.748 1ZM4.51805 4.27C5.28805 3.72 6.33805 3.71 7.12805 4.25C7.46805 4.48 7.55805 4.95 7.32805 5.29C7.09805 5.63 6.62805 5.72 6.28805 5.49C6.01805 5.3 5.64805 5.3 5.37805 5.5C5.24805 5.59 5.09805 5.63 4.94805 5.63C4.71805 5.63 4.47805 5.52 4.33805 5.32C4.09805 4.98 4.17805 4.51 4.51805 4.27ZM10.018 8.24C9.75805 8.57 9.28805 8.62 8.96805 8.36C8.61805 8.08 8.19805 7.93 7.74805 7.93C6.74805 7.93 5.91805 8.69 5.80805 9.67H7.90805C8.31805 9.67 8.65805 10.01 8.65805 10.42C8.65805 10.83 8.31805 11.17 7.90805 11.17H5.58805C4.87805 11.17 4.29805 10.59 4.29805 9.88C4.29805 7.98 5.84805 6.43 7.74805 6.43C8.52805 6.43 9.29805 6.7 9.90805 7.19C10.228 7.45 10.278 7.92 10.018 8.24ZM11.328 5.29C11.098 5.63 10.628 5.72 10.288 5.49C10.018 5.3 9.64805 5.3 9.37805 5.5C9.24805 5.59 9.09805 5.63 8.94805 5.63C8.71805 5.63 8.47805 5.52 8.33805 5.32C8.09805 4.98 8.17805 4.51 8.51805 4.27C9.28805 3.72 10.338 3.71 11.128 4.25C11.468 4.48 11.558 4.95 11.328 5.29Z" fill="white"/>
                                                    <path d="M18.9678 16.6786C18.8978 16.5986 18.7978 16.5586 18.6878 16.5586H14.8078C14.6978 16.5586 14.5978 16.5986 14.5278 16.6786C14.4578 16.7586 14.4178 16.8686 14.4378 16.9686C14.5678 18.1486 15.5578 19.0486 16.7478 19.0486C17.9378 19.0486 18.9278 18.1586 19.0578 16.9686C19.0678 16.8586 19.0378 16.7586 18.9678 16.6786Z" fill="white"/>
                                                    <path d="M19.748 10H13.748C12.098 10 10.748 11.35 10.748 13V19C10.748 20.65 12.098 22 13.748 22H19.748C21.398 22 22.748 20.65 22.748 19V13C22.748 11.35 21.398 10 19.748 10ZM13.338 13.17C13.578 12.83 14.048 12.75 14.388 12.99C14.658 13.18 15.018 13.18 15.288 13C15.628 12.76 16.098 12.85 16.328 13.2C16.558 13.54 16.478 14.01 16.128 14.24C15.738 14.5 15.288 14.64 14.838 14.64C14.368 14.64 13.908 14.5 13.518 14.22C13.178 13.97 13.098 13.5 13.338 13.17ZM16.748 20.17C14.848 20.17 13.298 18.62 13.298 16.72C13.298 16.01 13.878 15.43 14.588 15.43H18.908C19.618 15.43 20.198 16.01 20.198 16.72C20.198 18.62 18.648 20.17 16.748 20.17ZM20.128 14.23C19.738 14.49 19.288 14.63 18.838 14.63C18.368 14.63 17.908 14.49 17.518 14.21C17.178 13.97 17.098 13.5 17.338 13.16C17.578 12.82 18.048 12.74 18.388 12.98C18.658 13.17 19.018 13.17 19.288 12.99C19.628 12.75 20.098 12.84 20.328 13.19C20.558 13.54 20.468 14 20.128 14.23Z" fill="white"/>
                                                    </svg></div>
                                                <span>Create    ERC1155</span>
                                            </div>

                                        </Tab>
                                    </TabList>

                                    <TabPanel>
                                    <div className="tab-create-item">
                                                <h6 className="title">Upload An Item</h6>
                                                <p className="sub">But Each One Takes A Different Approach And Makes Different Tradeoffs.</p>

                                                <div className="drag-upload">
                                                    <input type="file" onChange={(e)=>setPicture({...picture,img:e.target.files[0],preview: `${URL.createObjectURL(e.target.files[0])}`})}/>
                                                    <img src={icon5} alt="Binasea" />
                                                    <h6 className="title">Drag your item to upload</h6>
                                                    <p className="sub-title">PNG, GIF, WebP, MP4 Or MP3. Maximum File Size 100 Mb.</p>
                                                </div>

                                                <h6 className="title">Upload An Item</h6>
                                                <p className="sub mb22">But Each One Takes A Different Approach And Makes Different Tradeoffs.</p>

                                                <fieldset>
                                                    <label >Name your  item</label>
                                                    <input type="text"  placeholder="Name"    onChange={(e)=>setName(e.target.value)}/>
                                                </fieldset>

                                                <fieldset>
                                                    <label >Enter short description</label>
                                                    <input type="text"  placeholder="Description" onChange={(e)=>setDescription(e.target.value)} />
                                                </fieldset>

                                                <fieldset className="propertise">
                                                    <label className="mb8">Title</label>
                                                    <input type='text' placeholder='title' onChange={(e)=>setTitle(e.target.value)}></input>
                                                </fieldset>

                                             
                                                <button onClick={()=>ERC721()}>Mint ERC721</button>
                                            

                                            
                                            </div>

                                </TabPanel>

                                <TabPanel>
                                <div className="tab-create-collection">
                                <h6 className="title">Upload An Item</h6>
                                                <p className="sub">But Each One Takes A Different Approach And Makes Different Tradeoffs.</p>

                                                <div className="drag-upload">
                                                    <input type="file" onChange={(e)=>setPicture({...picture,img:e.target.files[0],preview: `${URL.createObjectURL(e.target.files[0])}`})}/>
                                                    <img src={icon5} alt="Binasea" />
                                                    <h6 className="title">Drag your item to upload</h6>
                                                    <p className="sub-title">PNG, GIF, WebP, MP4 Or MP3. Maximum File Size 100 Mb.</p>
                                                </div>

                                                <h6 className="title">Upload An Item</h6>
                                                <p className="sub mb22">But Each One Takes A Different Approach And Makes Different Tradeoffs.</p>

                                                <fieldset>
                                                    <label >Name your  item</label>
                                                    <input type="text"  placeholder="Name"    onChange={(e)=>setName(e.target.value)}/>
                                                </fieldset>

                                                <fieldset>
                                                    <label >Enter short description</label>
                                                    <input type="text"  placeholder="Description" onChange={(e)=>setDescription(e.target.value)} />
                                                </fieldset>

                                                <fieldset className="propertise">
                                                    <label className="mb8">Title</label>
                                                    <input type='text' placeholder='title' onChange={(e)=>setTitle(e.target.value)}></input>
                                                </fieldset>

                                             <button onClick={()=>setQuantity(Quantity+1)}>+</button>
                                             <button onClick={()=>setQuantity(Quantity -1)} disabled={Quantity < 1}>-</button>

                                            <button onClick={()=>ERC1155()}>Mint ERC1155</button>
                                            

                                                
                                                    

            
                                            
                                            </div>
                                </TabPanel>
   


                        
                            

                        </Tabs> 


                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <h5 className="title-preview">Item Preview</h5>
                            <div className="sc-product style1">
                                <div className="top">
                                    <Link to="#" className="tag">Sweet NFT</Link>
                                    <div className="wish-list">
                                        <Link to="#" className="heart-icon"></Link>
                                    </div>
                                </div>
                                <div className="features">
                                    <div className="product-media">
                                        <img src={picture.preview} alt="images" />
                                    </div>
                                    <div className="featured-countdown">
                                        <span className="js-countdown" data-timer="55555" data-labels=" ,  h , m , s "></span>
                                    </div>
                                    <div className="rain-drop1"><img src={ico1} alt="images" /></div>
                                    <div className="rain-drop2"><img src={ico2} alt="images" /></div>
                                </div>
                                <div className="bottom">
                                    <div className="details-product">
                                        <div className="author">
                                            <div className="avatar">
                                                <img src={avt} alt="images" />
                                            </div>
                                            <div className="content">
                                                <div className="position">Creator</div>
                                                <div className="name" style={{fontSize:"10px"}}>{address}</div>
                                            </div>
                                        </div>
                                      </div>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            
        </div>
    );
}

export default Create;