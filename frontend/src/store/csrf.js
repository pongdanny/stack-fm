// Next, to make `fetch` requests with any HTTP verb other than `GET`, you need to
// set a `XSRF-TOKEN` header on the request and the value of the header should be
// set to the value of the `XSRF-TOKEN` cookie. To do this, you are going to wrap
// the `fetch` function on the `window` that will be used in place of the default
// `fetch` function.

// Add a `csrf.js` file in the `frontend/src/store` folder. Import `Cookies` from
// `js-cookie` that will be used to extract the `XSRF-TOKEN` cookie value. Define
// an `async` function called `fetch` that will take in `url` parameter and an
// `options` parameter that defaults to an empty object. If `options.headers` is
// not set, default it to an empty object. If `options.method` is not set, set it
// to the `GET` method. If it is any method other than a `GET` method, set the
// `XSRF-TOKEN` header on the `options` object to the extracted value of the
// `XSRF-TOKEN` cookie. Call and `await` the `window.fetch` with the `url` and the
// `options` object to get the response.

// If the response has a JSON body, then parse it using the `.json` method on the
// response. Set the parsed JSON body as a key of `data` on the response. If the
// response status code is 400 or above, `throw` the response as the error.
// Otherwise, return the response.
import Cookies from "js-cookie";

export async function fetch(url, options = {}) {
  // set options.method to 'GET' if there is no method
  options.method = options.method || "GET";
  // set options.headers to an empty object if there is no headers
  options.headers = options.headers || {};

  // if the options.method is not 'GET', then set the "Content-Type" header to
  // "application/json", and set the "CSRF-TOKEN" header to the value of the
  // "XSRF-TOKEN" cookie
  if (options.method.toUpperCase() !== "GET") {
    options.headers["Content-Type"] =
      options.headers["Content-Type"] || "application/json";
    options.headers["XSRF-Token"] = Cookies.get("XSRF-TOKEN");
  }
  // call the default window's fetch with the url and the options passed in
  const res = await window.fetch(url, options);

  // if the response's body is JSON, then parse the JSON body and set it to a
  // key of `data` on the response
  const contentType = res.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    const data = await res.json();
    res.data = data;
  }

  // if the response status code is 400 or above, then throw an error with the
  // error being the response
  if (res.status >= 400) throw res;

  // if the response status code is under 400, then return the response to the
  // next promise chain
  return res;
}

// call this to get the "XSRF-TOKEN" cookie, should only be used in development
export function restoreCSRF() {
  return fetch("/api/csrf/restore");
}
