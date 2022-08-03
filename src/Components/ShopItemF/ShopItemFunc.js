import React from "react";
import PropTypes from "prop-types";
import { ItemModel } from "../Models/ItemModel";
import s from "./ShopItemFunc.module.css";

export function ShopItemFunc(props) {
  const { item } = props;
  return (
    <div className={s["main-content"]}>
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className={s.description}>{item.descriptionFull}</div>
      <div className={`${s["highlight-window"]} ${s.mobile}`}>
        <div className={s["highlight-overlay"]}></div>
      </div>
      <div className={s.divider}></div>
      <div className={s["purchase-info"]}>
        <div className={s.price}>
          {item.currency + parseFloat(item.price).toFixed(2)}
        </div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
}
ShopItemFunc.propTypes = {
  item: PropTypes.instanceOf(ItemModel),
};
