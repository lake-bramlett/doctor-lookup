import $ from 'jquery';
import { DoctorRequest } from './doctor-lookup.js';

$(document).ready(function() {
  console.log('jquery enabled');
  $('button').click(function(event) {
    console.log('click event fired');
    event.preventDefault();
    const docName = $('.doctor-name').val();
    const condition = $('.condition').val();

    let doctorRequest = new DoctorRequest();
    let promise = doctorRequest.getDoctorInfo(docName, condition);

    promise.then(function (response) {
         let results = JSON.parse(response);
         console.log(results);
       },

    function (error) {
       console.log(error.message);
     });



  });
});
