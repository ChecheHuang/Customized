import React, { useState,useEffect } from "react";
import "./Cart.scss";
import { withRouter } from "react-router";
import CartStepOne from "./components/CartStepOne";
import CartStepTwo from "./components/CartStepTwo";
import CartStepThree from "./components/CartStepThree";
import CartStepFour from "./components/CartStepFour";

function Cart(props) {
  //從app.js拿到設定nav開關與判斷登入狀態
  const { setCartUpdate } = props;
  //初始化在第一步驟
  const [step, setStep] = useState(1);
  //設定本地資料
  const [myCart, setMyCart] = useState([]);
  //送出開關 資料清空所需要
  
  
  //post出去資料格式初始化與設定
  const [order, setOrder] = useState({
    memberId: 0,
    totalPrice: 0,
    address: "",
    receiver: "",
    phone: "",
    items: [
      {
        productId: 0,
        count: 1,
        price: 0,
        content: "",
      },
    ],
  });

  
  //拿到localStorage資料放進myCart
  function getCartFromLocalStorage() {
    const newCart = localStorage.getItem("cart") || "[]";
    setMyCart(JSON.parse(newCart));
  }
  useEffect(()=>{
    getCartFromLocalStorage()
  },[])


  //計算總價
  const totalPrice = () => {
    let sum = 0;
    for (let i = 0; i < myCart.length; i++) {
      sum += myCart[i].price;
    }
    return sum;
  };

  const [transport, setTransport] = useState("150");
  const [pay, setPay] = useState("貨到付款");

  return (
    
    <>
    <div className="container position-relative">
      <div className="fullLine"></div>
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ height: "200px" }}
      >
        <div className="d-flex flex-column align-items-center">
          {step === 1 ? (
            <div className="step" style={{ background: "rgb(136, 133, 133)" }}>
              1
            </div>
          ) : (
            <div className="step">1</div>
          )}

          <p className="m-0">Check Order</p>
          <p className="m-0">確認購買</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          {step === 2 ? (
            <div className="step" style={{ background: "rgb(136, 133, 133)" }}>
              2
            </div>
          ) : (
            <div className="step">2</div>
          )}
          <p className="m-0">Choose Payment Method</p>
          <p className="m-0">選擇付款方式</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          {step === 3 ? (
            <div className="step" style={{ background: "rgb(136, 133, 133)" }}>
              3
            </div>
          ) : (
            <div className="step">3</div>
          )}
          <p className="m-0">Fill The Add</p>
          <p className="m-0">確認購買</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          {step === 4 ? (
            <div className="step" style={{ background: "rgb(136, 133, 133)" }}>
              4
            </div>
          ) : (
            <div className="step">4</div>
          )}
          <p className="m-0">Shopping Completed</p>
          <p className="m-0">購買完成</p>
        </div>
      </div>
      { step === 1 && (
        <CartStepOne
          setStep={setStep}
          myCart={myCart}
          setMyCart={setMyCart}
          setCartUpdate={setCartUpdate}
        />
      ) }

      {step === 2 && (
        <CartStepTwo
          setStep={setStep}
          myCart={myCart}
          totalPrice={totalPrice()}
          transport={transport}
          setTransport={setTransport}
          pay={pay}
          setPay={setPay}
          setMyCart={setMyCart}
          setCartUpdate={setCartUpdate}
        />
      )}
      {step === 3 && (
        <CartStepThree
          setStep={setStep}
          myCart={myCart}
          totalPrice={totalPrice()}
          transport={transport}
          pay={pay}
          setOrder={setOrder}
          setCartUpdate={setCartUpdate}
          setMyCart={setMyCart}
          order={order}
        />
      )}
      {step === 4 && <CartStepFour setStep={setStep} myCart={myCart}/>}
    </div>
    </>
  );
}
export default withRouter(Cart)