/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/app-route/app-route.js';
import '@material/mwc-button';

class CartItems extends PolymerElement {
  static get template() {
    return html`
    <app-location route="{{route}}" ></app-location>

      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        .c1{
          display: grid;
          justify-content: space-around;
          align-items: center;
          padding: 10px;
          margin-top: 20px;
        }
        .float{
          float:left;
        }
      </style>
      <dom-repeat items="[[productId]]">
      <template strip-whitespace="">
        <div class="card">
           <button on-click = "back">back</button>
           <div class="c1">
             <img src={{productId.Img}}>
           </div>
           <div class="c1">
             <h3 > {{productId.ProductName}}</h3>
           </div>
           <hr>
           <div class="c1">
             <small>Qty:</small>
             <div class="float">
               <input type="button" value = "-" on-click="qtyDec"></input>
               <input type="button" value ="{{Qty}}" on-change="UpdateQty"></input>
               <input type="button" value = "+" on-click="qtyInc"></input></br>
             </div><br>
             <small>Price</small>
             <b>$ {{productId.Price}}</b>
           </div>
           <hr>
           <div class="c1">
             <small >Total</small>
             <b >$ {{sum}}</b>
             <mwc-button raised label="PURCHASE"  on-click="purchase"></mwc-button>
            </div>
         </div>
      </template >
      </dom-repeat>
    `;
  }
  static get properties() {
    return {
       //ProductList is property which is taking ProductList array values from my-app
      productList:{
        type:Array,
        value:[],
        notify:true,
      },
     //Qty is property which is Quantity of Product
     Qty:{
       type:Number,
       value:0,
       notify:true
      },
    //sum is property for updating total cost
     sum:{
       type:String,
       value:0,
       notify:true
     },
    //ProductId is property which is accessing productId from my-app
     productId:{
        type:Number,
        observer:'_checkId'
      }
    };
  }
  //back is for navigates to previous page
  back(){
    this.set('route.path','/product');
  }
  //it is observer call back funtion and also it will pick the index of particular item which user select
  _checkId(e){
     console.log(e);
   }
  // updateQty is for displaying the Total Quantity
  UpdateQty(){
     this.Qty = e.target.value;
    console.log('up',this.Qty);
  }
  //qtyDesc is for updating total when Quantity Decreases
  qtyDec(){
    var sum = 0;
    --this.Qty;
    if(this.Qty<=0){
      this.Qty=1;
    }
    sum = sum + this.productId.Price * this.Qty;
    sum = Math.round(sum * 100) /100;
    this.sum = sum;
    console.log('cli'+","+  this.Qty +","+ sum  );
  }
  //qtyInc is for updating total when Quantity Increases
 qtyInc(){
    var sum = 0;
    ++this.Qty;
    if(this.Qty<=this.p){
      this.Qty=1;
    }
    sum = sum + this.productId.Price * this.Qty;
    sum = Math.round(sum * 100) /100;
    this.sum = sum;
    console.log('cli'+","+  this.Qty +","+ sum  );
 }
 //purchase is alert message after clicking the purchase button
 purchase()
  {
    alert("thank you for your puchase");
  }
}

window.customElements.define('cart-items', CartItems);
