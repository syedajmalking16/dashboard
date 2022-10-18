import axios from "axios";
import { useEffect, useState } from "react";

export default function AllData(){
    const [productData, setproductData] = useState([]);
  const GetDataHandler=()=>{
      
    axios.get("https://fakestoreapi.com/products")
    .then((res) => {
      
        setproductData(res.data)

    })
    .catch((err) =>{
        console.log(err)
    });
    
  }
//   console.log(productData)
  useEffect(() => {
    GetDataHandler()
  }, []);
    return (
    <>
    <div>
    <h1>AllData</h1>
    <button>Get Data</button>
    {
        productData.map((e,i)=>{
        return(

            <div style={{padding:10,backgroundColor:'black',color:'white',borderRadius:10,width:450,margin:'auto',marginTop:'20px',marginBottom:'20px'}}>
            <h1>
                TITLE : {e.title}
            </h1>
            <h3>
                PRICE $:{e.price}
            </h3>
            <div style={{width:'100%'}}>
            <img src={e.image} width="450" />

            </div>
   
            </div>

                )
            
        })
    }
    
    
    </div>
    </>);
}