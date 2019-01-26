document.querySelector("#getButton").addEventListener("click", getData);
document.querySelector("#postButton").addEventListener("click", postData);
document.querySelector("#putButton").addEventListener("click", putData);
document.querySelector("#deleteButton").addEventListener("click", deleteData);
function getData() {
  // Make a Http GET request
  const http = new EasyHTTP();
  http
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(function(posts) {
      output = "";
      posts.forEach(post => {
        output += `<li> Title: ${post.title}</li>`;
      });
      console.log(posts);
      document.getElementById("displayDiv").innerHTML = output;
    })
    .catch(err => console.log(err));
}

// Create Data
let data = {
  title: "Custom Post",
  body: "This is a custom post"
};

function postData() {
  const http = new EasyHTTP();
  //Make a http POST request
  http
    .post("https://jsonplaceholder.typicode.com/posts", data)
    .then(post => {
      output = "";
      Object.entries(post).forEach(([key, value]) => {
        output += `${key}: ${value} `;
      });
      document.getElementById(
        "displayDiv"
      ).innerHTML = `<h5>Following data was succesfully posted. </h5>  ${output} `;
    })
    .catch(err => (document.getElementById("displayDiv").innerHTML = err));
}

function putData() {

  let data = {
    title: "Custom Post",
    body: "This is a custom post"
  };
  const http = new EasyHTTP();
  // Update POST
  http.put("https://jsonplaceholder.typicode.com/posts/2", data).then(data => {
    output = "";
    Object.entries(data).forEach(([key, value]) => {
      output += `${key}: ${value} `;
    });
    document.getElementById("displayDiv").innerHTML =
      "<h5>Following data was succesfully updated on ID 2. </h5>" + output;
  });
}
function deleteData() {

  const http = new EasyHTTP();
  // Update POST
  http
    .delete("https://jsonplaceholder.typicode.com/posts/2", data)
    .then(data => {
      document.getElementById("displayDiv").innerHTML =
        "<h5>Following data was succesfully updated on ID 2. </h5>" + data;
    })
    .catch(err => (document.getElementById("displayDiv").innerHTML = err));
}
