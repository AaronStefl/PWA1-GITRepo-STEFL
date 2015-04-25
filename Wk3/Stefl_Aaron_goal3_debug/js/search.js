
/* Name: Aaron Stefl
Date: 04/22/2015
Debug goal 3
PWA1 */


/*--- THINGS I FIXED LAST WEEK ---*/
// THINGS I FIXED THIS WEEK

// I COMMENTED THEM SEPERATELY TO DIFFERENTIATE FROM LAST WEEK TO THIS WEEK


// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),
		searchInput = document.forms[0].search,
		currentSearch = ''
	;
console.log('---Line 22 ---');
	// Validates search query
	var validate = function(query){

        // Trim whitespace from start and end of search query
        while (query.charAt(0) === " "){		/*---Took out = " "---*/  //Changed back, was correct..Took out )}
            query = query.substring(1, query.length);
		};
            while (query.charAt(query.length-1) ===""){	/*---Changed -1 to > 1---*/  //Changed back, was correct
            query = query.substring(0, query.length - 1);	/*---Changed -1 to < 1---*/	//Changed back, was correct

        };
    
	
console.log('--- LINE 36  ---');
		//Check search length, must have 3 characters
		if(query.length < 3){
			alert("Your search query is too small, try again");	//Changed the . to "

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;
        };
		search(query);
	};
console.log('--- LINE 47 ---');
	// Finds search matches
	var search = function(query) {	/*---Took out (query); and added {---*/   //added (query) back in

        // split the user's search query string into an array
        var queryArray = query.split(" ");	/*----Changed (" ") to (",")---*/	//changed back to (" ") was correct, Also need to change query.join to query.split

        // array to store matched results from database.js
        var results = [];

        // loop through each index of db array
        for (var i = 0, j = db.length; i < j; i++) {	 

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');
            var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd);	//Changed camelCase for toLowercase, dbTitleEnd

			
console.log('--- LINE 66 ---');
            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {
                var qitem = queryArray[ii].toLowerCase();	

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbitem.indexOf(qitem);
                if (compare !== -1) {
                    results.push(db[i]);
                };
			};	//Added }
		};	//Added }

		results.sort();

		
console.log('--- LINE 84 ---');
		// Check that matches were found, and run output functions
		if(results.length === 0){ 	//Replaced < with ===
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

	console.log('--- LINE 102 ---');
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
			title = results[i].substring(0, titleEnd);

			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);

			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
console.log('--- LINE 128 ---');
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {
        var query = searchInput.value;
        validate(query);	//Fixed validate spelling

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;
    };
console.log('--- LINE 132/THE END ---');
})();