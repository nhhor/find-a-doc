import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BetterDoctorService } from './../src/BetterDoctor-service.js';

function getElements(response) {
  let keys = Object.keys(response.data);
  for (let i=0; i < keys.length; i++){
    let id = i;
    let docFirstName = response.data[i].profile.first_name;
    let docLastName = response.data[i].profile.last_name;
    let docTitle = response.data[i].profile.title;
    let practiceName = response.data[i].practices[0].name;
    let docAddressL1 = response.data[i].practices[0].visit_address.street;
    let docAddressL2 = (response.data[i].practices[0].visit_address.city + ", " + response.data[i].practices[0].visit_address.state + " " + response.data[i].practices[0].visit_address.zip);
    let docPhoneNumber = response.data[i].practices[0].phones[0].number;
    // let docWebsite = response.data[i].practices[0].website;
    let docWebsite = function(){
      if(response.data[i].practices[0].website === undefined) {
        return "None provided.";
      } else {
        return response.data[i].practices[0].website;
      }
    };
    let docAcceptsNewPatients = response.data[i].practices[0].accepts_new_patients;

    $("#doctorNameResultsList").append('<li id="'+id+'" class="doctorNameClass" data-toggle="modal" data-target="#doctorModal" data-docfirstname="'+ docFirstName + '" data-doclastlame="'+ docLastName + '" data-doctitle="'+ docTitle + '" data-practicename="'+ practiceName + '" data-docaddressl1="'+ docAddressL1 + '" data-docaddressl2="'+ docAddressL2 + '" data-docphonenumber="'+ docPhoneNumber + '" data-docwebsite="'+ docWebsite() + '" data-docacceptsnewpatients="'+ docAcceptsNewPatients + '" >'+ docFirstName + ' ' + docLastName + ', ' + docTitle + '.');
  }
}

let serverErrorCheck = function(response){
  if ((typeof response) == "string") {
    $("#instructionToggle").fadeOut(100);
    $("#errorToggle").text("We're sorry, there was a "+response);
    $("#errorToggle").fadeIn(2000);
  } else {
    $("#errorToggle").fadeOut(100);
    $("#instructionToggle").slideDown(1000);
  }
};

let noResultCheck = function(response){
  if (response.meta.count === 0) {
    $("#instructionToggle").fadeOut(100);
    $("#errorToggle").fadeOut(100);
    $("#noResultToggle").slideDown(1000);
  } else {
    $("#noResultToggle").fadeOut(100);
  }
};



$(document).ready(function() {


  // SEARCH BY MEDICAL ISSUE
  $('#medicalIssueButton').click(function() {
    $("#doctorNameResultsList").children().remove();
    let medicalIssue = $("#medicalIssue").val();

    (async () => {
      let betterDoctorService = new BetterDoctorService();
      let response = await betterDoctorService.findDoctorByMedicalIssue(medicalIssue);
      serverErrorCheck(response);
      getElements(response);
      noResultCheck(response);
    })();
  });


  // SEARCH BY DOCTOR NAME
  $('#doctorNameButton').click(function() {
    $("#doctorNameResultsList").children().remove();
    let doctorName = $("#doctorName").val();

    (async () => {
      let betterDoctorService = new BetterDoctorService();
      let response = await betterDoctorService.findDoctorByDoctorName(doctorName);

      serverErrorCheck(response);
      getElements(response);
      noResultCheck(response);
    })();
  });


  // MODAL FUNCTIONALITY
  $('#doctorModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal

    var docFirstName = button.data('docfirstname');
    var docLastName = button.data('doclastlame');
    var docTitle = button.data('doctitle');
    var practiceName = button.data('practicename');
    var docAddressL1 = button.data('docaddressl1');
    var docAddressL2 = button.data('docaddressl2');
    var docPhoneNumber = button.data('docphonenumber');
    var docWebsite = button.data('docwebsite');
    var docAcceptsNewPatients = button.data('docacceptsnewpatients');

    var modal = $(this);
    modal.find('.modal-title').text(docFirstName + " " + docLastName + ", " + docTitle);
    modal.find('.modal-body').html('<ul><li><strong>Practice: </strong>' + practiceName + '</li><li><strong>Address:</strong><ul><li>' + docAddressL1 + '</li><li>' + docAddressL2 + '</li></ul><li><strong>Phone: </strong>' + docPhoneNumber + '</li><li><strong>Website: </strong>' + docWebsite + '</li><li><strong>Accepting new patients: </strong>' + docAcceptsNewPatients + '</li></ul>');
  });
});
