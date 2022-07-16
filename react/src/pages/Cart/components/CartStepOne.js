import React,{useEffect} from "react";
import ProductTable from "./ProductTable";
import { withRouter } from "react-router";
function CartStepOne(props) {
  const{setStep,myCart,setMyCart,setCartUpdate}=props
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  console.log(myCart)
  return (
    <>
      <ProductTable myCart={myCart} setMyCart={setMyCart} setCartUpdate={setCartUpdate} />
      <div className="d-flex justify-content-center pt-3">
        {myCart.length !==0 ?  <>
        <span onClick={()=>{props.history.goBack()}} className="btn normal-btn mx-4 my-3">繼續購物</span>
        <span onClick={()=>{setStep(2)}} className="btn normal-btn mx-4 my-3">下一步</span>
        </> : <h1>請先購買水果</h1> }
      </div>
    </>
  );
}
export default withRouter(CartStepOne);
