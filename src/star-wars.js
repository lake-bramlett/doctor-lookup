export class CategoryRequest {
  getCategoryInfo(inputCategory,pageNum) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://swapi.co/api/${inputCategory}/?page=${pageNum}`;
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
