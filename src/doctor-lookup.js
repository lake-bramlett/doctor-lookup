
export class DoctorRequest {
  getDoctorByName(docName) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${docName}&location=45.520645,-122.677452,100&skip=2&limit=10&user_key=${process.env.TEST}`;
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

  getDoctorBySpecialty(specialty) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?specialties=${specialty}&location=45.520645,-122.677452,100&skip=2&limit=10&user_key=${process.env.TEST}`;
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
      let url = `https://api.betterdoctor.com/2016-03-01/specialties?user_key=${process.env.TEST}`;
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

export function appendDoctor() {

}
