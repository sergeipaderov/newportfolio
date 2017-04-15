'use strict';

module.exports = function () {
  $.gulp.task('sprite:img', function () {
    $.gp.pngSpriteData = $.gulp.src('source/images/sprites/*.png').pipe($.gp.spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css'
    }));

    return $.gp.pngSpriteData.img.pipe($.gulp.dest($.config.root + '/assets/img/')),
      $.gp.pngSpriteData.css.pipe($.gulp.dest($.config.root + '/assets/css/'));
  });
};