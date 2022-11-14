import React from 'react';
import { Link } from 'react-router-dom'
import { Modal } from "react-bootstrap";
import {useAddress} from "@thirdweb-dev/react"
import { useState } from 'react';

const CardModal = (props) => {
    const address=useAddress()
    const [collections,setCollections]=useState("")

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

 <>
 {

collections !==""?
<>
{

collections.map(obj=>(

    <>

<Modal
    show={props.show}
    onHide={props.onHide}
  >
    <Modal.Header closeButton></Modal.Header>

    <div className="modal-body space-y-20 pd-40">
        <h3>Collection Details</h3>
        <p className="text-center sub-heading">Collection Owner<span className="price color-popup">{address}</span></p>
        
        <div className="d-flex justify-content-between detail-1">
            <p> Collection Name</p>
            <p className="text-right price color-popup"> {obj.collectioname}</p>
        </div>
        <div className="d-flex justify-content-between detail-2">
            <p> Collection Type</p>
            <p className="text-right price color-popup">{obj.collectiontype}</p>
        </div>

        <div className="d-flex justify-content-between detail-2">
            <p> Collection Address</p>
            <p className="text-right price color-popup">{obj.collectionaddress}</p>
        </div>

    </div>
    </Modal>
   
     
    </>
))

}
</>
:
<>


</>


}

   
    </>
    
  );
};

export default CardModal;
