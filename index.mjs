<!DOCTYPE html>
<html>
<head>
    <style>
        #myseats {
            width: 1000px;
            height: 130px;
           
        }
        #myseat {
            width: 330px;
            height: 130px;
            position: absolute;
            top: 7.8px;
            background-image: url('myseat.png');
        }
        .container .leftMainCont .seat {
            height: 25px;
            width: 30px;
            border: 1px solid #bdbdbd;
            border-radius: 2px 2px 4px 4px;
            margin: 10px;
            margin-bottom: 0.8rem;
            position: relative;
            left: 280px;
            cursor: pointer;
            background-color: #fff;
            transition: 0.3s ease background-color;
            
        }
        .container .leftMainCont .seat::after {
            content: "";
            height: 23px;
            width: 20px;
            border: 1px solid #bdbdbd;
            position: absolute;
            left: 50%;
            top: 29%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            border-radius: 2px 2px;
            transition: 0.3s ease background-color;
        }
        .container .leftMainCont .seat:hover,
        .container .leftMainCont .seat:hover::after {
            background-color: #e6e6e6;
        }
        .container .leftMainCont .seat.occupied,
        .container .leftMainCont .seat.occupied::after {
            background-color: lightgray;
        }
        .container .leftMainCont .seat.selected,
        .container .leftMainCont .seat.selected::after {
            background-color: lightgray;
        }
    




        .container .rightMain .seat {
            height: 25px;
            width: 30px;
            border: 1px solid #bdbdbd;
            border-radius: 2px 2px 4px 4px;
            margin: 10px;
            margin-bottom: 0.8rem;
            position: relative;
            left:325px;
            top:-315px;
            display: block;
            cursor: pointer;
            background-color: #fff;
            transition: 0.3s ease background-color;
        }
        .container .rightMain .seat::after {
            content: "";
            height: 23px;
            width: 20px;
            border: 1px solid #bdbdbd;
            position: absolute;
            left: 50%;
            top: 29%; 
            transform: translate(-50%, -50%);
            background-color: #fff;
            border-radius: 2px 2px;
            transition: 0.3s ease background-color;
        }
        .container .rightMain .seat:hover,
        .container .rightMain .seat:hover::after {
            background-color: #e6e6e6;
        }
        .container .rightMain.seat.occupied,
        .container .rightMain.seat.occupied::after {
            background-color:gray;
        }
        .container .rightMain.seat.selected,
        .container .rightMain .seat.selected::after {
            background-color: lightgray;
        }

      

 

        
        .container .fourthMain .seat {
            height: 25px;
            width: 30px;
            border: 1px solid #bdbdbd;
            border-radius: 2px 2px 4px 4px;
            margin: 10px;
            margin-bottom: 0.8rem;
            position: relative;
            left:435px;
            top:-943px;
            cursor: pointer;
            background-color: #fff;
            transition: 0.3s ease background-color;
        }
        .container .fourthMain .seat::after {
            content: "";
            height: 23px;
            width: 20px;
            border: 1px solid #bdbdbd;
            position: absolute;
            left: 50%;
            top: 29%; 
            transform: translate(-50%, -50%);
            background-color: #fff;
            border-radius: 2px 2px;
            transition: 0.3s ease background-color;
        }
        .container .fourthMain .seat:hover,
        .container .fourthMain .seat:hover::after {
            background-color: #e6e6e6;
        }
        .container .fourthMain.seat.occupied,
        .container .fourthMain.seat.occupied::after {
            background-color: lightgray;
        }
        .container .fourthMain.seat.selected,
        .container .fourthMain .seat.selected::after {
            background-color: rgb(168, 245, 168);
            border-color: rgba(0, 190, 0, 0.336);
        }



        .container .thirdMain .seat {
            height: 25px;
            width: 30px;
            border: 1px solid #bdbdbd;
            border-radius: 2px 2px 4px 4px;
            margin: 10px;
            margin-bottom: 0.8rem;
            position: relative;
            left:390px;
            top:-629px;
            cursor: pointer;
            background-color: #fff;
            transition: 0.3s ease background-color;
        }
        .container .thirdMain .seat::after {
            content: "";
            height: 23px;
            width: 20px;
            border: 1px solid #bdbdbd;
            position: absolute;
            left: 50%;
            top: 29%; 
            transform: translate(-50%, -50%);
            background-color: #fff;
            border-radius: 2px 2px;
            transition: 0.3s ease background-color;
        }
        .container .thirdMain .seat:hover,
        .container .thirdMain .seat:hover::after {
            background-color: #e6e6e6;
        }
        .container .thirdMain.seat.occupied,
        .container .thirdMain.seat.occupied::after {
            background-color: lightgray;
        }
        .container .thirdMain.seat.selected,
        .container .thirdMain .seat.selected::after {
            background-color: rgb(168, 245, 168);
            border-color: rgba(0, 190, 0, 0.336);
        }

      
 

        .container .fifthMain .seat {
            height: 25px;
            width: 30px;
            border: 1px solid #bdbdbd;
            border-radius: 2px 2px 4px 4px;
            margin: 10px;
            margin-bottom: 0.8rem;
            position: relative;
            left:480px;
            top:-1257px;
            cursor: pointer;
            background-color: #fff;
            transition: 0.3s ease background-color;
        }
        .container .fifthMain .seat::after {
            content: "";
            height: 23px;
            width: 20px;
            border: 1px solid #bdbdbd;
            position: absolute;
            left: 50%;
            top: 29%; 
            transform: translate(-50%, -50%);
            background-color: #fff;
            border-radius: 2px 2px;
            transition: 0.3s ease background-color;
        }
        .container .fifthMain .seat:hover,
        .container .fifthMain .seat:hover::after {
            background-color: #e6e6e6;
        }
        .container .fifthMain.seat.occupied,
        .container .fifthhMain.seat.occupied::after {
            background-color: lightgray;
        }
        .container .fifthMain.seat.selected,
        .container .fifthMain .seat.selected::after {
            background-color: rgb(168, 245, 168);
            border-color: rgba(0, 190, 0, 0.336);
        }



        .container .sixthMain .seat {
            height: 25px;
            width: 30px;
            border: 1px solid #bdbdbd;
            border-radius: 2px 2px 4px 4px;
            margin: 10px;
            margin-bottom: 0.8rem;
            position: relative;
            left:525px;
            top:-1570px;
            cursor: pointer;
            background-color: #fff;
            transition: 0.3s ease background-color;
        }
        .container .sixthMain .seat::after {
            content: "";
            height: 23px;
            width: 20px;
            border: 1px solid #bdbdbd;
            position: absolute;
            left: 50%;
            top: 29%; 
            transform: translate(-50%, -50%);
            background-color: #fff;
            border-radius: 2px 2px;
            transition: 0.3s ease background-color;
        }
        .container .sixthMain .seat:hover,
        .container .sixthMain .seat:hover::after {
            background-color: #e6e6e6;
        }
        .container .sixthMain.seat.occupied,
        .container .sixthhMain.seat.occupied::after {
            background-color: lightgray;
        }
        .container .sixthMain.seat.selected,
        .container .sixthMain .seat.selected::after {
            background-color: rgb(168, 245, 168);
            border-color: rgba(0, 190, 0, 0.336);
        }


   

        

        .container .seventhMain .seat {
            height: 25px;
            width: 30px;
            border: 1px solid #bdbdbd;
            border-radius: 2px 2px 4px 4px;
            margin: 10px;
            margin-bottom: 0.8rem;
            position: relative;
            left: 590px;px;
            top:-1884px;
            cursor: pointer;
            background-color: #fff;
            transition: 0.3s ease background-color;
        }
        .container .seventhMain .seat::after {
            content: "";
            height: 23px;
            width: 20px;
            border: 1px solid #bdbdbd;
            position: absolute;
            left: 50%;
            top: 29%; 
            transform: translate(-50%, -50%);
            background-color: #fff;
            border-radius: 2px 2px;
            transition: 0.3s ease background-color;
        }
        .container .seventhMain .seat:hover,
        .container .seventhMain .seat:hover::after {
            background-color: #e6e6e6;
        }
        .container .seventhMain.seat.occupied,
        .container .sevenethMain.seat.occupied::after {
            background-color: lightgray;
        }
        .container .seventhMain.seat.selected,
        .container .seventhMain .seat.selected::after {
            background-color: rgb(168, 245, 168);
            border-color: rgba(0, 190, 0, 0.336);
        }




        .container .eigthMain .seat {
            height: 25px;
            width: 30px;
            border: 1px solid #bdbdbd;
            border-radius: 2px 2px 4px 4px;
            margin: 10px;
            margin-bottom: 0.8rem;
            position: relative;
            left: 640px;
            top:-2198px;
            cursor: pointer;
            background-color: #fff;
            transition: 0.3s ease background-color;
        }
        .container .eigthMain .seat::after {
            content: "";
            height: 23px;
            width: 20px;
            border: 1px solid #bdbdbd;
            position: absolute;
            left: 50%;
            top: 29%; 
            transform: translate(-50%, -50%);
            background-color: #fff;
            border-radius: 2px 2px;
            transition: 0.3s ease background-color;
        }
        .container .eigthMain .seat:hover,
        .container .eigthMain .seat:hover::after {
            background-color: #e6e6e6;
        }
        .container .eigthMain.seat.occupied,
        .container .eigthMain.seat.occupied::after {
            background-color: lightgray;
        }
        .container .eigthMain.seat.selected,
        .container .eigthMain .seat.selected::after {
            background-color: rgb(168, 245, 168);
            border-color: rgba(0, 190, 0, 0.336);
        }



        #sidebar{
            background-color: #F2F2F2;
            width: 215px;
            height: 500px;
            position: absolute;
            left: 1120px;
            border-color: black;
            
            top: 125px;
        }

        .disabled {
  pointer-events: none;
  opacity: 0.5; /* optional, to give a visual cue */
}

 body{
    background-image: url("stree.png");
   
   
 }


 </style>
</head>
<body >
    <img src="myseats.png" id="myseats">
    <img src="myfirstseat.png" id="myseat">
    
    <div class="container">
        <div class="leftMainCont">
            <div class="seat" id="11"></div>
            <div class="seat" id="12"></div>
            <div class="seat" id="13"></div>
            <div class="seat" id="14"></div>
            <div class="seat" id="15"></div>
            <div class="seat" id="16"></div>
            <div class="seat" id="17"></div>
            <div class="seat" id="18"></div>
        </div>
          

        
        <div class="rightMain">
            <div class="seat" id="19"></div>
            <div class="seat" id="20"></div>
            <div class="seat" id="21"></div>
            <div class="seat" id="22"></div>
            <div class="seat" id="23"></div>
            <div class="seat" id="24"></div>
            <div class="seat" id="25"></div>
            <div class="seat" id="26"></div>
        </div>
       
   


   
        <div class="thirdMain">
            <div class="seat" id="27"></div>
            <div class="seat" id="28"></div>
            <div class="seat" id="29"></div>
            <div class="seat" id="30"></div>
            <div class="seat" id="31"></div>
            <div class="seat" id="32"></div>
            <div class="seat" id="33"></div>
            <div class="seat" id="34"></div>
        </div>
       
        
    


    
        <div class="fourthMain">
            <div class="seat" id="35"></div>
            <div class="seat" id="36"></div>
            <div class="seat" id="37"></div>
            <div class="seat" id="38"></div>
            <div class="seat" id="39"></div>
            <div class="seat" id="40"></div>
            <div class="seat" id="41"></div>
            <div class="seat" id="42"></div>
        </div>
       
        
    

   
        <div class="fifthMain">
            <div class="seat" id="43"></div>
            <div class="seat" id="44"></div>
            <div class="seat" id="45"></div>
            <div class="seat" id="46"></div>
            <div class="seat" id="47"></div>
            <div class="seat" id="48"></div>
            <div class="seat" id="49"></div>
            <div class="seat" id="50"></div>
        </div>
       
        
    


    
        <div class="sixthMain">
            <div class="seat" id="51"></div>
            <div class="seat" id="52"></div>
            <div class="seat" id="53"></div>
            <div class="seat" id="54"></div>
            <div class="seat" id="55"></div>
            <div class="seat" id="56"></div>
            <div class="seat" id="57"></div>
            <div class="seat" id="58"></div>
        </div>
       
        
    


    
        <div class="seventhMain">
            <div class="seat" id="59"></div>
            <div class="seat" id="60"></div>
            <div class="seat" id="61"></div>
            <div class="seat" id="62"></div>
            <div class="seat" id="63"></div>
            <div class="seat" id="64"></div>
            <div class="seat" id="65"></div>
            <div class="seat" id="66"></div>
        </div>
       
        
 

   
        <div class="eigthMain">
            <div class="seat" id="67"></div>
            <div class="seat" id="68"></div>
            <div class="seat" id="69"></div>
            <div class="seat" id="70"></div>
            <div class="seat" id="71"></div>
            <div class="seat" id="72"></div>
            <div class="seat" id="73"></div>
            <div class="seat" id="74"></div>
        </div>

       </div>
        
    




    


        
         

        
  

   
    

<div id="sidebar">

</div>


 <script src="SeatBook.js"></script>   
</body>
</html>