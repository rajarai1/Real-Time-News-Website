
  
      var html;
    fetchnews()
    
    function fetchnews(){
      var searchword=$("#searchword").val();
      document.getElementById('xyz').innerHTML="";
      if(searchword==""){

        searchword="india";
      }
      html='';
    
       var url = "https://gnews.io/api/v4/search?q="+searchword+"&token=7685af7d819eb1821cec487eb58b51d6";
      $("#load_ui").show();
      $.get(url, (response) => {
      console.log(response.articles);
      
      for(i=0;i<response.articles.length;i++){
       html =`<div class="card m-3 shadow">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${response.articles[i].image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${response.articles[i].title}</h5>
            <p class="card-text">${response.articles[i].description}</</p>
            <p class="card-text"><small class="text-muted">${response.articles[i].publishedAt} || </small>
            <small class="text-muted">${response.articles[i].source.name}</small></p>
            <p><a href="${response.articles[i].url}" class="btn btn-secondary" target="-next">Read More</a>
            </p>
          </div>
        </div>
      </div>`
      $(".posts").append(html);

      }
    });
    }
   


    

  