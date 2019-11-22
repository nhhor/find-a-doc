import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BetterDoctorService } from './../src/BetterDoctor-service.js';




$(document).ready(function() {

  let medicalIssue = "ear";

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
      // response.data[i].practices.name
      console.log(response.data[i]);
    }
  }
});
