/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

    },


    buttonPressed: function () {
        document.getElementById('coordinates').innerHTML = 'Fetching...';
        navigator.geolocation.getCurrentPosition((position) => {
            console.log('Coordinates received.');
            document.getElementById('coordinates').innerHTML = "Lat: " + position.coords.latitude + "<br />" +
                "Long: " + position.coords.longitude;
        },
            () => {
                console.log('Failed to pull coordinates.')
                document.getElementById('coordinates').innerHTML = 'Error pulling GPS coordinates!';
            },
            { timout: 3000 }
        );
    },

    onDeviceReady: function () {
        document.getElementById("gpsButton").addEventListener("click", this.buttonPressed);
    },
};

app.initialize();