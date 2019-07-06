import $ from 'jquery';
import { DoctorRequest, GetSpecialties } from './doctor-lookup.js';
import './styles.css';


$(document).ready(function() {

  let populateSpecialties = new GetSpecialties();
  let promise = populateSpecialties.getSpecialties();

  promise.then(function (response) {
       let results = JSON.parse(response);
       results.data.sort();
       for (let i = 0; i < results.data.length; i++) {
         $('.specialty').append(`<option value="${results.data[i].uid}">${results.data[i].name}</option>`)
       };
     },

  function (error) {
     console.log(error.message);
   });


  $('.name-button').click(function(event) {
    $('.search-output').empty();
    event.preventDefault();
    const docName = $('.doctor-name').val();
    const distance = parseInt($('.distance').val());

    if (true) {
      let doctorRequestByName = new DoctorRequest();
      let promise = doctorRequestByName.getDoctorByName(docName,distance);

      promise.then(function (response) {
        let results = JSON.parse(response);
        for(let i = 0; i < results.data.length; i++) {
          if (results.data[i].practices[0].accepts_new_patients===true) {
            results.data[i].practices[0].accepts_new_patients = 'Yes';
          } else if (results.data[i].practices[0].accepts_new_patients!==true){
            results.data[i].practices[0].accepts_new_patients = 'Not at this time'
          };
          $('.search-output').append(
            `<div class="profile doctor${i}">
            <img src="${results.data[i].profile.image_url}" />
            <h4>Name: ${results.data[i].profile.last_name}, ${results.data[i].profile.first_name}</h4>
            <h4>Address:</h4> ${results.data[i].practices[0].visit_address.street}<br>${results.data[i].practices[0].visit_address.city}, ${results.data[i].practices[0].visit_address.state} ${results.data[i].practices[0].visit_address.zip}
            <h5>Specialties: </h5>
            <div class="specialties"></div>
            <h5>Accepting New Patients:</h5>
            <div class="new-patients">${results.data[i].practices[0].accepts_new_patients}</div>
            </div>`);
            for(let j = 0; j < results.data[i].specialties.length; j++) {
              $(`.search-output .profile.doctor${i} .specialties`).append(results.data[i].specialties[j].name + ', ')
            };
          };
        },

        function (error) {
          console.log(error.message);
        });

    } else {
      $('.search-output').html(`<h3  class="input-error">Please enter a valid name</h3>`)
    }


  });

  $('.specialty-button').click(function(event) {
    $('.search-output').empty();
    event.preventDefault();
    const specialty = $('.specialty').val();
    const distance = parseInt($('.distance').val());

    let doctorRequestBySpeciality = new DoctorRequest();
    let promise = doctorRequestBySpeciality.getDoctorBySpecialty(specialty,distance);

    promise.then(function (response) {
         let results = JSON.parse(response);

         if (results.data.length === 0) {
           $('.search-output').html(`<h3  class="input-error">No doctors could be found in your area. Try expanding your search.</h3>`);
         } else {
           for(let i = 0; i < results.data.length; i++) {
             if (results.data[i].practices[0].accepts_new_patients===true) {
               results.data[i].practices[0].accepts_new_patients = 'Yes';
             } else if (results.data[i].practices[0].accepts_new_patients!==true) {
               results.data[i].practices[0].accepts_new_patients = 'Not at this time'
             };
             $('.search-output').append(
               `<div class="profile doctor${i}">
               <img src="${results.data[i].profile.image_url}" />
               <h4>Name: ${results.data[i].profile.last_name}, ${results.data[i].profile.first_name}</h4>
               <h4>Address:</h4> ${results.data[i].practices[0].visit_address.street}<br>${results.data[i].practices[0].visit_address.city}, ${results.data[i].practices[0].visit_address.state} ${results.data[i].practices[0].visit_address.zip}
               <h5>Specialties: </h5>
               <div class="specialties"></div>
               <h5>Accepting New Patients:</h5>
               <div class="new-patients">${results.data[i].practices[0].accepts_new_patients}</div>
               </div>`);
               for(let j = 0; j < results.data[i].specialties.length; j++) {
                 $(`.search-output .profile.doctor${i} .specialties`).append(results.data[i].specialties[j].name + ', ')
               };

             };
           };
           },
           function (error) {
             console.log(error.message);
           });


  });
});
