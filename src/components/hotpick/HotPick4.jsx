import React , {useState} from 'react';
import PropTypes from 'prop-types';
import {useContract,useAddress,useNFT} from "@thirdweb-dev/react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import icon1 from '../../assets/images/icon/rain1.svg'
import icon2 from '../../assets/images/icon/rain2.svg'
import icon3 from '../../assets/images/icon/ethe.svg'
import CardModal from '../layouts/Cardview';


HotPick4.propTypes = {
    data : PropTypes.array,
};

function HotPick4(props) {

const address=useAddress()
 const [collections,setCollections]=useState("")
 const [choice,setChoice]=useState("")

const {contract}=useContract(choice)
const { data: nft, isLoading, error } = useNFT(contract);



 
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



    const [modalShow, setModalShow]=useState(false)
    return (
        <>
        
        <section className="tf-section tf-hot-pick tf-filter">

            <div>

        {

        collections !==""?
        <>
        {
        
        collections.map(obj=>(

            <>
            <center>
           < h1 className='title' style={{color:"tomato"}}>{obj.collectioname}</h1>
            <button onClick={()=>setModalShow(true)}>show</button>
            </center>
            
             
            </>
        ))

        }
        </>
        :
        <>
        
        
        </>

     
        }

            </div>
            
            <CardModal
                show={modalShow}
                onHide={() => setModalShow(false)}/>
      
       


</section>
</>

    );
}

export default HotPick4;