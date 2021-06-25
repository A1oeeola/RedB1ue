let start = Date.now(); // запомнить время начала

let timer = setInterval(function() {
  // сколько времени прошло с начала анимации?
  let timePassed = Date.now() - start;

  if (timePassed >= 3750) {
    clearInterval(timer); // закончить анимацию через 2 секунды
    return;
  }

  // отрисовать анимацию на момент timePassed, прошедший с начала анимации
  draw(timePassed);

}, 20);

// в то время как timePassed идёт от 0 до 2000
// left изменяет значение от 0px до 400px
function draw(timePassed) {
  train.style.left = timePassed / 5 + 'px';
}
    train.onclick = function() {
      let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        train.style.left = timePassed / 5 + 'px';

        if (timePassed > 2000) clearInterval(timer);

      }, -20);
    }
	
	
	$(function(){
    // предварительная загрузка изображений
    varklgd = $('<img />').attr('src','klngr.png');
    varmsk = $('<img />').attr('src','msk.png');
    varspb = $('<img />').attr('src','spb.png');
    $('div#imap> a').click(function(event){
        varelId = $(this).attr('id');
        switch(elId){
             case 'klgd': 
                $('#container:not(:has(img))').append(klgd);
             break;
             case 'spb':
                $('#container:not(:has(img))').append(spb);
             break; 
             case 'msk': 
                $('#container:not(:has(img))').append(msk);
             break; 
             default: elImgURI = false;
        }   
        // ширинаконтейнера
        varcontwidth = $('#container').width();
        varcontheight = $('#container').height();
        varw_mrg = contwidth/2+ "px";
        varh_mrg = contheight/2+ "px";
        $('#container').show();
        $('#container').css({'margin-left':'-'+w_mrg});
        event.preventDefault();
         });
                 $('div#container').click(function(event){
        $('#container img').remove();
        $('#container').hide();
        event.preventDefault();
    });
  });
  
