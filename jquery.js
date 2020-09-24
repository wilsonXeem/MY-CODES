// $(function() {
//     $("p").click(function() {
//         $("div").toggle(10)
//     })
// })

// $(document).ready(function(){
//     $("button").click(function(){
//         $("#div1").fadeIn();
//         $("#div2").fadeIn();
//         $("#div3").fadeIn(3000);
//     });
// });

// $(document).ready(function(){
//     $("button").click(function(){
//         $("#div1").fadeToggle();
//         $("#div2").fadeToggle("slow");
//         $("#div3").fadeToggle(3000);
//     });
// });

// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").toggle();
//     });
// });

// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").animate({
//             height: '450px',
//         }, 2000);
//     });
// });
// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").animate({
//             height: '150px',
//         }, 2000);
//     });
// });

// $(document).ready(function(){
//     $("#btn").click(function(){
//         $("div").animate({
//             left: '250px',
//             height: '150px',
//             width: '150px'
//         });
//     });
// });

// $("button").click(function(){
//     var div = $("div");
//     div.animate({left: '200px'}, "slow")
//     div.animate({top: '200px'}, "slow")
//     div.animate({height: '300px', opacity: '0.4'}, "slow");
//     div.animate({width: '300px', opacity: '0.8'}, "slow");
//     div.animate({height: '100px', opacity: '0.4'}, "slow");
//     div.animate({width: '100px', opacity: '0.8'}, "slow");
//     div.animate({left: '0px'}, "slow")
//     div.animate({top: '0px'}, "slow")
// });

// $(document).ready(function(){
//     $("#btn1").click(function(){
//         alert("Text: " + $("#test").text());
//     });
//     $("#btn2").click(function(){
//         alert("HTML: " + $("#test").html());
//     });
// });

// $(document).ready(function(){
//     $("#btn1").click(function(){
//         $("#test1").text("Hello world!");
//     });
//     $("#btn2").click(function(){
//         $("#test2").html("<b>Hello world!</b>");
//     });
//     $("#btn3").click(function(){
//         $("#test3").val("Dolly Duck");
//     });
// });
// var myObj = {
//     "person": [
//         {
//             "name": "xeem",
//             "age": 20,
//             "favColor": "blue",
//             "department": "pharmacy"
//         },
//         {
//             "name": "Bu-ike",
//             "age": 21,
//             "favColor": "black",
//             "department": "mechatronic engineering"
//         },
//         {
//             "name": "Buchi",
//             "age": 30,
//             "favColor": "red",
//             "department": "psychology"
//         }
//     ]
// }
// var dString = JSON.stringify(myObj)
// document.getElementById("dem").innerHTML = dString
// for (let i in myObj.person){
//     console.log(myObj.person[i].name);
//     document.getElementById("demo").innerHTML += myObj.person[i].name + "<br>";
    
// }

// var dParse = JSON.parse(dString)

// console.log(dParse.person);


// var xmlhttp = new XMLHttpRequest()
// xmlhttp.open("GET", "file:///C:/Users/USER/myJson.text", true)
// xmlhttp.onload = function(){
//     if (this.readyState == 4 && this.status == 200)  {
//         var obj = JSON.parse(this.responseText)
//         document.getElementById("demo").innerHTML = obj.person
//         console.log(obj.person);
        
//     }
// }
// xmlhttp.send()

// var arr = [ "John", "Peter", "Sally", "Jane" ];
// var myJSON = JSON.stringify(arr);
// document.getElementById("demo").innerHTML = myJSON;
// var xhr = JSON.parse(myJSON)
// document.getElementById("demo").innerHTML = xhr[1]

// var myObj, myJSON, text, obj;
// //Storing data:
// myObj = {
//     "person": [
//         {
//             "name": "xeem",
//             "age": 20,
//             "favColor": "blue",
//             "department": "pharmacy"
//         },
//         {
//             "name": "Bu-ike",
//             "age": 21,
//             "favColor": "black",
//             "department": "mechatronic engineering"
//         },
//         {
//             "name": "Buchi",
//             "age": 30,
//             "favColor": "red",
//             "department": "psychology"
//         }
//     ]
// };
// myJSON = JSON.stringify(myObj);
// localStorage.setItem("testJSON", myJSON);

// //Retrieving data:
// text = localStorage.getItem("testJSON");
// obj = JSON.parse(text);
// document.getElementById("demo").innerHTML = obj.person;
// console.log(obj.person);

$("button").click(function(){
    $("div").css("background", "black")
})