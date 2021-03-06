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
import '@material/mwc-button';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-input/paper-input.js';

class MyRegister extends PolymerElement {
  static get template() {
    return html`
    <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
    </app-location>

    <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
    </app-route>

    <style >
      :host {
         display: block;
           
         padding: 10px;
         
      }
      .a1{
         background-image: url(images/img-slide6.jpg);
         overflow-y:hidden;
        }
      .card {
        margin-top: 100px;
        margin-left:500px;
        margin-bottom:400px;
        padding: 16px;
        color: #757575;
        width:500px;
        border-radius: 5px;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }
      .c1{
        color:blue;
      }
        
      @media(max-width:1010px){
        .a1{
          background-image: url(images/img-slide6.jpg);
          height:600px;
        }
        .card {
           margin-top: 50px;
           margin-left:250px;
           margin-bottom:200px;
           padding: 10px;
           color: #757575;
           width:500px;
           border-radius: 5px;
           box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }
          
      }
      @media(max-width:600px){
          
        .a1{
          height:500px;
          background-image: url(images/img-slide9.jpg);

          
        }
          .card {
            margin-top: 25px;
            margin-left:10px;
            margin-bottom:100px;
            padding: 10px;
            color: #757575;
            width:250px;
            border-radius: 5px;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
          }  
      }

    </style>
      
    <div class="a1">
      <div class="c1">          
       <center>
         <h4 ><b> ABN STORE</b></h4>
       </center>
      </div>

     <div class="card">
       <div class="c1">          
         <center>
           <h4 ><b> SIGNUP</b></h4>
         </center>
       </div>
       <paper-input label="Username"   auto-validate pattern="[a-zA-Z]*" error-message="letters only!" value = "{{userName}}"></paper-input>
       <paper-input always-float-label label="email"  required auto-validate error-message="Enter correct Email Id!" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"></paper-input>
       <paper-input id="phone" always-float-label label="Mobile No" required auto-validate error-message="Provide valid details!" char-counter maxlength="10" pattern="[0-9]*"></paper-input>
       <paper-input  always-float-label label="Address"  required auto-validate error-message="Enter correct address!" auto-validate pattern="[a-zA-Z]*"></paper-input>
       <paper-input label="Password" required auto-validate error-message="Enter Strong Password "  auto-validate pattern="[a-zA-Z0-9]*" value="{{Password}}" ></paper-input>
       <mwc-button raised label="signup"  on-click="register"></mwc-button>
     </div>
    </div>
     `;
  }
 
 //register is for navigates to login page
  register(){
    this.set('route.path','/login');   
  }

}

window.customElements.define('my-register', MyRegister);
