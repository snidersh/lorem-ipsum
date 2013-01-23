!function($, window, undefined) {

  $(function() {

    $('img').each(function(index, el) {
      var $el = $(el);
      var src = $el.data('src');
      if (src && src.match(/image/)) {
        var matches = src.match(/image\/(.*)x(.*)/);
        if (matches) {
          var width = matches[1], height = matches[2];
          var canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          var ctx = canvas.getContext('2d');
          ctx.fillStyle = '#BBBBBB';
          ctx.fillRect(0, 0, width, height);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = '#777777';
          var font_size = Math.min(16 * (width / 100), height / 2);
          ctx.font = 'bold ' + font_size + 'px sans-serif';
          var text = $(el).attr('title') || width + 'x' + height;
          ctx.fillText(text, width / 2, height / 2);
          $el.attr('src', canvas.toDataURL('image/png'));
        }
      }
    });

  });

}(jQuery, this);
