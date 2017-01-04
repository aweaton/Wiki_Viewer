function getWiki(query) {
	$("#results").html("");
  //var locationURL = "http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=" + query;
  //var locationURL = "http://en.wikipedia.org/w/api.php?prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max"
  var locationURL = "https://en.wikipedia.org/w/api.php"
  //console.log("testing")
  $.ajax({

    url: locationURL,
    dataType: "jsonp",
	type: 'GET',
	data: {
		action: 'query',
		format: 'json',
		generator: 'search',
		gsrnamespace: 0,
		gsrlimit: 10,
		gsrsearch: query,
		prop: 'pageimages|extracts',
		pilimit: 'max',
		exintro: 1,
		explaintext: 1,
		exsentences: 1,
		exlimit: 'max',
		//origin: '*'
		},
	success: function(data) {
      //console.log(data)
	  //console.log(data.query.pages);
	  
	  for (var key in data.query.pages) {
		  //console.log(data.query.pages[key].title);
		  var pageTitle = data.query.pages[key].title;
		  
		  //console.log(data.query.pages[key].extract);
		  var pageDesc = data.query.pages[key].extract;
		  
		  var pageLink = "https://en.wikipedia.org/?curid="+key
		  
		  $("#results").append('<a href =' + pageLink + ' target="_blank">' + '<div class="well"> <h3>' + pageTitle + '</h3> <br> <p>' + pageDesc + '</p> </div> </a>');
		  
		  
		  
		  if (data.query.pages[key].thumbnail){
			  //console.log(data.query.pages[key].thumbnail.source);
			  var imgSource = data.query.pages[key].thumbnail.source;
			  //$("#results").append('<div class="row well"> <div class = "col-xs-1 img-responsive center-block"> <img src=' + imgSource + '> </div> <div class = "col-xs-11"> <h3>' + pageTitle + '</h3> <br> <p>' + pageDesc + '</p> </div> </div>');
		  }
		  
		  else{
			  //$("#results").append('<div class=" row well"> <h3>' + pageTitle + '</h3> <br> <p>' + pageDesc + ' <br> no thumbnail </p> </div>');
		  };
		  //console.log(data.query.pages[key].thumbnail.source);
	  }
      //console.log(data.query.search[1].title);
	  //console.log(data.query.search[1].snippet);
      
      
    }
    
  });
}


//var x = document.forms["myForm"]["search"].value;

$("#query-button").on("click", function() {
	var query = $("#wiki_search").val();
	console.log(query);
	if (query === ""){
		alert("Search Bar is Empty");
	} else {
		getWiki(query);
	};
	
});

//var query = "GIS"
//getWiki(query);