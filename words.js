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
		var incorrectSource = $('#incorrect-words-template').html();
		var incorrect_tpl = Handlebars.compile(incorrectSource);
		var html = incorrect_tpl({ words: incorrect_words, correct: correct, totalWordsInList: totalWordsInList});

		$('form').html(html);
	};

	var wordlist = ['catcher',
					'rancher',
					'teacher',
					'pitcher',
					'picture',
					'nature',
					'capture',
					'future',
					'mixture',
					'creature',
					'pasture',
					'posture',
					'torture',
					'culture',
					'injure',
					'measure',
					'pressure',
					'pleasure',
					'leisure',
					'treasure',
					'figure',
					'failure',
					'senior',
					'danger'
					];

	var totalWordsInList = wordlist.length,
		currentWord = 0,
		correct = 0,
		incorrect = 0,
		incorrect_words = [];

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
			incorrect_words.push(word);
			spelledInCorrectPopUp(word,attempt);
		}
	});
})();
