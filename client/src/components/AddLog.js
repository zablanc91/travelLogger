import React from 'react';

const AddLog = () => {
    return (      
        <div class="row">
            <h3 class="center-align">New Entry</h3>
            <form class="col s12" action='#'>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="name" type="text" />
                        <label class="active" for="name">First Name</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input id="description" type="text" />
                        <label class="active" for="name">Description</label>
                    </div>
                </div>

                <div class="row">
                    <label>Upload Image</label>
                    <div class="file-field input-field">
                        <div class="btn">
                            <span>File</span>
                            <input type="file" />
                        </div>
                        <div class="file-path-wrapper">
                            <input class="validate file-path" type="text" placeholder="Upload file"/>
                        </div>
                    </div>
                </div>

                 <div class="row">
                    <div class="input-field col s12">
                        <input id="address" type="text" />
                        <label class="active" for="name">Address</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input id="address" type="text" />
                        <label class="active" for="name">Address</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s6">
                        <input id="lat" type="text" />
                        <label class="active" for="name">Latitude</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="lng" type="text" />
                        <label class="active" for="name">Longitude</label>
                    </div>
                </div>

            </form>
        </div>
      
    );
};

export default AddLog;