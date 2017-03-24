$(document).ready(function(event){

    $(".goButton").click(function(event){
      $(".goButton").hide();
      $(".Questions").show(1000);
  });

  var total = 0;
  $("#Question1").show();
  $(".enterButton").click(function(event) {
    $("#Question1").hide();
    
      var valueQ1 = parseInt($("#Q1").val());
      total += valueQ1

      var valueQ2 = parseInt($("#Q2").val());
      total += valueQ2

      var valueQ3 = parseInt($("#Q3").val());
      total += valueQ3

      var valueQ4 = parseInt($("#Q4").val());
      total += valueQ4

      var valueQ5 = parseInt($("#Q5").val());
      total += valueQ5
      event.preventDefault();

      if (total < 30) {
        $("#Java").show();
      }

      else if (total < 60) {
        $("#C").show();
          return
      }
      else if (total < 90) {
        $("#Ruby").show();
          return
      }
      else if (total > 89) {
        $("#PHP").show();
          return
      }
  });
});



    // //

    //
    //
    //
    //
    //
    // var valueQ1 = parseInt($("#Q1").val());
    //     total += valueQ1
    //         alert(total);
    //
    //   event.preventDefault();
    // //
    //     $(document).ready(function() {
    //       $("#formOne").submit(function(event) {
    //         var shoutInput = $("input#shout").val();
    //
    //         $(".shout").text(shoutInput);
    //
    //         // $("#caps").show();
    //

    //       });
    //     });
