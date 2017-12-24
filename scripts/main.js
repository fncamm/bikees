$(document).ready(()=>{
  const searchInput = $('.search');
  searchInput.click((e)=>{
    e.stopPropagation();
  });
  $(document).click((e)=>{
    searchInput.removeClass('active');
    searchInput.val('');
  });
  $('.search-icon').click((e)=>{
    searchInput.toggleClass('active');
    if (searchInput.hasClass('active')) {
      searchInput.focus();
    }
    e.stopPropagation();
  });

  const hisperBgImg = $('.bg-hisper-image');
  const hisperHeader = $('.hisper-header');
  const hisperSecondary = $('.hisper-secondary');
  const handler = (e)=>moveBg(e, hisperBgImg, hisperHeader, hisperSecondary)
  hisperBgImg.mousemove(handler);
  $('.hisper').mousemove(handler);

  const hippieBgImg = $('.bg-hippie-image');
  const hippieHeader = $('.hippie-header');
  const hippieSecondary = $('.hippie-secondary');
  const handler2 = (e)=>moveBg(e, hippieBgImg, hippieHeader, hippieSecondary)
  hippieBgImg.mousemove(handler2);
  $('.hippie').mousemove(handler2);

  function moveBg(e, bgImg, header, secondary) {
    const offset = bgImg.offset();
    const halfWidth = bgImg.width()/2;
    const halfHeight = bgImg.height()/2;
    const centerX = halfWidth + offset.left;
    const centerY = halfHeight + offset.top;
    const mx = e.pageX-centerX;
    const my = e.pageY-centerY;
    const offsetX = (mx/halfWidth * 1);
    const offsetY = (my/halfHeight * 1);
    bgImg.css({'left': `${offsetX}%`, 'top': `${offsetY}%`});
    header.css({'left': `${offsetX/2}%`, 'top': `${offsetY/2}%`});
    secondary.css({'left': `${offsetX/3}%`, 'top': `${offsetY/3}%`})
    //console.log($(bgHisper).offset(), e.pageX, e.pageY)
  }
});

