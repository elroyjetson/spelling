(function(){
	var shuffle = function (array) {
					var currentIndex = array.length, temporaryValue, randomIndex;

					// While there remain elements to shuffle...
					while (0 !== currentIndex) {
						// Pick a remaining element...
						randomIndex = Math.floor(Math.random() * currentIndex);
						currentIndex -= 1;

						// And swap it with the current element.
						temporaryValue = array[currentIndex];
						array[currentIndex] = array[randomIndex];
						array[randomIndex] = temporaryValue;
					}

					return array;
				};

	var showTemplate = function() {
		if(currentWord < totalWordsInList) {
			var word = wordlist[currentWord];
			var context = { word: word, current: currentWord+1, total: totalWordsInList};
			var html    = template(context);
			$("form").html(html);
			currentWord++;
		} else {
			showComplete();
		}

	};

	var spelledCorrectPopUp = function(word) {
		correct++;
		alert("Correct!");
		showTemplate();
	};

	var spelledInCorrectPopUp = function(word,attempt) {
		incorrect++;
		alert('You typed ' + attempt + ' but it should be ' + word);
		showTemplate();
	};

	var showComplete = function() {
		var html = "<h3>You spelled " + correct + " correctly out of " + totalWordsInList + "</h3>";
		$('form').html(html);
	};

	var wordlist = ['dancer',
					'dreamer',
					'driver',
					'farmer',
					'jogger',
					'writer',
					'shopper',
					'swimmer',
					'voter',
					'actor',
					'sailor',
					'traitor',
					'tutor',
					'beggar',
					'burglar',
					'bigger',
					'sooner',
					'longer',
					'smaller',
					'fresher',
					'younger',
					'older',
					'smoother',
					'brighter'
					];

	var totalWordsInList = wordlist.length;
	var currentWord = 0;
	var correct = 0;
	var incorrect = 0;

	shuffle(wordlist);

	var source   = $("#wordtest-template").html();
	var template = Handlebars.compile(source);
	showTemplate();

	$("form").on('submit', function(e){
		e.preventDefault();
		var attempt = $('#word').val();
		var word = $('#word').data('word');

		if(attempt === word) {
			spelledCorrectPopUp(word);
		} else {
			spelledInCorrectPopUp(word,attempt);
		}
	});
})();
