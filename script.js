function Order( size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
 

Order.prototype.fullOrder = function () {
    return   this.size + ' pizza with a crust of ' + this.crust + " and a topping of " + this.topping ;
};
};
function Total(quantity, pizzaPrice,crustPrice,toppingPrice,shipped){
    this.quantity = quantity;
    this.pizzaPrice = pizzaPrice;
    this.crustPrice = crustPrice;
    this.toppingPrice = toppingPrice;
    this.shipped = shipped;



Total.prototype.totalCash = function() {
    return  this.quantity * (this.pizzaPrice + this.crustPrice + this.toppingPrice + this.shipped )
};
};


    function validate() {
   
        var myLocation = document.getElementById('locate').value;
        var myName = $('#myName').val();
        var myPhone = $('#phone').val();
      

    
        if (myLocation != ''&& myPhone !=''&& myPhone.length ===10) {
           document.getElementById('show-saved').innerHTML = myName + " Lucky for you we are only 15 minutes away from " + myLocation +" !"
           $('.showing').slideToggle();
           $('.comfirmThis').slideToggle();
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
                        return box1;

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

            var myShipping = addDelivery();
            function addDelivery(){
                var checkDelivery = document.getElementsByName('weDeliver');
                if(checkDelivery[0].checked){
                    var money =  200;
                    return money;
                }else if(!checkDelivery[0].checked){
                    var noMoney = 0;
                    return noMoney;
                }
         
      
            }
            
      
        
       var  newTotal= new Total(pizzaQuantity,mySize,myCrust,myTopping,myShipping);

//        function grandTotal(){
//        if($('.addedMe').click()){
//         var grandTotal = [];
//             var totalCost  =+ parseInt(newTotal.totalCash());
//             grandTotal.push(totalCost )

       
//     }
// }
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
        $('#each-qty').text( 'Your order : ' + pizzaQuantity);
        $('#each-total').text( 'Your total bill : ' + newTotal.totalCash() );
        $('#each-text').text('Thank You for choosing us to serve you ' + myName + ' !'); 

        
       

    }else {

        return false;



    }
   


     
    $('.addedMe').off().click(function(){
        $('#newOrder').append(
            '<tr><th id="pizzTable">'+ '#' + '</th><td id="pizzSize">' + pizzaSize + '</td><td id="pizzCrust">' + pizzaCrust +
                 '</td><td id="pizzTopping">' + pizzaTopping + '</td><td id="pizzQuantity">' + pizzaQuantity + '</td><td id="pizzTotal">' + newTotal.totalCash() 
       );
    });

    if($('#myName') !=''){

        $('.addedMe').fadeIn();
        $('.addMe').hide();
    };
   

        });

      
    


       
        $('.show-locate').click(function(){
            $('.deliveryButton').slideToggle();
        });

   
    
    });

  


// scroll up button

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 800) {
            $('.up-btn').fadeIn();
        } else {
            $('.up-btn').fadeOut();
        }
    });

    $('.up-btn').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 50);
        return false;
    });

});











      
            // function checkDelivery(){

            //     var radioCheck = document.getElementsByName('myRadios');
            //     const radio1  = document.getElementById('delivaryMade');
            //     const radio2  = document.getElementById('pickedUp');
            //     var amDelivering = 200;
            //     var amPicking = 0;
              
              
              
            //      if(!(radioCheck[0].checked || radioCheck[1].checked))
            //      {
            //      return false;
            //     }else
            //     {
            //         if (radio1.checked) {
            //             radioCheck =radio1.value
            //             return amDelivering;      
            //         }else if (radio2.checked){
            //             radioCheck = radio2.value;
            //             return amPicking;
              
            //         }
            //     }
              
            //   }
              