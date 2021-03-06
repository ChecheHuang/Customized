import React,{useState,useEffect} from "react";
import FruitVariety from "./FruitVariety";
function FruitType(props) {
  const { fruit_name, fruit_image, items,nutrients,cartData ,addCart,setCounts,modalRef,setModalData,setDataLoading } = props;
  // const imageUrl =
  //   "http://localhost:3000/images/CustomizedPhotos/" +
  //   fruit_name +
  //   "/" +
  //   fruit_image;
 
  // const test=require(`../../../../../images/CustomizedPhotos/tangerine/tangerine.png`)
  // var url = `../../../../../images/CustomizedPhotos/banana/banana.jpg`
  //  url=`../../../../../images/CustomizedPhotos/${fruit_name}/${fruit_image}`
  const [imgUrl,setImgUrl]=useState("")
  useEffect(()=>{
    if(fruit_name.length!==0){
      const imgUrl=require(`../../../../../images/CustomizedPhotos/${fruit_name}/${fruit_image}`).default
      setImgUrl(imgUrl)
    }
  },[fruit_name,fruit_image])
  return (
    <>
      <article>
        <div>
          <div className="fruitMenu fruitShadow" >
            <div className="smallImageBox">
              <img className="productImage" src={imgUrl} alt="" />
            </div>
         
          </div>
          {/* 水果項目 */}
          {items.map((item) => {
            const {
              id,
              fruitname,
              price,
              unit,
              wight,
              images,
              fram_name,
              avatar,
              rating,
              imageArray,
              content
            } = item;
            return (
              <FruitVariety
                key={id}
                id={id}
                fruitname={fruitname}
                price={price}
                unit={unit}
                wight={wight}
                images={images}
                fram_name={fram_name}
                avatar={avatar}
                rating={rating}
                imageArray={imageArray}
                content={content}
                imageFront={fruit_name}
                cartData={cartData}
                addCart={addCart}
                nutrients={nutrients}
                setCounts={setCounts}
                modalRef={modalRef}
                setModalData={setModalData}
                setDataLoading={setDataLoading}
              />
            );
          })}
        </div>
      </article>
    </>
  );
}
export default FruitType;
