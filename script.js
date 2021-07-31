function Order( size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
 

Order.prototype.fullOrder = function () {
    return   this.size + ' pizza with a crust of ' + this.crust + " and a topping of " + this.topping ;
};
};
function Total(quantity, pizzaPrice,crustPrice,toppingPrice){
    this.quantity = quantity;
    this.pizzaPrice = pizzaPrice;
    this.crustPrice = crustPrice;
    this.toppingPrice = toppingPrice;



Total.prototype.totalCash = function() {
    return  this.quantity * (this.pizzaPrice + this.crustPrice + this.toppingPrice)
};
};



$(document).ready(function () {
    $("form#myform").submit(function(event) {
        event.preventDefault();
    

            var pizzaSize = $('#size').val();

            function price(){

                if(pizzaSize=='Small'){
                    return 500;
                }else if(pizzaSize=='Medium'){
                    return 800;
                }else if(pizzaSize=='Large'){
                    return 1200
                }
            
            }

            var pizzaCrust = $('#crust').val();

            var pizzaTopping = checkedToppings();

                        function checkedToppings() {
                var topName = document.getElementsByName('mole');

                var topLength = topName.length;
                var topValue = ' ';
                for(i = 0; i<topLength; i++){
                    var topChecked = topName[i].checked;
                    if(topChecked){
                        topValue += topName[i].value + ' ; ' ;
                    }   
                }
                var result = topValue;
                return result;


            }


            var pizzaQuantity = parseInt($('#quantity').val());

            var mySize = price()

            var myCrust = 150;

            var myTopping =checkBox();

             function checkBox(){
                var chb = document.getElementsByName('mole');
                var box1 = 150;
                var box2 = 130;
                var box3 = 120;
                var box4 = 180;
                var box5 = 150;
                var box6 = 100;

                     
    if (chb[0].checked){
                        document.getElementById("errMessage").innerHTML = "";
                        return box1

                }else if(chb[1].checked){
                                    document.getElementById("errMessage").innerHTML = "";
                                    return box2; 
                                     
                }else if(chb[2].checked){
                                    document.getElementById("errMessage").innerHTML = "";
                                    return box3;

                }else if(chb[3].checked){

                                    document.getElementById("errMessage").innerHTML = "";
                                    return box4;
                                    
                }else if(chb[4].checked){
                                    document.getElementById("errMessage").innerHTML = "";
                                    return box5;
                                    
                }else if(chb[5].checked){
                                    document.getElementById("errMessage").innerHTML = "";
                                    return box6;
                }else{
                           document.getElementById("errMessage").innerHTML = "choose atleast one topping!";

                    
                }

            }
            var check = checkBox();     
        
       var  newTotal= new Total(pizzaQuantity,mySize,myCrust,myTopping);
       if( pizzaSize !='' &&  pizzaCrust != ''  && pizzaQuantity !='' && check  ){
        $('.hide').fadeIn();
        $('#pizzSize').text( pizzaSize);
        $('#pizzCrust').text( pizzaCrust);
        $('#pizzTopping').text( pizzaTopping);
        $('#pizzQuantity').text( pizzaQuantity);
        $('#pizzTotal').text( newTotal.totalCash())

    }else{
        return false;
    }

        });
    });