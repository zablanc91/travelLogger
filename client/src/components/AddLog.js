import React from 'react';

const AddLog = () => {
    return (      
        <div class="row">
            <h3 class="center-align">New Travel Log Entry</h3>
            <form class="col s12" action="/api/add" method="POST">
                <div class="row">
                    <div class="input-field col s12">
                        <input id="name" type="text" name="name" />
                        <label class="active" for="name">First Name</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input id="description" type="text" name="description" />
                        <label class="active" for="description">Description</label>
                    </div>
                </div>

                <div class="row">
                    <label>Upload Image</label>
                    <div class="file-field input-field">
                        <div class="btn">
                            <span>File</span>
                            <input type="file" name="image" />
                        </div>
                        <div class="file-path-wrapper">
                            <input class="validate file-path" type="text" placeholder="Upload file"/>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input id="address" type="text" name="address" />
                        <label class="active" for="address">Address</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s6">
                        <input id="lat" type="text" name="lat" />
                        <label class="active" for="lat">Latitude</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="lng" type="text" name="lng" />
                        <label class="active" for="lng">Longitude</label>
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