export class DoctorRequest {
  getDoctorInfo(docName,condition) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${docName}&location=45.520645,-122.677452,100&skip=2&limit=10&user_key=f1ca4d79ccf5825a4f879f0f53844461`;
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

export class GetSpecialties {
  getSpecialties() {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/specialties?user_key=f1ca4d79ccf5825a4f879f0f53844461`;
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
