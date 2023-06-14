document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("blog-form").addEventListener("submit", function(event) {
      event.preventDefault();
    
      var title = document.getElementById("title").value;
      var content = document.getElementById("content").value;
    
      var postElement = document.createElement("article");
      postElement.classList.add("blog-post");
    
      var titleElement = document.createElement("h3");
      titleElement.textContent = title;
    
      var contentElement = document.createElement("p");
      contentElement.textContent = content;
    
      postElement.appendChild(titleElement);
      postElement.appendChild(contentElement);
    
      var blogList = document.getElementById("blog-list");
      blogList.appendChild(postElement);
    
      document.getElementById("title").value = "";
      document.getElementById("content").value = "";
    });
  });
  
  var h1 = document.querySelector("h1");

h1.addEventListener("input", function() {
  this.setAttribute("data-text", this.innerText);
});