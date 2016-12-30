function getWiki(query) {
  //var locationURL = "http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=" + query;
  //var locationURL = "http://en.wikipedia.org/w/api.php?prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max"
  var locationURL = "https://en.wikipedia.org/w/api.php"
  console.log("testing")
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
	  console.log(data.query.pages)
	  
	  for (var key in data.query.pages) {
		  console.log(data.query.pages[key].title);
		  
		  console.log(data.query.pages[key].extract);
		  if (data.query.pages[key].thumbnail){
			  console.log(data.query.pages[key].thumbnail.source);
		  };
		  //console.log(data.query.pages[key].thumbnail.source);
	  }
      //console.log(data.query.search[1].title);
	  //console.log(data.query.search[1].snippet);
      
      
    }
    
  });
}

var query = "GIS"
getWiki(query);