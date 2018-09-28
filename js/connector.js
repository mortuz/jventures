(function($){

  // fetching solutions
  var solutionImages = [
    './img/solutions/marketing.svg',
    './img/solutions/geo.svg',
    './img/solutions/camp.svg',
    './img/solutions/geo.svg',
    './img/solutions/int.svg',
    './img/solutions/app.svg',
    './img/solutions/mob.svg',
    './img/solutions/money.svg',
  ];

  $.ajax({
    url: "http://jventures.pk/backend/wp-json/wp/v2/posts",
    data: JSON.stringify({ categories: 5 }),
    type: 'get',
    success: function(data) {
      // console.log(data);
      data = data.reverse()
      var html = '';

      for (let i = 0; i < data.length; i++) {
        const elem = data[i];
        var title = elem.title.rendered;
        var titleArr = title.split(' ');
        var identifier = 2;

        if ( titleArr.length == 2) {
          identifier = 1
        } else if (titleArr.length == 6){
          identifier = 3;
        }

        title = '';
        for (let j = 0; j < titleArr.length; j++) {
          const titl = titleArr[j];
          if (j == identifier) {
            // add line break
            title += '<br>';
          }
          title += titl + ' ';
        }

        // console.log(title);
        if (i == 0 || i == 4) {
          html += '<div class="row">';
        }
        html += `
          <div class="column-4 text-center">
              <div class="item animate">
                  <div class="item-content item-front">
                      <img src="${solutionImages[i]}" alt="">
                      <p class="mt-3 small-text">${title}</p>
                  </div>

                  <div class="item-content item-back small-text">
                      ${$(elem.excerpt.rendered).text()}
                  </div>

              </div>
          </div>
        `;
        if (i == 3 || i == 7) {
          html += '</div>';
        }
      }

      $('.js-sol-content').html(html);
      // console.log(html);
    },
    error: function(err) {
        console.error('FETCH_SOLUTIONS_ERR:', err);
    }
  });
})(jQuery)