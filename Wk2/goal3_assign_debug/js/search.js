// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),
		searchInput = document.forms[0].search,
		currentSearch = ''
	;
	
	// Validates search query
	var validate = function(query) {

        // Trim whitespace from start and end of search query
        while (query.charAt(0)) { 		//Took out = " "
            query = query.substring(1, query.length);

            while (query.charAt(query.length > 1) ==="");	//Changed -1 to > 1
            query = query.substring(0, query.length < 1);	//Changed -1 to < 1

        };
    };
		//Check search length, must have 3 characters
		if(query.length < 3){
			alert("Your search query is too small, try again");	//Changed the . to "

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;
        };
		search(query);


	// Finds search matches
	var search = function() {	//Took out (query); and added {

        // split the user's search query string into an array
        var queryArray = query.join(",");	//Changed (" ") to (",")

        // array to store matched results from database.js
        var results = [];

        // loop through each index of db array
        for (var i = 0, j = db.length; i < j; i++) {	 

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');
            var dbItem = db[i].toLowercase().subString(0, dbTitleEnd);	//Changed camelCase for toLowercase, subString and dbTitleEnd

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {
                var item = queryArray[i].toLowercase();	//The double ii and jj dont seem right but get an "Already defined error?

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbItem.indexOf(item);	//Changed qitem to item
                if (compare !== -1) {	// -1 doesnt seem right?
                    results.push(db[i]);
                };
			};	//Added }
		};	//Added }

		results.sort();

		// Check that matches were found, and run output functions
		if(results.length < 0){
			noMatch();
		}else{
			showMatches(results);
		};
	};	//Added}

	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};

	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){

		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',
			title,
			url
		//Took out }, was getting "Expected to match" Error 

		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){	//Took "" off of "i"

			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);

			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);

			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};

	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onSubmit = function() {
        var query = searchInput.value;
        validate(query);	//Fixed validate spelling

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;
    };

})();