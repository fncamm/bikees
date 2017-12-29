/* global $  */

function moveBackground(event, backgroundImage, header, secondary) {
  const offset = backgroundImage.offset();
  const halfWidth = backgroundImage.width() / 2;
  const halfHeight = backgroundImage.height() / 2;
  const centerX = halfWidth + offset.left;
  const centerY = halfHeight + offset.top;
  const mx = event.pageX - centerX;
  const my = event.pageY - centerY;
  const offsetX = (mx / halfWidth);
  const offsetY = (my / halfHeight);

  backgroundImage.css({ left: `${offsetX}%`, top: `${offsetY}%` });
  header.css({ left: `${offsetX / 2}%`, top: `${offsetY / 2}%` });
  secondary.css({ left: `${offsetX / 3}%`, top: `${offsetY / 3}%` });
}

$(document).ready(() => {
  const searchInput = $('.search');
  searchInput.click((event) => {
    event.stopPropagation();
  });

  $(document).click(() => {
    searchInput.removeClass('active');
    searchInput.val('');
  });

  $('.search-icon').click((event) => {
    searchInput.toggleClass('active');
    if (searchInput.hasClass('active')) {
      searchInput.focus();
    }
    event.stopPropagation();
  });

  const $hisperBackgroundImage = $('.bg-hisper-image');
  const hisperHandler = e => moveBackground(e, $hisperBackgroundImage, $('.hisper-header'), $('.hisper-secondary'));
  $hisperBackgroundImage.mousemove(hisperHandler);
  $('.hisper').mousemove(hisperHandler);

  const $hippieBackgroundImage = $('.bg-hippie-image');
  const hippieHandler = e => moveBackground(e, $hippieBackgroundImage, $('.hippie-header'), $('.hippie-secondary'));
  $hippieBackgroundImage.mousemove(hippieHandler);
  $('.hippie').mousemove(hippieHandler);
});

