// ajax.js
export function fetchData(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(xhr.responseText);
        } else {
          reject(new Error(`Error loading content. Status: ${xhr.status}`));
        }
      };
      xhr.onerror = function() {
        reject(new Error('Network error occurred'));
      };
      xhr.send();
    });
  }
  