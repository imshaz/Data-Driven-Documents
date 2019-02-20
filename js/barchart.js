var ddata=[]; 
        
        
     dgraph = function(){
         
         
         d3.select("svg").remove();
         
         ddata=[];
         
         var loopCount = Math.floor(Math.random()*15)+5;
         
         //console.log(Math.floor(Math.random()*500));
         
         
         for (var i=0;i<=loopCount;i++){
             
             ddata.push(Math.floor(Math.random()*50)+3);
         }
         console.log("Array ddata",ddata);
       
//         var ddata =[10,15,20,25,30,40,50,60,30,33,12,34]; 
         
         var width=700; 
         
//         var scaleFactor=10; // no need when using scale
         barHeight=20; 
         
         //create a scale 
         
         var scale = d3.scaleLinear().domain([d3.min(ddata),d3.max(ddata)]).range([50,width-10]); 
         
         // create a graph 
         var graph = d3.select("body .dgraph").insert("svg").attr("width",width).attr("height", function(){
             
             return barHeight*ddata.length+ ddata.length*5+10; 
         }).attr("class", "chart"); 
         
         x_axis=  d3.axisTop().scale(scale); 

        var g = graph.selectAll("g")
        .data(ddata)
        .enter()
        .append("g")
        .attr("transform", function(d,i){
             
             var x= 0; 
             var y= i*5; // 5px space on both side
//             console.log(x,y)
            
            var translate =  "translate(" +x +','+y+')'; 
//            console.log(translate);
             return translate;
             
         });
       //  var xAxisTranslate = barHeight;
         graph.append("g")
         
            .attr("transform", "translate(0, " + (barHeight*ddata.length+ ddata.length*5+8)+")")
            .call(x_axis);
         
            console.log("barHeight",barHeight*ddata.length+ ddata.length*5)
         g.append("rect").transition()
         .attr("width",function(d){
             return scale(d); 
         }).attr("height", barHeight)
         .attr("x",0).attr("y",function(d,i){return i*20}).duration(3000); 
         
         
         g.append("text")
         .attr("x",function(d){
             //console.log('x',scale(d)-20)
             return scale(d)-20; 
         })
         .attr("y",function(d,i){
             return i*20+10; 
         })
         .attr("dy", "0.35em")
         .text(function(d){return d});
                        
        
    }
    
     function refresh(){       
         d3.selectAll("svg").remove(); 
        //   d3.select("body").transition().style("background-color", "gray").duration(1000);
         // make the background-color lightblue.transition()
        // .style("background-color", "gray");
         // make the background-color gray
     }
    