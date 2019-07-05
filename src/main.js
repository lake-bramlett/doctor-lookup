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
         $('.specialty').append(`<option value="${results.data[i].uid}">${results.data[i].name}</option>`)
       };
     },

  function (error) {
     console.log(error.message);
   });


  $('button').click(function(event) {
    console.log('click event fired');
    event.preventDefault();
    const docName = $('.doctor-name').val();
    const specialty = $('.specialty').val();

    let doctorRequest = new DoctorRequest();
    let promise = doctorRequest.getDoctorInfo(docName, specialty);

    promise.then(function (response) {
         let results = JSON.parse(response);
         console.log(results);

         for(let i = 0; i < results.data.length; i++) {
            console.log('number of specialties' + results.data[i].specialties.length);
             $('.search-output').append(
               `<div class="profile${i}">
                  <h4>Name: ${results.data[i].profile.last_name}, ${results.data[i].profile.first_name}</h4>
                  <h5 class="specialties">Specialties: </h5>
                </div>`);
              for(let j = 0; j < results.data[i].specialties.length; j++) {
                $(`.search-output .profile${i} .specialties`).append(results.data[i].specialties[j].name + ', ')
              }

         }
       },

    function (error) {
       console.log(error.message);
     });



  });
});

function appendDoctor () {

}
