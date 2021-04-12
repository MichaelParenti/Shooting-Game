document.addEventListener("DOMContentLoaded", () => {

var char = document.getElementById("character");

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var ten = document.getElementById("ten");


let moveOver = 250;

    document.addEventListener("keydown", function(e){


        
        

        
         


        //Move Right
        if(e.key == "ArrowRight" && (char.offsetLeft + char.offsetWidth) < 520) {
           moveOver = moveOver + 8;
           char.style.left = moveOver + "px";
        //    bullet.style.left = moveOver + "px";
        }
        //Move Left
        else if(e.key == "ArrowLeft" && char.offsetLeft > 30) {
           moveOver = moveOver - 8;
           char.style.left = moveOver + "px";                    
        //    bullet.style.left = moveOver + "px";                    
        }

            // setInterval(function() { 
            
            //         var ow = bullet.offsetWidth;
            //         var oh = bullet.offsetHeight;
            //         var ot = bullet.offsetTop;
            //         var ol = bullet.offsetLeft;

            //             var o2w = one.offsetWidth;
            //             var o2h = one.offsetHeight;
            //             var o2t = one.offsetTop;
            //             var o2l = one.offsetLeft;
            
            //             if ((ol + ow) > (o2l) &&
            //             (ol) < (o2w + o2l) &&
            //             (ot) < (o2t + o2h) &&
            //             (ot+ oh) > (o2t)){
            //                 one.remove();
            //             }

                            // var o2w2 = two.offsetWidth;
                            // var o2h2 = two.offsetHeight;
                            // var o2t2 = two.offsetTop;
                            // var o2l2 = two.offsetLeft;
                        
                            // if ((ol + ow) > (o2l2) &&
                            // (ol) < (o2w2 + o2l2) &&
                            // (ot) < (o2t2 + o2h2) &&
                            // (ot+ oh) > (o2t2)){
                                // two.remove();
                            // }

                                // var o2w3 = three.offsetWidth;
                                // var o2h3 = three.offsetHeight;
                                // var o2t3 = three.offsetTop;
                                // var o2l3 = three.offsetLeft;

                                // if ((ol + ow) > (o2l3) &&
                                // (ol) < (o2w3 + o2l3) &&
                                // (ot) < (o2t3 + o2h3) &&
                                // (ot+ oh) > (o2t3)){
                                    // three.remove();
                                // }

                                    //  var o2w4 = four.offsetWidth;
                                    //  var o2h4 = four.offsetHeight;
                                    //  var o2t4 = four.offsetTop;
                                    //  var o2l4 = four.offsetLeft;

                                    //  if ((ol + ow) > (o2l4) &&
                                    //  (ol) < (o2w4 + o2l4) &&
                                    //  (ot) < (o2t4 + o2h4) &&
                                    //  (ot+ oh) > (o2t4)){
                                        // four.remove();
                                    //  }

                                        // var o2w5 = five.offsetWidth;
                                        // var o2h5 = five.offsetHeight;
                                        // var o2t5 = five.offsetTop;
                                        // var o2l5 = five.offsetLeft;

                                        // if ((ol + ow) > (o2l5) &&
                                        // (ol) < (o2w5 + o2l5) &&
                                        // (ot) < (o2t5 + o2h5) &&
                                        // (ot+ oh) > (o2t5)){
                                            // five.remove();
                                        // }

                                            // var o2w6 = six.offsetWidth;
                                            // var o2h6 = six.offsetHeight;
                                            // var o2t6 = six.offsetTop;
                                            // var o2l6 = six.offsetLeft;

                                            // if ((ol + ow) > (o2l6) &&
                                            // (ol) < (o2w6 + o2l6) &&
                                            // (ot) < (o2t6 + o2h6) &&
                                            // (ot+ oh) > (o2t6)){
                                                // six.remove();
                                            // }

                                                // var o2w7 = seven.offsetWidth;
                                                // var o2h7 = seven.offsetHeight;
                                                // var o2t7 = seven.offsetTop;
                                                // var o2l7 = seven.offsetLeft;

                                                // if ((ol + ow) > (o2l7) &&
                                                // (ol) < (o2w7 + o2l7) &&
                                                // (ot) < (o2t7 + o2h7) &&
                                                // (ot+ oh) > (o2t7)){
                                                    // seven.remove();
                                                // }

                                                    // var o2w8 = eight.offsetWidth;
                                                    // var o2h8 = eight.offsetHeight;
                                                    // var o2t8 = eight.offsetTop;
                                                    // var o2l8 = eight.offsetLeft;

                                                    // if ((ol + ow) > (o2l8) &&
                                                    // (ol) < (o2w8 + o2l8) &&
                                                    // (ot) < (o2t8 + o2h8) &&
                                                    // (ot+ oh) > (o2t8)){
                                                        // eight.remove();
                                                    // }

                                                        // var o2w9 = nine.offsetWidth;
                                                        // var o2h9 = nine.offsetHeight;
                                                        // var o2t9 = nine.offsetTop;
                                                        // var o2l9 = nine.offsetLeft;

                                                        // if ((ol + ow) > (o2l9) &&
                                                        // (ol) < (o2w9 + o2l9) &&
                                                        // (ot) < (o2t9 + o2h9) &&
                                                        // (ot+ oh) > (o2t9)){
                                                            // nine.remove();
                                                        // }
  
                                                            // var o2w10 = ten.offsetWidth;
                                                            // var o2h10 = ten.offsetHeight;
                                                            // var o2t10 = ten.offsetTop;
                                                            // var o2l10 = ten.offsetLeft;

                                                            // if ((ol + ow) > (o2l10) &&
                                                            // (ol) < (o2w10 + o2l10) &&
                                                            // (ot) < (o2t10 + o2h10) &&
                                                            // (ot+ oh) > (o2t10)){
                                                                // ten.remove();
                                                            // }
//            },1);


    });

//Create Bullet
        
            var listen = document.addEventListener("keyup", function(e){
if(e.key == " "){
        let bullet = document.createElement("p");        
        bullet.style.position = "absolute";
        bullet.style.left = /*252.5*/ char.offsetLeft + "px";
        bullet.style.top = 310 + "px";
        bullet.style.width = "4px";
        bullet.style.height = "8px";
        bullet.style.backgroundColor = "black";
        bullet.style.animation = 'move 500ms linear';

                document.body.append(bullet);

                setInterval(function() { 
            
            var ow = bullet.offsetWidth;
            var oh = bullet.offsetHeight;
            var ot = bullet.offsetTop;
            var ol = bullet.offsetLeft;

                var o2w = one.offsetWidth;
                var o2h = one.offsetHeight;
                var o2t = one.offsetTop;
                var o2l = one.offsetLeft;
    
                if ((ol + ow) > (o2l) &&
                (ol) < (o2w + o2l) &&
                (ot) < (o2t + o2h) &&
                (ot+ oh) > (o2t)){
                    one.remove();
                }

                var o2w2 = two.offsetWidth;
                var o2h2 = two.offsetHeight;
                var o2t2 = two.offsetTop;
                var o2l2 = two.offsetLeft;
            // 
                if ((ol + ow) > (o2l2) &&
                (ol) < (o2w2 + o2l2) &&
                (ot) < (o2t2 + o2h2) &&
                (ot+ oh) > (o2t2)){
                    two.remove();
                }
// 
                    var o2w3 = three.offsetWidth;
                    var o2h3 = three.offsetHeight;
                    var o2t3 = three.offsetTop;
                    var o2l3 = three.offsetLeft;
// 
                    if ((ol + ow) > (o2l3) &&
                    (ol) < (o2w3 + o2l3) &&
                    (ot) < (o2t3 + o2h3) &&
                    (ot+ oh) > (o2t3)){
                        three.remove();
                    }
// 
                         var o2w4 = four.offsetWidth;
                         var o2h4 = four.offsetHeight;
                         var o2t4 = four.offsetTop;
                         var o2l4 = four.offsetLeft;
// 
                         if ((ol + ow) > (o2l4) &&
                         (ol) < (o2w4 + o2l4) &&
                         (ot) < (o2t4 + o2h4) &&
                         (ot+ oh) > (o2t4)){
                            four.remove();
                         }
// 
                            var o2w5 = five.offsetWidth;
                            var o2h5 = five.offsetHeight;
                            var o2t5 = five.offsetTop;
                            var o2l5 = five.offsetLeft;
// 
                            if ((ol + ow) > (o2l5) &&
                            (ol) < (o2w5 + o2l5) &&
                            (ot) < (o2t5 + o2h5) &&
                            (ot+ oh) > (o2t5)){
                                five.remove();
                            }
// 
                                var o2w6 = six.offsetWidth;
                                var o2h6 = six.offsetHeight;
                                var o2t6 = six.offsetTop;
                                var o2l6 = six.offsetLeft;
// 
                                if ((ol + ow) > (o2l6) &&
                                (ol) < (o2w6 + o2l6) &&
                                (ot) < (o2t6 + o2h6) &&
                                (ot+ oh) > (o2t6)){
                                    six.remove();
                                }
// 
                                    var o2w7 = seven.offsetWidth;
                                    var o2h7 = seven.offsetHeight;
                                    var o2t7 = seven.offsetTop;
                                    var o2l7 = seven.offsetLeft;
// 
                                    if ((ol + ow) > (o2l7) &&
                                    (ol) < (o2w7 + o2l7) &&
                                    (ot) < (o2t7 + o2h7) &&
                                    (ot+ oh) > (o2t7)){
                                        seven.remove();
                                    }
// 
                                        var o2w8 = eight.offsetWidth;
                                        var o2h8 = eight.offsetHeight;
                                        var o2t8 = eight.offsetTop;
                                        var o2l8 = eight.offsetLeft;
// 
                                        if ((ol + ow) > (o2l8) &&
                                        (ol) < (o2w8 + o2l8) &&
                                        (ot) < (o2t8 + o2h8) &&
                                        (ot+ oh) > (o2t8)){
                                            eight.remove();
                                        }
// 
                                            var o2w9 = nine.offsetWidth;
                                            var o2h9 = nine.offsetHeight;
                                            var o2t9 = nine.offsetTop;
                                            var o2l9 = nine.offsetLeft;
// 
                                            if ((ol + ow) > (o2l9) &&
                                            (ol) < (o2w9 + o2l9) &&
                                            (ot) < (o2t9 + o2h9) &&
                                            (ot+ oh) > (o2t9)){
                                                nine.remove();
                                            }
// 
                                                var o2w10 = ten.offsetWidth;
                                                var o2h10 = ten.offsetHeight;
                                                var o2t10 = ten.offsetTop;
                                                var o2l10 = ten.offsetLeft;
// 
                                                if ((ol + ow) > (o2l10) &&
                                                (ol) < (o2w10 + o2l10) &&
                                                (ot) < (o2t10 + o2h10) &&
                                                (ot+ oh) > (o2t10)){
                                                    ten.remove();
                                                }
                    },1);
} else {
        removeEventListener("keyup",listen);
}    
            });
            
        
});        

    
            

    function restart() {
        document.location.reload();
    }