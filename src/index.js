import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BetterDoctorService } from './../src/BetterDoctor-service.js';

$(document).ready(function() {

  $('#medicalIssueButton').click(function() {
    $("#medicalIssueResultsList").children().remove();
    let medicalIssue = $("#medicalIssue").val();

    (async () => {
      let betterDoctorService = new BetterDoctorService();
      let response = await betterDoctorService.findDoctorByMedicalIssue(medicalIssue);
      getElements(response);
    })();

    function getElements(response) {
      let keys = Object.keys(response.data);
      // let values = Object.values(response.data[0]);
      // console.log("response.data: ",response.data);
      for (let i=0; i < keys.length; i++){
        let docFirstName = response.data[i].profile.first_name;
        let docLastName = response.data[i].profile.last_name;
        let docTitle = response.data[i].profile.title;
        let practiceName = response.data[i].practices[0].name;
        let id = i;
        $("#medicalIssueResultsList").append('<li id="'+id+'" class="doctorNameClass">'+ docFirstName + ' ' + docLastName + ', ' + docTitle + '.<ul><li class="practiceClass">Practicing at: ' + practiceName + '</li></ul>');
      }
    }
  });


  $('#doctorNameButton').click(function() {
    $("#doctorNameResultsList").children().remove();
    let doctorName = $("#doctorName").val();

    (async () => {
      let betterDoctorService = new BetterDoctorService();
      let response = await betterDoctorService.findDoctorByDoctorName(doctorName);
      getElements(response);
    })();

    function getElements(response) {
      let keys = Object.keys(response.data);
      // let values = Object.values(response.data[0]);
      // console.log("response.data: ",response.data);
      for (let i=0; i < keys.length; i++){
        let docFirstName = response.data[i].profile.first_name;
        let docLastName = response.data[i].profile.last_name;
        let docTitle = response.data[i].profile.title;
        let practiceName = response.data[i].practices[0].name;
        let id = i;
        $("#doctorNameResultsList").append('<li id="'+id+'" class="doctorNameClass">'+ docFirstName + ' ' + docLastName + ', ' + docTitle + '.<ul><li class="practiceClass">Practicing at: ' + practiceName + '</li></ul>');
      }
    }
  });

  $('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var recipient = button.data('whatever'); // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
    modal.find('.modal-title').text('New message to ' + recipient);
    modal.find('.modal-body input').val(recipient);
  });










});
