$(document).ready(function(event){

    $(".goButton").click(function(event){
      $(".monitor").hide();
      $(".goButton").hide();
      $(".Questions").show(1000);
  });

  var total = 0;
  $(".enterButton").click(function(event) {
      $("#Question1").fadeToggle(750);

      var valueQ1 = parseInt($("#Q1").val());
      total += valueQ1
        alert(total);

});

//   $(".enterButton2").click(function(event) {
//         $("#Q2").show(1000);
//       $("#Question2").fadeToggle(750);
//
//       var valueQ2 = parseInt($("#Q2").val());
//       total += valueQ2
// });


      event.preventDefault();

      if (total < 30) {
        $("#Java").fadeToggle(750);
      }
      else if (total < 60) {
        $("#C").fadeToggle(750);
          return
      }
      else if (total < 90) {
        $("#Ruby").fadeToggle(750);
          return
      }
      else if (total > 89) {
        $("#PHP").fadeToggle(750);
          return
      }
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
    //         event.preventDefault();
    //       });
    //     });
