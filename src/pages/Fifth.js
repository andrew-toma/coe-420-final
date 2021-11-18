import React from "react";

import './styles/page3.css';
import './styles/page5.css';
import './styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Fifth =()=>{
    // window.onload = ()=> {
    //     document.getElementById('ifYes').style.display = 'none';
    //     document.getElementById('ifNo').style.display = 'none';
    // }
    function yesnoCheck() {
        if (document.getElementById('yesCheck').checked) {
            document.getElementById('ifYes').style.display = 'block';
    
        } 
        else if(document.getElementById('noCheck').checked) {
            document.getElementById('ifYes').style.display = 'none';
       }
    }
    //         (document).ready(function () {
    //       ('select').selectize({
    //           sortField: 'text'
    //       });
    //   });
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-custom bg-custom">
                    <span><a href="index.html"><img id = "logo" src="logo.png" alt="logo"/></a></span>
                    <div class="container-fluid">
                        <div class="navbar-nav">
                            <div id = "navcard" class="card mb-2">
                                <p id = "navbartext" style = {{color:'black'}}>Welcome to your profile</p>
                            </div>
                        </div>
                    </div>
                </nav>
                <form id = "signUpForm">
                <p id="formtext">Does your company have website?</p>
                <input type="radio" onclick={()=>yesnoCheck()} name="websiterad" id="yesCheck"/><label for="websiterad">Yes</label>
                <input type="radio" onclick={()=>yesnoCheck()} name="websiterad" id="noCheck"/><label for="websiterad">No</label>
                <div id="ifYes" style={{display:'none'}}>
                <p id="formtext">what is your company's website?</p>
                <input class="input"type="text" id="websitename" name="websitename" value="website.com"/>
                </div>
                <p id="formtext">How many people are in your company?</p>
                <input type="radio" name ="numOfEmployee" id="1-10"/><label for="1-10"> 1-10 people</label><br/>
                <input type="radio" name ="numOfEmployee" id="10-50"/><label for="10-50"> 10-50 people</label><br/>
                <input type="radio" name ="numOfEmployee" id="50-200"/><label for="50-200"> 50-200 people</label><br/>
                <input type="radio" name ="numOfEmployee" id="more"/><label for="more"> More than 200 people</label>
                <p id="formtext">Select industry:</p>
                <select id="select-state" placeholder="Select a category">
                    <option value="">Select a state...</option>
                    <option value="1">Advertising & Marketing</option> 
                    <option value="2">Aerospace</option>
                    <option value="3">Agritech</option>
                    <option value="4">Apparel & Luxury Goods</option> 
                    <option value="5">Arttech</option>
                    <option value="6">Banks</option> 
                    <option value="7">Biotech & Sciences</option>
                    <option value="8">Charity</option>
                    <option value="9">Chemicals</option> 
                    <option value="10">Cleantech</option>
                    <option value="11">Communication Services</option>
                    <option value="12">Communications Equipments</option>
                    <option value="13">Construction</option>
                    <option value="14">Consumer Services</option>
                    <option value="15">Cosmetics</option>
                    <option value="16">Deeptech</option>
                    <option value="17">Edtech</option>
                    <option value="18">Electrical Equipment</option>
                    <option value="19">Electronics</option> 
                    <option value="20">Energy</option>
                    <option value="21">Environmental facilities and survices</option>
                    <option value="23">FMCG</option>
                    <option value="24">Fashion</option>
                    <option value="25">Finetech</option>
                    <option value="26">Gaming</option> 
                    <option value="27">Hardware & Storage</option>
                    <option value="28">Healthtech</option>
                    <option value="29">Hospitality & Leisure</option>
                    <option value="30">Human Resources</option>
                    <option value="31">IT Services & Software</option>
                    <option value="32">Insuretech</option>
                    <option value="33">Legaltech</option>
                    <option value="34">Leisure Products</option>
                    <option value="35">Machinery</option>
                    <option value="36">Manufacturing</option>
                    <option value="37">Marine</option>
                    <option value="38">Medtech</option>
                    <option value="40">Mobilitytech</option>
                    <option value="41">Office Survices & Supplies</option>
                    <option value="42">Pharmacueticals</option>
                    <option value="43">Real Estate</option>
                    <option value="44">Regtech</option>
                    <option value="45">Research and Consulting Survices</option>
                    <option value="46">Retailtech</option>
                    <option value="47">Safety & Security</option>
                    <option value="48">Socialtech</option>
                    <option value="49">Spacetech</option>
                    <option value="50">Trading Companies & Distributers</option>
                    <option value="51">Transportation</option>
                    <option value="52">Utilities</option>
                </select>
                <p id="formtext">Where is your company located?</p>
                <select id="select-state" placeholder="Select a country">
                    <option value="1">Select an Emirate</option>
                    <option value="2">Abu Dhabi</option>
                    <option value="3">Dubai</option>
                    <option value="4">Sharjah</option>
                    <option value="5">Ajman</option>
                    <option value="6">Umm Al Quwain</option>
                    <option value="7">Ras Al Khaimah</option>
                    <option value="7">Fujairah</option>
                </select>
                <p id="formtext">Write a short Description of what  your company does</p>
                <textarea Style="width:100%;border-color:#C4C4C4;"rows = "5" cols = "60" name = "description">
                </textarea><br/>
                <button id = "Create" type="button">Create Profile</button>
                <button id = "Cancel" type="button">Cancel</button>
                </form>
                {/* {<script>
                        $(document).ready(function () {
                    $('select').selectize({
                        sortField: 'text'
                    });
                    });
                </script>  */}


            </div>
        )
}

export default Fifth;
