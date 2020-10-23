var currentTime = moment();

// Display current day"
$("#currentDay").text(`${currentTime.format('dddd, MMMM Do')}`);

var currentHour=moment().format("HH");
console.log(currentHour);
var timeArray=[9,10,11,12,13,14,15,16,17];

//1. dyanmically appending data (texata and submit) ... user momentjs to get current time compared against specific time blocks
    //if present add that attr to the texarea

    function createBlocks(){

        /*
        <div id="9am" class="row time-block">
            <div class="col-md-1 hour">
            9:00am
            </div>
            <textarea class="col-md-10 description">
            </textarea>
            <button class="btn saveBtn col-md-1" id="9">
                <i class="fas fa-save"></i>
            </button>
        </div>
        */

     
        for(var x=0;x<timeArray.length;x++){
        //1.create the html content
        //2. create the variables represent it
        var d1 =$("<div>");
        //<div></div>
        d1.attr("id",timeArray[x]);
        //<div id="9"></div>
        d1.attr("class", "row time-block");
        //<div id="9" class="row time-block"></div>

        var d2=$("<div>");
        //<div></div>
        d2.attr("class"," col-md-1 hour");
        //<div class="col-md-1 hour"></div>
        //AM?
        if(timeArray[x]<12){
            d2.text(timeArray[x]+" AM");

        }
        //PM
        if(timeArray[x]>12){
            d2.text(timeArray[x]-12 +" PM");
 
        }
        if(timeArray[x]==12){
            d2.text(timeArray[x]+" PM");
        }
        //d2.text(timeArray[x]);
         //<div class="col-md-1 hour">9</div>

        var textarea =$("<textarea>")
        //<textarea></textarea>
        //if present speficic time block vs the currentHour
        if(currentHour==timeArray[x]){
            textarea.attr("class", "col-md-10 description present "+timeArray[x]);

        }
        //past
        if(currentHour< timeArray[x]){
            textarea.attr("class", "col-md-10 description past");

        }
        if(currentHour >timeArray[x]){
            textarea.attr("class", "col-md-10 description");
        }
        var btn=$("<button>")
        //<button></button>
        btn.attr("class","btn saveBtn col-md-1")
        //<button class="btn saveBtn col-md-1"></button>
        btn.attr("id", timeArray[x]);

        var i= $("<i>");
        //<i></i>
        i.attr("class","fas fa-save");
         //<i class="fas fa-save"></i>

        //3. style it
        //4. append to each other (parent and child relationship)
        btn.append(i);
         //<button class="btn saveBtn col-md-1">
            //<i class="fas fa-save"></i>
        //</button>

        d1.append(d2);
        d1.append(textarea);
        d1.append(btn);
        //5. append to html
           //.container
        $(".container").append(d1);

    }

    $(".saveBtn").click(function(){
        alert($(this).attr("id"));//hour
        //grab user input
        //set hour = userinput into local storage
      });
    }

    createBlocks();

//2. geting the btn to work and grab the hour requested and the data from the sure
    //set it to local storage

//3. when the page loads get all data from local storage and stick to associated textarea

//$(".9").val(//get localstroage for 9)