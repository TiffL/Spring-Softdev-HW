var states = [['Iowa',30,true],['New Hampshire',23,true],['South Carolina',50,true],['Nevada',30,true],['Alabama',50,true],['Alaska',28,true],['Arkansas',40,true],['Colorado',37,true],['Georgia',76,true],['Massachusetts',42,true],['Minnesota',38,true],['North Dakota',28,true],['Oklahoma',43,true],['Tennessee',58,true],['Texas',155,true],['Vermont',16,true],['Virginia',49,true],['Wyoming',29,true],['Kansas',40,true],['Kentucky',46,true],['Louisiana',46,true],['Maine',23,true],['Puerto Rico',23,true],['Hawaii',19,true],['Idaho',32,true],['Michigan',59,true],['Mississippi',40,true],['Washington, DC',19,true],['Florida',99,true],['Illinois',69,true],['Missouri',52,true],['North Carolina',72,true],['Ohio',66,true],['Arizona',58,false],['Utah',40,false],['Wisconsin',42,false],['New York',95,false],['Connecticut',28,false],['Delaware',16,false],['Maryland',38,false],['Pennsylvania',71,false],['Rhode Island',19,false],['Indiana',57,false],['Nebraska',36,false],['West Virginia',34,false],['Oregon',28,false],['Washington',44,false],['California',172,false],['Montana',27,false],['New Jersey',51,false],['New Mexico',24,false],['South Dakota',29,false]];

d3.select(".barChart")
    .selectAll("div")
    .data(states)
    .enter().append("div")
    .transition()
    .duration(2000)
    .style("width", function(d) {return d[1]*7 + "px";})
    .style("background-color", 
	   function(d){
	       if (d[2]){
		   return "red";}
	       else{
		   return "grey";}})
    .text(function(d) {return d[0]+" - Delegates: "+d[1];});
