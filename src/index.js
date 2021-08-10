import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Apod from './apod.js';

function getElements(response) {
  if (response.date) {
    let apod = response.hdurl;
    $('#showApod').attr("src", apod);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(date) {
  const response = await Apod.getApod(date);
  getElements(response);
}

$(document).ready(function() {
  $('#marsQuery').click(function() {
    let date = $('#date').val(); 
    makeApiCall(date);
  });
});