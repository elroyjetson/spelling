(function(){var h=function(){if(d<c){var a=k({word:e[d],current:d+1,total:c});$("form").html(a);d++}else 0<f.length?(a=$("#incorrect-words-template").html(),a=Handlebars.compile(a)({words:f,correct:g,totalWordsInList:c})):(a=$("#all-correct-template").html(),a=Handlebars.compile(a)({correct:g,totalWordsInList:c})),$("form").html(a)},e="catcher rancher teacher pitcher picture nature capture future mixture creature pasture posture torture culture injure measure pressure pleasure leisure treasure figure failure senior danger".split(" "),
c=e.length,d=0,g=0,l=0,f=[];(function(a){for(var b=a.length,d,c;0!==b;)c=Math.floor(Math.random()*b),b-=1,d=a[b],a[b]=a[c],a[c]=d;return a})(e);var m=$("#wordtest-template").html(),k=Handlebars.compile(m);h();$("form").on("submit",function(a){a.preventDefault();a=$("#word").val();var b=$("#word").data("word");a===b?(g++,alert("Correct!")):(f.push(b),l++,alert("You typed "+a+" but it should be "+b));h()})})();
