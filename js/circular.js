

function drawCircle(){

     console.log("circle");
        
         
         var cheight = 400;
         
         var cdata = [10, 20, 30, 40, 50]; // Define Data Set
         var cwidth = cdata.length*200;
         var ccolors = ['green', 'purple', 'yellow','blue','red']; // colors for circles
         
         var svg = d3
            .select(".cgraph")
            .append("svg")
            .attr("width", cwidth)
            .attr("height", cheight);
         
         var g = svg.selectAll("g")
            .data(cdata)
            .enter()
            .append("g")
            .attr("transform", function(d, i) {
               return "translate(0,0)";
            })
         
         g.append("circle").transition().attr("cx", function(d, i) {
             if(i>0){

                console.log(i*((cdata[i-1]*2)+d*2 + 20));
                return (((cdata[i-1]*2)+d*2*i)+20*i); // cener x postion
             }
             else{
                 return 20;
             }
             
         }) 
         
         .attr("cy", function(d, i) {
            return 100; // keep y postion same so all the cicles are alligned
         })
  
         .attr("r", function(d) {
            return d*2; // make the radius bigger
         })
         
         .attr("fill", function(d, i){
            return ccolors[i]; 
         }).duration(2000)
         
         g.append("text").attr("x", function(d, i) {
            if(i>0){
                return (((cdata[i-1]*2)+d*2*i)+18*i); // center x postion
             }
             else{
                 return 20-5;
             };
         })
         
         .attr("y", 100)
         .attr("stroke", "black")
         .attr("font-size", "12px")
         .attr("font-family", "sans-serif").text(function(d) {
            return d;
         });
      
     
     }