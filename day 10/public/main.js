$(document).ready(function () {
  $('#subscribeForm').on('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting via the browser

      const formData = {
          name: $('#name').val(),
          email: $('#email').val()
      };

      $.ajax({
          type: 'POST',
          url: '/post-subscribe',
          data: formData,
          dataType: 'json',
          success: function (response) {
              $('#responseMessage').html(`<p>${response.message}</p><p>Email: ${response.email}</p>`);
              $('#subscribeForm').addClass('hide');
          },
          error: function () {
              $('#responseMessage').html('<p> An error occurred. Please try again. </p>');
          }
      });
  });
});
