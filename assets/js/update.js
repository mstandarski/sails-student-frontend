/**
 * Use the jQuery Validate and the bootstrap-select plugin to enhance this page
 *
 * Here's what this you will need to do:
 *
 * DONE 1. When the page is loaded all form fields should be disabled except
 *    for the dropdown to select a student
 *
 * DONE 2. Using the bootstrap-selct plugin render dropdown on the page
 *
 * DONE 3. Use the live search functionality to make the dropdown searchable
 *
 * DONE 4. Add the user glyphicons next to each student in the list
 *
 * DONE 6. Add a menu header to the dropdown
 *
 * DONE 7. Customize further with anything you find intersting
 *
 * DONE 8. When an student is selected the form fields should be enabled
      and populated with the data for the selected student
 *
 * DONE 9. Use jQuery validate and add validation to the form with the following requirements
 *    First Name - required, at least 2 characters
 *    Last Name  - required, at least 2 characters
 *	  start_date - make sure date is yyyy-mm-dd
 *	  ADD any other validation that makes you happy
 *
 * DONE 10. Make the color of the error text red
 *
 *
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 * https://silviomoreto.github.io/bootstrap-select/
 * https://silviomoreto.github.io/bootstrap-select/examples/
 * http://getbootstrap.com/components/#glyphicons
 * https://api.jquery.com/jQuery.get/
 * http://stackoverflow.com/questions/9807426/use-jquery-to-re-populate-form-with-json-data
 *
 */

 (function(){

   $(function(){

     $("#updateStudentForm").validate({
       errorClass: "text-danger",
       rules: {
         first_name: {
           required: true,
           minlength: 2
         },
         last_name: {
           required: true,
           minlength: 2
         },
         start_date: {
           required: true,
           dateISO: true,
           date: true
         }
       },
       messages: {
         start_date: {
           required: "This is a required field",
           dateISO: jQuery.validator.format("Date must be formated yyyy-mm-dd!")
         }
       }

     });

     $('#studentId').selectpicker({
    style: 'btn-info',
    size: 4,
    liveSearch: true
  });

  $("#updateStudentForm :input" ).prop("disabled", true);


// the below code causes the form to be disabled until a student is selected
  $('#studentId').on('changed.bs.select', function () {
    $("#updateStudentForm :input" ).prop("disabled", false);

    var id = $(this).val();
    var url = "http://localhost:1337/student" + "/" + id;
      console.log(url);
      $.get(url, function( data ) {
              $.each(data, function(name, value) {
                 var $el = $('[name="'+name+'"]'),
                 name = $el.attr('name');
                 console.log("name: " + name + " value: " + value);
                 switch(name) {

                   case 'student_id':
                       $el.val(value);
                       break;
                    case 'first_name':
                       $el.val(value);
                       break;
                    case 'last_name':
                       $el.val(value);
                       break;
                    case 'start_date':
                       $el.val(value);
                       break;
                    case 'gpa':
                       $el.val(value);
                       break;
                    case 'sat':
                       $el.val(value);
                       break;
                    case 'major_id':
                       $el.val(value);
                       break;
                    }
              }) // end each
           }); // end get

      // $.get(url, function() {
      //
      // })

  });




  // $("#first_name").on("changed.bs.select", function(){
  //   $.getJSON("http://localhost:1337/student" + $("#first_name").val(),
  //         function(data){
  //           $.each(data, function(i,item){
  //             if (item.field == "first_name") {
  //               $("#first_name").val(item.value);
  //             } else if (item.field == "last_name") {
  //               $("#last_name").val(item.value);
  //             }
  //           });
  //         });
  // });



// if ($("#studentId :selected") = true) {
//   .prop("disabled", true);
// } else {
//   .prop("disabled", false);
// }


   })

 })();
