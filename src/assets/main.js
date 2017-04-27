$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/renestl.json',
    dataType: 'jsonp',
    success: function(response) {
      response.courses.completed.forEach(function(element) {
        $('#badges').append(`
          <div class="course">
            <h3>${element.title}</h3>
            <img src="${element.badge}" alt"${element.title}" >
            <a href="${element.url}" target="_blank" class="btn btn-primary">See Course</a>
          </div>`)
      }, this); 
    }
  })
});
