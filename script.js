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
    // this.shipping = shipping;



Total.prototype.totalCash = function() {
    return  this.quantity * (this.pizzaPrice + this.crustPrice + this.toppingPrice )
};
};


    function validate() {
   
        var myLocation = document.getElementById('locate').value;
        var myName = $('#myName').val();

    
        if (myLocation != '') {
           document.getElementById('show-saved').innerHTML = myName + " Lucky for you we are only 15 minutes away from " + myLocation +" !"
           $('.showing').slideToggle()
              $(document).on('click', '#submit-btn', function(e){
                 e.preventDefault();
             });
           
      
        }
        else{ 
             return false;
        
            }
           
    
    }
    


$(document).ready(function () {
    $("form#myform").submit(function(event) {
        event.preventDefault();
        myShipping = parseInt($('#show-locate').val());
        var myName = $('#myName').val();
    

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
             var myCrust = crustiePrice()

            function crustiePrice(){
                if(pizzaCrust==='Cracker'){
                    return 250;
                }else if(pizzaCrust==='Stuffed'){
                    return 200;

                }else if(pizzaCrust==='Cheese'){
                    return 250;

                }else if(pizzaCrust==='Magherita'){
                    return 300;

                }else if(pizzaCrust==='Thick'){
                    return 200;

                }else if(pizzaCrust==='FlatBread'){
                     250;

                }else if(pizzaCrust==='Thick'){
                    return 200;

                }
            }

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


            var myTopping =checkBox();

             function checkBox(){
                var chb = document.getElementsByName('mole');
                var box1 = 150;
                var box2 = 180;
                var box3 = 150;
                var box4 = 100;
                var box5 = 130;
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
       if( myName!='' && pizzaSize !='' &&  pizzaCrust != ''  && pizzaQuantity !='' && check  ){
        $('.hide').fadeIn();
        $('.image-section').hide();
        $('#pizzSize').text( pizzaSize);
        $('#pizzCrust').text( pizzaCrust);
        $('#pizzTopping').text( pizzaTopping);
        $('#pizzQuantity').text( pizzaQuantity);
        $('#pizzTotal').text( newTotal.totalCash());

        $('#each-size').text( 'pizza-size : '+ pizzaSize);
        $('#each-crust').text( 'Crust : ' + pizzaCrust);
        $('#each-top').text( 'Toppings : ' + pizzaTopping);
        $('#each-qty').text( 'Your order : ' + pizzaQuantity)
        $('#each-total').text( 'Your total bill : ' + newTotal.totalCash());
        $('#each-text').text('Thank You for choosing us to serve you ' + myName + ' !'); 

        
       

    }else{
        return false;
    }

        });
        $('#show-locate').click(function(){
            $('.locateMe').slideToggle();
        })


    
    });






// function taken(){
//     var myName = document.getElementById('name');
//     var myEmail = document.getElementById('email');

//      document.getElementById('takeMe').click(  window.location = 'https://www.google.com/' ,myName.value = '' , myEmail.value = "")
// }