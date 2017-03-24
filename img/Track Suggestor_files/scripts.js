$(document).ready(function(){
    $("goButton").submit(function(){
        // $("h2").toggle(1000);
  });
});

    $("#go").submit(function(event) {

        $("#Questions").fadeToggle(750);
        var valueQ1 = parseInt($("#Q1").val());
        total += valueQ1
            alert(total);

        event.preventDefault();

        if (total < 4) {
          $("#show1").fadeToggle(750);
        }







        $(document).ready(function() {
          $("#formOne").submit(function(event) {
            var shoutInput = $("input#shout").val();

            $(".shout").text(shoutInput);

            // $("#caps").show();

            event.preventDefault();
          });
        });
