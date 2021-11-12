// Grab the news container
let newsAccordian = document.getElementById("newsAccordian");
// intiliaze the news api parameters.
let apikey = "f3225308707f426883ca061a97377d99";
let sources = "bbc-news";
// Search
const filter = document.querySelector('#filter');
// Create a get request
const xhr = new XMLHttpRequest();
// Create an ajax request
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apikey}`,
  true
);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let newsHtml="";
    // console.log(articles);
    articles.forEach(function(element) {
        let news = ` 
        <div class="container text-center">
        <p>
          <button
            class="btn btn-primary "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseWidthExample"
            aria-expanded="false"
            aria-controls="collapseWidthExample"
          >
          ${element["title"]}
          
          </button>
        </p>
      </div>
      <div class="justify-content-center d-flex align-items-center">
        <div style="min-height: 120px"  id="newsAccordian" >
        <div class="collapse collapse-horizontal" id="collapseWidthExample">
          <div class="card card-body " style="width: 300px">
         
          </div>
          <div class="card card-body " style="width: 300px">
          ${element["content"]}.<a href="${[element['url']]}" target="_blank">Read more here</a>
        </div>
        </div>
        </div> 
        </div>`;
        newsHtml+=news;
    });
    
    newsAccordian.innerHTML=newsHtml;
  } else {
    console.log("error");
  }
};
xhr.send();
