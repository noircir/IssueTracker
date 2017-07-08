$(document).ready(function(){
  console.log("hello world");

  // This code creates a new issue block, with a uni  ue UUID number, issue name, priority,
  // and the person it is assigned to. All three values are taken from the input 
  //boxes and stored in variables, which then fill the placeholders.

  
  $("#track").on('click', function(event){
    event.preventDefault();

    var num = uuidv4(); // -> v4 UUID
    var issueName = $("#input1").val();
    var priority = $("#priority").val();
    var assignTo = $("#assignTo").val();
    createIssue(num, issueName, priority, assignTo);
  
  });
  
  // "Close" button changes the label from "open" to "close"
  
  $("body").on('click', '#close', function(e){
    console.log("i clicked close button");
    e.preventDefault();
    $(this).siblings(".badge").hide(300);
    $(this).siblings(".badge").show(800);
    $(this).siblings(".badge").text("Closed");
  })

  // "Delete" button removes the parent container.
  
  $("body").on('click', "#delete", function(e){
    e.preventDefault();
    $(this).parents(".container").hide(1000);
  })
  
  function createIssue(uuid, issue, severity, assignedTo) {

    $("#issue-section").prepend(`
        <div class="container">
          <div class="card">
            <div class="card-block">
              <p>Issue ID: ${uuid}</p>
              <span class="badge badge-info">Open</span>
              <p id="p-name" style="font-size:30px"><strong>${issue}</strong></p>
              
              <i class="fa fa-clock-o"></i>${severity}
              <br/>
    
              <i class="fa fa-user"></i>${assignedTo}
              <br/>
              <br/>
    
              <button id="close" class="btn btn-warning">Close</button>
    
              <button id="delete" class="btn btn-danger">Delete</button>
    
    
            </div>
          </div>
        </div>
    `);
  }
     
});
