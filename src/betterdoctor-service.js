export class BetterDoctorService {
  async findDocByMedicalIssue(medicalIssue) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?user_key=${process.env.API_KEY}&location=45.523,-122.676,10&sort=distance-asc&limit=20&query=${medicalIssue}`);
      let jsonifiedResponse = await response.json();
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
