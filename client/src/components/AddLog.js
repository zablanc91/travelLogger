/*global google*/

//^ need this statement otherwise complains 'google' not existing before script loads, tells it will be available runtime
import React from 'react';
import Script from 'react-load-script';
import {placesAPI} from '../config/googleKeys';

//we will utilize the AddLog component for adding new logs as well as editing old logs; depends if there are props passed from a link with log info

const AddLog = (props) => {
    //change the value of the filepath wrapper after uploading image
    const handleImageName = (e) => {
        document.getElementById("imageLabel").value = e.target.files[0].name;
    };

    //need to add an event listener for address input then make a google maps places autocomplete
    const handleAddress = () => {
        let inputAddress = document.getElementById("address");

        //need to prevent the form from submitting if the user presses 'enter' while typing in Address
        inputAddress.addEventListener('keydown', (e) => {
            if(e.keyCode === 13){
                e.preventDefault();
            }
        });

        inputAddress.addEventListener("keyup", (e) => {
            const dropdown = new google.maps.places.Autocomplete(inputAddress);

            //auto populate lat and lng when an address is selected
            dropdown.addListener('place_changed', () => {
                const place = dropdown.getPlace();
                const lat = place.geometry.location.lat();
                const lng = place.geometry.location.lng();

                document.getElementById("lat").value = lat;
                document.getElementById("lng").value = lng;
            });
        });
        
    }

    return (      
        <div className="row">
            <Script url={placesAPI} onLoad={handleAddress} />
            <h3 className="center-align"> {props.location.formProps ? "Edit Travel Log Entry": "New Travel Log Entry"} </h3>
            <form className="col s12" action={props.location.formProps? "/api/edit" : "/api/add"} method="POST" encType="multipart/form-data">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="name" type="text" name="name" defaultValue={props.location.formProps ? props.location.formProps.name : ""} required />
                        <label className="active" htmlFor="name">Name</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <input id="description" type="text" name="description" defaultValue={props.location.formProps ? props.location.formProps.description : ""} />
                        <label className="active" htmlFor="description">Description</label>
                    </div>
                </div>

                <div className="row">
                    <label>Upload Image</label>
                    <div className="file-field input-field">
                        <div className="btn">
                            <span>File</span>
                            <input id="image" type="file" name="image" accept="image/jpg, image/png" onChange={e => handleImageName(e)} />
                        </div>
                        <div className="file-path-wrapper">
                            <input className="validate file-path" name="imageLabel" id="imageLabel" type="text" placeholder="Upload file" />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <input id="address" type="text" name="address" defaultValue={props.location.formProps ? props.location.formProps.address : ""} required />
                        <label className="active" htmlFor="address">Address</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <input id="lat" type="text" name="lat" defaultValue={props.location.formProps ? props.location.formProps.latitude : ""} required />
                        <label className="active" htmlFor="lat">Latitude</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="lng" type="text" name="lng" defaultValue={props.location.formProps ? props.location.formProps.longitude : ""} required />
                        <label className="active" htmlFor="lng">Longitude</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <input id="log_id" type="text" name="log_id" defaultValue={props.location.formProps ? props.location.formProps.log_id : ""} />
                        <label className="active" htmlFor="log_id">ID</label>
                    </div>
                </div>

                <button className="teal btn-flat right white-text" type="submit" >
                        Submit
                        <i className="material-icons right" >done</i>
                    </button>
            </form>
        </div>
      
    );
};

export default AddLog;