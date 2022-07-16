import React from "react";

function FruitIconItem(props) {
  const { Img } = props;
  const fruit = require(`../../../images/indexCustomAniIcon/indexCustom/${Img}`)
  return (
    <>
      <div className="fruit_ball" id="clickMe">
        <img src={fruit.default} alt="rowfruit" />
      </div>
    </>
  );
}
export default FruitIconItem;
