export class DoctorRequest {
  getDoctorInfo(docName,condition) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${docName}?location=45.520645,-122.677452&user_key=${apiKey}`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        };
      };

      request.open('GET', url, true);
      request.send();
    });
  };
};
