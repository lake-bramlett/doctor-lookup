import $ from 'jquery';
import { CategoryRequest } from './star-wars.js';

$(document).ready(function () {
  let pageNum = 1;

  $('button.category-button').click(function () {
    pageNum = 1;
    let categoryName = $('.category-select').val();

    let categoryRequest = new CategoryRequest();
    let promise = categoryRequest.getCategoryInfo(categoryName, pageNum);

    promise.then(function (response) {
        let results = JSON.parse(response);
        console.log(results);
        $('span.category-result').empty();
        for (let i = 0; i < results.results.length; i++) {
          $('span.category-result').append('<br>').append(results.results[i].name,results.results[i].title);
        }
      },

      function (error) {
        console.log(error.message);
      });


  });//$('button.category-button').click()

  $('button.next').click(function () {
    console.log('next page fired');
    let categoryName = $('.category-select').val();
    pageNum ++;
    let categoryRequest = new CategoryRequest();
    let promise = categoryRequest.getCategoryInfo(categoryName, pageNum);

    promise.then(function (response) {
      let results = JSON.parse(response);
      console.log(results);
      $('span.category-result').empty();
      for (let i = 0; i < results.results.length; i++) {
        $('span.category-result').append('<br>').append(results.results[i].name,results.results[i].title);
      }
    },

    function (error) {
      console.log(error.message);
    });
  });//$('button.next-page').click()

  $('button.previous').click(function () {
    console.log('next page fired');
    let categoryName = $('.category-select').val();
    pageNum --;
    let categoryRequest = new CategoryRequest();
    let promise = categoryRequest.getCategoryInfo(categoryName, pageNum);

    promise.then(function (response) {
      let results = JSON.parse(response);
      console.log(results);
      $('span.category-result').empty();
      for (let i = 0; i < results.results.length; i++) {
        $('span.category-result').append('<br>').append(results.results[i].name,results.results[i].title);
      }
    },

    function (error) {
      console.log(error.message);
    });
  });//$('button.next-page').click()

});//jqeury
