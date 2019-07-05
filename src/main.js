import $ from 'jquery';
import { DoctorRequest, GetSpecialties } from './doctor-lookup.js';
import './styles.css';
import apiKey from './../workaround.js';

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


  $('.name-button').click(function(event) {
    $('.search-output').empty();
    console.log('click event fired');
    event.preventDefault();
    const docName = $('.doctor-name').val();

    let doctorRequestByName = new DoctorRequest();
    let promise = doctorRequestByName.getDoctorByName(docName);

    promise.then(function (response) {
         let results = JSON.parse(response);
         console.log(results);

         for(let i = 0; i < results.data.length; i++) {
            console.log('number of specialties' + results.data[i].specialties.length);
             $('.search-output').append(
               `<div class="profile doctor${i}">
                  <img src="${results.data[i].profile.image_url}" />
                  <h4>Name: ${results.data[i].profile.last_name}, ${results.data[i].profile.first_name}</h4>
                  <h5 class="specialties">Specialties: </h5>
                </div>`);
              for(let j = 0; j < results.data[i].specialties.length; j++) {
                $(`.search-output .profile.doctor${i} .specialties`).append(results.data[i].specialties[j].name + ', ')
              };

         };
       },

    function (error) {
       console.log(error.message);
     });

  });

  $('.specialty-button').click(function(event) {
    $('.search-output').empty();
    console.log('click event fired');
    event.preventDefault();
    const specialty = $('.specialty').val();

    let doctorRequestBySpeciality = new DoctorRequest();
    let promise = doctorRequestBySpeciality.getDoctorByName(specialty);

    promise.then(function (response) {
         let results = JSON.parse(response);
         console.log(results);

         for(let i = 0; i < results.data.length; i++) {
            console.log('number of specialties' + results.data[i].specialties.length);
             $('.search-output').append(
               `<div class="profile doctor${i}">
                  <img src="${results.data[i].profile.image_url}" />
                  <h4>Name: ${results.data[i].profile.last_name}, ${results.data[i].profile.first_name}</h4>
                  <h5>Specialties: </h5>
                  <div class="specialties"></div>
                </div>`);
              for(let j = 0; j < results.data[i].specialties.length; j++) {
                console.log('loop firing');
                $(`.search-output .profile.doctor${i} .specialties`).append(results.data[i].specialties[j].name + ', ')
              };

         };
       },

    function (error) {
       console.log(error.message);
     });

  });
});
