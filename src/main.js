import $ from 'jquery';
import { DoctorRequest, GetSpecialties } from './doctor-lookup.js';

$(document).ready(function() {
  console.log('jquery enabled');

  let populateSpecialties = new GetSpecialties();
  let promise = populateSpecialties.getSpecialties();

  promise.then(function (response) {
       let results = JSON.parse(response);
       console.log(results.data.length);
       results.data.sort();
       console.log(results);
       for (let i = 0; i < results.data.length; i++) {
         $('.condition').append(`<option value="${results.data[i].uid}">${results.data[i].name}</option>`)
       };
     },

  function (error) {
     console.log(error.message);
   });


  $('button').click(function(event) {
    console.log('click event fired');
    event.preventDefault();
    const docName = $('.doctor-name').val();
    const specialty = $('.condition').val();

    let doctorRequest = new DoctorRequest();
    let promise = doctorRequest.getDoctorInfo(docName, specialty);

    promise.then(function (response) {
         let results = JSON.parse(response);
         console.log(results);
       },

    function (error) {
       console.log(error.message);
     });



  });
});
