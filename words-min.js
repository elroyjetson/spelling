(function(){var g=function(){if(c<d){var a=h({word:e[c],current:c+1,total:d});$("form").html(a);c++}else a="<h3>You spelled "+f+" correctly out of "+d+"</h3>",$("form").html(a)},e="catcher rancher teacher pitcher picture nature capture future mixture creature pasture posture torture culture injure measure pressure pleasure leisure treasure figure failure senior danger".split(" "),d=e.length,c=0,f=0,k=0;(function(a){for(var b=a.length,c,d;0!==b;)d=Math.floor(Math.random()*b),b-=1,c=a[b],a[b]=a[d],
a[d]=c;return a})(e);var l=$("#wordtest-template").html(),h=Handlebars.compile(l);g();$("form").on("submit",function(a){a.preventDefault();a=$("#word").val();var b=$("#word").data("word");a===b?(f++,alert("Correct!")):(k++,alert("You typed "+a+" but it should be "+b));g()})})();
