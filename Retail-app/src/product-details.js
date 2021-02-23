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
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@material/mwc-button';

class ProductDetais extends PolymerElement {
  static get template() {
    return html`
    <app-location route="{{route}}" > </app-location>
    <style include="shared-styles">
      :host {
          display: block;

          padding: 10px;
       }
      .abn{
         color:white;
       }
      .navigation{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            padding: 0px 45px;
         }
      .card1 {
          margin: 24px;
          padding: 16px;
          color: #757575;
          border-radius: 5px;
          background-color: #fff;
          background-image: linear-gradient(black, darkgray);
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
          position:static;
        }
      .c1{
          display: grid;
          justify-content: space-around;
          align-items: center;
          margin-top: 20px;
        }
      .b1{
          display: grid;
          justify-content: space-around;
          align-items: center;
        }
      footer{
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 10px;
          border-top: 1px solid rgba(0,0,0,0.1);
          margin-top: 20px;
        }
      .copyright{
          font-size: 0.9rem;
          color: black;
          letter-spacing: 1px;
        }
      .phone{
        font-size: 0.9rem;
        color: black;
        letter-spacing: 1px;
      } 
    </style>
    <div class="entire">
      <div class="card1">
       <div class="navigation">
         <h3 class="abn" >ABN STORE</h3>
          <mwc-button raised label="Logout"  on-click="logout"></mwc-button>
       </div>
      </div>
    <div class="card">
      <button on-click="back">back</button>
      <div class="c1">
        <img  src={{productId.Img}}  alt="product-details">
      </div>
      <div class="navigation">
       <div>
         <h3> {{productId.ProductName}}</h3>
         <small>style Code:12355</small></br>
         <small>Size:M,S,XS</small></br>
         <small>Price</small>
         <b >$ {{productId.Price}}</b>
       </div> 
       <div>
         <h6 class="">Product Features</h6>
         <p ><b class="pr-2">Brand:</b>{{productId.Brand}}</p>
         <p><b >Pattern:</b>{{productId.Pattern}}</p>
         <p ><b >Color:</b>{{productId.Color}}</p>
       </div>
      </div>
      <div class="b1">
        <mwc-button raised label="ADD TO CART"  on-click="cart"></mwc-button>
      </div>
      <div class="c1">
        <h6>Product Description</h6>
        <p >Care Instructions: Blow some air on lens before cleaning to avoid scratches,And use only cleaning cloth provided by SunTap Sunglasses.
         PERFECT ALL ROUNDER ? SunTap sunglasses is the perfect choice for outdoor sports and activities such as cycling, driving, shopping, Fashion,travelling, hiking, and is suitable as high fashion accessory and daily wear all year round. It is also gift packaged ready, making it a wonderful yet practical gift idea for friends and family.
        </p>
      </div>
    </div>
    <footer class="card1">
      <span class="copyright">
        Copyright 2021 - ABN STORE
      </span>
      <div class="phone">
         <span>Call: +123456789</span>
      </div>
    </footer>    
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
     //ProductId is property which is accessing productId from my-app
     productId:{
        type:Object,
        value: {},
        notify:true,
        observer:"_checkId"
     },
     
    };
  }
  //logout is for navigates to login page
 logout(){
    this.set('route.path','/login');
  }
  //back is for navigates to previous page
 back(){
   this.set('route.path','/home');
 }
 //by this cart selected product values passed to cart-items page
 cart(e){
  this.set('route.path','/cart'); 
 }
 //it is observer call back funtion and also it will pick the index of particular item which user select
 _checkId(e){
   console.log(e);
 }
}

window.customElements.define('product-details', ProductDetais);
