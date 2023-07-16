function randomQuote(){
  var quotes = ["Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got","Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all","God save me from my friends. I can protect myself from my enemies."];
  var author = ["life","John Kenneth Galbraith","Claude Louis Hector de Villars"];
  var num = Math.floor(Math.random()* author.length)
  alert(quotes[num]  + "      "+author[num])
}
randomQuote()