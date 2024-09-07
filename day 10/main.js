$(document).ready(function () {
    $('form.login-form').on('submit', function (e) {
      e.preventDefault();
  
      const username = $('input[name="username"]').val();
      const password = $('input[name="password"]').val();
  
      $.ajax({
        type: 'POST',
        url: '/post-subscribe',
        data: { username, password },
        success: function (response) {
          alert('Login successful');
          console.log(response);
        },
        error: function (err) {
          alert('Login failed');
          console.log(err);
        },
      });
    });
  });
  