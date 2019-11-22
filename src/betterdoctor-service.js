export class BetterDoctorService {
  async findDoctorByMedicalIssue(medicalIssue) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalIssue}&location=45.523%2C-122.676%2C10&user_location=45.523%2C-122.676&sort=distance-asc&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      // console.error("There was an error handling your request: " + error.message);
    }
  }

  async findDoctorByDoctorName(doctorName) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&location=45.523%2C-122.676%2C10&user_location=45.523%2C-122.676&sort=distance-asc&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      // console.error("There was an error handling your request: " + error.message);
    }
  }






}
