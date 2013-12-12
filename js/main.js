// init = function() {
//   // jarallax = new Jarallax();

//   // jarallax.setDefault('h1', {left: "-800px"});
//   // jarallax.addAnimation('.background',[{progress: "50%", left:"0%"}, {progress: "100%", left: "-225%"}]);

//   // jarallax.addAnimation('#head1', [{progress: '0%', left: '-800px'}, {progress: '50%', left: "150px"}]);
//   // jarallax.addAnimation('#head1', [{progress: '50%', left: '150px'}, {progress: '100%', left: "300px"}]);
//   // jarallax.addAnimation('#head1',[{progress: "0%", opacity:"1"}, {progress: "60%", opacity:"1"}]);
//   // jarallax.addAnimation('#head1',[{progress: "60%", opacity:"1"}, {progress: "100%", opacity:"0"}]);
// }

$(function() {
  init = function() {
    jarallax = new Jarallax();
    jarallax.setDefault('.earth', {opacity: "0"});
    jarallax.setDefault('.dream', {opacity: "0"});
    jarallax.setDefault('.there', {opacity: "0"});
    jarallax.setDefault('.background', {opacity: "0", left:"0%"});
    jarallax.setDefault('.word_wrapper', {opacity: "0"});
    jarallax.setDefault('.tip', {opacity: "1"});
    jarallax.setDefault('.hbd_word', {opacity: "0"});
    jarallax.setDefault('.canada', {right: "0%", bottom: "100%"});
    jarallax.setDefault('.sag', {right: "10%", bottom: "-100%"});
    jarallax.setDefault('.baozi', {left: "-100%", bottom: "-100%"});
    jarallax.setDefault('.hithere', {opacity: '0', left: "-100%", bottom: "-100%"});
    jarallax.setDefault('.chloe', {opacity: "0", top: "10%", left: "1%"});

    jarallax.addAnimation('.tip', [{progress: "0%", opacity: '0'}, {progress: "100%", opacity: '0'}]);

    jarallax.addAnimation('#word1', [{progress: "0%", opacity: '0'}, {progress: "1.5%", opacity: '1'}]);
    jarallax.addAnimation('#word1', [{progress: "1.5%", opacity: '1'}, {progress: "3%", opacity: '0'}]);

    jarallax.addAnimation('#word2', [{progress: "3%", opacity: '0'}, {progress: "4.5%", opacity: '1'}]);
    jarallax.addAnimation('#word2', [{progress: "4.5%", opacity: '1'}, {progress: "6%", opacity: '0'}]);

    jarallax.addAnimation('#word3', [{progress: "6%", opacity: '0'}, {progress: "7.5%", opacity: '1'}]);
    jarallax.addAnimation('#word3', [{progress: "7.5%", opacity: '1'}, {progress: "9%", opacity: '0'}]);

    jarallax.addAnimation('#word4', [{progress: "9%", opacity: '0'}, {progress: "10.5%", opacity: '1'}]);
    jarallax.addAnimation('#word4', [{progress: "10.5%", opacity: '1'}, {progress: "12%", opacity: '0'}]);

    jarallax.addAnimation('#word5', [{progress: "12%", opacity: '0'}, {progress: "13.5%", opacity: '1'}]);
    jarallax.addAnimation('#word5', [{progress: "13.5%", opacity: '1'}, {progress: "15%", opacity: '0'}]);

    jarallax.addAnimation('#word6', [{progress: "15%", opacity: '0'}, {progress: "16.5%", opacity: '1'}]);
    jarallax.addAnimation('#word6', [{progress: "16.5%", opacity: '1'}, {progress: "18%", opacity: '0'}]);

    jarallax.addAnimation('.canada', [{progress: "15%", right: "0%", bottom: "100%"}, {progress: "16.5%", right: "0%", bottom: "0%"}]);
    jarallax.addAnimation('.canada', [{progress: "16.5%", right: "0%", bottom: "0%"}, {progress: "18%", right: "100%", bottom: "0%"}]);

    jarallax.addAnimation('#word7', [{progress: "18%", opacity: '0'}, {progress: "19.5%", opacity: '1'}]);
    jarallax.addAnimation('#word7', [{progress: "19.5%", opacity: '1'}, {progress: "21%", opacity: '0'}]);

    jarallax.addAnimation('.sag', [{progress: "18%", right: "10%", bottom: "-100%"}, {progress: "19.5%", right: "10%", bottom: "5%"}]);
    jarallax.addAnimation('.sag', [{progress: "19.5%", right: "10%", bottom: "5%"}, {progress: "21%", right: "10%", bottom: "100%"}]);

    jarallax.addAnimation('#word8', [{progress: "21%", opacity: '0'}, {progress: "22.5%", opacity: '1'}]);
    jarallax.addAnimation('#word8', [{progress: "22.5%", opacity: '1'}, {progress: "24%", opacity: '0'}]);

    jarallax.addAnimation('#word9', [{progress: "22.5%", opacity: '0'}, {progress: "24%", opacity: '1'}]);
    jarallax.addAnimation('#word9', [{progress: "24%", opacity: '1'}, {progress: "25.5%", opacity: '0'}]);

    jarallax.addAnimation('#word10', [{progress: "25.5%", opacity: '0'}, {progress: "27%", opacity: '1'}]);
    jarallax.addAnimation('#word10', [{progress: "27%", opacity: '1'}, {progress: "28.5%", opacity: '0'}]);

    jarallax.addAnimation('.baozi', [{progress: "25.5%", left: "-100%", bottom: "-100%"}, {progress: "27%", left: "0%", bottom: "0%"}]);
    jarallax.addAnimation('.baozi', [{progress: "27%", left: "0%", bottom: "0%"}, {progress: "28.5%", left: "0%", bottom: "0%"}]);
    jarallax.addAnimation('.baozi', [{progress: "28.5%", left: "0%", bottom: "0%"}, {progress: "30%", left: "-100%", bottom: "-100%"}]);

    jarallax.addAnimation('.hithere', [{progress: "25.5%", opacity: '0', left: "15%", bottom: "-100%"}, {progress: "27%", opacity: '1', left: "15%", bottom: "1%"}]);

    jarallax.addAnimation('.hithere', [{progress: "27%", opacity: '1', left: "15%", bottom: "1%"}, {progress: "28.5%", opacity: '1', left: "15%", bottom: "1%"}]);
    jarallax.addAnimation('.hithere', [{progress: "28.5%", opacity: '1', left: "15%", bottom: "1%"}, {progress: "30%", opacity: '0', left: "15%", bottom: "-10%"}]);


    jarallax.addAnimation('#word11', [{progress: "30%", opacity: '0', top: "20%"}, {progress: "31.5%", opacity: '1', top: "20%"}]);
    jarallax.addAnimation('#word11', [{progress: "31.5%", opacity: '1', top: "20%"}, {progress: "33%", opacity: '0', top: "20%"}]);

    jarallax.addAnimation('.earth', [{progress: "30%", opacity: '0'}, {progress: "31.5%", opacity: '.9'}]);
    jarallax.addAnimation('.earth', [{progress: "31.5%", opacity: '.9'}, {progress: "33%", opacity: '.9'}]);
    jarallax.addAnimation('.earth', [{progress: "33%", opacity: '.9'}, {progress: "34.5%", opacity: '0'}]);

    jarallax.addAnimation('#word12', [{progress: "34.5%", opacity: '0', top: "25%", left: "30%"}, {progress: "36%", opacity: '1', top: "25%", left: "30%"}]);
    jarallax.addAnimation('#word12', [{progress: "36%", opacity: '1', top: "25%", left: "30%"}, {progress: "37.5%", opacity: '0', top: "25%", left: "30%"}]);

    jarallax.addAnimation('#word13', [{progress: "37.5%", opacity: '0', top: "25%", left: "30%"}, {progress: "39%", opacity: '1', top: "25%", left: "30%"}]);
    jarallax.addAnimation('#word13', [{progress: "39%", opacity: '1', top: "25%", left: "30%"}, {progress: "40.5%", opacity: '0', top: "25%", left: "30%"}]);

    jarallax.addAnimation('.dream', [{progress: "34.5%", opacity: '0'}, {progress: "36%", opacity: '.9'}]);
    jarallax.addAnimation('.dream', [{progress: "36%", opacity: '.9'}, {progress: "37.5%", opacity: '.9'}]);
    jarallax.addAnimation('.dream', [{progress: "37.5%", opacity: '.9'}, {progress: "39%", opacity: '.9'}]);
    jarallax.addAnimation('.dream', [{progress: "39%", opacity: '.9'}, {progress: "40.5%", opacity: '.9'}]);
    jarallax.addAnimation('.dream', [{progress: "40.5%", opacity: '.9'}, {progress: "42%", opacity: '0'}]);

    jarallax.addAnimation('#word14', [{progress: "42%", opacity: '0', top: "20%", left: "35%"}, {progress: "43.5%", opacity: '1', top: "20%", left: "35%"}]);
    jarallax.addAnimation('#word14', [{progress: "43.5%", opacity: '1', top: "20%", left: "35%"}, {progress: "45%", opacity: '0', top: "20%", left: "35%"}]);

    jarallax.addAnimation('#word15', [{progress: "45%", opacity: '0', top: "16%", left: "35%"}, {progress: "46.5%", opacity: '1', top: "16%", left: "35%"}]);
    jarallax.addAnimation('#word15', [{progress: "46.5%", opacity: '1', top: "16%", left: "35%"}, {progress: "48%", opacity: '0', top: "16%", left: "35%"}]);

    jarallax.addAnimation('.there', [{progress: "42%", opacity: '0'}, {progress: "43.5%", opacity: '.9'}]);
    jarallax.addAnimation('.there', [{progress: "43.5%", opacity: '.9'}, {progress: "45%", opacity: '.9'}]);
    jarallax.addAnimation('.there', [{progress: "45%", opacity: '.9'}, {progress: "46.5%", opacity: '.9'}]);
    jarallax.addAnimation('.there', [{progress: "46.5%", opacity: '.9'}, {progress: "48%", opacity: '.9'}]);
    jarallax.addAnimation('.there', [{progress: "48%", opacity: '.9'}, {progress: "49.5%", opacity: '.9'}]);
    jarallax.addAnimation('.there', [{progress: "49.5%", opacity: '.9'}, {progress: "51%", opacity: '0'}]);

    jarallax.addAnimation('#word16', [{progress: "51%", opacity: '0', top: "16%", left: "30%"}, {progress: "52.5%", opacity: '1', top: "16%", left: "30%"}]);
    jarallax.addAnimation('#word16', [{progress: "52.5%", opacity: '1', top: "16%", left: "30%"}, {progress: "54%", opacity: '0', top: "16%", left: "30%"}]);

    jarallax.addAnimation('#word17', [{progress: "54%", opacity: '0'}, {progress: "55.5%", opacity: '1'}]);
    jarallax.addAnimation('#word17', [{progress: "55.5%", opacity: '1'}, {progress: "57%", opacity: '0'}]);

    jarallax.addAnimation('#word18', [{progress: "57%", opacity: '0'}, {progress: "58.5%", opacity: '1'}]);
    jarallax.addAnimation('#word18', [{progress: "58.5%", opacity: '1'}, {progress: "60%", opacity: '0'}]);

    jarallax.addAnimation('#word19', [{progress: "60%", opacity: '0'}, {progress: "61.5%", opacity: '1'}]);
    jarallax.addAnimation('#word19', [{progress: "61.5%", opacity: '1'}, {progress: "63%", opacity: '0'}]);

    jarallax.addAnimation('#word20', [{progress: "63%", opacity: '1', left: "-100%"}, {progress: "67%", opacity: '1', left: "30%"}]);
    jarallax.addAnimation('#word20', [{progress: "67%", opacity: '1', left: "30%"}, {progress: "76.5%", opacity: '.7', left: "30%"}]);

    jarallax.addAnimation('.background',[{progress: "63%", opacity: "0", left:"0%"}, {progress: "75%", opacity: "1", left:"-225%"}]);
    jarallax.addAnimation('.background',[{progress: "75%", opacity: "1", left:"-225%"}, {progress: "76.5%", opacity: "0", left:"-225%"}]);

    jarallax.addAnimation('.chloe', [{progress: "80%", opacity: '0'}, {progress: "81%", opacity: '1'}]);
    jarallax.addAnimation('.chloe', [{progress: "81%", opacity: '1'}, {progress: "100%", opacity: '1'}]);

    jarallax.addAnimation('#word21', [{progress: "81%", opacity: '0'}, {progress: "82%", opacity: '1'}]);
    jarallax.addAnimation('#word21', [{progress: "82%", opacity: '1'}, {progress: "100%", opacity: '1'}]);

    jarallax.addAnimation('#word22', [{progress: "82%", opacity: '0'}, {progress: "83%", opacity: '1'}]);
    jarallax.addAnimation('#word22', [{progress: "83%", opacity: '1'}, {progress: "100%", opacity: '1'}]);

    jarallax.addAnimation('#word23', [{progress: "83%", opacity: '0'}, {progress: "84%", opacity: '1'}]);
    jarallax.addAnimation('#word23', [{progress: "84%", opacity: '1'}, {progress: "100%", opacity: '1'}]);

    jarallax.addAnimation('#word24', [{progress: "84%", opacity: '0'}, {progress: "85%", opacity: '1'}]);
    jarallax.addAnimation('#word24', [{progress: "85%", opacity: '1'}, {progress: "100%", opacity: '1'}]);

    jarallax.addAnimation('#word25', [{progress: "85%", opacity: '0'}, {progress: "86%", opacity: '1'}]);
    jarallax.addAnimation('#word25', [{progress: "86%", opacity: '1'}, {progress: "100%", opacity: '1'}]);

    jarallax.addAnimation('#word26', [{progress: "86%", opacity: '0'}, {progress: "87%", opacity: '1'}]);
    jarallax.addAnimation('#word26', [{progress: "87%", opacity: '1'}, {progress: "100%", opacity: '1'}]);

    jarallax.addAnimation('#word27', [{progress: "87%", opacity: '0'}, {progress: "88%", opacity: '1'}]);
    jarallax.addAnimation('#word27', [{progress: "88%", opacity: '1'}, {progress: "100%", opacity: '1'}]);

    jarallax.addAnimation('#word28', [{progress: "88%", opacity: '0'}, {progress: "89%", opacity: '1'}]);
    jarallax.addAnimation('#word28', [{progress: "89%", opacity: '1'}, {progress: "100%", opacity: '1'}]);

    jarallax.addAnimation('#word29', [{progress: "89%", opacity: '0'}, {progress: "90%", opacity: '1'}]);
    jarallax.addAnimation('#word29', [{progress: "90%", opacity: '1'}, {progress: "100%", opacity: '1'}]);

    jarallax.addAnimation('#word30', [{progress: "90%", opacity: '0'}, {progress: "91%", opacity: '1'}]);
    jarallax.addAnimation('#word30', [{progress: "91%", opacity: '1'}, {progress: "100%", opacity: '1'}]);

    jarallax.addAnimation('#word31', [{progress: "91%", opacity: '0'}, {progress: "92%", opacity: '1'}]);
    jarallax.addAnimation('#word31', [{progress: "92%", opacity: '1'}, {progress: "100%", opacity: '1'}]);

    jarallax.addAnimation('#word32', [{progress: "92%", opacity: '0'}, {progress: "93%", opacity: '1'}]);
    jarallax.addAnimation('#word32', [{progress: "93%", opacity: '1'}, {progress: "100%", opacity: '1'}]);

    jarallax.addAnimation('#word33', [{progress: "93%", opacity: '0'}, {progress: "94%", opacity: '1'}]);
    jarallax.addAnimation('#word33', [{progress: "94%", opacity: '1'}, {progress: "100%", opacity: '1'}]);

    jarallax.addAnimation('#word34', [{progress: "94%", opacity: '0'}, {progress: "95%", opacity: '1'}]);
    jarallax.addAnimation('#word34', [{progress: "95%", opacity: '1'}, {progress: "100%", opacity: '1'}]);

    jarallax.addAnimation('#word35', [{progress: "95%", opacity: '0'}, {progress: "96%", opacity: '1'}]);
    jarallax.addAnimation('#word35', [{progress: "96%", opacity: '1'}, {progress: "100%", opacity: '1'}]);

    jarallax.addAnimation('#word36', [{progress: "96%", opacity: '0', left: "58%"}, {progress: "98%", opacity: '1', left: "58%"}]);
    jarallax.addAnimation('#word36', [{progress: "98%", opacity: '1', left: "58%"}, {progress: "100%", opacity: '1', left: "58%"}]);
  }
  var word = $('.word_wrapper');
  var word_half_width = (word.width())/2;
  var word_half_height = (word.height() + 100)/2;

  word.css({
    'margin-top': -word_half_height,
    'margin-left': -word_half_width
  });
});