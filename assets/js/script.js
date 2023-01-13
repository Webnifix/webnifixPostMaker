//on clicking on add button, add more input fields
function add() {
  if (window.getComputedStyle(document.getElementById("box2")).display === "none") {
    document.getElementById("box2").style.display = "inline-block";
    document.getElementById("input2").style.display = "inline-block";
  }
  else if (window.getComputedStyle(document.getElementById("box3")).display === "none") {
    document.getElementById("box3").style.display = "inline-block";
    document.getElementById("input3").style.display = "inline-block";
  }
  else if (window.getComputedStyle(document.getElementById("box4")).display === "none") {
    document.getElementById("box4").style.display = "inline-block";
    document.getElementById("input4").style.display = "inline-block";
  }
  else if (window.getComputedStyle(document.getElementById("box5")).display === "none") {
    document.getElementById("box5").style.display = "inline-block"
    document.getElementById("input5").style.display = "inline-block";
    var resize5 = $('#cropPreview5').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage5').on('change', function () { 
    var reader5 = new FileReader();reader5.onload = function (e) {resize5.croppie('bind',{url: e.target.result});}
    reader5.readAsDataURL(this.files[0]);});$('#cropImage5').on('click', function (ev) {resize5.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img5").setAttribute("src", img)});});
    $('#inputImage5').change( function(uploadImageUrl) {document.getElementById("img5").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage5').click( function(event) {document.getElementById("img5").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box6")).display === "none") {
    document.getElementById("box6").style.display = "inline-block";
    document.getElementById("input6").style.display = "inline-block";
    var resize6 = $('#cropPreview6').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage6').on('change', function () { 
    var reader6 = new FileReader();reader6.onload = function (e) {resize6.croppie('bind',{url: e.target.result});}
    reader6.readAsDataURL(this.files[0]);});$('#cropImage6').on('click', function (ev) {resize6.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img6").setAttribute("src", img)});});
    $('#inputImage6').change( function(uploadImageUrl) {document.getElementById("img6").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage6').click( function(event) {document.getElementById("img6").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box7")).display === "none") {
    document.getElementById("box7").style.display = "inline-block";
    document.getElementById("input7").style.display = "inline-block";
    var resize7 = $('#cropPreview7').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage7').on('change', function () { 
    var reader7 = new FileReader();reader7.onload = function (e) {resize7.croppie('bind',{url: e.target.result});}
    reader7.readAsDataURL(this.files[0]);});$('#cropImage7').on('click', function (ev) {resize7.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img7").setAttribute("src", img)});});
    $('#inputImage7').change( function(uploadImageUrl) {document.getElementById("img7").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage7').click( function(event) {document.getElementById("img7").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box8")).display === "none") {
    document.getElementById("box8").style.display = "inline-block";
    document.getElementById("input8").style.display = "inline-block";
    var resize8 = $('#cropPreview8').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage8').on('change', function () { 
    var reader8 = new FileReader();reader8.onload = function (e) {resize8.croppie('bind',{url: e.target.result});}
    reader8.readAsDataURL(this.files[0]);});$('#cropImage8').on('click', function (ev) {resize8.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img8").setAttribute("src", img)});});
    $('#inputImage8').change( function(uploadImageUrl) {document.getElementById("img8").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage8').click( function(event) {document.getElementById("img8").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box9")).display === "none") {
    document.getElementById("box9").style.display = "inline-block";
    document.getElementById("input9").style.display = "inline-block";
    var resize9 = $('#cropPreview9').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage9').on('change', function () { 
    var reader9 = new FileReader();reader9.onload = function (e) {resize9.croppie('bind',{url: e.target.result});}
    reader9.readAsDataURL(this.files[0]);});$('#cropImage9').on('click', function (ev) {resize9.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img9").setAttribute("src", img)});});
    $('#inputImage9').change( function(uploadImageUrl) {document.getElementById("img9").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage9').click( function(event) {document.getElementById("img9").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box10")).display === "none") {
    document.getElementById("box10").style.display = "inline-block";
    document.getElementById("input10").style.display = "inline-block";
    var resize10 = $('#cropPreview10').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage10').on('change', function () { 
    var reader10 = new FileReader();reader10.onload = function (e) {resize10.croppie('bind',{url: e.target.result});}
    reader10.readAsDataURL(this.files[0]);});$('#cropImage10').on('click', function (ev) {resize10.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img10").setAttribute("src", img)});});
    $('#inputImage10').change( function(uploadImageUrl) {document.getElementById("img10").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage10').click( function(event) {document.getElementById("img10").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box11")).display === "none") {
    document.getElementById("box11").style.display = "inline-block";
    document.getElementById("input11").style.display = "inline-block";
    var resize11 = $('#cropPreview11').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage11').on('change', function () { 
    var reader11 = new FileReader();reader11.onload = function (e) {resize11.croppie('bind',{url: e.target.result});}
    reader11.readAsDataURL(this.files[0]);});$('#cropImage11').on('click', function (ev) {resize11.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img11").setAttribute("src", img)});});
    $('#inputImage11').change( function(uploadImageUrl) {document.getElementById("img11").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage11').click( function(event) {document.getElementById("img11").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box12")).display === "none") {
    document.getElementById("box12").style.display = "inline-block";
    document.getElementById("input12").style.display = "inline-block";
    var resize12 = $('#cropPreview12').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage12').on('change', function () { 
    var reader12 = new FileReader();reader12.onload = function (e) {resize12.croppie('bind',{url: e.target.result});}
    reader12.readAsDataURL(this.files[0]);});$('#cropImage12').on('click', function (ev) {resize12.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img12").setAttribute("src", img)});});
    $('#inputImage12').change( function(uploadImageUrl) {document.getElementById("img12").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage12').click( function(event) {document.getElementById("img12").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box13")).display === "none") {
    document.getElementById("box13").style.display = "inline-block";
    document.getElementById("input13").style.display = "inline-block";
    var resize13 = $('#cropPreview13').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage13').on('change', function () { 
    var reader13 = new FileReader();reader13.onload = function (e) {resize13.croppie('bind',{url: e.target.result});}
    reader13.readAsDataURL(this.files[0]);});$('#cropImage13').on('click', function (ev) {resize13.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img13").setAttribute("src", img)});});
    $('#inputImage13').change( function(uploadImageUrl) {document.getElementById("img13").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage13').click( function(event) {document.getElementById("img13").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box14")).display === "none") {
    document.getElementById("box14").style.display = "inline-block";
    document.getElementById("input14").style.display = "inline-block";
    var resize14 = $('#cropPreview14').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage14').on('change', function () { 
    var reader14 = new FileReader();reader14.onload = function (e) {resize14.croppie('bind',{url: e.target.result});}
    reader14.readAsDataURL(this.files[0]);});$('#cropImage14').on('click', function (ev) {resize14.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img14").setAttribute("src", img)});});
    $('#inputImage14').change( function(uploadImageUrl) {document.getElementById("img14").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage14').click( function(event) {document.getElementById("img14").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box15")).display === "none") {
    document.getElementById("box15").style.display = "inline-block";
    document.getElementById("input15").style.display = "inline-block";
    var resize15 = $('#cropPreview15').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage15').on('change', function () { 
    var reader15 = new FileReader();reader15.onload = function (e) {resize15.croppie('bind',{url: e.target.result});}
    reader15.readAsDataURL(this.files[0]);});$('#cropImage15').on('click', function (ev) {resize15.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img15").setAttribute("src", img)});});
    $('#inputImage15').change( function(uploadImageUrl) {document.getElementById("img15").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage15').click( function(event) {document.getElementById("img15").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box16")).display === "none") {
    document.getElementById("box16").style.display = "inline-block";
    document.getElementById("input16").style.display = "inline-block";
    var resize16 = $('#cropPreview16').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage16').on('change', function () { 
    var reader16 = new FileReader();reader16.onload = function (e) {resize16.croppie('bind',{url: e.target.result});}
    reader16.readAsDataURL(this.files[0]);});$('#cropImage16').on('click', function (ev) {resize16.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img16").setAttribute("src", img)});});
    $('#inputImage16').change( function(uploadImageUrl) {document.getElementById("img16").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage16').click( function(event) {document.getElementById("img16").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box17")).display === "none") {
    document.getElementById("box17").style.display = "inline-block";
    document.getElementById("input17").style.display = "inline-block";
    var resize17 = $('#cropPreview17').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage17').on('change', function () { 
    var reader17 = new FileReader();reader17.onload = function (e) {resize17.croppie('bind',{url: e.target.result});}
    reader17.readAsDataURL(this.files[0]);});$('#cropImage17').on('click', function (ev) {resize17.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img17").setAttribute("src", img)});});
    $('#inputImage17').change( function(uploadImageUrl) {document.getElementById("img17").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage17').click( function(event) {document.getElementById("img17").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box18")).display === "none") {
    document.getElementById("box18").style.display = "inline-block";
    document.getElementById("input18").style.display = "inline-block";
    var resize18 = $('#cropPreview18').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage18').on('change', function () { 
    var reader18 = new FileReader();reader18.onload = function (e) {resize18.croppie('bind',{url: e.target.result});}
    reader18.readAsDataURL(this.files[0]);});$('#cropImage18').on('click', function (ev) {resize18.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img18").setAttribute("src", img)});});
    $('#inputImage18').change( function(uploadImageUrl) {document.getElementById("img18").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage18').click( function(event) {document.getElementById("img18").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box19")).display === "none") {
    document.getElementById("box19").style.display = "inline-block";
    document.getElementById("input19").style.display = "inline-block";
    var resize19 = $('#cropPreview19').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage19').on('change', function () { 
    var reader19 = new FileReader();reader19.onload = function (e) {resize19.croppie('bind',{url: e.target.result});}
    reader19.readAsDataURL(this.files[0]);});$('#cropImage19').on('click', function (ev) {resize19.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img19").setAttribute("src", img)});});
    $('#inputImage19').change( function(uploadImageUrl) {document.getElementById("img19").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage19').click( function(event) {document.getElementById("img19").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box20")).display === "none") {
    document.getElementById("box20").style.display = "inline-block";
    document.getElementById("input20").style.display = "inline-block";
    var resize20 = $('#cropPreview20').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage20').on('change', function () { 
    var reader20 = new FileReader();reader20.onload = function (e) {resize20.croppie('bind',{url: e.target.result});}
    reader20.readAsDataURL(this.files[0]);});$('#cropImage20').on('click', function (ev) {resize20.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img20").setAttribute("src", img)});});
    $('#inputImage20').change( function(uploadImageUrl) {document.getElementById("img20").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage20').click( function(event) {document.getElementById("img20").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box21")).display === "none") {
    document.getElementById("box21").style.display = "inline-block";
    document.getElementById("input21").style.display = "inline-block";
    var resize21 = $('#cropPreview21').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage21').on('change', function () { 
    var reader21 = new FileReader();reader21.onload = function (e) {resize21.croppie('bind',{url: e.target.result});}
    reader21.readAsDataURL(this.files[0]);});$('#cropImage21').on('click', function (ev) {resize21.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img21").setAttribute("src", img)});});
    $('#inputImage21').change( function(uploadImageUrl) {document.getElementById("img21").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage21').click( function(event) {document.getElementById("img21").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box22")).display === "none") {
    document.getElementById("box22").style.display = "inline-block";
    document.getElementById("input22").style.display = "inline-block";
    var resize22 = $('#cropPreview22').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage22').on('change', function () { 
    var reader22 = new FileReader();reader22.onload = function (e) {resize22.croppie('bind',{url: e.target.result});}
    reader22.readAsDataURL(this.files[0]);});$('#cropImage22').on('click', function (ev) {resize22.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img22").setAttribute("src", img)});});
    $('#inputImage22').change( function(uploadImageUrl) {document.getElementById("img22").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage22').click( function(event) {document.getElementById("img22").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box23")).display === "none") {
    document.getElementById("box23").style.display = "inline-block";
    document.getElementById("input23").style.display = "inline-block";
    var resize23 = $('#cropPreview23').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage23').on('change', function () { 
    var reader23 = new FileReader();reader23.onload = function (e) {resize23.croppie('bind',{url: e.target.result});}
    reader23.readAsDataURL(this.files[0]);});$('#cropImage23').on('click', function (ev) {resize23.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img23").setAttribute("src", img)});});
    $('#inputImage23').change( function(uploadImageUrl) {document.getElementById("img23").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage23').click( function(event) {document.getElementById("img23").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box24")).display === "none") {
    document.getElementById("box24").style.display = "inline-block";
    document.getElementById("input24").style.display = "inline-block";
    var resize24 = $('#cropPreview24').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage24').on('change', function () { 
    var reader24 = new FileReader();reader24.onload = function (e) {resize24.croppie('bind',{url: e.target.result});}
    reader24.readAsDataURL(this.files[0]);});$('#cropImage24').on('click', function (ev) {resize24.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img24").setAttribute("src", img)});});
    $('#inputImage24').change( function(uploadImageUrl) {document.getElementById("img24").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage24').click( function(event) {document.getElementById("img24").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box25")).display === "none") {
    document.getElementById("box25").style.display = "inline-block";
    document.getElementById("input25").style.display = "inline-block";
    var resize25 = $('#cropPreview25').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage25').on('change', function () { 
    var reader25 = new FileReader();reader25.onload = function (e) {resize25.croppie('bind',{url: e.target.result});}
    reader25.readAsDataURL(this.files[0]);});$('#cropImage25').on('click', function (ev) {resize25.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img25").setAttribute("src", img)});});
    $('#inputImage25').change( function(uploadImageUrl) {document.getElementById("img25").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage25').click( function(event) {document.getElementById("img25").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box26")).display === "none") {
    document.getElementById("box26").style.display = "inline-block";
    document.getElementById("input26").style.display = "inline-block";
    var resize26 = $('#cropPreview26').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage26').on('change', function () { 
    var reader26 = new FileReader();reader26.onload = function (e) {resize26.croppie('bind',{url: e.target.result});}
    reader26.readAsDataURL(this.files[0]);});$('#cropImage26').on('click', function (ev) {resize26.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img26").setAttribute("src", img)});});
    $('#inputImage26').change( function(uploadImageUrl) {document.getElementById("img26").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage26').click( function(event) {document.getElementById("img26").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box27")).display === "none") {
    document.getElementById("box27").style.display = "inline-block";
    document.getElementById("input27").style.display = "inline-block";
    var resize27 = $('#cropPreview27').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage27').on('change', function () { 
    var reader27 = new FileReader();reader27.onload = function (e) {resize27.croppie('bind',{url: e.target.result});}
    reader27.readAsDataURL(this.files[0]);});$('#cropImage27').on('click', function (ev) {resize27.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img27").setAttribute("src", img)});});
    $('#inputImage27').change( function(uploadImageUrl) {document.getElementById("img27").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage27').click( function(event) {document.getElementById("img27").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box28")).display === "none") {
    document.getElementById("box28").style.display = "inline-block";
    document.getElementById("input28").style.display = "inline-block";
    var resize28 = $('#cropPreview28').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage28').on('change', function () { 
    var reader28 = new FileReader();reader28.onload = function (e) {resize28.croppie('bind',{url: e.target.result});}
    reader28.readAsDataURL(this.files[0]);});$('#cropImage28').on('click', function (ev) {resize28.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img28").setAttribute("src", img)});});
    $('#inputImage28').change( function(uploadImageUrl) {document.getElementById("img28").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage28').click( function(event) {document.getElementById("img28").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box29")).display === "none") {
    document.getElementById("box29").style.display = "inline-block";
    document.getElementById("input29").style.display = "inline-block";
    var resize29 = $('#cropPreview29').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage29').on('change', function () { 
    var reader29 = new FileReader();reader29.onload = function (e) {resize29.croppie('bind',{url: e.target.result});}
    reader29.readAsDataURL(this.files[0]);});$('#cropImage29').on('click', function (ev) {resize29.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img29").setAttribute("src", img)});});
    $('#inputImage29').change( function(uploadImageUrl) {document.getElementById("img29").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage29').click( function(event) {document.getElementById("img29").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box30")).display === "none") {
    document.getElementById("box30").style.display = "inline-block";
    document.getElementById("input30").style.display = "inline-block";
    var resize30 = $('#cropPreview30').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage30').on('change', function () { 
    var reader30 = new FileReader();reader30.onload = function (e) {resize30.croppie('bind',{url: e.target.result});}
    reader30.readAsDataURL(this.files[0]);});$('#cropImage30').on('click', function (ev) {resize30.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img30").setAttribute("src", img)});});
    $('#inputImage30').change( function(uploadImageUrl) {document.getElementById("img30").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage30').click( function(event) {document.getElementById("img30").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box31")).display === "none") {
    document.getElementById("box31").style.display = "inline-block";
    document.getElementById("input31").style.display = "inline-block";
    var resize31 = $('#cropPreview31').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage31').on('change', function () { 
    var reader31 = new FileReader();reader31.onload = function (e) {resize31.croppie('bind',{url: e.target.result});}
    reader31.readAsDataURL(this.files[0]);});$('#cropImage31').on('click', function (ev) {resize31.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img31").setAttribute("src", img)});});
    $('#inputImage31').change( function(uploadImageUrl) {document.getElementById("img31").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage31').click( function(event) {document.getElementById("img31").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box32")).display === "none") {
    document.getElementById("box32").style.display = "inline-block";
    document.getElementById("input32").style.display = "inline-block";
    var resize32 = $('#cropPreview32').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage32').on('change', function () { 
    var reader32 = new FileReader();reader32.onload = function (e) {resize32.croppie('bind',{url: e.target.result});}
    reader32.readAsDataURL(this.files[0]);});$('#cropImage32').on('click', function (ev) {resize32.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img32").setAttribute("src", img)});});
    $('#inputImage32').change( function(uploadImageUrl) {document.getElementById("img32").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage32').click( function(event) {document.getElementById("img32").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box33")).display === "none") {
    document.getElementById("box33").style.display = "inline-block";
    document.getElementById("input33").style.display = "inline-block";
    var resize33 = $('#cropPreview33').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage33').on('change', function () { 
    var reader33 = new FileReader();reader33.onload = function (e) {resize33.croppie('bind',{url: e.target.result});}
    reader33.readAsDataURL(this.files[0]);});$('#cropImage33').on('click', function (ev) {resize33.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img33").setAttribute("src", img)});});
    $('#inputImage33').change( function(uploadImageUrl) {document.getElementById("img33").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage33').click( function(event) {document.getElementById("img33").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box34")).display === "none") {
    document.getElementById("box34").style.display = "inline-block";
    document.getElementById("input34").style.display = "inline-block";
    var resize34 = $('#cropPreview34').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage34').on('change', function () { 
    var reader34 = new FileReader();reader34.onload = function (e) {resize34.croppie('bind',{url: e.target.result});}
    reader34.readAsDataURL(this.files[0]);});$('#cropImage34').on('click', function (ev) {resize34.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img34").setAttribute("src", img)});});
    $('#inputImage34').change( function(uploadImageUrl) {document.getElementById("img34").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage34').click( function(event) {document.getElementById("img34").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box35")).display === "none") {
    document.getElementById("box35").style.display = "inline-block";
    document.getElementById("input35").style.display = "inline-block";
    var resize35 = $('#cropPreview35').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage35').on('change', function () { 
    var reader35 = new FileReader();reader35.onload = function (e) {resize35.croppie('bind',{url: e.target.result});}
    reader35.readAsDataURL(this.files[0]);});$('#cropImage35').on('click', function (ev) {resize35.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img35").setAttribute("src", img)});});
    $('#inputImage35').change( function(uploadImageUrl) {document.getElementById("img35").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage35').click( function(event) {document.getElementById("img35").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box36")).display === "none") {
    document.getElementById("box36").style.display = "inline-block";
    document.getElementById("input36").style.display = "inline-block";
    var resize36 = $('#cropPreview36').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage36').on('change', function () { 
    var reader36 = new FileReader();reader36.onload = function (e) {resize36.croppie('bind',{url: e.target.result});}
    reader36.readAsDataURL(this.files[0]);});$('#cropImage36').on('click', function (ev) {resize36.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img36").setAttribute("src", img)});});
    $('#inputImage36').change( function(uploadImageUrl) {document.getElementById("img36").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage36').click( function(event) {document.getElementById("img36").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box37")).display === "none") {
    document.getElementById("box37").style.display = "inline-block";
    document.getElementById("input37").style.display = "inline-block";
    var resize37 = $('#cropPreview37').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage37').on('change', function () { 
    var reader37 = new FileReader();reader37.onload = function (e) {resize37.croppie('bind',{url: e.target.result});}
    reader37.readAsDataURL(this.files[0]);});$('#cropImage37').on('click', function (ev) {resize37.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img37").setAttribute("src", img)});});
    $('#inputImage37').change( function(uploadImageUrl) {document.getElementById("img37").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage37').click( function(event) {document.getElementById("img37").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box38")).display === "none") {
    document.getElementById("box38").style.display = "inline-block";
    document.getElementById("input38").style.display = "inline-block";
    var resize38 = $('#cropPreview38').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage38').on('change', function () { 
    var reader38 = new FileReader();reader38.onload = function (e) {resize38.croppie('bind',{url: e.target.result});}
    reader38.readAsDataURL(this.files[0]);});$('#cropImage38').on('click', function (ev) {resize38.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img38").setAttribute("src", img)});});
    $('#inputImage38').change( function(uploadImageUrl) {document.getElementById("img38").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage38').click( function(event) {document.getElementById("img38").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box39")).display === "none") {
    document.getElementById("box39").style.display = "inline-block";
    document.getElementById("input39").style.display = "inline-block";
    var resize39 = $('#cropPreview39').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage39').on('change', function () { 
    var reader39 = new FileReader();reader39.onload = function (e) {resize39.croppie('bind',{url: e.target.result});}
    reader39.readAsDataURL(this.files[0]);});$('#cropImage39').on('click', function (ev) {resize39.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img39").setAttribute("src", img)});});
    $('#inputImage39').change( function(uploadImageUrl) {document.getElementById("img39").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage39').click( function(event) {document.getElementById("img39").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box40")).display === "none") {
    document.getElementById("box40").style.display = "inline-block";
    document.getElementById("input40").style.display = "inline-block";
    var resize40 = $('#cropPreview40').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage40').on('change', function () { 
    var reader40 = new FileReader();reader40.onload = function (e) {resize40.croppie('bind',{url: e.target.result});}
    reader40.readAsDataURL(this.files[0]);});$('#cropImage40').on('click', function (ev) {resize40.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img40").setAttribute("src", img)});});
    $('#inputImage40').change( function(uploadImageUrl) {document.getElementById("img40").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage40').click( function(event) {document.getElementById("img40").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box41")).display === "none") {
    document.getElementById("box41").style.display = "inline-block";
    document.getElementById("input41").style.display = "inline-block";
    var resize41 = $('#cropPreview41').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage41').on('change', function () { 
    var reader41 = new FileReader();reader41.onload = function (e) {resize41.croppie('bind',{url: e.target.result});}
    reader41.readAsDataURL(this.files[0]);});$('#cropImage41').on('click', function (ev) {resize41.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img41").setAttribute("src", img)});});
    $('#inputImage41').change( function(uploadImageUrl) {document.getElementById("img41").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage41').click( function(event) {document.getElementById("img41").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box42")).display === "none") {
    document.getElementById("box42").style.display = "inline-block";
    document.getElementById("input42").style.display = "inline-block";
    var resize42 = $('#cropPreview42').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage42').on('change', function () { 
    var reader42 = new FileReader();reader42.onload = function (e) {resize42.croppie('bind',{url: e.target.result});}
    reader42.readAsDataURL(this.files[0]);});$('#cropImage42').on('click', function (ev) {resize42.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img42").setAttribute("src", img)});});
    $('#inputImage42').change( function(uploadImageUrl) {document.getElementById("img42").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage42').click( function(event) {document.getElementById("img42").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box43")).display === "none") {
    document.getElementById("box43").style.display = "inline-block";
    document.getElementById("input43").style.display = "inline-block";
    var resize43 = $('#cropPreview43').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage43').on('change', function () { 
    var reader43 = new FileReader();reader43.onload = function (e) {resize43.croppie('bind',{url: e.target.result});}
    reader43.readAsDataURL(this.files[0]);});$('#cropImage43').on('click', function (ev) {resize43.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img43").setAttribute("src", img)});});
    $('#inputImage43').change( function(uploadImageUrl) {document.getElementById("img43").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage43').click( function(event) {document.getElementById("img43").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box44")).display === "none") {
    document.getElementById("box44").style.display = "inline-block";
    document.getElementById("input44").style.display = "inline-block";
    var resize44 = $('#cropPreview44').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage44').on('change', function () { 
    var reader44 = new FileReader();reader44.onload = function (e) {resize44.croppie('bind',{url: e.target.result});}
    reader44.readAsDataURL(this.files[0]);});$('#cropImage44').on('click', function (ev) {resize44.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img44").setAttribute("src", img)});});
    $('#inputImage44').change( function(uploadImageUrl) {document.getElementById("img44").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage44').click( function(event) {document.getElementById("img44").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box45")).display === "none") {
    document.getElementById("box45").style.display = "inline-block";
    document.getElementById("input45").style.display = "inline-block";
    var resize45 = $('#cropPreview45').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage45').on('change', function () { 
    var reader45 = new FileReader();reader45.onload = function (e) {resize45.croppie('bind',{url: e.target.result});}
    reader45.readAsDataURL(this.files[0]);});$('#cropImage45').on('click', function (ev) {resize45.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img45").setAttribute("src", img)});});
    $('#inputImage45').change( function(uploadImageUrl) {document.getElementById("img45").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage45').click( function(event) {document.getElementById("img45").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box46")).display === "none") {
    document.getElementById("box46").style.display = "inline-block";
    document.getElementById("input46").style.display = "inline-block";
    var resize46 = $('#cropPreview46').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage46').on('change', function () { 
    var reader46 = new FileReader();reader46.onload = function (e) {resize46.croppie('bind',{url: e.target.result});}
    reader46.readAsDataURL(this.files[0]);});$('#cropImage46').on('click', function (ev) {resize46.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img46").setAttribute("src", img)});});
    $('#inputImage46').change( function(uploadImageUrl) {document.getElementById("img46").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage46').click( function(event) {document.getElementById("img46").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box47")).display === "none") {
    document.getElementById("box47").style.display = "inline-block";
    document.getElementById("input47").style.display = "inline-block";
    var resize47 = $('#cropPreview47').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage47').on('change', function () { 
    var reader47 = new FileReader();reader47.onload = function (e) {resize47.croppie('bind',{url: e.target.result});}
    reader47.readAsDataURL(this.files[0]);});$('#cropImage47').on('click', function (ev) {resize47.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img47").setAttribute("src", img)});});
    $('#inputImage47').change( function(uploadImageUrl) {document.getElementById("img47").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage47').click( function(event) {document.getElementById("img47").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box48")).display === "none") {
    document.getElementById("box48").style.display = "inline-block";
    document.getElementById("input48").style.display = "inline-block";
    var resize48 = $('#cropPreview48').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage48').on('change', function () { 
    var reader48 = new FileReader();reader48.onload = function (e) {resize48.croppie('bind',{url: e.target.result});}
    reader48.readAsDataURL(this.files[0]);});$('#cropImage48').on('click', function (ev) {resize48.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img48").setAttribute("src", img)});});
    $('#inputImage48').change( function(uploadImageUrl) {document.getElementById("img48").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage48').click( function(event) {document.getElementById("img48").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box49")).display === "none") {
    document.getElementById("box49").style.display = "inline-block";
    document.getElementById("input49").style.display = "inline-block";
    var resize49 = $('#cropPreview49').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage49').on('change', function () { 
    var reader49 = new FileReader();reader49.onload = function (e) {resize49.croppie('bind',{url: e.target.result});}
    reader49.readAsDataURL(this.files[0]);});$('#cropImage49').on('click', function (ev) {resize49.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img49").setAttribute("src", img)});});
    $('#inputImage49').change( function(uploadImageUrl) {document.getElementById("img49").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage49').click( function(event) {document.getElementById("img49").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
  else if (window.getComputedStyle(document.getElementById("box50")).display === "none") {
    document.getElementById("box50").style.display = "inline-block";
    document.getElementById("input50").style.display = "inline-block";
    var resize50 = $('#cropPreview50').croppie({
    enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage50').on('change', function () { 
    var reader50 = new FileReader();reader50.onload = function (e) {resize50.croppie('bind',{url: e.target.result});}
    reader50.readAsDataURL(this.files[0]);});$('#cropImage50').on('click', function (ev) {resize50.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
    document.getElementById("img50").setAttribute("src", img)});});
    $('#inputImage50').change( function(uploadImageUrl) {document.getElementById("img50").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
    $('#revertImage50').click( function(event) {document.getElementById("img50").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});
  }
};

//on clicking on remove button, remove last input field
function remove() {
    if (window.getComputedStyle(document.getElementById("box50")).display !== "none") {
      document.getElementById("box50").style.display = "none";
      document.getElementById("input50").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box49")).display !== "none") {
      document.getElementById("box49").style.display = "none";
      document.getElementById("input49").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box48")).display !== "none") {
      document.getElementById("box48").style.display = "none";
      document.getElementById("input48").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box47")).display !== "none") {
      document.getElementById("box47").style.display = "none";
      document.getElementById("input47").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box46")).display !== "none") {
      document.getElementById("box46").style.display = "none";
      document.getElementById("input46").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box45")).display !== "none") {
      document.getElementById("box45").style.display = "none";
      document.getElementById("input45").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box44")).display !== "none") {
      document.getElementById("box44").style.display = "none";
      document.getElementById("input44").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box43")).display !== "none") {
      document.getElementById("box43").style.display = "none";
      document.getElementById("input43").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box42")).display !== "none") {
      document.getElementById("box42").style.display = "none";
      document.getElementById("input42").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box41")).display !== "none") {
      document.getElementById("box41").style.display = "none";
      document.getElementById("input41").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box40")).display !== "none") {
      document.getElementById("box40").style.display = "none";
      document.getElementById("input40").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box39")).display !== "none") {
      document.getElementById("box39").style.display = "none";
      document.getElementById("input39").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box38")).display !== "none") {
      document.getElementById("box38").style.display = "none";
      document.getElementById("input38").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box37")).display !== "none") {
      document.getElementById("box37").style.display = "none";
      document.getElementById("input37").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box36")).display !== "none") {
      document.getElementById("box36").style.display = "none";
      document.getElementById("input36").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box35")).display !== "none") {
      document.getElementById("box35").style.display = "none";
      document.getElementById("input35").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box34")).display !== "none") {
      document.getElementById("box34").style.display = "none";
      document.getElementById("input34").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box33")).display !== "none") {
      document.getElementById("box33").style.display = "none";
      document.getElementById("input33").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box32")).display !== "none") {
      document.getElementById("box32").style.display = "none";
      document.getElementById("input32").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box31")).display !== "none") {
      document.getElementById("box31").style.display = "none";
      document.getElementById("input31").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box30")).display !== "none") {
      document.getElementById("box30").style.display = "none";
      document.getElementById("input30").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box29")).display !== "none") {
      document.getElementById("box29").style.display = "none";
      document.getElementById("input29").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box28")).display !== "none") {
      document.getElementById("box28").style.display = "none";
      document.getElementById("input28").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box27")).display !== "none") {
      document.getElementById("box27").style.display = "none";
      document.getElementById("input27").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box26")).display !== "none") {
      document.getElementById("box26").style.display = "none";
      document.getElementById("input26").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box25")).display !== "none") {
      document.getElementById("box25").style.display = "none";
      document.getElementById("input25").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box24")).display !== "none") {
      document.getElementById("box24").style.display = "none";
      document.getElementById("input24").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box23")).display !== "none") {
      document.getElementById("box23").style.display = "none";
      document.getElementById("input23").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box22")).display !== "none") {
      document.getElementById("box22").style.display = "none";
      document.getElementById("input22").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box21")).display !== "none") {
      document.getElementById("box21").style.display = "none";
      document.getElementById("input21").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box20")).display !== "none") {
      document.getElementById("box20").style.display = "none";
      document.getElementById("input20").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box19")).display !== "none") {
      document.getElementById("box19").style.display = "none";
      document.getElementById("input19").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box18")).display !== "none") {
      document.getElementById("box18").style.display = "none";
      document.getElementById("input18").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box17")).display !== "none") {
      document.getElementById("box17").style.display = "none";
      document.getElementById("input17").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box16")).display !== "none") {
      document.getElementById("box16").style.display = "none";
      document.getElementById("input16").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box15")).display !== "none") {
      document.getElementById("box15").style.display = "none";
      document.getElementById("input15").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box14")).display !== "none") {
      document.getElementById("box14").style.display = "none";
      document.getElementById("input14").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box13")).display !== "none") {
      document.getElementById("box13").style.display = "none";
      document.getElementById("input13").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box12")).display !== "none") {
      document.getElementById("box12").style.display = "none";
      document.getElementById("input12").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box11")).display !== "none") {
      document.getElementById("box11").style.display = "none";
      document.getElementById("input11").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box10")).display !== "none") {
      document.getElementById("box10").style.display = "none";
      document.getElementById("input10").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box9")).display !== "none") {
      document.getElementById("box9").style.display = "none";
      document.getElementById("input9").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box8")).display !== "none") {
      document.getElementById("box8").style.display = "none";
      document.getElementById("input8").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box7")).display !== "none") {
      document.getElementById("box7").style.display = "none";
      document.getElementById("input7").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box6")).display !== "none") {
      document.getElementById("box6").style.display = "none";
      document.getElementById("input6").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box5")).display !== "none") {
      document.getElementById("box5").style.display = "none";
      document.getElementById("input5").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box4")).display !== "none") {
      document.getElementById("box4").style.display = "none";
      document.getElementById("input4").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box3")).display !== "none") {
      document.getElementById("box3").style.display = "none";
      document.getElementById("input3").style.display = "none";
    }
    else if (window.getComputedStyle(document.getElementById("box2")).display !== "none") {
      document.getElementById("box2").style.display = "none";
      document.getElementById("input2").style.display = "none";
    }
};

//on input field data changed, change the type of the copyright message to the input field's value
function companyCopyrightMode() {
    document.getElementById("firstCopyrightMsg").innerHTML = "Copyright &copy; 2022";
    document.getElementById("secondCopyrightMsg").innerHTML = ". Made with <span class='heartIcon'>&#10084;</span> by ";
    document.getElementById("companyOrPersonNameInput").placeholder = "Company Name";
}
function personCopyrightMode() {
    document.getElementById("firstCopyrightMsg").innerHTML = "Made with <span class='heartIcon'>&#10084;</span> by ";
    document.getElementById("secondCopyrightMsg").innerHTML = " using ";
    document.getElementById("companyOrPersonNameInput").placeholder = "Your Name";
}

//on clicking change view of the boxes
var modeStateVar = "Text below image mode";
function changeToTextBelowImgMode() {
    document.getElementById("container").style.textAlign = "center";
    document.getElementById("modeState").innerHTML = "Text below image mode";
    modeStateVar = "Text below image mode";
    document.getElementById("modeStateHidden").style.color = "red";
    var textBelowImgModeElementIds = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < textBelowImgModeElementIds.length; i++) {
        document.getElementById("box"+textBelowImgModeElementIds[i]).style.width = null;
        document.getElementById("boxText"+textBelowImgModeElementIds[i]).style.display = "block";
        document.getElementById("boxText"+textBelowImgModeElementIds[i]).style.marginLeft = null;
        document.getElementById("boxText"+textBelowImgModeElementIds[i]).style.marginRight = null;
        document.getElementById("hT"+textBelowImgModeElementIds[i]).style.display = null;
        document.getElementById("hT"+textBelowImgModeElementIds[i]).style.textAlign = null;
        document.getElementById("pT"+textBelowImgModeElementIds[i]).style.display = null;
        document.getElementById("pT"+textBelowImgModeElementIds[i]).style.textAlign = null;
        document.getElementById("boxData"+textBelowImgModeElementIds[i]).style.marginBottom = document.getElementById('textBoxMargin').value*5+"px";
        document.getElementById("boxData"+textBelowImgModeElementIds[i]).style.marginRight = null;
    }
};
function changeToTextSideByImgMode() {
    document.getElementById("container").style.textAlign = null;
    document.getElementById("title").style.textAlign = "center";
    document.getElementById("modeState").innerHTML = "Text side by image mode";
    modeStateVar = "Text side by image mode";
    document.getElementById("modeStateHidden").style.color = "green";
    var textSideByImgModeElementIds = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < textSideByImgModeElementIds.length; i++) {
        document.getElementById("box"+textSideByImgModeElementIds[i]).style.width = null;
        document.getElementById("boxText"+textSideByImgModeElementIds[i]).style.display = "inline-block";
        document.getElementById("boxText"+textSideByImgModeElementIds[i]).style.marginRight = "10px";
        document.getElementById("hT"+textSideByImgModeElementIds[i]).style.display = "block";
        document.getElementById("hT"+textSideByImgModeElementIds[i]).style.textAlign = null;
        document.getElementById("pT"+textSideByImgModeElementIds[i]).style.display = "block";
        document.getElementById("pT"+textSideByImgModeElementIds[i]).style.textAlign = null;
        document.getElementById("boxData"+textSideByImgModeElementIds[i]).style.marginBottom = null;
        document.getElementById("boxData"+textSideByImgModeElementIds[i]).style.marginRight = document.getElementById('textBoxMargin').value*5+"px";
    }
};
function changeToOneColumnMode() {
    document.getElementById("container").style.textAlign = "left";
    document.getElementById("title").style.textAlign = "center";
    document.getElementById("modeState").innerHTML = "One column mode";
    modeStateVar = "One column mode";
    document.getElementById("modeStateHidden").style.color = "blue";
    var OneColumnModeElementIds = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < OneColumnModeElementIds.length; i++) {
        document.getElementById("box"+OneColumnModeElementIds[i]).style.width = window.getComputedStyle(document.getElementById("title")).width;
        document.getElementById("boxText"+OneColumnModeElementIds[i]).style.display = "inline-block";
        document.getElementById("hT"+OneColumnModeElementIds[i]).style.display = "block";
        document.getElementById("hT"+OneColumnModeElementIds[i]).style.textAlign = "justify";
        document.getElementById("pT"+OneColumnModeElementIds[i]).style.display = "block";
        document.getElementById("pT"+OneColumnModeElementIds[i]).style.textAlign = "justify";
        document.getElementById("boxData"+OneColumnModeElementIds[i]).style.marginBottom = null;
        document.getElementById("boxData"+OneColumnModeElementIds[i]).style.marginRight = document.getElementById('textBoxMargin').value*5+"px";
    }
};

//on check change to night mode
function changeToNightMode() {
    if (document.getElementById("dayNightMode").checked){
        document.getElementById("containerBackgroundColor").value = "#101111";
        document.getElementById("containerBackgroundColorIndicator").innerHTML = "#101111";
        document.getElementById("titleBackgroundColor").value = "#101111";
        document.getElementById("titleBackgroundColorIndicator").innerHTML = "#101111";
        document.getElementById("itemBoxBackgroundColor").value = "#101111";
        document.getElementById("itemBoxBackgroundColorIndicator").innerHTML = "#101111";
        document.getElementById("imageBoxBackgroundColor").value = "#101111";
        document.getElementById("imageBoxBackgroundColorIndicator").innerHTML = "#101111";
        document.getElementById("textBoxBackgroundColor").value = "#101111";
        document.getElementById("textBoxBackgroundColorIndicator").innerHTML = "#101111";
        document.getElementById("copyrightMessageBackgroundColor").value = "#101111";
        document.getElementById("copyrightMessageBackgroundColorIndicator").innerHTML = "#101111";
        document.getElementById("containerBoxShadow1").value = "#000000";
        document.getElementById("containerBoxShadow2").value = "#2e3238";
        document.getElementById("titleBoxShadow1").value = "#000000";
        document.getElementById("titleBoxShadow2").value = "#2e3238";
        document.getElementById("itemBoxBoxShadow1").value = "#000000";
        document.getElementById("itemBoxBoxShadow2").value = "#2e3238";
        document.getElementById("imageBoxBoxShadow1").value = "#000000";
        document.getElementById("imageBoxBoxShadow2").value = "#2e3238";
        document.getElementById("textBoxBoxShadow1").value = "#000000";
        document.getElementById("textBoxBoxShadow2").value = "#2e3238";
        document.getElementById("copyrightBoxShadow1").value = "#000000";
        document.getElementById("copyrightBoxShadow2").value = "#2e3238";
        document.getElementById("container").style.background = "rgb(16, 17, 17)";
        if (document.getElementById("containerBoxShadowNone").checked == false){
            if (document.getElementById("containerBoxShadowOutside").checked){
                containerBoxShadowOutside();
            }
            else {
                containerBoxShadowInside();
            }
        }
        else{
            containerBoxShadowNone();
        }
        document.getElementById("title").style.background = "rgb(16, 17, 17)";
        if (document.getElementById("titleBoxShadowNone").checked == false){
            if (document.getElementById("titleBoxShadowOutside").checked){
                titleBoxShadowOutside();
            }
            else {
                titleBoxShadowInside();
            }
        }
        else{
            titleBoxShadowNone();
        }
        var blackBackgroundColorAndBoxShadow = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < blackBackgroundColorAndBoxShadow.length; i++) {
            document.getElementById("box"+blackBackgroundColorAndBoxShadow[i]).style.background = "rgb(16, 17, 17)";
            document.getElementById("boxData"+blackBackgroundColorAndBoxShadow[i]).style.background = "rgb(16, 17, 17)";
            document.getElementById("boxText"+blackBackgroundColorAndBoxShadow[i]).style.background = "rgb(16, 17, 17)";
        }
        if (document.getElementById("itemBoxBoxShadowNone").checked == false){
            if (document.getElementById("itemBoxBoxShadowOutside").checked){
                itemBoxBoxShadowOutside();
            }
            else {
                itemBoxBoxShadowInside();
            }
        }
        else{
            itemBoxBoxShadowNone();
        }
        if (document.getElementById("imageBoxBoxShadowNone").checked == false){
            if (document.getElementById("imageBoxBoxShadowOutside").checked){
                imageBoxBoxShadowOutside();
            }
            else {
                imageBoxBoxShadowInside();
            }
        }
        else{
            imageBoxBoxShadowNone();
        }
        if (document.getElementById("textBoxBoxShadowNone").checked == false){
            if (document.getElementById("textBoxBoxShadowOutside").checked){
                textBoxBoxShadowOutside();
            }
            else {
                textBoxBoxShadowInside();
            }
        }
        else{
            textBoxBoxShadowNone();
        }
        document.getElementById("copyrightMessage").style.background = "rgb(16, 17, 17)";
        if (document.getElementById("copyrightBoxShadowNone").checked == false){
            if (document.getElementById("copyrightBoxShadowOutside").checked){
                copyrightBoxShadowOutside();
            }
            else {
                copyrightBoxShadowInside();
            }
        }
        else{
            copyrightBoxShadowNone();
        }
        if (window.getComputedStyle(document.getElementById("firstTitleBox")).color === "rgb(16, 17, 17)" || window.getComputedStyle(document.getElementById("firstTitleBox")).color === "rgb(0, 0, 0)"){
            document.getElementById("firstTitleBox").style.color = "rgb(239, 238, 238)";
            document.getElementById("firstTitleColorPicker").value = "#efeeee";
            document.getElementById("firstTitleColorIndicator").innerHTML = document.getElementById('firstTitleColorPicker').value;
        }
        if (window.getComputedStyle(document.getElementById("secondTitleBox")).color === "rgb(16, 17, 17)" || window.getComputedStyle(document.getElementById("secondTitleBox")).color === "rgb(0, 0, 0)"){
            document.getElementById("secondTitleBox").style.color = "rgb(239, 238, 238)";
            document.getElementById("secondTitleColorPicker").value = "#efeeee";
            document.getElementById("secondTitleColorIndicator").innerHTML = document.getElementById('secondTitleColorPicker').value;
        }
        if (window.getComputedStyle(document.getElementById("firstCopyrightMsg")).color === "rgb(16, 17, 17)" || window.getComputedStyle(document.getElementById("firstCopyrightMsg")).color === "rgb(0, 0, 0)"){
            document.getElementById("firstCopyrightMsg").style.color = "rgb(239, 238, 238)";
            document.getElementById("secondCopyrightMsg").style.color = "rgb(239, 238, 238)";
            document.getElementById("copyrightColorPicker").value = "#efeeee";
            document.getElementById("copyrightColorIndicator").innerHTML = document.getElementById('copyrightColorPicker').value;
        }
        if (window.getComputedStyle(document.getElementById("personOrCompanyName")).color === "rgb(16, 17, 17)" || window.getComputedStyle(document.getElementById("personOrCompanyName")).color === "rgb(0, 0, 0)"){
            document.getElementById("personOrCompanyName").style.color = "rgb(239, 238, 238)";
            document.getElementById("webnifixCompanyCopyright").style.color = "rgb(239, 238, 238)";
            document.getElementById("copyrightCompanyNameColorPicker").value = "#efeeee";
            document.getElementById("copyrightCompanyNameColorIndicator").innerHTML = document.getElementById('copyrightCompanyNameColorPicker').value;
        }
        if (window.getComputedStyle(document.getElementById("hT1")).color === "rgb(16, 17, 17)" || window.getComputedStyle(document.getElementById("hT1")).color === "rgb(0, 0, 0)"){
            var headerTextDarkColor = Array.from({length: 50}, (_, index) => index + 1);
            for(i = 0; i < headerTextDarkColor.length; i++) {
                document.getElementById("hT"+headerTextDarkColor[i]).style.color = "rgb(239, 238, 238)";
            }
            document.getElementById("boxHeaderColorPicker").value = "#efeeee";
            document.getElementById("boxHeaderColorIndicator").innerHTML = document.getElementById('boxHeaderColorPicker').value;
        }
        if (window.getComputedStyle(document.getElementById("pT1")).color === "rgb(16, 17, 17)" || window.getComputedStyle(document.getElementById("pT1")).color === "rgb(0, 0, 0)"){
            var paragraphTextDarkColor = Array.from({length: 50}, (_, index) => index + 1);
            for(i = 0; i < paragraphTextDarkColor.length; i++) {
                document.getElementById("pT"+paragraphTextDarkColor[i]).style.color = "rgb(239, 238, 238)";
            }
            document.getElementById("boxParagraphColorPicker").value = "#efeeee";
            document.getElementById("boxParagraphColorIndicator").innerHTML = document.getElementById('boxParagraphColorPicker').value;
        }
    }
    else {
        document.getElementById("containerBackgroundColor").value = "#efeeee";
        document.getElementById("containerBackgroundColorIndicator").innerHTML = "#efeeee";
        document.getElementById("titleBackgroundColor").value = "#efeeee";
        document.getElementById("titleBackgroundColorIndicator").innerHTML = "#efeeee";
        document.getElementById("itemBoxBackgroundColor").value = "#efeeee";
        document.getElementById("itemBoxBackgroundColorIndicator").innerHTML = "#efeeee";
        document.getElementById("imageBoxBackgroundColor").value = "#efeeee";
        document.getElementById("imageBoxBackgroundColorIndicator").innerHTML = "#efeeee";
        document.getElementById("textBoxBackgroundColor").value = "#efeeee";
        document.getElementById("textBoxBackgroundColorIndicator").innerHTML = "#efeeee";
        document.getElementById("copyrightMessageBackgroundColor").value = "#efeeee";
        document.getElementById("copyrightMessageBackgroundColorIndicator").innerHTML = "#efeeee";
        document.getElementById("containerBoxShadow1").value = "#ffffff";
        document.getElementById("containerBoxShadow2").value = "#d1cdc7";
        document.getElementById("titleBoxShadow1").value = "#ffffff";
        document.getElementById("titleBoxShadow2").value = "#d1cdc7";
        document.getElementById("itemBoxBoxShadow1").value = "#ffffff";
        document.getElementById("itemBoxBoxShadow2").value = "#d1cdc7";
        document.getElementById("imageBoxBoxShadow1").value = "#ffffff";
        document.getElementById("imageBoxBoxShadow2").value = "#d1cdc7";
        document.getElementById("textBoxBoxShadow1").value = "#ffffff";
        document.getElementById("textBoxBoxShadow2").value = "#d1cdc7";
        document.getElementById("copyrightBoxShadow1").value = "#ffffff";
        document.getElementById("copyrightBoxShadow2").value = "#d1cdc7";
        document.getElementById("container").style.background = "rgb(239, 238, 238)";
        if (document.getElementById("containerBoxShadowNone").checked == false){
            if (document.getElementById("containerBoxShadowOutside").checked){
                containerBoxShadowOutside();
            }
            else {
                containerBoxShadowInside();
            }
        }
        else{
            containerBoxShadowNone();
        }
        document.getElementById("title").style.background = "rgb(239, 238, 238)";
        if (document.getElementById("titleBoxShadowNone").checked == false){
            if (document.getElementById("titleBoxShadowOutside").checked){
                titleBoxShadowOutside();
            }
            else {
                titleBoxShadowInside();
            }
        }
        else{
            titleBoxShadowNone();
        }
        var whiteBackgroundColorAndBoxShadow = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < whiteBackgroundColorAndBoxShadow.length; i++) {
            document.getElementById("box"+whiteBackgroundColorAndBoxShadow[i]).style.background = "rgb(239, 238, 238)";
            document.getElementById("boxData"+whiteBackgroundColorAndBoxShadow[i]).style.background = "rgb(239, 238, 238)";
            document.getElementById("boxText"+whiteBackgroundColorAndBoxShadow[i]).style.background = "rgb(239, 238, 238)";
        }
        if (document.getElementById("itemBoxBoxShadowNone").checked == false){
            if (document.getElementById("itemBoxBoxShadowOutside").checked){
                itemBoxBoxShadowOutside();
            }
            else {
                itemBoxBoxShadowInside();
            }
        }
        else{
            itemBoxBoxShadowNone();
        }
        if (document.getElementById("imageBoxBoxShadowNone").checked == false){
            if (document.getElementById("imageBoxBoxShadowOutside").checked){
                imageBoxBoxShadowOutside();
            }
            else {
                imageBoxBoxShadowInside();
            }
        }
        else{
            imageBoxBoxShadowNone();
        }
        if (document.getElementById("textBoxBoxShadowNone").checked == false){
            if (document.getElementById("textBoxBoxShadowOutside").checked){
                textBoxBoxShadowOutside();
            }
            else {
                textBoxBoxShadowInside();
            }
        }
        else{
            textBoxBoxShadowNone();
        }
        document.getElementById("copyrightMessage").style.background = "rgb(239, 238, 238)";
        if (document.getElementById("copyrightBoxShadowNone").checked == false){
            if (document.getElementById("copyrightBoxShadowOutside").checked){
                copyrightBoxShadowOutside();
            }
            else {
                copyrightBoxShadowInside();
            }
        }
        else{
            copyrightBoxShadowNone();
        }
        if (window.getComputedStyle(document.getElementById("firstTitleBox")).color === "rgb(239, 238, 238)" || window.getComputedStyle(document.getElementById("firstTitleBox")).color === "#ffffff"){
            document.getElementById("firstTitleBox").style.color = "rgb(16, 17, 17)";
            document.getElementById("firstTitleColorPicker").value = "#101111";
            document.getElementById("firstTitleColorIndicator").innerHTML = document.getElementById('firstTitleColorPicker').value;
        }
        if (window.getComputedStyle(document.getElementById("secondTitleBox")).color === "rgb(239, 238, 238)" || window.getComputedStyle(document.getElementById("secondTitleBox")).color === "#ffffff"){
            document.getElementById("secondTitleBox").style.color = "rgb(16, 17, 17)";
            document.getElementById("secondTitleColorPicker").value = "#101111";
            document.getElementById("secondTitleColorIndicator").innerHTML = document.getElementById('secondTitleColorPicker').value;
        }
        if (window.getComputedStyle(document.getElementById("firstCopyrightMsg")).color === "rgb(239, 238, 238)" || window.getComputedStyle(document.getElementById("firstCopyrightMsg")).color === "#ffffff"){
            document.getElementById("firstCopyrightMsg").style.color = "rgb(16, 17, 17)";
            document.getElementById("secondCopyrightMsg").style.color = "rgb(16, 17, 17)";
            document.getElementById("copyrightColorPicker").value = "#101111";
            document.getElementById("copyrightColorIndicator").innerHTML = document.getElementById('copyrightColorPicker').value;
        }
        if (window.getComputedStyle(document.getElementById("personOrCompanyName")).color === "rgb(239, 238, 238)" || window.getComputedStyle(document.getElementById("personOrCompanyName")).color === "#ffffff"){
            document.getElementById("personOrCompanyName").style.color = "rgb(16, 17, 17)";
            document.getElementById("webnifixCompanyCopyright").style.color = "rgb(16, 17, 17)";
            document.getElementById("copyrightCompanyNameColorPicker").value = "#101111";
            document.getElementById("copyrightCompanyNameColorIndicator").innerHTML = document.getElementById('copyrightCompanyNameColorPicker').value;
        }
        if (window.getComputedStyle(document.getElementById("hT1")).color === "rgb(239, 238, 238)" || window.getComputedStyle(document.getElementById("hT1")).color === "#ffffff"){
            var headerTextLightColor = Array.from({length: 50}, (_, index) => index + 1);
            for(i = 0; i < headerTextLightColor.length; i++) {
                document.getElementById("hT"+headerTextLightColor[i]).style.color = "rgb(16, 17, 17)";
            }
            document.getElementById("boxHeaderColorPicker").value = "#101111";
            document.getElementById("boxHeaderColorIndicator").innerHTML = document.getElementById('boxHeaderColorPicker').value;
        }
        if (window.getComputedStyle(document.getElementById("pT1")).color === "rgb(239, 238, 238)" || window.getComputedStyle(document.getElementById("pT1")).color === "#ffffff"){
            var paragraphTextLightColor = Array.from({length: 50}, (_, index) => index + 1);
            for(i = 0; i < paragraphTextLightColor.length; i++) {
                document.getElementById("pT"+paragraphTextLightColor[i]).style.color = "rgb(16, 17, 17)";
            }
            document.getElementById("boxParagraphColorPicker").value = "#101111";
            document.getElementById("boxParagraphColorIndicator").innerHTML = document.getElementById('boxParagraphColorPicker').value;
        }
    }
}

//on click, change the width of the title and copyright
function titleWidthMax() {
    document.getElementById("title").style.width = null;
}
function titleWidthFitContent() {
    document.getElementById("title").style.width = "fit-content";
}
function copyrightWidthMax() {
    document.getElementById("copyrightMessage").style.width = "calc(100% - 16px)";
}
function copyrightWidthFitContent() {
    document.getElementById("copyrightMessage").style.width = "fit-content";
}

//on click change the alignment of the data
function firstTitleAlignmentLeft() {
    document.getElementById("firstTitle").style.textAlign = "left";
}
function firstTitleAlignmentRight() {
    document.getElementById("firstTitle").style.textAlign = "right";
}
function firstTitleAlignmentCenter() {
    document.getElementById("firstTitle").style.textAlign = "center";
}
function firstTitleAlignmentJustify() {
    document.getElementById("firstTitle").style.textAlign = "justify";
}

function secondTitleAlignmentLeft() {
    document.getElementById("secondTitle").style.textAlign = "left";
}
function secondTitleAlignmentRight() {
    document.getElementById("secondTitle").style.textAlign = "right";
}
function secondTitleAlignmentCenter() {
    document.getElementById("secondTitle").style.textAlign = "center";
}
function secondTitleAlignmentJustify() {
    document.getElementById("secondTitle").style.textAlign = "justify";
}

function itemBoxAlignmentLeft() {
    document.getElementById("container").style.textAlign = "left";
}
function itemBoxAlignmentRight() {
    document.getElementById("container").style.textAlign = "right";
}
function itemBoxAlignmentCenter() {
    document.getElementById("container").style.textAlign = "center";
}
function itemBoxAlignmentJustify() {
    document.getElementById("container").style.textAlign = "justify";
}

function imageBoxAlignmentLeft() {
    var imageBoxAlignmentLeft = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < imageBoxAlignmentLeft.length; i++) {
        document.getElementById("box"+imageBoxAlignmentLeft[i]).style.textAlign = "left";
    }
}
function imageBoxAlignmentRight() {
    var imageBoxAlignmentRight = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < imageBoxAlignmentRight.length; i++) {
        document.getElementById("box"+imageBoxAlignmentRight[i]).style.textAlign = "right";
    }
}
function imageBoxAlignmentCenter() {
    var imageBoxAlignmentCenter = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < imageBoxAlignmentCenter.length; i++) {
        document.getElementById("box"+imageBoxAlignmentCenter[i]).style.textAlign = "center";
    }
}
function imageBoxAlignmentJustify() {
    var imageBoxAlignmentJustify = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < imageBoxAlignmentJustify.length; i++) {
        document.getElementById("box"+imageBoxAlignmentJustify[i]).style.textAlign = "justify";
    }
}

function itemHeaderAlignmentLeft() {
    var itemHeaderAlignmentLeft = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < itemHeaderAlignmentLeft.length; i++) {
        document.getElementById("hT"+itemHeaderAlignmentLeft[i]).style.textAlign = "left";
    }
}
function itemHeaderAlignmentRight() {
    var itemHeaderAlignmentRight = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < itemHeaderAlignmentRight.length; i++) {
        document.getElementById("hT"+itemHeaderAlignmentRight[i]).style.textAlign = "right";
    }
}
function itemHeaderAlignmentCenter() {
    var itemHeaderAlignmentCenter = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < itemHeaderAlignmentCenter.length; i++) {
        document.getElementById("hT"+itemHeaderAlignmentCenter[i]).style.textAlign = "center";
    }
}
function itemHeaderAlignmentJustify() {
    var itemHeaderAlignmentJustify = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < itemHeaderAlignmentJustify.length; i++) {
        document.getElementById("hT"+itemHeaderAlignmentJustify[i]).style.textAlign = "justify";
    }
}

function itemParagraphAlignmentLeft() {
    var itemParagraphAlignmentLeft = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < itemParagraphAlignmentLeft.length; i++) {
        document.getElementById("pT"+itemParagraphAlignmentLeft[i]).style.textAlign = "left";
    }
}
function itemParagraphAlignmentRight() {
    var itemParagraphAlignmentRight = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < itemParagraphAlignmentRight.length; i++) {
        document.getElementById("pT"+itemParagraphAlignmentRight[i]).style.textAlign = "right";
    }
}
function itemParagraphAlignmentCenter() {
    var itemParagraphAlignmentCenter = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < itemParagraphAlignmentCenter.length; i++) {
        document.getElementById("pT"+itemParagraphAlignmentCenter[i]).style.textAlign = "center";
    }
}
function itemParagraphAlignmentJustify() {
    var itemParagraphAlignmentJustify = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < itemParagraphAlignmentJustify.length; i++) {
        document.getElementById("pT"+itemParagraphAlignmentJustify[i]).style.textAlign = "justify";
    }
}

function copyrightAlignmentLeft() {
    document.getElementById("copyrightMessage").style.textAlign = "left";
}
function copyrightAlignmentRight() {
    document.getElementById("copyrightMessage").style.textAlign = "right";
}
function copyrightAlignmentCenter() {
    document.getElementById("copyrightMessage").style.textAlign = "center";
}
function copyrightAlignmentJustify() {
    document.getElementById("copyrightMessage").style.textAlign = "justify";
}

//on click remove or change the box shadow to inside or outside mode
function containerBoxShadowOutside(){
    document.getElementById("container").style.boxShadow = "-6px -6px 16px " + document.getElementById("containerBoxShadow1").value +", 6px 6px 16px " + document.getElementById("containerBoxShadow2").value;
    document.getElementById("containerBoxShadow1Indicator").innerHTML = document.getElementById("containerBoxShadow1").value;
    document.getElementById("containerBoxShadow2Indicator").innerHTML = document.getElementById("containerBoxShadow2").value;
}
function containerBoxShadowInside(){
    document.getElementById("container").style.boxShadow = "inset -6px -6px 16px " + document.getElementById("containerBoxShadow1").value +", inset 6px 6px 16px " + document.getElementById("containerBoxShadow2").value;
    document.getElementById("containerBoxShadow1Indicator").innerHTML = document.getElementById("containerBoxShadow1").value;
    document.getElementById("containerBoxShadow2Indicator").innerHTML = document.getElementById("containerBoxShadow2").value;
}
function containerBoxShadowNone(){
    document.getElementById("container").style.boxShadow = "0px 0px 0px #ffffff, 0px 0px 0px #ffffff";
    document.getElementById("containerBoxShadow1Indicator").innerHTML = document.getElementById("containerBoxShadow1").value;
    document.getElementById("containerBoxShadow2Indicator").innerHTML = document.getElementById("containerBoxShadow2").value;
}

function titleBoxShadowOutside(){
    document.getElementById("title").style.boxShadow = "-6px -6px 16px " + document.getElementById("titleBoxShadow1").value +", 6px 6px 16px " + document.getElementById("titleBoxShadow2").value;
    document.getElementById("titleBoxShadow1Indicator").innerHTML = document.getElementById("titleBoxShadow1").value;
    document.getElementById("titleBoxShadow2Indicator").innerHTML = document.getElementById("titleBoxShadow2").value;
}
function titleBoxShadowInside(){
    document.getElementById("title").style.boxShadow = "inset -6px -6px 16px " + document.getElementById("titleBoxShadow1").value +", inset 6px 6px 16px " + document.getElementById("titleBoxShadow2").value;
    document.getElementById("titleBoxShadow1Indicator").innerHTML = document.getElementById("titleBoxShadow1").value;
    document.getElementById("titleBoxShadow2Indicator").innerHTML = document.getElementById("titleBoxShadow2").value;
}
function titleBoxShadowNone(){
    document.getElementById("title").style.boxShadow = "0px 0px 0px #ffffff, 0px 0px 0px #ffffff";
    document.getElementById("titleBoxShadow1Indicator").innerHTML = document.getElementById("titleBoxShadow1").value;
    document.getElementById("titleBoxShadow2Indicator").innerHTML = document.getElementById("titleBoxShadow2").value;
}

function itemBoxBoxShadowOutside(){
    var itemBoxBoxShadowOutsideElementIds = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < itemBoxBoxShadowOutsideElementIds.length; i++) {
        document.getElementById("box"+itemBoxBoxShadowOutsideElementIds[i]).style.boxShadow = "-6px -6px 16px " + document.getElementById("itemBoxBoxShadow1").value +", 6px 6px 16px " + document.getElementById("itemBoxBoxShadow2").value;
    }
    document.getElementById("itemBoxBoxShadow1Indicator").innerHTML = document.getElementById("itemBoxBoxShadow1").value;
    document.getElementById("itemBoxBoxShadow2Indicator").innerHTML = document.getElementById("itemBoxBoxShadow2").value;
}
function itemBoxBoxShadowInside(){
    var itemBoxBoxShadowInsideElementIds = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < itemBoxBoxShadowInsideElementIds.length; i++) {
        document.getElementById("box"+itemBoxBoxShadowInsideElementIds[i]).style.boxShadow = "inset -6px -6px 16px " + document.getElementById("itemBoxBoxShadow1").value +", inset 6px 6px 16px " + document.getElementById("itemBoxBoxShadow2").value;
    }
    document.getElementById("itemBoxBoxShadow1Indicator").innerHTML = document.getElementById("itemBoxBoxShadow1").value;
    document.getElementById("itemBoxBoxShadow2Indicator").innerHTML = document.getElementById("itemBoxBoxShadow2").value;
}
function itemBoxBoxShadowNone(){
    var itemBoxBoxShadowNoneElementIds = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < itemBoxBoxShadowNoneElementIds.length; i++) {
        document.getElementById("box"+itemBoxBoxShadowNoneElementIds[i]).style.boxShadow = "0px 0px 0px #ffffff, 0px 0px 0px #ffffff";
        document.getElementById("itemBoxBoxShadow1Indicator").innerHTML = document.getElementById("itemBoxBoxShadow1").value;
        document.getElementById("itemBoxBoxShadow2Indicator").innerHTML = document.getElementById("itemBoxBoxShadow2").value;
    }
}

function imageBoxBoxShadowOutside(){
    var imageBoxBoxShadowOutsideElementIds = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < imageBoxBoxShadowOutsideElementIds.length; i++) {
        document.getElementById("boxData"+imageBoxBoxShadowOutsideElementIds[i]).style.boxShadow = "-6px -6px 16px " + document.getElementById("imageBoxBoxShadow1").value +", 6px 6px 16px " + document.getElementById("imageBoxBoxShadow2").value;
    }
    document.getElementById("imageBoxBoxShadow1Indicator").innerHTML = document.getElementById("imageBoxBoxShadow1").value;
    document.getElementById("imageBoxBoxShadow2Indicator").innerHTML = document.getElementById("imageBoxBoxShadow2").value;
}
function imageBoxBoxShadowInside(){
    var imageBoxBoxShadowInsideElementIds = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < imageBoxBoxShadowInsideElementIds.length; i++) {
        document.getElementById("boxData"+imageBoxBoxShadowInsideElementIds[i]).style.boxShadow = "inset -6px -6px 16px " + document.getElementById("imageBoxBoxShadow1").value +", inset 6px 6px 16px " + document.getElementById("imageBoxBoxShadow2").value;
    }
    document.getElementById("imageBoxBoxShadow1Indicator").innerHTML = document.getElementById("imageBoxBoxShadow1").value;
    document.getElementById("imageBoxBoxShadow2Indicator").innerHTML = document.getElementById("imageBoxBoxShadow2").value;
}
function imageBoxBoxShadowNone(){
    var imageBoxBoxShadowNoneElementIds = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < imageBoxBoxShadowNoneElementIds.length; i++) {
        document.getElementById("boxData"+imageBoxBoxShadowNoneElementIds[i]).style.boxShadow = "0px 0px 0px #ffffff, 0px 0px 0px #ffffff";
        document.getElementById("imageBoxBoxShadow1Indicator").innerHTML = document.getElementById("imageBoxBoxShadow1").value;
        document.getElementById("imageBoxBoxShadow2Indicator").innerHTML = document.getElementById("imageBoxBoxShadow2").value;
    }
}

function textBoxBoxShadowOutside(){
    var textBoxBoxShadowOutsideElementIds = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < textBoxBoxShadowOutsideElementIds.length; i++) {
        document.getElementById("boxText"+textBoxBoxShadowOutsideElementIds[i]).style.boxShadow = "-6px -6px 16px " + document.getElementById("textBoxBoxShadow1").value +", 6px 6px 16px " + document.getElementById("textBoxBoxShadow2").value;
    }
    document.getElementById("textBoxBoxShadow1Indicator").innerHTML = document.getElementById("textBoxBoxShadow1").value;
    document.getElementById("textBoxBoxShadow2Indicator").innerHTML = document.getElementById("textBoxBoxShadow2").value;
}
function textBoxBoxShadowInside(){
    var textBoxBoxShadowInsideElementIds = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < textBoxBoxShadowInsideElementIds.length; i++) {
        document.getElementById("boxText"+textBoxBoxShadowInsideElementIds[i]).style.boxShadow = "inset -6px -6px 16px " + document.getElementById("textBoxBoxShadow1").value +", inset 6px 6px 16px " + document.getElementById("textBoxBoxShadow2").value;
    }
    document.getElementById("textBoxBoxShadow1Indicator").innerHTML = document.getElementById("textBoxBoxShadow1").value;
    document.getElementById("textBoxBoxShadow2Indicator").innerHTML = document.getElementById("textBoxBoxShadow2").value;
}
function textBoxBoxShadowNone(){
    var textBoxBoxShadowNoneElementIds = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < textBoxBoxShadowNoneElementIds.length; i++) {
        document.getElementById("boxText"+textBoxBoxShadowNoneElementIds[i]).style.boxShadow = "0px 0px 0px #ffffff, 0px 0px 0px #ffffff";
        document.getElementById("textBoxBoxShadow1Indicator").innerHTML = document.getElementById("textBoxBoxShadow1").value;
        document.getElementById("textBoxBoxShadow2Indicator").innerHTML = document.getElementById("textBoxBoxShadow2").value;
    }
}

function copyrightBoxShadowOutside(){
    document.getElementById("copyrightMessage").style.boxShadow = "-6px -6px 16px " + document.getElementById("copyrightBoxShadow1").value +", 6px 6px 16px " + document.getElementById("copyrightBoxShadow2").value;
    document.getElementById("copyrightBoxShadow1Indicator").innerHTML = document.getElementById("copyrightBoxShadow1").value;
    document.getElementById("copyrightBoxShadow2Indicator").innerHTML = document.getElementById("copyrightBoxShadow2").value;
}
function copyrightBoxShadowInside(){
    document.getElementById("copyrightMessage").style.boxShadow = "inset -6px -6px 16px " + document.getElementById("copyrightBoxShadow1").value +", inset 6px 6px 16px " + document.getElementById("copyrightBoxShadow2").value;
    document.getElementById("copyrightBoxShadow1Indicator").innerHTML = document.getElementById("copyrightBoxShadow1").value;
    document.getElementById("copyrightBoxShadow2Indicator").innerHTML = document.getElementById("copyrightBoxShadow2").value;
}
function copyrightBoxShadowNone(){
    document.getElementById("copyrightMessage").style.boxShadow = "0px 0px 0px #ffffff, 0px 0px 0px #ffffff";
    document.getElementById("copyrightBoxShadow1Indicator").innerHTML = document.getElementById("copyrightBoxShadow1").value;
    document.getElementById("copyrightBoxShadow2Indicator").innerHTML = document.getElementById("copyrightBoxShadow2").value;
}

$(function(){
    //on input field data changed, change the first title of the post to the input field's value
    document.getElementById("inputFirstTitle").oninput = (function(event) {
        document.getElementById("firstTitle").innerHTML = document.getElementById('inputFirstTitle').value;
    });
    document.getElementById("inputSecondTitle").oninput = ( function(event) {
        document.getElementById("secondTitle").innerHTML = document.getElementById('inputSecondTitle').value;
    });

    //on input field data changed, change the heading of the data box to the input field's value
    document.getElementById("h1").oninput = ( function(event) {
        document.getElementById("hT1").innerHTML = document.getElementById('h1').value;
    });
    document.getElementById("h2").oninput = ( function(event) {
        document.getElementById("hT2").innerHTML = document.getElementById('h2').value;
    });
    document.getElementById("h3").oninput = ( function(event) {
        document.getElementById("hT3").innerHTML = document.getElementById('h3').value;
    });
    document.getElementById("h4").oninput = ( function(event) {
        document.getElementById("hT4").innerHTML = document.getElementById('h4').value;
    });
    document.getElementById("h5").oninput = ( function(event) {
        document.getElementById("hT5").innerHTML = document.getElementById('h5').value;
    });
    document.getElementById("h6").oninput = ( function(event) {
        document.getElementById("hT6").innerHTML = document.getElementById('h6').value;
    });
    document.getElementById("h7").oninput = ( function(event) {
        document.getElementById("hT7").innerHTML = document.getElementById('h7').value;
    });
    document.getElementById("h8").oninput = ( function(event) {
        document.getElementById("hT8").innerHTML = document.getElementById('h8').value;
    });
    document.getElementById("h9").oninput = ( function(event) {
        document.getElementById("hT9").innerHTML = document.getElementById('h9').value;
    });
    document.getElementById("h10").oninput = ( function(event) {
        document.getElementById("hT10").innerHTML = document.getElementById('h10').value;
    });
    document.getElementById("h11").oninput = ( function(event) {
        document.getElementById("hT11").innerHTML = document.getElementById('h11').value;
    });
    document.getElementById("h12").oninput = ( function(event) {
        document.getElementById("hT12").innerHTML = document.getElementById('h12').value;
    });
    document.getElementById("h13").oninput = ( function(event) {
        document.getElementById("hT13").innerHTML = document.getElementById('h13').value;
    });
    document.getElementById("h14").oninput = ( function(event) {
        document.getElementById("hT14").innerHTML = document.getElementById('h14').value;
    });
    document.getElementById("h15").oninput = ( function(event) {
        document.getElementById("hT15").innerHTML = document.getElementById('h15').value;
    });
    document.getElementById("h16").oninput = ( function(event) {
        document.getElementById("hT16").innerHTML = document.getElementById('h16').value;
    });
    document.getElementById("h17").oninput = ( function(event) {
        document.getElementById("hT17").innerHTML = document.getElementById('h17').value;
    });
    document.getElementById("h18").oninput = ( function(event) {
        document.getElementById("hT18").innerHTML = document.getElementById('h18').value;
    });
    document.getElementById("h19").oninput = ( function(event) {
        document.getElementById("hT19").innerHTML = document.getElementById('h19').value;
    });
    document.getElementById("h20").oninput = ( function(event) {
        document.getElementById("hT20").innerHTML = document.getElementById('h20').value;
    });
    document.getElementById("h21").oninput = ( function(event) {
        document.getElementById("hT21").innerHTML = document.getElementById('h21').value;
    });
    document.getElementById("h22").oninput = ( function(event) {
        document.getElementById("hT22").innerHTML = document.getElementById('h22').value;
    });
    document.getElementById("h23").oninput = ( function(event) {
        document.getElementById("hT23").innerHTML = document.getElementById('h23').value;
    });
    document.getElementById("h24").oninput = ( function(event) {
        document.getElementById("hT24").innerHTML = document.getElementById('h24').value;
    });
    document.getElementById("h25").oninput = ( function(event) {
        document.getElementById("hT25").innerHTML = document.getElementById('h25').value;
    });
    document.getElementById("h26").oninput = ( function(event) {
        document.getElementById("hT26").innerHTML = document.getElementById('h26').value;
    });
    document.getElementById("h27").oninput = ( function(event) {
        document.getElementById("hT27").innerHTML = document.getElementById('h27').value;
    });
    document.getElementById("h28").oninput = ( function(event) {
        document.getElementById("hT28").innerHTML = document.getElementById('h28').value;
    });
    document.getElementById("h29").oninput = ( function(event) {
        document.getElementById("hT29").innerHTML = document.getElementById('h29').value;
    });
    document.getElementById("h30").oninput = ( function(event) {
        document.getElementById("hT30").innerHTML = document.getElementById('h30').value;
    });
    document.getElementById("h31").oninput = ( function(event) {
        document.getElementById("hT31").innerHTML = document.getElementById('h31').value;
    });
    document.getElementById("h32").oninput = ( function(event) {
        document.getElementById("hT32").innerHTML = document.getElementById('h32').value;
    });
    document.getElementById("h33").oninput = ( function(event) {
        document.getElementById("hT33").innerHTML = document.getElementById('h33').value;
    });
    document.getElementById("h34").oninput = ( function(event) {
        document.getElementById("hT34").innerHTML = document.getElementById('h34').value;
    });
    document.getElementById("h35").oninput = ( function(event) {
        document.getElementById("hT35").innerHTML = document.getElementById('h35').value;
    });
    document.getElementById("h36").oninput = ( function(event) {
        document.getElementById("hT36").innerHTML = document.getElementById('h36').value;
    });
    document.getElementById("h37").oninput = ( function(event) {
        document.getElementById("hT37").innerHTML = document.getElementById('h37').value;
    });
    document.getElementById("h38").oninput = ( function(event) {
        document.getElementById("hT38").innerHTML = document.getElementById('h38').value;
    });
    document.getElementById("h39").oninput = ( function(event) {
        document.getElementById("hT39").innerHTML = document.getElementById('h39').value;
    });
    document.getElementById("h40").oninput = ( function(event) {
        document.getElementById("hT40").innerHTML = document.getElementById('h40').value;
    });
    document.getElementById("h41").oninput = ( function(event) {
        document.getElementById("hT41").innerHTML = document.getElementById('h41').value;
    });
    document.getElementById("h42").oninput = ( function(event) {
        document.getElementById("hT42").innerHTML = document.getElementById('h42').value;
    });
    document.getElementById("h43").oninput = ( function(event) {
        document.getElementById("hT43").innerHTML = document.getElementById('h43').value;
    });
    document.getElementById("h44").oninput = ( function(event) {
        document.getElementById("hT44").innerHTML = document.getElementById('h44').value;
    });
    document.getElementById("h45").oninput = ( function(event) {
        document.getElementById("hT45").innerHTML = document.getElementById('h45').value;
    });
    document.getElementById("h46").oninput = ( function(event) {
        document.getElementById("hT46").innerHTML = document.getElementById('h46').value;
    });
    document.getElementById("h47").oninput = ( function(event) {
        document.getElementById("hT47").innerHTML = document.getElementById('h47').value;
    });
    document.getElementById("h48").oninput = ( function(event) {
        document.getElementById("hT48").innerHTML = document.getElementById('h48').value;
    });
    document.getElementById("h49").oninput = ( function(event) {
        document.getElementById("hT49").innerHTML = document.getElementById('h49').value;
    });
    document.getElementById("h50").oninput = ( function(event) {
        document.getElementById("hT50").innerHTML = document.getElementById('h50').value;
    });

    //on input field data changed, change the heading of the data box to the input field's value
    document.getElementById("p1").oninput = ( function(event) {
        document.getElementById("pT1").innerHTML = document.getElementById('p1').value;
    });
    document.getElementById("p2").oninput = ( function(event) {
        document.getElementById("pT2").innerHTML = document.getElementById('p2').value;
    });
    document.getElementById("p3").oninput = ( function(event) {
        document.getElementById("pT3").innerHTML = document.getElementById('p3').value;
    });
    document.getElementById("p4").oninput = ( function(event) {
        document.getElementById("pT4").innerHTML = document.getElementById('p4').value;
    });
    document.getElementById("p5").oninput = ( function(event) {
        document.getElementById("pT5").innerHTML = document.getElementById('p5').value;
    });
    document.getElementById("p6").oninput = ( function(event) {
        document.getElementById("pT6").innerHTML = document.getElementById('p6').value;
    });
    document.getElementById("p7").oninput = ( function(event) {
        document.getElementById("pT7").innerHTML = document.getElementById('p7').value;
    });
    document.getElementById("p8").oninput = ( function(event) {
        document.getElementById("pT8").innerHTML = document.getElementById('p8').value;
    });
    document.getElementById("p9").oninput = ( function(event) {
        document.getElementById("pT9").innerHTML = document.getElementById('p9').value;
    });
    document.getElementById("p10").oninput = ( function(event) {
        document.getElementById("pT10").innerHTML = document.getElementById('p10').value;
    });
    document.getElementById("p11").oninput = ( function(event) {
        document.getElementById("pT11").innerHTML = document.getElementById('p11').value;
    });
    document.getElementById("p12").oninput = ( function(event) {
        document.getElementById("pT12").innerHTML = document.getElementById('p12').value;
    });
    document.getElementById("p13").oninput = ( function(event) {
        document.getElementById("pT13").innerHTML = document.getElementById('p13').value;
    });
    document.getElementById("p14").oninput = ( function(event) {
        document.getElementById("pT14").innerHTML = document.getElementById('p14').value;
    });
    document.getElementById("p15").oninput = ( function(event) {
        document.getElementById("pT15").innerHTML = document.getElementById('p15').value;
    });
    document.getElementById("p16").oninput = ( function(event) {
        document.getElementById("pT16").innerHTML = document.getElementById('p16').value;
    });
    document.getElementById("p17").oninput = ( function(event) {
        document.getElementById("pT17").innerHTML = document.getElementById('p17').value;
    });
    document.getElementById("p18").oninput = ( function(event) {
        document.getElementById("pT18").innerHTML = document.getElementById('p18').value;
    });
    document.getElementById("p19").oninput = ( function(event) {
        document.getElementById("pT19").innerHTML = document.getElementById('p19').value;
    });
    document.getElementById("p20").oninput = ( function(event) {
        document.getElementById("pT20").innerHTML = document.getElementById('p20').value;
    });
    document.getElementById("p21").oninput = ( function(event) {
        document.getElementById("pT21").innerHTML = document.getElementById('p21').value;
    });
    document.getElementById("p22").oninput = ( function(event) {
        document.getElementById("pT22").innerHTML = document.getElementById('p22').value;
    });
    document.getElementById("p23").oninput = ( function(event) {
        document.getElementById("pT23").innerHTML = document.getElementById('p23').value;
    });
    document.getElementById("p24").oninput = ( function(event) {
        document.getElementById("pT24").innerHTML = document.getElementById('p24').value;
    });
    document.getElementById("p25").oninput = ( function(event) {
        document.getElementById("pT25").innerHTML = document.getElementById('p25').value;
    });
    document.getElementById("p26").oninput = ( function(event) {
        document.getElementById("pT26").innerHTML = document.getElementById('p26').value;
    });
    document.getElementById("p27").oninput = ( function(event) {
        document.getElementById("pT27").innerHTML = document.getElementById('p27').value;
    });
    document.getElementById("p28").oninput = ( function(event) {
        document.getElementById("pT28").innerHTML = document.getElementById('p28').value;
    });
    document.getElementById("p29").oninput = ( function(event) {
        document.getElementById("pT29").innerHTML = document.getElementById('p29').value;
    });
    document.getElementById("p30").oninput = ( function(event) {
        document.getElementById("pT30").innerHTML = document.getElementById('p30').value;
    });
    document.getElementById("p31").oninput = ( function(event) {
        document.getElementById("pT31").innerHTML = document.getElementById('p31').value;
    });
    document.getElementById("p32").oninput = ( function(event) {
        document.getElementById("pT32").innerHTML = document.getElementById('p32').value;
    });
    document.getElementById("p33").oninput = ( function(event) {
        document.getElementById("pT33").innerHTML = document.getElementById('p33').value;
    });
    document.getElementById("p34").oninput = ( function(event) {
        document.getElementById("pT34").innerHTML = document.getElementById('p34').value;
    });
    document.getElementById("p35").oninput = ( function(event) {
        document.getElementById("pT35").innerHTML = document.getElementById('p35').value;
    });
    document.getElementById("p36").oninput = ( function(event) {
        document.getElementById("pT36").innerHTML = document.getElementById('p36').value;
    });
    document.getElementById("p37").oninput = ( function(event) {
        document.getElementById("pT37").innerHTML = document.getElementById('p37').value;
    });
    document.getElementById("p38").oninput = ( function(event) {
        document.getElementById("pT38").innerHTML = document.getElementById('p38').value;
    });
    document.getElementById("p39").oninput = ( function(event) {
        document.getElementById("pT39").innerHTML = document.getElementById('p39').value;
    });
    document.getElementById("p40").oninput = ( function(event) {
        document.getElementById("pT40").innerHTML = document.getElementById('p40').value;
    });
    document.getElementById("p41").oninput = ( function(event) {
        document.getElementById("pT41").innerHTML = document.getElementById('p41').value;
    });
    document.getElementById("p42").oninput = ( function(event) {
        document.getElementById("pT42").innerHTML = document.getElementById('p42').value;
    });
    document.getElementById("p43").oninput = ( function(event) {
        document.getElementById("pT43").innerHTML = document.getElementById('p43').value;
    });
    document.getElementById("p44").oninput = ( function(event) {
        document.getElementById("pT44").innerHTML = document.getElementById('p44').value;
    });
    document.getElementById("p45").oninput = ( function(event) {
        document.getElementById("pT45").innerHTML = document.getElementById('p45').value;
    });
    document.getElementById("p46").oninput = ( function(event) {
        document.getElementById("pT46").innerHTML = document.getElementById('p46').value;
    });
    document.getElementById("p47").oninput = ( function(event) {
        document.getElementById("pT47").innerHTML = document.getElementById('p47').value;
    });
    document.getElementById("p48").oninput = ( function(event) {
        document.getElementById("pT48").innerHTML = document.getElementById('p48').value;
    });
    document.getElementById("p49").oninput = ( function(event) {
        document.getElementById("pT49").innerHTML = document.getElementById('p49').value;
    });
    document.getElementById("p50").oninput = ( function(event) {
        document.getElementById("pT50").innerHTML = document.getElementById('p50').value;
    });

    //on input field data changed, change the copyright of the container to the input field's value
    document.getElementById("companyOrPersonNameInput").oninput = ( function(event) {
        document.getElementById("personOrCompanyName").innerHTML = " "+document.getElementById('companyOrPersonNameInput').value;
    });

    //on input field data changed, change width of the text box to the input field's value
    document.getElementById("textFieldWidth").oninput = ( function(event) {
        var textFieldWidthElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < textFieldWidthElementIds.length; i++) {
            document.getElementById("hT"+textFieldWidthElementIds[i]).style.width = document.getElementById('textFieldWidth').value*10+"px";
            document.getElementById("pT"+textFieldWidthElementIds[i]).style.width = document.getElementById('textFieldWidth').value*10+"px";
        }
        document.getElementById("textFieldWidthIndicator").innerHTML = document.getElementById('textFieldWidth').value*10+"px";
    });

    //on input field data changed, change the color of the titles to the input field's value
    document.getElementById("firstTitleColorPicker").oninput = ( function(event) {
        document.getElementById("firstTitleBox").style.color = document.getElementById('firstTitleColorPicker').value;
        document.getElementById("firstTitleColorIndicator").innerHTML = document.getElementById('firstTitleColorPicker').value;
    });
    document.getElementById("secondTitleColorPicker").oninput = ( function(event) {
        document.getElementById("secondTitleBox").style.color = document.getElementById('secondTitleColorPicker').value;
        document.getElementById("secondTitleColorIndicator").innerHTML = document.getElementById('secondTitleColorPicker').value;
    });
    
    //on input field data changed, change the color of the headings and paragraphs to the input field's value
    document.getElementById("boxHeaderColorPicker").oninput = ( function(event) {
        var boxHeaderColorPickerElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < boxHeaderColorPickerElementIds.length; i++) {
            document.getElementById("hT"+boxHeaderColorPickerElementIds[i]).style.color = document.getElementById('boxHeaderColorPicker').value;
        }
        document.getElementById("boxHeaderColorIndicator").innerHTML = document.getElementById('boxHeaderColorPicker').value;
    });
    document.getElementById("boxParagraphColorPicker").oninput = ( function(event) {
        var boxParagraphColorPickerElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < boxParagraphColorPickerElementIds.length; i++) {
            document.getElementById("pT"+boxParagraphColorPickerElementIds[i]).style.color = document.getElementById('boxParagraphColorPicker').value;
        }
        document.getElementById("boxParagraphColorIndicator").innerHTML = document.getElementById('boxParagraphColorPicker').value;
    });

    //on input field data changed, change the color of the footer to the input field's value
    document.getElementById("copyrightColorPicker").oninput = ( function(event) {
        document.getElementById("firstCopyrightMsg").style.color = document.getElementById('copyrightColorPicker').value;
        document.getElementById("secondCopyrightMsg").style.color = document.getElementById('copyrightColorPicker').value;
        document.getElementById("copyrightColorIndicator").innerHTML = document.getElementById('copyrightColorPicker').value;
    });
    document.getElementById("copyrightCompanyNameColorPicker").oninput = ( function(event) {
        document.getElementById("personOrCompanyName").style.color = document.getElementById('copyrightCompanyNameColorPicker').value;
        document.getElementById("webnifixCompanyCopyright").style.color = document.getElementById('copyrightCompanyNameColorPicker').value;
        document.getElementById("copyrightCompanyNameColorIndicator").innerHTML = document.getElementById('copyrightCompanyNameColorPicker').value;
    });

    //on input field data changed, change the font size of the titles to the input field's value
    document.getElementById("firstTitleTextSize").oninput = ( function(event) {
        document.getElementById("firstTitle").style.fontSize = document.getElementById('firstTitleTextSize').value+"px";
        document.getElementById("firstTitleTextSizeIndicator").innerHTML = document.getElementById('firstTitleTextSize').value+"px";  
    });
    document.getElementById("secondTitleTextSize").oninput = ( function(event) {
        document.getElementById("secondTitle").style.fontSize = document.getElementById('secondTitleTextSize').value+"px";
        document.getElementById("secondTitleTextSizeIndicator").innerHTML = document.getElementById('secondTitleTextSize').value+"px";  
    });
    
    //on input field data changed, change the font size of the box headings and paragraphs to the input field's value
    document.getElementById("boxHeaderTextSize").oninput = ( function(event) {
        var boxHeaderTextSizeElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < boxHeaderTextSizeElementIds.length; i++) {
            document.getElementById("hT"+boxHeaderTextSizeElementIds[i]).style.fontSize = document.getElementById('boxHeaderTextSize').value+"px";
        }
        document.getElementById("boxHeaderTextSizeIndicator").innerHTML = document.getElementById('boxHeaderTextSize').value+"px";
    });
    document.getElementById("boxParagraphTextSize").oninput = ( function(event) {
        var boxParagraphTextSizeElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < boxParagraphTextSizeElementIds.length; i++) {
            document.getElementById("pT"+boxParagraphTextSizeElementIds[i]).style.fontSize = document.getElementById('boxParagraphTextSize').value+"px";
        }
        document.getElementById("boxParagraphTextSizeIndicator").innerHTML = document.getElementById('boxParagraphTextSize').value+"px";
    });

    //on input field data changed, change the font size of the copyright message to the input field's value
    document.getElementById("copyrightTextSize").oninput = ( function(event) {
        document.getElementById("firstCopyrightMsg").style.fontSize = document.getElementById('copyrightTextSize').value+"px";
        document.getElementById("personOrCompanyName").style.fontSize = document.getElementById('copyrightTextSize').value+"px";
        document.getElementById("secondCopyrightMsg").style.fontSize = document.getElementById('copyrightTextSize').value+"px";
        document.getElementById("webnifixCompanyCopyright").style.fontSize = document.getElementById('copyrightTextSize').value+"px";
        document.getElementById("heartIcon").style.fontSize = document.getElementById('copyrightTextSize').value+"px";
        document.getElementById("copyrightTextSizeIndicator").innerHTML = document.getElementById('copyrightTextSize').value+"px";
    });

    //on input field data changed, change the font family of the title to the input field's value
    $('#firstTitleFontName').change( function(event) {
        document.getElementById("firstTitle").style.fontFamily = document.getElementById('firstTitleFontName').value;
    });
    $('#secondTitleFontName').change( function(event) {
        document.getElementById("secondTitle").style.fontFamily = document.getElementById('secondTitleFontName').value;
    });

    //on input field data changed, change the font family of the box header and paragraph to the input field's value
    $('#boxHeaderFontName').change( function(event) {
        var boxHeaderFontNameElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < boxHeaderFontNameElementIds.length; i++) {
            document.getElementById("hT"+boxHeaderFontNameElementIds[i]).style.fontFamily = document.getElementById('boxHeaderFontName').value;
        }
    });
    $('#boxParagraphFontName').change( function(event) {
        var boxParagraphFontNameElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < boxParagraphFontNameElementIds.length; i++) {
            document.getElementById("pT"+boxParagraphFontNameElementIds[i]).style.fontFamily = document.getElementById('boxParagraphFontName').value;
        }
    });
    
    //on input field data changed, change the font family of the copyright to the input field's value
    $('#copyrightSpanFontName').change( function(event) {
        document.getElementById("firstCopyrightMsg").style.fontFamily = document.getElementById('copyrightSpanFontName').value;
        document.getElementById("secondCopyrightMsg").style.fontFamily = document.getElementById('copyrightSpanFontName').value;
    });
    $('#copyrightLinksFontName').change( function(event) {
        document.getElementById("personOrCompanyName").style.fontFamily = document.getElementById('copyrightLinksFontName').value;
        document.getElementById("webnifixCompanyCopyright").style.fontFamily = document.getElementById('copyrightLinksFontName').value;
    });

    //on check change to bold mode
    $('#firstTitleFontBold').change( function(event) {
        if (document.getElementById("firstTitleFontBold").checked){
            document.getElementById("firstTitle").style.fontWeight = "600";
        }
        else {
            document.getElementById("firstTitle").style.fontWeight = "500";
        }
    });
    $('#secondTitleFontBold').change( function(event) {
        if (document.getElementById("secondTitleFontBold").checked){
            document.getElementById("secondTitle").style.fontWeight = "600";
        }
        else {
            document.getElementById("secondTitle").style.fontWeight = "500";
        }
    });
    $('#boxHeaderFontBold').change( function(event) {
        if (document.getElementById("boxHeaderFontBold").checked){
            var boxHeaderFontBoldElementIds = Array.from({length: 50}, (_, index) => index + 1);
            for(i = 0; i < boxHeaderFontBoldElementIds.length; i++) {
                document.getElementById("hT"+boxHeaderFontBoldElementIds[i]).style.fontWeight = "600";
            }
        }
        else {
            var boxHeaderFontNotBoldElementIds = Array.from({length: 50}, (_, index) => index + 1);
            for(i = 0; i < boxHeaderFontNotBoldElementIds.length; i++) {
                document.getElementById("hT"+boxHeaderFontNotBoldElementIds[i]).style.fontWeight = "500";
            }
        }
    });
    $('#boxParagraphFontBold').change( function(event) {
        if (document.getElementById("boxParagraphFontBold").checked){
            var boxParagraphFontBoldElementIds = Array.from({length: 50}, (_, index) => index + 1);
            for(i = 0; i < boxParagraphFontBoldElementIds.length; i++) {
                document.getElementById("pT"+boxParagraphFontBoldElementIds[i]).style.fontWeight = "600";
            }
        }
        else {
            var boxParagraphFontBoldElementIds = Array.from({length: 50}, (_, index) => index + 1);
            for(i = 0; i < boxParagraphFontBoldElementIds.length; i++) {
                document.getElementById("pT"+boxParagraphFontBoldElementIds[i]).style.fontWeight = "500";
            }
        }
    });
    $('#copyrightSpanFontBold').change( function(event) {
        if (document.getElementById("copyrightSpanFontBold").checked){
            document.getElementById("firstCopyrightMsg").style.fontWeight = "600";
            document.getElementById("secondCopyrightMsg").style.fontWeight = "600";
        }
        else {
            document.getElementById("firstCopyrightMsg").style.fontWeight = "500";
            document.getElementById("secondCopyrightMsg").style.fontWeight = "500";
        }
    });
    $('#copyrightLinksFontBold').change( function(event) {
        if (document.getElementById("copyrightLinksFontBold").checked){
            document.getElementById("personOrCompanyName").style.fontWeight = "600";
            document.getElementById("webnifixCompanyCopyright").style.fontWeight = "600";
        }
        else {
            document.getElementById("personOrCompanyName").style.fontWeight = "500";
            document.getElementById("webnifixCompanyCopyright").style.fontWeight = "500";
        }
    });

    //on check change to italic mode
    $('#firstTitleFontItalic').change( function(event) {
        if (document.getElementById("firstTitleFontItalic").checked){
            document.getElementById("firstTitle").style.fontStyle = "italic";
        }
        else {
            document.getElementById("firstTitle").style.fontStyle = null;
        }
    });
    $('#secondTitleFontItalic').change( function(event) {
        if (document.getElementById("secondTitleFontItalic").checked){
            document.getElementById("secondTitle").style.fontStyle = "italic";
        }
        else {
            document.getElementById("secondTitle").style.fontStyle = null;
        }
    });
    $('#boxHeaderFontItalic').change( function(event) {
        if (document.getElementById("boxHeaderFontItalic").checked){
            var boxHeaderFontItalicElementIds = Array.from({length: 50}, (_, index) => index + 1);
            for(i = 0; i < boxHeaderFontItalicElementIds.length; i++) {
                document.getElementById("hT"+boxHeaderFontItalicElementIds[i]).style.fontStyle = "italic";
            }
        }
        else {
            var boxHeaderFontNotItalicElementIds = Array.from({length: 50}, (_, index) => index + 1);
            for(i = 0; i < boxHeaderFontNotItalicElementIds.length; i++) {
                document.getElementById("hT"+boxHeaderFontNotItalicElementIds[i]).style.fontStyle = null;
            }
        }
    });
    $('#boxParagraphFontItalic').change( function(event) {
        if (document.getElementById("boxParagraphFontItalic").checked){
            var boxParagraphFontItalicElementIds = Array.from({length: 50}, (_, index) => index + 1);
            for(i = 0; i < boxParagraphFontItalicElementIds.length; i++) {
                document.getElementById("pT"+boxParagraphFontItalicElementIds[i]).style.fontStyle = "italic";
            }
        }
        else {
            var boxParagraphFontItalicElementIds = Array.from({length: 50}, (_, index) => index + 1);
            for(i = 0; i < boxParagraphFontItalicElementIds.length; i++) {
                document.getElementById("pT"+boxParagraphFontItalicElementIds[i]).style.fontStyle = null;
            }
        }
    });
    $('#copyrightSpanFontItalic').change( function(event) {
        if (document.getElementById("copyrightSpanFontItalic").checked){
            document.getElementById("firstCopyrightMsg").style.fontStyle = "italic";
            document.getElementById("secondCopyrightMsg").style.fontStyle = "italic";
        }
        else {
            document.getElementById("firstCopyrightMsg").style.fontStyle = null;
            document.getElementById("secondCopyrightMsg").style.fontStyle = null;
        }
    });
    $('#copyrightLinksFontItalic').change( function(event) {
        if (document.getElementById("copyrightLinksFontItalic").checked){
            document.getElementById("personOrCompanyName").style.fontStyle = "italic";
            document.getElementById("webnifixCompanyCopyright").style.fontStyle = "italic";
        }
        else {
            document.getElementById("personOrCompanyName").style.fontStyle = null;
            document.getElementById("webnifixCompanyCopyright").style.fontStyle = null;
        }
    });

    //on check change to underline mode
    $('#firstTitleFontUnderline').change( function(event) {
        if (document.getElementById("firstTitleFontUnderline").checked){
            document.getElementById("firstTitleBox").style.textDecoration = "underline";
        }
        else {
            document.getElementById("firstTitleBox").style.textDecoration = null;
        }
    });
    $('#secondTitleFontUnderline').change( function(event) {
        if (document.getElementById("secondTitleFontUnderline").checked){
            document.getElementById("secondTitleBox").style.textDecoration = "underline";
        }
        else {
            document.getElementById("secondTitleBox").style.textDecoration = null;
        }
    });
    $('#boxHeaderFontUnderline').change( function(event) {
        if (document.getElementById("boxHeaderFontUnderline").checked){
            var boxHeaderFontUnderlineElementIds = Array.from({length: 50}, (_, index) => index + 1);
            for(i = 0; i < boxHeaderFontUnderlineElementIds.length; i++) {
                document.getElementById("hT"+boxHeaderFontUnderlineElementIds[i]).style.textDecoration = "underline";
            }
        }
        else {
            var boxHeaderFontNotUnderlineElementIds = Array.from({length: 50}, (_, index) => index + 1);
            for(i = 0; i < boxHeaderFontNotUnderlineElementIds.length; i++) {
                document.getElementById("hT"+boxHeaderFontNotUnderlineElementIds[i]).style.textDecoration = null;
            }
        }
    });
    $('#boxParagraphFontUnderline').change( function(event) {
        if (document.getElementById("boxParagraphFontUnderline").checked){
            var boxParagraphFontUnderlineElementIds = Array.from({length: 50}, (_, index) => index + 1);
            for(i = 0; i < boxParagraphFontUnderlineElementIds.length; i++) {
                document.getElementById("pT"+boxParagraphFontUnderlineElementIds[i]).style.textDecoration = "underline";
            }
        }
        else {
            var boxParagraphFontUnderlineElementIds = Array.from({length: 50}, (_, index) => index + 1);
            for(i = 0; i < boxParagraphFontUnderlineElementIds.length; i++) {
                document.getElementById("pT"+boxParagraphFontUnderlineElementIds[i]).style.textDecoration = null;
            }
        }
    });
    $('#copyrightSpanFontUnderline').change( function(event) {
        if (document.getElementById("copyrightSpanFontUnderline").checked){
            document.getElementById("firstCopyrightMsg").style.textDecoration = "underline";
            document.getElementById("secondCopyrightMsg").style.textDecoration = "underline";
        }
        else {
            document.getElementById("firstCopyrightMsg").style.textDecoration = null;
            document.getElementById("secondCopyrightMsg").style.textDecoration = null;
        }
    });
    $('#copyrightLinksFontUnderline').change( function(event) {
        if (document.getElementById("copyrightLinksFontUnderline").checked){
            document.getElementById("personOrCompanyName").style.textDecoration = "underline";
            document.getElementById("webnifixCompanyCopyright").style.textDecoration = "underline";
        }
        else {
            document.getElementById("personOrCompanyName").style.textDecoration = null;
            document.getElementById("webnifixCompanyCopyright").style.textDecoration = null;
        }
    });

    //on check change to uppercase mode
    $('#firstTitleFontUppercase').change( function(event) {
        if (document.getElementById("firstTitleFontUppercase").checked){
            document.getElementById("firstTitle").style.textTransform = "uppercase";
        }
        else {
            document.getElementById("firstTitle").style.textTransform = "none";
        }
    });
    $('#secondTitleFontUppercase').change( function(event) {
        if (document.getElementById("secondTitleFontUppercase").checked){
            document.getElementById("secondTitle").style.textTransform = "uppercase";
        }
        else {
            document.getElementById("secondTitle").style.textTransform = "none";
        }
    });
    $('#boxHeaderFontUppercase').change( function(event) {
        if (document.getElementById("boxHeaderFontUppercase").checked){
            var boxHeaderFontUppercaseElementIds = Array.from({length: 50}, (_, index) => index + 1);
            for(i = 0; i < boxHeaderFontUppercaseElementIds.length; i++) {
                document.getElementById("hT"+boxHeaderFontUppercaseElementIds[i]).style.textTransform = "uppercase";
            }
        }
        else {
            var boxHeaderFontNotUppercaseElementIds = Array.from({length: 50}, (_, index) => index + 1);
            for(i = 0; i < boxHeaderFontNotUppercaseElementIds.length; i++) {
                document.getElementById("hT"+boxHeaderFontNotUppercaseElementIds[i]).style.textTransform = "none";
            }
        }
    });
    $('#boxParagraphFontUppercase').change( function(event) {
        if (document.getElementById("boxParagraphFontUppercase").checked){
            var boxParagraphFontUppercaseElementIds = Array.from({length: 50}, (_, index) => index + 1);
            for(i = 0; i < boxParagraphFontUppercaseElementIds.length; i++) {
                document.getElementById("pT"+boxParagraphFontUppercaseElementIds[i]).style.textTransform = "uppercase";
            }
        }
        else {
            var boxParagraphFontUppercaseElementIds = Array.from({length: 50}, (_, index) => index + 1);
            for(i = 0; i < boxParagraphFontUppercaseElementIds.length; i++) {
                document.getElementById("pT"+boxParagraphFontUppercaseElementIds[i]).style.textTransform = "none";
            }
        }
    });
    $('#copyrightSpanFontUppercase').change( function(event) {
        if (document.getElementById("copyrightSpanFontUppercase").checked){
            document.getElementById("firstCopyrightMsg").style.textTransform = "uppercase";
            document.getElementById("secondCopyrightMsg").style.textTransform = "uppercase";
        }
        else {
            document.getElementById("firstCopyrightMsg").style.textTransform = "none";
            document.getElementById("secondCopyrightMsg").style.textTransform = "none";
        }
    });
    $('#copyrightLinksFontUppercase').change( function(event) {
        if (document.getElementById("copyrightLinksFontUppercase").checked){
            document.getElementById("personOrCompanyName").style.textTransform = "uppercase";
            document.getElementById("webnifixCompanyCopyright").style.textTransform = "uppercase";
        }
        else {
            document.getElementById("personOrCompanyName").style.textTransform = "none";
            document.getElementById("webnifixCompanyCopyright").style.textTransform = "none";
        }
    });

    //on input field data changed, change the image properties to the input field's value
    document.getElementById("imgWidth").oninput = ( function(event) {
        var imgWidthElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < imgWidthElementIds.length; i++) {
            document.getElementById("img"+imgWidthElementIds[i]).style.height = "auto";
            document.getElementById("img"+imgWidthElementIds[i]).style.width = document.getElementById('imgWidth').value*5+"px";
        }
        document.getElementById("imgWidthIndicator").innerHTML = document.getElementById('imgWidth').value*5+"px";
        document.getElementById("imgHeightIndicator").innerHTML = "Auto"
        document.getElementById('imgHeight').value = 0;
    });
    document.getElementById("imgHeight").oninput = ( function(event) {
        var imgHeightElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < imgHeightElementIds.length; i++) {
            document.getElementById("img"+imgHeightElementIds[i]).style.width = "auto";
            document.getElementById("img"+imgHeightElementIds[i]).style.height = document.getElementById('imgHeight').value*5+"px";
        }
        document.getElementById("imgHeightIndicator").innerHTML = document.getElementById('imgHeight').value*5+"px";
        document.getElementById("imgWidthIndicator").innerHTML = "Auto"
        document.getElementById('imgWidth').value = 0;
    });
    document.getElementById("imgBorderRadius").oninput = ( function(event) {
        var imgBorderRadiusElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < imgBorderRadiusElementIds.length; i++) {
            document.getElementById("img"+imgBorderRadiusElementIds[i]).style.borderRadius = document.getElementById('imgBorderRadius').value*5+"px";
        }
        document.getElementById("imgBorderRadiusIndicator").innerHTML = document.getElementById('imgBorderRadius').value*5+"px";
    });

    //on input field data changed, change the max width of the container to the input field's value
    document.getElementById("containerWidth").oninput = ( function(event) {
        document.getElementById("container").style.width = document.getElementById('containerWidth').value*50+"px";
        document.getElementById("containerWidthIndicator").innerHTML = document.getElementById('containerWidth').value*50+"px";
        if (document.getElementById("modeStateHidden").style.color === "blue"){
            var OneColumnModeWidthElementIds = Array.from({length: 50}, (_, index) => index + 1);
            for(i = 0; i < OneColumnModeWidthElementIds.length; i++) {
                document.getElementById("box"+OneColumnModeWidthElementIds[i]).style.width = "100%";
            }
        }
    });

    //on input field data changed, change margin of the box to the input field's value
    document.getElementById("boxMarginLeftRight").oninput = ( function(event) {
        var boxMarginLeftRightElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < boxMarginLeftRightElementIds.length; i++) {
            document.getElementById("box"+boxMarginLeftRightElementIds[i]).style.marginLeft = (document.getElementById('boxMarginLeftRight').value*5-2)+"px";
            document.getElementById("box"+boxMarginLeftRightElementIds[i]).style.marginRight = (document.getElementById('boxMarginLeftRight').value*5-2)+"px";
        }
        document.getElementById("boxMarginLeftRightIndicator").innerHTML = document.getElementById('boxMarginLeftRight').value*5+"px";
    });
    document.getElementById("boxMarginTop").oninput = ( function(event) {
        var boxMarginTopElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < boxMarginTopElementIds.length; i++) {
            document.getElementById("box"+boxMarginTopElementIds[i]).style.marginTop = document.getElementById('boxMarginTop').value*5+"px";
            document.getElementById("copyrightMessage").style.marginTop = document.getElementById('boxMarginTop').value*5+"px";
        }
        document.getElementById("boxMarginTopIndicator").innerHTML = document.getElementById('boxMarginTop').value*5+"px";
    });
    document.getElementById("textBoxMargin").oninput = ( function(event) {
        var textBoxMarginElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < textBoxMarginElementIds.length; i++) {
            if (modeStateVar === "Text below image mode"){
                document.getElementById("boxData"+textBoxMarginElementIds[i]).style.marginBottom = document.getElementById('textBoxMargin').value*5+"px";
                document.getElementById("boxData"+textBoxMarginElementIds[i]).style.marginRight = null;
            }
            else{
                document.getElementById("boxData"+textBoxMarginElementIds[i]).style.marginBottom = null;
                document.getElementById("boxData"+textBoxMarginElementIds[i]).style.marginRight = document.getElementById('textBoxMargin').value*5+"px";
            }
        }
        document.getElementById("textBoxMarginIndicator").innerHTML = document.getElementById('textBoxMargin').value*5+"px";
    });

    //on input field data changed, change padding of the title, box text and copyright message to the input field's value
    document.getElementById("containerPadding").oninput = ( function(event) {
        document.getElementById("container").style.padding = document.getElementById('containerPadding').value*5+"px";
        document.getElementById("containerPaddingIndicator").innerHTML = document.getElementById('containerPadding').value*5+"px";
    });
    document.getElementById("titlePadding").oninput = ( function(event) {
        document.getElementById("title").style.padding = document.getElementById('titlePadding').value*2+"px";
        document.getElementById("titlePaddingIndicator").innerHTML = document.getElementById('titlePadding').value*2+"px";
    });
    document.getElementById("itemBoxPadding").oninput = ( function(event) {
        var itemBoxPaddingElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < itemBoxPaddingElementIds.length; i++) {
            document.getElementById("box"+itemBoxPaddingElementIds[i]).style.padding = document.getElementById('itemBoxPadding').value*2+"px";
        }
        document.getElementById("itemBoxPaddingIndicator").innerHTML = document.getElementById('itemBoxPadding').value*2+"px";
    });
    document.getElementById("imgBoxPadding").oninput = ( function(event) {
        var imgBoxPaddingElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < imgBoxPaddingElementIds.length; i++) {
            document.getElementById("boxData"+imgBoxPaddingElementIds[i]).style.padding = document.getElementById('imgBoxPadding').value*2+"px";
        }
        document.getElementById("imgBoxPaddingIndicator").innerHTML = document.getElementById('imgBoxPadding').value*2+"px";
    });
    document.getElementById("boxTextPadding").oninput = ( function(event) {
        var boxTextPaddingElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < boxTextPaddingElementIds.length; i++) {
            document.getElementById("boxText"+boxTextPaddingElementIds[i]).style.padding = document.getElementById('boxTextPadding').value+"px";
        }
        document.getElementById("boxTextPaddingIndicator").innerHTML = document.getElementById('boxTextPadding').value+"px";
    });
    document.getElementById("copyrightPadding").oninput = ( function(event) {
        document.getElementById("copyrightMessage").style.padding = document.getElementById('copyrightPadding').value+"px";
        document.getElementById("copyrightPaddingIndicator").innerHTML = document.getElementById('copyrightPadding').value+"px";
    });

    //on input field data changed, change border radius of the container, title, img box, box text and the copyright message to the input field's value
    document.getElementById("containerBorderRadius").oninput = ( function(event) {
        document.getElementById("container").style.borderRadius = document.getElementById('containerBorderRadius').value*5+"px";
        document.getElementById("containerBorderRadiusIndicator").innerHTML = document.getElementById('containerBorderRadius').value*5+"px";
    });
    document.getElementById("titleBorderRadius").oninput = ( function(event) {
        document.getElementById("title").style.borderRadius = document.getElementById('titleBorderRadius').value*5+"px";
        document.getElementById("titleBorderRadiusIndicator").innerHTML = document.getElementById('titleBorderRadius').value*5+"px";
    });
    document.getElementById("itemBoxBorderRadius").oninput = ( function(event) {
        var itemBoxBorderRadiusElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < itemBoxBorderRadiusElementIds.length; i++) {
            document.getElementById("box"+itemBoxBorderRadiusElementIds[i]).style.borderRadius = document.getElementById('itemBoxBorderRadius').value*5+"px";
        }
        document.getElementById("itemBoxBorderRadiusIndicator").innerHTML = document.getElementById('itemBoxBorderRadius').value*5+"px";
    });
    document.getElementById("imgBoxBorderRadius").oninput = ( function(event) {
        var imgBoxBorderRadiusElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < imgBoxBorderRadiusElementIds.length; i++) {
            document.getElementById("boxData"+imgBoxBorderRadiusElementIds[i]).style.borderRadius = document.getElementById('imgBoxBorderRadius').value*5+"px";
        }
        document.getElementById("imgBoxBorderRadiusIndicator").innerHTML = document.getElementById('imgBoxBorderRadius').value*5+"px";
    });
    document.getElementById("boxTextBorderRadius").oninput = ( function(event) {
        var boxTextBorderRadiusElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < boxTextBorderRadiusElementIds.length; i++) {
            document.getElementById("boxText"+boxTextBorderRadiusElementIds[i]).style.borderRadius = document.getElementById('boxTextBorderRadius').value*5+"px";
        }
        document.getElementById("boxTextBorderRadiusIndicator").innerHTML = document.getElementById('boxTextBorderRadius').value*5+"px";
    });
    document.getElementById("copyrightMessageBorderRadius").oninput = ( function(event) {
        document.getElementById("copyrightMessage").style.borderRadius = document.getElementById('copyrightMessageBorderRadius').value*5+"px";
        document.getElementById("copyrightMessageBorderRadiusIndicator").innerHTML = document.getElementById('copyrightMessageBorderRadius').value*5+"px";
    });

    //change background colors on input field value change
    document.getElementById("containerBackgroundColor").oninput = ( function(event) {
        document.getElementById("container").style.background = null;
        document.getElementById("container").style.backgroundColor = document.getElementById('containerBackgroundColor').value;
        document.getElementById("containerBackgroundColorIndicator").innerHTML = document.getElementById('containerBackgroundColor').value;
    });
    document.getElementById("titleBackgroundColor").oninput = ( function(event) {
        document.getElementById("title").style.background = null;
        document.getElementById("title").style.backgroundColor = document.getElementById('titleBackgroundColor').value;
        document.getElementById("titleBackgroundColorIndicator").innerHTML = document.getElementById('titleBackgroundColor').value;
    });
    document.getElementById("itemBoxBackgroundColor").oninput = ( function(event) {
        var itemBoxBackgroundColorElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < itemBoxBackgroundColorElementIds.length; i++) {
            document.getElementById("box"+itemBoxBackgroundColorElementIds[i]).style.background = null;
            document.getElementById("box"+itemBoxBackgroundColorElementIds[i]).style.backgroundColor = document.getElementById('itemBoxBackgroundColor').value;
        }
        document.getElementById("itemBoxBackgroundColorIndicator").innerHTML = document.getElementById('itemBoxBackgroundColor').value;
    });
    document.getElementById("imageBoxBackgroundColor").oninput = ( function(event) {
        var imageBoxBackgroundColorElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < imageBoxBackgroundColorElementIds.length; i++) {
            document.getElementById("boxData"+imageBoxBackgroundColorElementIds[i]).style.background = null;
            document.getElementById("boxData"+imageBoxBackgroundColorElementIds[i]).style.backgroundColor = document.getElementById('imageBoxBackgroundColor').value;
        }
        document.getElementById("imageBoxBackgroundColorIndicator").innerHTML = document.getElementById('imageBoxBackgroundColor').value;
    });
    document.getElementById("textBoxBackgroundColor").oninput = ( function(event) {
        var textBoxBackgroundColorElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < textBoxBackgroundColorElementIds.length; i++) {
            document.getElementById("boxText"+textBoxBackgroundColorElementIds[i]).style.background = null;
            document.getElementById("boxText"+textBoxBackgroundColorElementIds[i]).style.backgroundColor = document.getElementById('textBoxBackgroundColor').value;
        }
        document.getElementById("textBoxBackgroundColorIndicator").innerHTML = document.getElementById('textBoxBackgroundColor').value;
    });
    document.getElementById("copyrightMessageBackgroundColor").oninput = ( function(event) {
        document.getElementById("copyrightMessage").style.background = null;
        document.getElementById("copyrightMessage").style.backgroundColor = document.getElementById('copyrightMessageBackgroundColor').value;
        document.getElementById("copyrightMessageBackgroundColorIndicator").innerHTML = document.getElementById('copyrightMessageBackgroundColor').value;
    });

    //remove background colors on click
    document.getElementById("containerBackgroundRemove").onclick = ( function(event) {
        document.getElementById("container").style.backgroundColor = null;
    });
    document.getElementById("titleBackgroundRemove").onclick = ( function(event) {
        document.getElementById("title").style.backgroundColor = null;
    });
    document.getElementById("itemBoxBackgroundRemove").onclick = ( function(event) {
        var itemBoxBackgroundRemoveElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < itemBoxBackgroundRemoveElementIds.length; i++) {
            document.getElementById("box"+itemBoxBackgroundRemoveElementIds[i]).style.backgroundColor = null;
        }
    });
    document.getElementById("imageBoxBackgroundRemove").onclick = ( function(event) {
        var imageBoxBackgroundRemoveElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < imageBoxBackgroundRemoveElementIds.length; i++) {
            document.getElementById("boxData"+imageBoxBackgroundRemoveElementIds[i]).style.backgroundColor = null;
        }
    });
    document.getElementById("textBoxBackgroundRemove").onclick = ( function(event) {
        var textBoxBackgroundRemoveElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < textBoxBackgroundRemoveElementIds.length; i++) {
            document.getElementById("boxText"+textBoxBackgroundRemoveElementIds[i]).style.backgroundColor = null;
        }
    });
    document.getElementById("copyrightMessageBackgroundRemove").onclick = ( function(event) {
        document.getElementById("copyrightMessage").style.backgroundColor = null;
    });

    //change box shadows of container on input field value change
    document.getElementById("containerBoxShadow1").oninput = ( function(event) {
        if (document.getElementById("containerBoxShadowNone").checked == false){
            if (document.getElementById("containerBoxShadowOutside").checked){
                containerBoxShadowOutside();
            }
            else {
                containerBoxShadowInside();
            }
        }
        else{
            containerBoxShadowNone();
        }
    });
    document.getElementById("containerBoxShadow2").oninput = ( function(event) {
        if (document.getElementById("containerBoxShadowNone").checked == false){
            if (document.getElementById("containerBoxShadowOutside").checked){
                containerBoxShadowOutside();
            }
            else {
                containerBoxShadowInside();
            }
        }
        else{
            containerBoxShadowNone();
        }
    });

    document.getElementById("titleBoxShadow1").oninput = ( function(event) {
        if (document.getElementById("titleBoxShadowNone").checked == false){
            if (document.getElementById("titleBoxShadowOutside").checked){
                titleBoxShadowOutside();
            }
            else {
                titleBoxShadowInside();
            }
        }
        else{
            titleBoxShadowNone();
        }
    });
    document.getElementById("titleBoxShadow2").oninput = ( function(event) {
        if (document.getElementById("titleBoxShadowNone").checked == false){
            if (document.getElementById("titleBoxShadowOutside").checked){
                titleBoxShadowOutside();
            }
            else {
                titleBoxShadowInside();
            }
        }
        else{
            titleBoxShadowNone();
        }
    });

    document.getElementById("itemBoxBoxShadow1").oninput = ( function(event) {
        if (document.getElementById("itemBoxBoxShadowNone").checked == false){
            if (document.getElementById("itemBoxBoxShadowOutside").checked){
                itemBoxBoxShadowOutside();
            }
            else {
                itemBoxBoxShadowInside();
            }
        }
        else{
            itemBoxBoxShadowNone();
        }
    });
    document.getElementById("itemBoxBoxShadow2").oninput = ( function(event) {
        if (document.getElementById("itemBoxBoxShadowNone").checked == false){
            if (document.getElementById("itemBoxBoxShadowOutside").checked){
                itemBoxBoxShadowOutside();
            }
            else {
                itemBoxBoxShadowInside();
            }
        }
        else{
            itemBoxBoxShadowNone();
        }
    });

    document.getElementById("imageBoxBoxShadow1").oninput = ( function(event) {
        if (document.getElementById("imageBoxBoxShadowNone").checked == false){
            if (document.getElementById("imageBoxBoxShadowOutside").checked){
                imageBoxBoxShadowOutside();
            }
            else {
                imageBoxBoxShadowInside();
            }
        }
        else{
            imageBoxBoxShadowNone();
        }
    });
    document.getElementById("imageBoxBoxShadow2").oninput = ( function(event) {
        if (document.getElementById("imageBoxBoxShadowNone").checked == false){
            if (document.getElementById("imageBoxBoxShadowOutside").checked){
                imageBoxBoxShadowOutside();
            }
            else {
                imageBoxBoxShadowInside();
            }
        }
        else{
            imageBoxBoxShadowNone();
        }
    });

    document.getElementById("textBoxBoxShadow1").oninput = ( function(event) {
        if (document.getElementById("textBoxBoxShadowNone").checked == false){
            if (document.getElementById("textBoxBoxShadowOutside").checked){
                textBoxBoxShadowOutside();
            }
            else {
                textBoxBoxShadowInside();
            }
        }
        else{
            textBoxBoxShadowNone();
        }
    });
    document.getElementById("textBoxBoxShadow2").oninput = ( function(event) {
        if (document.getElementById("textBoxBoxShadowNone").checked == false){
            if (document.getElementById("textBoxBoxShadowOutside").checked){
                textBoxBoxShadowOutside();
            }
            else {
                textBoxBoxShadowInside();
            }
        }
        else{
            textBoxBoxShadowNone();
        }
    });

    document.getElementById("copyrightBoxShadow1").oninput = ( function(event) {
        if (document.getElementById("copyrightBoxShadowNone").checked == false){
            if (document.getElementById("copyrightBoxShadowOutside").checked){
                copyrightBoxShadowOutside();
            }
            else {
                copyrightBoxShadowInside();
            }
        }
        else{
            copyrightBoxShadowNone();
        }
    });
    document.getElementById("copyrightBoxShadow2").oninput = ( function(event) {
        if (document.getElementById("copyrightBoxShadowNone").checked == false){
            if (document.getElementById("copyrightBoxShadowOutside").checked){
                copyrightBoxShadowOutside();
            }
            else {
                copyrightBoxShadowInside();
            }
        }
        else{
            copyrightBoxShadowNone();
        }
    });

    //change background liners of container on input field value change
    $('#bgContainerNone').click( function(event) {
        document.getElementById("container").style.background = null;
    });
    $('#bgContainer1').click( function(event) {
        document.getElementById("container").style.background = "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)";
    });
    $('#bgContainer2').click( function(event) {
        document.getElementById("container").style.background = "linear-gradient(to right, #b92b27, #1565c0)";
    });
    $('#bgContainer3').click( function(event) {
        document.getElementById("container").style.background = "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)";
    });
    $('#bgContainer4').click( function(event) {
        document.getElementById("container").style.background = "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)";
    });
    $('#bgContainer5').click( function(event) {
        document.getElementById("container").style.background = "linear-gradient(to right, #5433ff, #20bdff, #a5fecb)";
    });
    $('#bgContainer6').click( function(event) {
        document.getElementById("container").style.background = "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)";
    });
    $('#bgContainer7').click( function(event) {
        document.getElementById("container").style.background = "linear-gradient(to right, #005aa7, #fffde4)";
    });
    $('#bgContainer8').click( function(event) {
        document.getElementById("container").style.background = "linear-gradient(to right, #11998e, #38ef7d)";
    });
    $('#bgContainer9').click( function(event) {
        document.getElementById("container").style.background = "linear-gradient(to right, #200122, #6f0000)";
    });
    $('#bgContainer10').click( function(event) {
        document.getElementById("container").style.background = "linear-gradient(to right, #cc2b5e, #753a88)";
    });

    //change background liners of title on input field value change
    $('#bgTitleNone').click( function(event) {
        document.getElementById("title").style.background = null;
    });
    $('#bgTitle1').click( function(event) {
        document.getElementById("title").style.background = "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)";
    });
    $('#bgTitle2').click( function(event) {
        document.getElementById("title").style.background = "linear-gradient(to right, #b92b27, #1565c0)";
    });
    $('#bgTitle3').click( function(event) {
        document.getElementById("title").style.background = "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)";
    });
    $('#bgTitle4').click( function(event) {
        document.getElementById("title").style.background = "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)";
    });
    $('#bgTitle5').click( function(event) {
        document.getElementById("title").style.background = "linear-gradient(to right, #5433ff, #20bdff, #a5fecb)";
    });
    $('#bgTitle6').click( function(event) {
        document.getElementById("title").style.background = "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)";
    });
    $('#bgTitle7').click( function(event) {
        document.getElementById("title").style.background = "linear-gradient(to right, #005aa7, #fffde4)";
    });
    $('#bgTitle8').click( function(event) {
        document.getElementById("title").style.background = "linear-gradient(to right, #11998e, #38ef7d)";
    });
    $('#bgTitle9').click( function(event) {
        document.getElementById("title").style.background = "linear-gradient(to right, #200122, #6f0000)";
    });
    $('#bgTitle10').click( function(event) {
        document.getElementById("title").style.background = "linear-gradient(to right, #cc2b5e, #753a88)";
    });

    //change background liners of item box on input field value change
    $('#bgItemNone').click( function(event) {
        var bgItemNoneElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgItemNoneElementIds.length; i++) {
            document.getElementById("box"+bgItemNoneElementIds[i]).style.background = null;
        }
    });
    $('#bgItem1').click( function(event) {
        var bgItem1ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgItem1ElementIds.length; i++) {
            document.getElementById("box"+bgItem1ElementIds[i]).style.background = "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)";
        }
    });
    $('#bgItem2').click( function(event) {
        var bgItem2ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgItem2ElementIds.length; i++) {
            document.getElementById("box"+bgItem2ElementIds[i]).style.background = "linear-gradient(to right, #b92b27, #1565c0)";
        }
    });
    $('#bgItem3').click( function(event) {
        var bgItem3ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgItem3ElementIds.length; i++) {
            document.getElementById("box"+bgItem3ElementIds[i]).style.background = "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)";
        }
    });
    $('#bgItem4').click( function(event) {
        var bgItem4ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgItem4ElementIds.length; i++) {
            document.getElementById("box"+bgItem4ElementIds[i]).style.background = "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)";
        }
    });
    $('#bgItem5').click( function(event) {
        var bgItem5ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgItem5ElementIds.length; i++) {
            document.getElementById("box"+bgItem5ElementIds[i]).style.background = "linear-gradient(to right, #5433ff, #20bdff, #a5fecb)";
        }
    });
    $('#bgItem6').click( function(event) {
        var bgItem6ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgItem6ElementIds.length; i++) {
            document.getElementById("box"+bgItem6ElementIds[i]).style.background = "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)";
        }
    });
    $('#bgItem7').click( function(event) {
        var bgItem7ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgItem7ElementIds.length; i++) {
            document.getElementById("box"+bgItem7ElementIds[i]).style.background = "linear-gradient(to right, #005aa7, #fffde4)";
        }
    });
    $('#bgItem8').click( function(event) {
        var bgItem8ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgItem8ElementIds.length; i++) {
            document.getElementById("box"+bgItem8ElementIds[i]).style.background = "linear-gradient(to right, #11998e, #38ef7d)";
        }
    });
    $('#bgItem9').click( function(event) {
        var bgItem9ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgItem9ElementIds.length; i++) {
            document.getElementById("box"+bgItem9ElementIds[i]).style.background = "linear-gradient(to right, #200122, #6f0000)";
        }
    });
    $('#bgItem10').click( function(event) {
        var bgItem10ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgItem10ElementIds.length; i++) {
            document.getElementById("box"+bgItem10ElementIds[i]).style.background = "linear-gradient(to right, #cc2b5e, #753a88)";
        }
    });

    //change background liners of image box on input field value change
    $('#bgImageBoxNone').click( function(event) {
        var bgImageBoxNoneElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgImageBoxNoneElementIds.length; i++) {
            document.getElementById("boxData"+bgImageBoxNoneElementIds[i]).style.background = null;
        }
    });
    $('#bgImageBox1').click( function(event) {
        var bgImageBox1ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgImageBox1ElementIds.length; i++) {
            document.getElementById("boxData"+bgImageBox1ElementIds[i]).style.background = "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)";
        }
    });
    $('#bgImageBox2').click( function(event) {
        var bgImageBox2ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgImageBox2ElementIds.length; i++) {
            document.getElementById("boxData"+bgImageBox2ElementIds[i]).style.background = "linear-gradient(to right, #b92b27, #1565c0)";
        }
    });
    $('#bgImageBox3').click( function(event) {
        var bgImageBox3ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgImageBox3ElementIds.length; i++) {
            document.getElementById("boxData"+bgImageBox3ElementIds[i]).style.background = "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)";
        }
    });
    $('#bgImageBox4').click( function(event) {
        var bgImageBox4ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgImageBox4ElementIds.length; i++) {
            document.getElementById("boxData"+bgImageBox4ElementIds[i]).style.background = "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)";
        }
    });
    $('#bgImageBox5').click( function(event) {
        var bgImageBox5ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgImageBox5ElementIds.length; i++) {
            document.getElementById("boxData"+bgImageBox5ElementIds[i]).style.background = "linear-gradient(to right, #5433ff, #20bdff, #a5fecb)";
        }
    });
    $('#bgImageBox6').click( function(event) {
        var bgImageBox6ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgImageBox6ElementIds.length; i++) {
            document.getElementById("boxData"+bgImageBox6ElementIds[i]).style.background = "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)";
        }
    });
    $('#bgImageBox7').click( function(event) {
        var bgImageBox7ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgImageBox7ElementIds.length; i++) {
            document.getElementById("boxData"+bgImageBox7ElementIds[i]).style.background = "linear-gradient(to right, #005aa7, #fffde4)";
        }
    });
    $('#bgImageBox8').click( function(event) {
        var bgImageBox8ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgImageBox8ElementIds.length; i++) {
            document.getElementById("boxData"+bgImageBox8ElementIds[i]).style.background = "linear-gradient(to right, #11998e, #38ef7d)";
        }
    });
    $('#bgImageBox9').click( function(event) {
        var bgImageBox9ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgImageBox9ElementIds.length; i++) {
            document.getElementById("boxData"+bgImageBox9ElementIds[i]).style.background = "linear-gradient(to right, #200122, #6f0000)";
        }
    });
    $('#bgImageBox10').click( function(event) {
        var bgImageBox10ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgImageBox10ElementIds.length; i++) {
            document.getElementById("boxData"+bgImageBox10ElementIds[i]).style.background = "linear-gradient(to right, #cc2b5e, #753a88)";
        }
    });
    
    //change background liners of text box on input field value change
    $('#bgTextBoxNone').click( function(event) {
        var bgTextBoxNoneElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgTextBoxNoneElementIds.length; i++) {
            document.getElementById("boxText"+bgTextBoxNoneElementIds[i]).style.background = null;
        }
    });
    $('#bgTextBox1').click( function(event) {
        var bgImageBox1ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgImageBox1ElementIds.length; i++) {
            document.getElementById("boxText"+bgImageBox1ElementIds[i]).style.background = "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)";
        }
    });
    $('#bgTextBox2').click( function(event) {
        var bgImageBox2ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgImageBox2ElementIds.length; i++) {
            document.getElementById("boxText"+bgImageBox2ElementIds[i]).style.background = "linear-gradient(to right, #b92b27, #1565c0)";
        }
    });
    $('#bgTextBox3').click( function(event) {
        var bgImageBox3ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgImageBox3ElementIds.length; i++) {
            document.getElementById("boxText"+bgImageBox3ElementIds[i]).style.background = "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)";
        }
    });
    $('#bgTextBox4').click( function(event) {
        var bgImageBox4ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgImageBox4ElementIds.length; i++) {
            document.getElementById("boxText"+bgImageBox4ElementIds[i]).style.background = "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)";
        }
    });
    $('#bgTextBox5').click( function(event) {
        var bgImageBox5ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgImageBox5ElementIds.length; i++) {
            document.getElementById("boxText"+bgImageBox5ElementIds[i]).style.background = "linear-gradient(to right, #5433ff, #20bdff, #a5fecb)";
        }
    });
    $('#bgTextBox6').click( function(event) {
        var bgImageBox6ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgImageBox6ElementIds.length; i++) {
            document.getElementById("boxText"+bgImageBox6ElementIds[i]).style.background = "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)";
        }
    });
    $('#bgTextBox7').click( function(event) {
        var bgImageBox7ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgImageBox7ElementIds.length; i++) {
            document.getElementById("boxText"+bgImageBox7ElementIds[i]).style.background = "linear-gradient(to right, #005aa7, #fffde4)";
        }
    });
    $('#bgTextBox8').click( function(event) {
        var bgImageBox8ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgImageBox8ElementIds.length; i++) {
            document.getElementById("boxText"+bgImageBox8ElementIds[i]).style.background = "linear-gradient(to right, #11998e, #38ef7d)";
        }
    });
    $('#bgTextBox9').click( function(event) {
        var bgImageBox9ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgImageBox9ElementIds.length; i++) {
            document.getElementById("boxText"+bgImageBox9ElementIds[i]).style.background = "linear-gradient(to right, #200122, #6f0000)";
        }
    });
    $('#bgTextBox10').click( function(event) {
        var bgImageBox10ElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < bgImageBox10ElementIds.length; i++) {
            document.getElementById("boxText"+bgImageBox10ElementIds[i]).style.background = "linear-gradient(to right, #cc2b5e, #753a88)";
        }
    });

    //change background liners of copyright message on input field value change
    $('#bgCopyrightNone').click( function(event) {
        document.getElementById("copyrightMessage").style.background = null;
    });
    $('#bgCopyright1').click( function(event) {
        document.getElementById("copyrightMessage").style.background = "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)";
    });
    $('#bgCopyright2').click( function(event) {
        document.getElementById("copyrightMessage").style.background = "linear-gradient(to right, #b92b27, #1565c0)";
    });
    $('#bgCopyright3').click( function(event) {
        document.getElementById("copyrightMessage").style.background = "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)";
    });
    $('#bgCopyright4').click( function(event) {
        document.getElementById("copyrightMessage").style.background = "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)";
    });
    $('#bgCopyright5').click( function(event) {
        document.getElementById("copyrightMessage").style.background = "linear-gradient(to right, #5433ff, #20bdff, #a5fecb)";
    });
    $('#bgCopyright6').click( function(event) {
        document.getElementById("copyrightMessage").style.background = "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)";
    });
    $('#bgCopyright7').click( function(event) {
        document.getElementById("copyrightMessage").style.background = "linear-gradient(to right, #005aa7, #fffde4)";
    });
    $('#bgCopyright8').click( function(event) {
        document.getElementById("copyrightMessage").style.background = "linear-gradient(to right, #11998e, #38ef7d)";
    });
    $('#bgCopyright9').click( function(event) {
        document.getElementById("copyrightMessage").style.background = "linear-gradient(to right, #200122, #6f0000)";
    });
    $('#bgCopyright10').click( function(event) {
        document.getElementById("copyrightMessage").style.background = "linear-gradient(to right, #cc2b5e, #753a88)";
    });
});

//show post in full screen
function showPost(){
    document.getElementById("showPostBox").style.height = "100%";
    document.body.style.overflow = "hidden";
    $(window).scrollTop(0);
    document.getElementById("showPostBox").innerHTML = document.getElementById("postContent").innerHTML;
};
function hidePost(){
    document.getElementById("showPostBox").style.height = "0%";
    document.body.style.overflow = "auto";
};

//show editor
var editorViewingMode = false;
function showEditor(){
    if (editorViewingMode == false){
        document.getElementById("inputs").style.width = "100%";
        document.getElementById("inputs").style.height = "100vh";
        document.getElementById("inputs").style.borderRadius = "0px";
        var inputItemsElementIds = Array.from({length: 50}, (_, index) => index + 1);
        for(i = 0; i < inputItemsElementIds.length; i++) {
            document.getElementById("input"+inputItemsElementIds[i]).style.marginLeft = "1px";
            document.getElementById("input"+inputItemsElementIds[i]).style.marginRight = "1px";
        }
        $('#navButtonsOnScroll').removeClass("navButtonsHorizontalPositioning");
        $('#navButtonsOnScroll').addClass("navButtonsHorizontalPositioningOnViewEditor");
        document.body.style.overflow = "hidden";
        $(window).scrollTop(0);
        editorViewingMode = true;
        document.getElementById("showEditor").innerHTML = "Close Editor";
        document.getElementById("showEditorOnScroll").innerHTML = "Close Editor";
    } else{
        document.getElementById("inputs").style.width = null;
        document.getElementById("inputs").style.height = null;
        document.getElementById("inputs").style.borderRadius = null;
        $('#navButtonsOnScroll').removeClass("navButtonsHorizontalPositioningOnViewEditor");
        $('#navButtonsOnScroll').addClass("navButtonsHorizontalPositioning");
        document.body.style.overflow = "auto";
        $(window).scrollTop(0);
        editorViewingMode = false;
        document.getElementById("showEditor").innerHTML = "View Editor";
        document.getElementById("showEditorOnScroll").innerHTML = "View Editor";
    }
};

//on scrolling the input field, make nav bar fixed on the top
$(inputs).scroll(function() {
    if ($(this).scrollTop() > 100){
        $('#navButtonsOnScroll').addClass("visibleNavButtons");
    }
    else{
        $('#navButtonsOnScroll').removeClass("visibleNavButtons");
    }
});

//go to fullscreen
var isFullscreen = false;
function fullscreen(){
      if (isFullscreen == false) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
          } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
            document.documentElement.webkitRequestFullscreen();
          } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
            document.documentElement.msRequestFullscreen();
          }
          isFullscreen = true;
          document.getElementById("fullscreen").innerHTML = "Exit Fullscreen";
          document.getElementById("fullscreenOnScroll").innerHTML = "Exit Fullscreen";
      } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
          }
          isFullscreen = false;
          document.getElementById("fullscreen").innerHTML = "Go Fullscreen";
          document.getElementById("fullscreenOnScroll").innerHTML = "Go Fullscreen";
      }
};

//zoom control
var postZoomLevel = 100;
function zoomOut(){
    if (postZoomLevel != 10) {
        postZoomLevel = postZoomLevel - 10;
    }
    document.getElementById("container").className = "container zoom" + postZoomLevel;
    document.getElementById("zoomNormal").innerHTML = postZoomLevel+"%";
    document.getElementById("zoomNormalOnScroll").innerHTML = postZoomLevel+"%";
};
function zoomIn(){
    if (postZoomLevel != 200) {
        postZoomLevel = postZoomLevel + 10;
    }
    document.getElementById("container").className = "container zoom" + postZoomLevel;
    document.getElementById("zoomNormal").innerHTML = postZoomLevel+"%";
    document.getElementById("zoomNormalOnScroll").innerHTML = postZoomLevel+"%";
};
function zoomNormal(){
    postZoomLevel = 100;
    document.getElementById("container").className = "container zoom" + postZoomLevel;
    document.getElementById("zoomNormal").innerHTML = postZoomLevel+"%";
    document.getElementById("zoomNormalOnScroll").innerHTML = postZoomLevel+"%";
}

//go to landscape mode message when the device height is greater than the width and 600px
if (screen.width < screen.height && screen.height > 600){
    alert("Please go to landscape mode for a better experience")
}

//image uploader and cropper for the first 4. others will run with the add function.
var resize1 = $('#cropPreview1').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage1').on('change', function () { 
var reader1 = new FileReader();reader1.onload = function (e) {resize1.croppie('bind',{url: e.target.result});}
reader1.readAsDataURL(this.files[0]);});$('#cropImage1').on('click', function (ev) {resize1.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("img1").setAttribute("src", img)});});
$('#inputImage1').change( function(uploadImageUrl) {document.getElementById("img1").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
$('#revertImage1').click( function(event) {document.getElementById("img1").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});

var resize2 = $('#cropPreview2').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage2').on('change', function () { 
var reader2 = new FileReader();reader2.onload = function (e) {resize2.croppie('bind',{url: e.target.result});}
reader2.readAsDataURL(this.files[0]);});$('#cropImage2').on('click', function (ev) {resize2.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("img2").setAttribute("src", img)});});
$('#inputImage2').change( function(uploadImageUrl) {document.getElementById("img2").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
$('#revertImage2').click( function(event) {document.getElementById("img2").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});

var resize3 = $('#cropPreview3').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage3').on('change', function () { 
var reader3 = new FileReader();reader3.onload = function (e) {resize3.croppie('bind',{url: e.target.result});}
reader3.readAsDataURL(this.files[0]);});$('#cropImage3').on('click', function (ev) {resize3.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("img3").setAttribute("src", img)});});
$('#inputImage3').change( function(uploadImageUrl) {document.getElementById("img3").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
$('#revertImage3').click( function(event) {document.getElementById("img3").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});

var resize4 = $('#cropPreview4').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#inputImage4').on('change', function () { 
var reader4 = new FileReader();reader4.onload = function (e) {resize4.croppie('bind',{url: e.target.result});}
reader4.readAsDataURL(this.files[0]);});$('#cropImage4').on('click', function (ev) {resize4.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("img4").setAttribute("src", img)});});
$('#inputImage4').change( function(uploadImageUrl) {document.getElementById("img4").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));
$('#revertImage4').click( function(event) {document.getElementById("img4").setAttribute("src", URL.createObjectURL(uploadImageUrl.target.files[0]));});});



//custom image
//on select custom image id, change inputs value to related one or default one.
var customImageSelectIdValue = 1;
let customImageBoxBackgroundColorArray = [50], customImageBoxBoxShadow1Array = [50], customImageBoxBoxShadow2Array = [50], customImageBoxBoxShadowMode = [50];
for(customImageBoxElementIds = 1; customImageBoxElementIds < 51; customImageBoxElementIds++) {
    customImageBoxBackgroundColorArray[customImageBoxElementIds] = "#efeeee";
    customImageBoxBoxShadow1Array[customImageBoxElementIds] = "#ffffff";
    customImageBoxBoxShadow2Array[customImageBoxElementIds] = "#d1cdc7";
    customImageBoxBoxShadowMode[customImageBoxElementIds] = "customImageBoxBoxShadowNone";
};

$('#customImageSelectId').change( function(event) {
    customImageSelectIdValue = document.getElementById('customImageSelectId').value;

    //custom image top and left default or previous
    document.getElementById("customImageTop").value = window.getComputedStyle(document.getElementById("customImageBox"+customImageSelectIdValue)).top.slice(0, -2)/10;
    document.getElementById("customImageTopEnter").value = window.getComputedStyle(document.getElementById("customImageBox"+customImageSelectIdValue)).top.slice(0, -2);
    document.getElementById("customImageLeft").value = window.getComputedStyle(document.getElementById("customImageBox"+customImageSelectIdValue)).left.slice(0, -2)/10;
    document.getElementById("customImageLeftEnter").value = window.getComputedStyle(document.getElementById("customImageBox"+customImageSelectIdValue)).left.slice(0, -2);

    //custom image selector hide or display
    var customImageSelectorElementIds = Array.from({length: 50}, (_, index) => index + 1);
    for(i = 0; i < customImageSelectorElementIds.length; i++) {
        document.getElementById("customImageSelector"+customImageSelectorElementIds[i]).style.display = "none";
    };

    //custom image width and height default or previous
    document.getElementById("customImageSelector"+customImageSelectIdValue).style.display = "block";
    if (document.getElementById("customImage"+customImageSelectIdValue).style.height == "auto"){
        document.getElementById("customImageHeightIndicator").innerHTML = "auto";
        document.getElementById("customImageHeight").value = 2;
        document.getElementById("customImageWidthIndicator").innerHTML = window.getComputedStyle(document.getElementById("customImage"+customImageSelectIdValue)).width;
        document.getElementById("customImageWidth").value = window.getComputedStyle(document.getElementById("customImage"+customImageSelectIdValue)).width.slice(0, -2)/10;
    } else{
        document.getElementById("customImageWidthIndicator").innerHTML = "auto";
        document.getElementById("customImageWidth").value = 2;
        document.getElementById("customImageHeightIndicator").innerHTML = window.getComputedStyle(document.getElementById("customImage"+customImageSelectIdValue)).height;
        document.getElementById("customImageHeight").value = window.getComputedStyle(document.getElementById("customImage"+customImageSelectIdValue)).height.slice(0, -2)/10;
    }

    //show or hide custom image
    if (window.getComputedStyle(document.getElementById("customImageBox"+customImageSelectIdValue)).display=="none"){
        document.getElementById("customImageElementState").innerHTML = "Show Image";
    } else{
        document.getElementById("customImageElementState").innerHTML = "Hide Image";
    }

    //custom image border radius default or previous
    document.getElementById("customImageBorderRadius").value = window.getComputedStyle(document.getElementById("customImage"+customImageSelectIdValue)).borderRadius.slice(0, -2)/5;
    document.getElementById("customImageBorderRadiusIndicator").innerHTML = window.getComputedStyle(document.getElementById("customImage"+customImageSelectIdValue)).borderRadius;
    
    //custom image rotate default or previous
    document.getElementById("customImageRotate").value = 0;
    document.getElementById("customImageRotateIndicator").innerHTML = "0deg";
    for(i = 0; i < 37; i++){
        if (document.getElementById("customImage"+customImageSelectIdValue).classList.contains("rotate"+i)){
            document.getElementById("customImageRotate").value = i;
            document.getElementById("customImageRotateIndicator").innerHTML = i*10+"deg";
        }
    }

    //custom image box padding default or previous
    document.getElementById("customImgBoxPadding").value = window.getComputedStyle(document.getElementById("customImageBox"+customImageSelectIdValue)).padding.slice(0, -2)/5;
    document.getElementById("customImgBoxPaddingIndicator").innerHTML = window.getComputedStyle(document.getElementById("customImageBox"+customImageSelectIdValue)).padding;
    
    //custom image box border radius default or previous
    document.getElementById("customImgBoxBorderRadius").value = window.getComputedStyle(document.getElementById("customImageBox"+customImageSelectIdValue)).borderRadius.slice(0, -2)/5;
    document.getElementById("customImgBoxBorderRadiusIndicator").innerHTML = window.getComputedStyle(document.getElementById("customImageBox"+customImageSelectIdValue)).borderRadius;

    //custom image box background color default or previous
    document.getElementById("customImageBoxBackgroundColor").value = customImageBoxBackgroundColorArray[customImageSelectIdValue];
    document.getElementById("customImageBoxBackgroundColorIndicator").innerHTML = customImageBoxBackgroundColorArray[customImageSelectIdValue];

    //custom image box box shadow default or previous
    document.getElementById("customImageBoxBoxShadow1").value = customImageBoxBoxShadow1Array[customImageSelectIdValue];
    document.getElementById("customImageBoxBoxShadow1Indicator").innerHTML = customImageBoxBoxShadow1Array[customImageSelectIdValue];
    document.getElementById("customImageBoxBoxShadow2").value = customImageBoxBoxShadow2Array[customImageSelectIdValue];
    document.getElementById("customImageBoxBoxShadow2Indicator").innerHTML = customImageBoxBoxShadow2Array[customImageSelectIdValue];

    //custom image box box shadow mode default or previous
    document.getElementById("customImageBoxBoxShadowOutside").checked = false;
    document.getElementById("customImageBoxBoxShadowInside").checked = false;
    document.getElementById("customImageBoxBoxShadowNone").checked = false;
    document.getElementById(customImageBoxBoxShadowMode[customImageSelectIdValue]).checked = true;
});

//show hide custom image elements
document.getElementById("customImageElementState").onclick = (function(event) {
    if (window.getComputedStyle(document.getElementById("customImageBox"+customImageSelectIdValue)).display=="none"){
        document.getElementById("customImageElementState").innerHTML = "Hide Image";
        document.getElementById("customImageBox"+customImageSelectIdValue).style.display="block";
    } else{
        document.getElementById("customImageElementState").innerHTML = "Show Image";
        document.getElementById("customImageBox"+customImageSelectIdValue).style.display="none";
    }
});

//select custom image
var resizeCustom1 = $('#customCropPreview1').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage1').on('change', function () { 
var readerCustom1 = new FileReader();readerCustom1.onload = function (e) {resizeCustom1.croppie('bind',{url: e.target.result});}
readerCustom1.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage1').on('click', function (ev) {resizeCustom1.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage1").setAttribute("src", img)});});
$('#customInputImage1').change( function(uploadImageUrl1) {document.getElementById("customImage1").setAttribute("src", URL.createObjectURL(uploadImageUrl1.target.files[0]));
$('#CustomRevertImage1').click( function(event) {document.getElementById("customImage1").setAttribute("src", URL.createObjectURL(uploadImageUrl1.target.files[0]));});});
var resizeCustom2 = $('#customCropPreview2').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage2').on('change', function () { 
var readerCustom2 = new FileReader();readerCustom2.onload = function (e) {resizeCustom2.croppie('bind',{url: e.target.result});}
readerCustom2.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage2').on('click', function (ev) {resizeCustom2.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage2").setAttribute("src", img)});});
$('#customInputImage2').change( function(uploadImageUrl2) {document.getElementById("customImage2").setAttribute("src", URL.createObjectURL(uploadImageUrl2.target.files[0]));
$('#CustomRevertImage2').click( function(event) {document.getElementById("customImage2").setAttribute("src", URL.createObjectURL(uploadImageUrl2.target.files[0]));});});
var resizeCustom3 = $('#customCropPreview3').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage3').on('change', function () { 
var readerCustom3 = new FileReader();readerCustom3.onload = function (e) {resizeCustom3.croppie('bind',{url: e.target.result});}
readerCustom3.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage3').on('click', function (ev) {resizeCustom3.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage3").setAttribute("src", img)});});
$('#customInputImage3').change( function(uploadImageUrl3) {document.getElementById("customImage3").setAttribute("src", URL.createObjectURL(uploadImageUrl3.target.files[0]));
$('#CustomRevertImage3').click( function(event) {document.getElementById("customImage3").setAttribute("src", URL.createObjectURL(uploadImageUrl3.target.files[0]));});});
var resizeCustom4 = $('#customCropPreview4').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage4').on('change', function () { 
var readerCustom4 = new FileReader();readerCustom4.onload = function (e) {resizeCustom4.croppie('bind',{url: e.target.result});}
readerCustom4.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage4').on('click', function (ev) {resizeCustom4.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage4").setAttribute("src", img)});});
$('#customInputImage4').change( function(uploadImageUrl4) {document.getElementById("customImage4").setAttribute("src", URL.createObjectURL(uploadImageUrl4.target.files[0]));
$('#CustomRevertImage4').click( function(event) {document.getElementById("customImage4").setAttribute("src", URL.createObjectURL(uploadImageUrl4.target.files[0]));});});
var resizeCustom5 = $('#customCropPreview5').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage5').on('change', function () { 
var readerCustom5 = new FileReader();readerCustom5.onload = function (e) {resizeCustom5.croppie('bind',{url: e.target.result});}
readerCustom5.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage5').on('click', function (ev) {resizeCustom5.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage5").setAttribute("src", img)});});
$('#customInputImage5').change( function(uploadImageUrl5) {document.getElementById("customImage5").setAttribute("src", URL.createObjectURL(uploadImageUrl5.target.files[0]));
$('#CustomRevertImage5').click( function(event) {document.getElementById("customImage5").setAttribute("src", URL.createObjectURL(uploadImageUrl5.target.files[0]));});});
var resizeCustom6 = $('#customCropPreview6').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage6').on('change', function () { 
var readerCustom6 = new FileReader();readerCustom6.onload = function (e) {resizeCustom6.croppie('bind',{url: e.target.result});}
readerCustom6.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage6').on('click', function (ev) {resizeCustom6.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage6").setAttribute("src", img)});});
$('#customInputImage6').change( function(uploadImageUrl6) {document.getElementById("customImage6").setAttribute("src", URL.createObjectURL(uploadImageUrl6.target.files[0]));
$('#CustomRevertImage6').click( function(event) {document.getElementById("customImage6").setAttribute("src", URL.createObjectURL(uploadImageUrl6.target.files[0]));});});
var resizeCustom7 = $('#customCropPreview7').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage7').on('change', function () { 
var readerCustom7 = new FileReader();readerCustom7.onload = function (e) {resizeCustom7.croppie('bind',{url: e.target.result});}
readerCustom7.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage7').on('click', function (ev) {resizeCustom7.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage7").setAttribute("src", img)});});
$('#customInputImage7').change( function(uploadImageUrl7) {document.getElementById("customImage7").setAttribute("src", URL.createObjectURL(uploadImageUrl7.target.files[0]));
$('#CustomRevertImage7').click( function(event) {document.getElementById("customImage7").setAttribute("src", URL.createObjectURL(uploadImageUrl7.target.files[0]));});});
var resizeCustom8 = $('#customCropPreview8').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage8').on('change', function () { 
var readerCustom8 = new FileReader();readerCustom8.onload = function (e) {resizeCustom8.croppie('bind',{url: e.target.result});}
readerCustom8.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage8').on('click', function (ev) {resizeCustom8.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage8").setAttribute("src", img)});});
$('#customInputImage8').change( function(uploadImageUrl8) {document.getElementById("customImage8").setAttribute("src", URL.createObjectURL(uploadImageUrl8.target.files[0]));
$('#CustomRevertImage8').click( function(event) {document.getElementById("customImage8").setAttribute("src", URL.createObjectURL(uploadImageUrl8.target.files[0]));});});
var resizeCustom9 = $('#customCropPreview9').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage9').on('change', function () { 
var readerCustom9 = new FileReader();readerCustom9.onload = function (e) {resizeCustom9.croppie('bind',{url: e.target.result});}
readerCustom9.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage9').on('click', function (ev) {resizeCustom9.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage9").setAttribute("src", img)});});
$('#customInputImage9').change( function(uploadImageUrl9) {document.getElementById("customImage9").setAttribute("src", URL.createObjectURL(uploadImageUrl9.target.files[0]));
$('#CustomRevertImage9').click( function(event) {document.getElementById("customImage9").setAttribute("src", URL.createObjectURL(uploadImageUrl9.target.files[0]));});});
var resizeCustom10 = $('#customCropPreview10').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage10').on('change', function () { 
var readerCustom10 = new FileReader();readerCustom10.onload = function (e) {resizeCustom10.croppie('bind',{url: e.target.result});}
readerCustom10.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage10').on('click', function (ev) {resizeCustom10.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage10").setAttribute("src", img)});});
$('#customInputImage10').change( function(uploadImageUrl10) {document.getElementById("customImage10").setAttribute("src", URL.createObjectURL(uploadImageUrl10.target.files[0]));
$('#CustomRevertImage10').click( function(event) {document.getElementById("customImage10").setAttribute("src", URL.createObjectURL(uploadImageUrl10.target.files[0]));});});
var resizeCustom11 = $('#customCropPreview11').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage11').on('change', function () { 
var readerCustom11 = new FileReader();readerCustom11.onload = function (e) {resizeCustom11.croppie('bind',{url: e.target.result});}
readerCustom11.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage11').on('click', function (ev) {resizeCustom11.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage11").setAttribute("src", img)});});
$('#customInputImage11').change( function(uploadImageUrl11) {document.getElementById("customImage11").setAttribute("src", URL.createObjectURL(uploadImageUrl11.target.files[0]));
$('#CustomRevertImage11').click( function(event) {document.getElementById("customImage11").setAttribute("src", URL.createObjectURL(uploadImageUrl11.target.files[0]));});});
var resizeCustom12 = $('#customCropPreview12').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage12').on('change', function () { 
var readerCustom12 = new FileReader();readerCustom12.onload = function (e) {resizeCustom12.croppie('bind',{url: e.target.result});}
readerCustom12.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage12').on('click', function (ev) {resizeCustom12.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage12").setAttribute("src", img)});});
$('#customInputImage12').change( function(uploadImageUrl12) {document.getElementById("customImage12").setAttribute("src", URL.createObjectURL(uploadImageUrl12.target.files[0]));
$('#CustomRevertImage12').click( function(event) {document.getElementById("customImage12").setAttribute("src", URL.createObjectURL(uploadImageUrl12.target.files[0]));});});
var resizeCustom13 = $('#customCropPreview13').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage13').on('change', function () { 
var readerCustom13 = new FileReader();readerCustom13.onload = function (e) {resizeCustom13.croppie('bind',{url: e.target.result});}
readerCustom13.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage13').on('click', function (ev) {resizeCustom13.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage13").setAttribute("src", img)});});
$('#customInputImage13').change( function(uploadImageUrl13) {document.getElementById("customImage13").setAttribute("src", URL.createObjectURL(uploadImageUrl13.target.files[0]));
$('#CustomRevertImage13').click( function(event) {document.getElementById("customImage13").setAttribute("src", URL.createObjectURL(uploadImageUrl13.target.files[0]));});});
var resizeCustom14 = $('#customCropPreview14').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage14').on('change', function () { 
var readerCustom14 = new FileReader();readerCustom14.onload = function (e) {resizeCustom14.croppie('bind',{url: e.target.result});}
readerCustom14.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage14').on('click', function (ev) {resizeCustom14.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage14").setAttribute("src", img)});});
$('#customInputImage14').change( function(uploadImageUrl14) {document.getElementById("customImage14").setAttribute("src", URL.createObjectURL(uploadImageUrl14.target.files[0]));
$('#CustomRevertImage14').click( function(event) {document.getElementById("customImage14").setAttribute("src", URL.createObjectURL(uploadImageUrl14.target.files[0]));});});
var resizeCustom15 = $('#customCropPreview15').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage15').on('change', function () { 
var readerCustom15 = new FileReader();readerCustom15.onload = function (e) {resizeCustom15.croppie('bind',{url: e.target.result});}
readerCustom15.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage15').on('click', function (ev) {resizeCustom15.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage15").setAttribute("src", img)});});
$('#customInputImage15').change( function(uploadImageUrl15) {document.getElementById("customImage15").setAttribute("src", URL.createObjectURL(uploadImageUrl15.target.files[0]));
$('#CustomRevertImage15').click( function(event) {document.getElementById("customImage15").setAttribute("src", URL.createObjectURL(uploadImageUrl15.target.files[0]));});});
var resizeCustom16 = $('#customCropPreview16').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage16').on('change', function () { 
var readerCustom16 = new FileReader();readerCustom16.onload = function (e) {resizeCustom16.croppie('bind',{url: e.target.result});}
readerCustom16.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage16').on('click', function (ev) {resizeCustom16.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage16").setAttribute("src", img)});});
$('#customInputImage16').change( function(uploadImageUrl16) {document.getElementById("customImage16").setAttribute("src", URL.createObjectURL(uploadImageUrl16.target.files[0]));
$('#CustomRevertImage16').click( function(event) {document.getElementById("customImage16").setAttribute("src", URL.createObjectURL(uploadImageUrl16.target.files[0]));});});
var resizeCustom17 = $('#customCropPreview17').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage17').on('change', function () { 
var readerCustom17 = new FileReader();readerCustom17.onload = function (e) {resizeCustom17.croppie('bind',{url: e.target.result});}
readerCustom17.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage17').on('click', function (ev) {resizeCustom17.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage17").setAttribute("src", img)});});
$('#customInputImage17').change( function(uploadImageUrl17) {document.getElementById("customImage17").setAttribute("src", URL.createObjectURL(uploadImageUrl17.target.files[0]));
$('#CustomRevertImage17').click( function(event) {document.getElementById("customImage17").setAttribute("src", URL.createObjectURL(uploadImageUrl17.target.files[0]));});});
var resizeCustom18 = $('#customCropPreview18').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage18').on('change', function () { 
var readerCustom18 = new FileReader();readerCustom18.onload = function (e) {resizeCustom18.croppie('bind',{url: e.target.result});}
readerCustom18.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage18').on('click', function (ev) {resizeCustom18.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage18").setAttribute("src", img)});});
$('#customInputImage18').change( function(uploadImageUrl18) {document.getElementById("customImage18").setAttribute("src", URL.createObjectURL(uploadImageUrl18.target.files[0]));
$('#CustomRevertImage18').click( function(event) {document.getElementById("customImage18").setAttribute("src", URL.createObjectURL(uploadImageUrl18.target.files[0]));});});
var resizeCustom19 = $('#customCropPreview19').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage19').on('change', function () { 
var readerCustom19 = new FileReader();readerCustom19.onload = function (e) {resizeCustom19.croppie('bind',{url: e.target.result});}
readerCustom19.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage19').on('click', function (ev) {resizeCustom19.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage19").setAttribute("src", img)});});
$('#customInputImage19').change( function(uploadImageUrl19) {document.getElementById("customImage19").setAttribute("src", URL.createObjectURL(uploadImageUrl19.target.files[0]));
$('#CustomRevertImage19').click( function(event) {document.getElementById("customImage19").setAttribute("src", URL.createObjectURL(uploadImageUrl19.target.files[0]));});});
var resizeCustom20 = $('#customCropPreview20').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage20').on('change', function () { 
var readerCustom20 = new FileReader();readerCustom20.onload = function (e) {resizeCustom20.croppie('bind',{url: e.target.result});}
readerCustom20.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage20').on('click', function (ev) {resizeCustom20.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage20").setAttribute("src", img)});});
$('#customInputImage20').change( function(uploadImageUrl20) {document.getElementById("customImage20").setAttribute("src", URL.createObjectURL(uploadImageUrl20.target.files[0]));
$('#CustomRevertImage20').click( function(event) {document.getElementById("customImage20").setAttribute("src", URL.createObjectURL(uploadImageUrl20.target.files[0]));});});
var resizeCustom21 = $('#customCropPreview21').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage21').on('change', function () { 
var readerCustom21 = new FileReader();readerCustom21.onload = function (e) {resizeCustom21.croppie('bind',{url: e.target.result});}
readerCustom21.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage21').on('click', function (ev) {resizeCustom21.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage21").setAttribute("src", img)});});
$('#customInputImage21').change( function(uploadImageUrl21) {document.getElementById("customImage21").setAttribute("src", URL.createObjectURL(uploadImageUrl21.target.files[0]));
$('#CustomRevertImage21').click( function(event) {document.getElementById("customImage21").setAttribute("src", URL.createObjectURL(uploadImageUrl21.target.files[0]));});});
var resizeCustom22 = $('#customCropPreview22').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage22').on('change', function () { 
var readerCustom22 = new FileReader();readerCustom22.onload = function (e) {resizeCustom22.croppie('bind',{url: e.target.result});}
readerCustom22.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage22').on('click', function (ev) {resizeCustom22.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage22").setAttribute("src", img)});});
$('#customInputImage22').change( function(uploadImageUrl22) {document.getElementById("customImage22").setAttribute("src", URL.createObjectURL(uploadImageUrl22.target.files[0]));
$('#CustomRevertImage22').click( function(event) {document.getElementById("customImage22").setAttribute("src", URL.createObjectURL(uploadImageUrl22.target.files[0]));});});
var resizeCustom23 = $('#customCropPreview23').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage23').on('change', function () { 
var readerCustom23 = new FileReader();readerCustom23.onload = function (e) {resizeCustom23.croppie('bind',{url: e.target.result});}
readerCustom23.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage23').on('click', function (ev) {resizeCustom23.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage23").setAttribute("src", img)});});
$('#customInputImage23').change( function(uploadImageUrl23) {document.getElementById("customImage23").setAttribute("src", URL.createObjectURL(uploadImageUrl23.target.files[0]));
$('#CustomRevertImage23').click( function(event) {document.getElementById("customImage23").setAttribute("src", URL.createObjectURL(uploadImageUrl23.target.files[0]));});});
var resizeCustom24 = $('#customCropPreview24').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage24').on('change', function () { 
var readerCustom24 = new FileReader();readerCustom24.onload = function (e) {resizeCustom24.croppie('bind',{url: e.target.result});}
readerCustom24.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage24').on('click', function (ev) {resizeCustom24.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage24").setAttribute("src", img)});});
$('#customInputImage24').change( function(uploadImageUrl24) {document.getElementById("customImage24").setAttribute("src", URL.createObjectURL(uploadImageUrl24.target.files[0]));
$('#CustomRevertImage24').click( function(event) {document.getElementById("customImage24").setAttribute("src", URL.createObjectURL(uploadImageUrl24.target.files[0]));});});
var resizeCustom25 = $('#customCropPreview25').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage25').on('change', function () { 
var readerCustom25 = new FileReader();readerCustom25.onload = function (e) {resizeCustom25.croppie('bind',{url: e.target.result});}
readerCustom25.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage25').on('click', function (ev) {resizeCustom25.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage25").setAttribute("src", img)});});
$('#customInputImage25').change( function(uploadImageUrl25) {document.getElementById("customImage25").setAttribute("src", URL.createObjectURL(uploadImageUrl25.target.files[0]));
$('#CustomRevertImage25').click( function(event) {document.getElementById("customImage25").setAttribute("src", URL.createObjectURL(uploadImageUrl25.target.files[0]));});});
var resizeCustom26 = $('#customCropPreview26').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage26').on('change', function () { 
var readerCustom26 = new FileReader();readerCustom26.onload = function (e) {resizeCustom26.croppie('bind',{url: e.target.result});}
readerCustom26.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage26').on('click', function (ev) {resizeCustom26.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage26").setAttribute("src", img)});});
$('#customInputImage26').change( function(uploadImageUrl26) {document.getElementById("customImage26").setAttribute("src", URL.createObjectURL(uploadImageUrl26.target.files[0]));
$('#CustomRevertImage26').click( function(event) {document.getElementById("customImage26").setAttribute("src", URL.createObjectURL(uploadImageUrl26.target.files[0]));});});
var resizeCustom27 = $('#customCropPreview27').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage27').on('change', function () { 
var readerCustom27 = new FileReader();readerCustom27.onload = function (e) {resizeCustom27.croppie('bind',{url: e.target.result});}
readerCustom27.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage27').on('click', function (ev) {resizeCustom27.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage27").setAttribute("src", img)});});
$('#customInputImage27').change( function(uploadImageUrl27) {document.getElementById("customImage27").setAttribute("src", URL.createObjectURL(uploadImageUrl27.target.files[0]));
$('#CustomRevertImage27').click( function(event) {document.getElementById("customImage27").setAttribute("src", URL.createObjectURL(uploadImageUrl27.target.files[0]));});});
var resizeCustom28 = $('#customCropPreview28').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage28').on('change', function () { 
var readerCustom28 = new FileReader();readerCustom28.onload = function (e) {resizeCustom28.croppie('bind',{url: e.target.result});}
readerCustom28.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage28').on('click', function (ev) {resizeCustom28.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage28").setAttribute("src", img)});});
$('#customInputImage28').change( function(uploadImageUrl28) {document.getElementById("customImage28").setAttribute("src", URL.createObjectURL(uploadImageUrl28.target.files[0]));
$('#CustomRevertImage28').click( function(event) {document.getElementById("customImage28").setAttribute("src", URL.createObjectURL(uploadImageUrl28.target.files[0]));});});
var resizeCustom29 = $('#customCropPreview29').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage29').on('change', function () { 
var readerCustom29 = new FileReader();readerCustom29.onload = function (e) {resizeCustom29.croppie('bind',{url: e.target.result});}
readerCustom29.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage29').on('click', function (ev) {resizeCustom29.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage29").setAttribute("src", img)});});
$('#customInputImage29').change( function(uploadImageUrl29) {document.getElementById("customImage29").setAttribute("src", URL.createObjectURL(uploadImageUrl29.target.files[0]));
$('#CustomRevertImage29').click( function(event) {document.getElementById("customImage29").setAttribute("src", URL.createObjectURL(uploadImageUrl29.target.files[0]));});});
var resizeCustom30 = $('#customCropPreview30').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage30').on('change', function () { 
var readerCustom30 = new FileReader();readerCustom30.onload = function (e) {resizeCustom30.croppie('bind',{url: e.target.result});}
readerCustom30.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage30').on('click', function (ev) {resizeCustom30.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage30").setAttribute("src", img)});});
$('#customInputImage30').change( function(uploadImageUrl30) {document.getElementById("customImage30").setAttribute("src", URL.createObjectURL(uploadImageUrl30.target.files[0]));
$('#CustomRevertImage30').click( function(event) {document.getElementById("customImage30").setAttribute("src", URL.createObjectURL(uploadImageUrl30.target.files[0]));});});
var resizeCustom31 = $('#customCropPreview31').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage31').on('change', function () { 
var readerCustom31 = new FileReader();readerCustom31.onload = function (e) {resizeCustom31.croppie('bind',{url: e.target.result});}
readerCustom31.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage31').on('click', function (ev) {resizeCustom31.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage31").setAttribute("src", img)});});
$('#customInputImage31').change( function(uploadImageUrl31) {document.getElementById("customImage31").setAttribute("src", URL.createObjectURL(uploadImageUrl31.target.files[0]));
$('#CustomRevertImage31').click( function(event) {document.getElementById("customImage31").setAttribute("src", URL.createObjectURL(uploadImageUrl31.target.files[0]));});});
var resizeCustom32 = $('#customCropPreview32').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage32').on('change', function () { 
var readerCustom32 = new FileReader();readerCustom32.onload = function (e) {resizeCustom32.croppie('bind',{url: e.target.result});}
readerCustom32.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage32').on('click', function (ev) {resizeCustom32.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage32").setAttribute("src", img)});});
$('#customInputImage32').change( function(uploadImageUrl32) {document.getElementById("customImage32").setAttribute("src", URL.createObjectURL(uploadImageUrl32.target.files[0]));
$('#CustomRevertImage32').click( function(event) {document.getElementById("customImage32").setAttribute("src", URL.createObjectURL(uploadImageUrl32.target.files[0]));});});
var resizeCustom33 = $('#customCropPreview33').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage33').on('change', function () { 
var readerCustom33 = new FileReader();readerCustom33.onload = function (e) {resizeCustom33.croppie('bind',{url: e.target.result});}
readerCustom33.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage33').on('click', function (ev) {resizeCustom33.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage33").setAttribute("src", img)});});
$('#customInputImage33').change( function(uploadImageUrl33) {document.getElementById("customImage33").setAttribute("src", URL.createObjectURL(uploadImageUrl33.target.files[0]));
$('#CustomRevertImage33').click( function(event) {document.getElementById("customImage33").setAttribute("src", URL.createObjectURL(uploadImageUrl33.target.files[0]));});});
var resizeCustom34 = $('#customCropPreview34').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage34').on('change', function () { 
var readerCustom34 = new FileReader();readerCustom34.onload = function (e) {resizeCustom34.croppie('bind',{url: e.target.result});}
readerCustom34.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage34').on('click', function (ev) {resizeCustom34.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage34").setAttribute("src", img)});});
$('#customInputImage34').change( function(uploadImageUrl34) {document.getElementById("customImage34").setAttribute("src", URL.createObjectURL(uploadImageUrl34.target.files[0]));
$('#CustomRevertImage34').click( function(event) {document.getElementById("customImage34").setAttribute("src", URL.createObjectURL(uploadImageUrl34.target.files[0]));});});
var resizeCustom35 = $('#customCropPreview35').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage35').on('change', function () { 
var readerCustom35 = new FileReader();readerCustom35.onload = function (e) {resizeCustom35.croppie('bind',{url: e.target.result});}
readerCustom35.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage35').on('click', function (ev) {resizeCustom35.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage35").setAttribute("src", img)});});
$('#customInputImage35').change( function(uploadImageUrl35) {document.getElementById("customImage35").setAttribute("src", URL.createObjectURL(uploadImageUrl35.target.files[0]));
$('#CustomRevertImage35').click( function(event) {document.getElementById("customImage35").setAttribute("src", URL.createObjectURL(uploadImageUrl35.target.files[0]));});});
var resizeCustom36 = $('#customCropPreview36').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage36').on('change', function () { 
var readerCustom36 = new FileReader();readerCustom36.onload = function (e) {resizeCustom36.croppie('bind',{url: e.target.result});}
readerCustom36.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage36').on('click', function (ev) {resizeCustom36.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage36").setAttribute("src", img)});});
$('#customInputImage36').change( function(uploadImageUrl36) {document.getElementById("customImage36").setAttribute("src", URL.createObjectURL(uploadImageUrl36.target.files[0]));
$('#CustomRevertImage36').click( function(event) {document.getElementById("customImage36").setAttribute("src", URL.createObjectURL(uploadImageUrl36.target.files[0]));});});
var resizeCustom37 = $('#customCropPreview37').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage37').on('change', function () { 
var readerCustom37 = new FileReader();readerCustom37.onload = function (e) {resizeCustom37.croppie('bind',{url: e.target.result});}
readerCustom37.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage37').on('click', function (ev) {resizeCustom37.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage37").setAttribute("src", img)});});
$('#customInputImage37').change( function(uploadImageUrl37) {document.getElementById("customImage37").setAttribute("src", URL.createObjectURL(uploadImageUrl37.target.files[0]));
$('#CustomRevertImage37').click( function(event) {document.getElementById("customImage37").setAttribute("src", URL.createObjectURL(uploadImageUrl37.target.files[0]));});});
var resizeCustom38 = $('#customCropPreview38').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage38').on('change', function () { 
var readerCustom38 = new FileReader();readerCustom38.onload = function (e) {resizeCustom38.croppie('bind',{url: e.target.result});}
readerCustom38.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage38').on('click', function (ev) {resizeCustom38.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage38").setAttribute("src", img)});});
$('#customInputImage38').change( function(uploadImageUrl38) {document.getElementById("customImage38").setAttribute("src", URL.createObjectURL(uploadImageUrl38.target.files[0]));
$('#CustomRevertImage38').click( function(event) {document.getElementById("customImage38").setAttribute("src", URL.createObjectURL(uploadImageUrl38.target.files[0]));});});
var resizeCustom39 = $('#customCropPreview39').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage39').on('change', function () { 
var readerCustom39 = new FileReader();readerCustom39.onload = function (e) {resizeCustom39.croppie('bind',{url: e.target.result});}
readerCustom39.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage39').on('click', function (ev) {resizeCustom39.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage39").setAttribute("src", img)});});
$('#customInputImage39').change( function(uploadImageUrl39) {document.getElementById("customImage39").setAttribute("src", URL.createObjectURL(uploadImageUrl39.target.files[0]));
$('#CustomRevertImage39').click( function(event) {document.getElementById("customImage39").setAttribute("src", URL.createObjectURL(uploadImageUrl39.target.files[0]));});});
var resizeCustom40 = $('#customCropPreview40').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage40').on('change', function () { 
var readerCustom40 = new FileReader();readerCustom40.onload = function (e) {resizeCustom40.croppie('bind',{url: e.target.result});}
readerCustom40.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage40').on('click', function (ev) {resizeCustom40.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage40").setAttribute("src", img)});});
$('#customInputImage40').change( function(uploadImageUrl40) {document.getElementById("customImage40").setAttribute("src", URL.createObjectURL(uploadImageUrl40.target.files[0]));
$('#CustomRevertImage40').click( function(event) {document.getElementById("customImage40").setAttribute("src", URL.createObjectURL(uploadImageUrl40.target.files[0]));});});
var resizeCustom41 = $('#customCropPreview41').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage41').on('change', function () { 
var readerCustom41 = new FileReader();readerCustom41.onload = function (e) {resizeCustom41.croppie('bind',{url: e.target.result});}
readerCustom41.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage41').on('click', function (ev) {resizeCustom41.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage41").setAttribute("src", img)});});
$('#customInputImage41').change( function(uploadImageUrl41) {document.getElementById("customImage41").setAttribute("src", URL.createObjectURL(uploadImageUrl41.target.files[0]));
$('#CustomRevertImage41').click( function(event) {document.getElementById("customImage41").setAttribute("src", URL.createObjectURL(uploadImageUrl41.target.files[0]));});});
var resizeCustom42 = $('#customCropPreview42').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage42').on('change', function () { 
var readerCustom42 = new FileReader();readerCustom42.onload = function (e) {resizeCustom42.croppie('bind',{url: e.target.result});}
readerCustom42.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage42').on('click', function (ev) {resizeCustom42.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage42").setAttribute("src", img)});});
$('#customInputImage42').change( function(uploadImageUrl42) {document.getElementById("customImage42").setAttribute("src", URL.createObjectURL(uploadImageUrl42.target.files[0]));
$('#CustomRevertImage42').click( function(event) {document.getElementById("customImage42").setAttribute("src", URL.createObjectURL(uploadImageUrl42.target.files[0]));});});
var resizeCustom43 = $('#customCropPreview43').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage43').on('change', function () { 
var readerCustom43 = new FileReader();readerCustom43.onload = function (e) {resizeCustom43.croppie('bind',{url: e.target.result});}
readerCustom43.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage43').on('click', function (ev) {resizeCustom43.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage43").setAttribute("src", img)});});
$('#customInputImage43').change( function(uploadImageUrl43) {document.getElementById("customImage43").setAttribute("src", URL.createObjectURL(uploadImageUrl43.target.files[0]));
$('#CustomRevertImage43').click( function(event) {document.getElementById("customImage43").setAttribute("src", URL.createObjectURL(uploadImageUrl43.target.files[0]));});});
var resizeCustom44 = $('#customCropPreview44').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage44').on('change', function () { 
var readerCustom44 = new FileReader();readerCustom44.onload = function (e) {resizeCustom44.croppie('bind',{url: e.target.result});}
readerCustom44.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage44').on('click', function (ev) {resizeCustom44.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage44").setAttribute("src", img)});});
$('#customInputImage44').change( function(uploadImageUrl44) {document.getElementById("customImage44").setAttribute("src", URL.createObjectURL(uploadImageUrl44.target.files[0]));
$('#CustomRevertImage44').click( function(event) {document.getElementById("customImage44").setAttribute("src", URL.createObjectURL(uploadImageUrl44.target.files[0]));});});
var resizeCustom45 = $('#customCropPreview45').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage45').on('change', function () { 
var readerCustom45 = new FileReader();readerCustom45.onload = function (e) {resizeCustom45.croppie('bind',{url: e.target.result});}
readerCustom45.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage45').on('click', function (ev) {resizeCustom45.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage45").setAttribute("src", img)});});
$('#customInputImage45').change( function(uploadImageUrl45) {document.getElementById("customImage45").setAttribute("src", URL.createObjectURL(uploadImageUrl45.target.files[0]));
$('#CustomRevertImage45').click( function(event) {document.getElementById("customImage45").setAttribute("src", URL.createObjectURL(uploadImageUrl45.target.files[0]));});});
var resizeCustom46 = $('#customCropPreview46').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage46').on('change', function () { 
var readerCustom46 = new FileReader();readerCustom46.onload = function (e) {resizeCustom46.croppie('bind',{url: e.target.result});}
readerCustom46.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage46').on('click', function (ev) {resizeCustom46.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage46").setAttribute("src", img)});});
$('#customInputImage46').change( function(uploadImageUrl46) {document.getElementById("customImage46").setAttribute("src", URL.createObjectURL(uploadImageUrl46.target.files[0]));
$('#CustomRevertImage46').click( function(event) {document.getElementById("customImage46").setAttribute("src", URL.createObjectURL(uploadImageUrl46.target.files[0]));});});
var resizeCustom47 = $('#customCropPreview47').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage47').on('change', function () { 
var readerCustom47 = new FileReader();readerCustom47.onload = function (e) {resizeCustom47.croppie('bind',{url: e.target.result});}
readerCustom47.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage47').on('click', function (ev) {resizeCustom47.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage47").setAttribute("src", img)});});
$('#customInputImage47').change( function(uploadImageUrl47) {document.getElementById("customImage47").setAttribute("src", URL.createObjectURL(uploadImageUrl47.target.files[0]));
$('#CustomRevertImage47').click( function(event) {document.getElementById("customImage47").setAttribute("src", URL.createObjectURL(uploadImageUrl47.target.files[0]));});});
var resizeCustom48 = $('#customCropPreview48').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage48').on('change', function () { 
var readerCustom48 = new FileReader();readerCustom48.onload = function (e) {resizeCustom48.croppie('bind',{url: e.target.result});}
readerCustom48.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage48').on('click', function (ev) {resizeCustom48.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage48").setAttribute("src", img)});});
$('#customInputImage48').change( function(uploadImageUrl48) {document.getElementById("customImage48").setAttribute("src", URL.createObjectURL(uploadImageUrl48.target.files[0]));
$('#CustomRevertImage48').click( function(event) {document.getElementById("customImage48").setAttribute("src", URL.createObjectURL(uploadImageUrl48.target.files[0]));});});
var resizeCustom49 = $('#customCropPreview49').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage49').on('change', function () { 
var readerCustom49 = new FileReader();readerCustom49.onload = function (e) {resizeCustom49.croppie('bind',{url: e.target.result});}
readerCustom49.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage49').on('click', function (ev) {resizeCustom49.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage49").setAttribute("src", img)});});
$('#customInputImage49').change( function(uploadImageUrl49) {document.getElementById("customImage49").setAttribute("src", URL.createObjectURL(uploadImageUrl49.target.files[0]));
$('#CustomRevertImage49').click( function(event) {document.getElementById("customImage49").setAttribute("src", URL.createObjectURL(uploadImageUrl49.target.files[0]));});});
var resizeCustom50 = $('#customCropPreview50').croppie({
enableExif: true, enableOrientation: true, viewport: {width: 180,height: 180,},boundary: {width: 230,height: 230}});$('#customInputImage50').on('change', function () { 
var readerCustom50 = new FileReader();readerCustom50.onload = function (e) {resizeCustom50.croppie('bind',{url: e.target.result});}
readerCustom50.readAsDataURL(this.files[0]);});$('#CustomCropCustomImage50').on('click', function (ev) {resizeCustom50.croppie('result', {type: 'canvas',size: 'viewport'}).then(function (img) {
document.getElementById("customImage50").setAttribute("src", img)});});
$('#customInputImage50').change( function(uploadImageUrl50) {document.getElementById("customImage50").setAttribute("src", URL.createObjectURL(uploadImageUrl50.target.files[0]));
$('#CustomRevertImage50').click( function(event) {document.getElementById("customImage50").setAttribute("src", URL.createObjectURL(uploadImageUrl50.target.files[0]));});});

//custom image top
document.getElementById("customImageTop").oninput = (function(event) {
    document.getElementById("customImageBox"+customImageSelectIdValue).style.top = document.getElementById('customImageTop').value*10+"px";
    document.getElementById("customImageTopEnter").value = document.getElementById('customImageTop').value*10;
});
document.getElementById("customImageTopEnter").oninput = (function(event) {
    document.getElementById("customImageBox"+customImageSelectIdValue).style.top = document.getElementById('customImageTopEnter').value+"px";
    if (document.getElementById("customImageTopEnter").value > 1400){
        document.getElementById("customImageTop").max = document.getElementById("customImageTopEnter").value/10;
    } else {
        document.getElementById("customImageTop").max = "140";
    }
    if (document.getElementById("customImageTopEnter").value < 0){
        document.getElementById("customImageTop").min = document.getElementById("customImageTopEnter").value/10;
    } else {
        document.getElementById("customImageTop").min = "0";
    }
    document.getElementById("customImageTop").value = document.getElementById('customImageTopEnter').value/10;
});

//custom image left
document.getElementById("customImageLeft").oninput = (function(event) {
    document.getElementById("customImageBox"+customImageSelectIdValue).style.left = document.getElementById('customImageLeft').value*10+"px";
    document.getElementById("customImageLeftEnter").value = document.getElementById('customImageLeft').value*10;
});
document.getElementById("customImageLeftEnter").oninput = (function(event) {
    document.getElementById("customImageBox"+customImageSelectIdValue).style.left = document.getElementById('customImageLeftEnter').value+"px";
    if (document.getElementById("customImageLeftEnter").value > 1400){
        document.getElementById("customImageLeft").max = document.getElementById("customImageLeftEnter").value/10;
    } else {
        document.getElementById("customImageLeft").max = "140";
    }
    if (document.getElementById("customImageLeftEnter").value < 0){
        document.getElementById("customImageLeft").min = document.getElementById("customImageLeftEnter").value/10;
    } else {
        document.getElementById("customImageLeft").min = "0";
    }
    document.getElementById("customImageLeft").value = document.getElementById('customImageLeftEnter').value/10;
});

//custom image width and height
document.getElementById("customImageWidth").oninput = (function(event) {
    document.getElementById("customImage"+customImageSelectIdValue).style.width = document.getElementById('customImageWidth').value*10+"px";
    document.getElementById("customImageWidthIndicator").innerHTML = document.getElementById('customImageWidth').value*10+"px";
    document.getElementById("customImageHeight").value = 2;
    document.getElementById("customImageHeightIndicator").innerHTML = "auto";
    document.getElementById("customImage"+customImageSelectIdValue).style.height = "auto";
});
document.getElementById("customImageHeight").oninput = (function(event) {
    document.getElementById("customImage"+customImageSelectIdValue).style.height = document.getElementById('customImageHeight').value*10+"px";
    document.getElementById("customImageHeightIndicator").innerHTML = document.getElementById('customImageHeight').value*10+"px";
    document.getElementById("customImageWidth").value = 2;
    document.getElementById("customImageWidthIndicator").innerHTML = "auto";
    document.getElementById("customImage"+customImageSelectIdValue).style.width = "auto";
});

//custom image border radius
document.getElementById("customImageBorderRadius").oninput = (function(event) {
    document.getElementById("customImage"+customImageSelectIdValue).style.borderRadius = document.getElementById('customImageBorderRadius').value*5+"px";
    document.getElementById("customImageBorderRadiusIndicator").innerHTML = document.getElementById('customImageBorderRadius').value*5+"px";
});

//custom image rotate
document.getElementById("customImageRotate").oninput = (function(event) {
    for(customImageRotateElementIds = 0; customImageRotateElementIds < 37; customImageRotateElementIds++){
        document.getElementById("customImage"+customImageSelectIdValue).classList.remove("rotate"+customImageRotateElementIds);
    }
    document.getElementById("customImage"+customImageSelectIdValue).classList.add("rotate"+document.getElementById("customImageRotate").value);
    document.getElementById("customImageRotateIndicator").innerHTML = document.getElementById('customImageRotate').value*10+"deg";
});

//custom image box padding
document.getElementById("customImgBoxPadding").oninput = (function(event) {
    document.getElementById("customImageBox"+customImageSelectIdValue).style.padding = document.getElementById('customImgBoxPadding').value*5+"px";
    document.getElementById("customImgBoxPaddingIndicator").innerHTML = document.getElementById('customImgBoxPadding').value*5+"px";
});

//custom image box border radius
document.getElementById("customImgBoxBorderRadius").oninput = (function(event) {
    document.getElementById("customImageBox"+customImageSelectIdValue).style.borderRadius = document.getElementById('customImgBoxBorderRadius').value*5+"px";
    document.getElementById("customImgBoxBorderRadiusIndicator").innerHTML = document.getElementById('customImgBoxBorderRadius').value*5+"px";
});

//custom image background color
document.getElementById("customImageBoxBackgroundColor").oninput = (function(event) {
    document.getElementById("customImageBox"+customImageSelectIdValue).style.background = null;
    document.getElementById("customImageBox"+customImageSelectIdValue).style.backgroundColor = document.getElementById('customImageBoxBackgroundColor').value;
    document.getElementById("customImageBoxBackgroundColorIndicator").innerHTML = document.getElementById('customImageBoxBackgroundColor').value;
    customImageBoxBackgroundColorArray[customImageSelectIdValue] = document.getElementById("customImageBoxBackgroundColor").value;
});
document.getElementById("customImageBoxBackgroundRemove").onclick = (function(event) {
    document.getElementById("customImageBox"+customImageSelectIdValue).style.backgroundColor = null;
});

//custom image box shadow
function customImageBoxBoxShadowOutside(){
    document.getElementById("customImageBox"+customImageSelectIdValue).style.boxShadow = "-6px -6px 16px " + document.getElementById("customImageBoxBoxShadow1").value +", 6px 6px 16px " + document.getElementById("customImageBoxBoxShadow2").value;
    document.getElementById("customImageBoxBoxShadow1Indicator").innerHTML = document.getElementById("customImageBoxBoxShadow1").value;
    document.getElementById("customImageBoxBoxShadow2Indicator").innerHTML = document.getElementById("customImageBoxBoxShadow2").value;
    customImageBoxBoxShadow1Array[customImageSelectIdValue] = document.getElementById("customImageBoxBoxShadow1").value;
    customImageBoxBoxShadow2Array[customImageSelectIdValue] = document.getElementById("customImageBoxBoxShadow2").value;
    customImageBoxBoxShadowMode[customImageSelectIdValue] = "customImageBoxBoxShadowOutside";
}
function customImageBoxBoxShadowInside(){
    document.getElementById("customImageBox"+customImageSelectIdValue).style.boxShadow = "inset -6px -6px 16px " + document.getElementById("customImageBoxBoxShadow1").value +", inset 6px 6px 16px " + document.getElementById("customImageBoxBoxShadow2").value;
    document.getElementById("customImageBoxBoxShadow1Indicator").innerHTML = document.getElementById("customImageBoxBoxShadow1").value;
    document.getElementById("customImageBoxBoxShadow2Indicator").innerHTML = document.getElementById("customImageBoxBoxShadow2").value;
    customImageBoxBoxShadow1Array[customImageSelectIdValue] = document.getElementById("customImageBoxBoxShadow1").value;
    customImageBoxBoxShadow2Array[customImageSelectIdValue] = document.getElementById("customImageBoxBoxShadow2").value;
    customImageBoxBoxShadowMode[customImageSelectIdValue] = "customImageBoxBoxShadowInside";
}
function customImageBoxBoxShadowNone(){
    document.getElementById("customImageBox"+customImageSelectIdValue).style.boxShadow = "0px 0px 0px #ffffff, 0px 0px 0px #ffffff";
    document.getElementById("customImageBoxBoxShadow1Indicator").innerHTML = document.getElementById("customImageBoxBoxShadow1").value;
    document.getElementById("customImageBoxBoxShadow2Indicator").innerHTML = document.getElementById("customImageBoxBoxShadow2").value;
    customImageBoxBoxShadow1Array[customImageSelectIdValue] = document.getElementById("customImageBoxBoxShadow1").value;
    customImageBoxBoxShadow2Array[customImageSelectIdValue] = document.getElementById("customImageBoxBoxShadow2").value;
    customImageBoxBoxShadowMode[customImageSelectIdValue] = "customImageBoxBoxShadowNone";
}

document.getElementById("customImageBoxBoxShadow1").oninput = ( function(event) {
    if (document.getElementById("customImageBoxBoxShadowNone").checked == false){
        if (document.getElementById("customImageBoxBoxShadowOutside").checked){
            customImageBoxBoxShadowOutside();
        }
        else {
            customImageBoxBoxShadowInside();
        }
    }
    else{
        customImageBoxBoxShadowNone();
    }
});
document.getElementById("customImageBoxBoxShadow2").oninput = ( function(event) {
    if (document.getElementById("customImageBoxBoxShadowNone").checked == false){
        if (document.getElementById("customImageBoxBoxShadowOutside").checked){
            customImageBoxBoxShadowOutside();
        }
        else {
            customImageBoxBoxShadowInside();
        }
    }
    else{
        customImageBoxBoxShadowNone();
    }
});

//custom image box background liner
$('#customBgImageBox1').click( function(event) {
    document.getElementById("customImageBox"+customImageSelectIdValue).style.background = "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)";
});
$('#customBgImageBox2').click( function(event) {
    document.getElementById("customImageBox"+customImageSelectIdValue).style.background = "linear-gradient(to right, #b92b27, #1565c0)";
});
$('#customBgImageBox3').click( function(event) {
    document.getElementById("customImageBox"+customImageSelectIdValue).style.background = "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)";
});
$('#customBgImageBox4').click( function(event) {
    document.getElementById("customImageBox"+customImageSelectIdValue).style.background = "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)";
});
$('#customBgImageBox5').click( function(event) {
    document.getElementById("customImageBox"+customImageSelectIdValue).style.background = "linear-gradient(to right, #5433ff, #20bdff, #a5fecb)";
});
$('#customBgImageBox6').click( function(event) {
    document.getElementById("customImageBox"+customImageSelectIdValue).style.background = "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)";
});
$('#customBgImageBox7').click( function(event) {
    document.getElementById("customImageBox"+customImageSelectIdValue).style.background = "linear-gradient(to right, #005aa7, #fffde4)";
});
$('#customBgImageBox8').click( function(event) {
    document.getElementById("customImageBox"+customImageSelectIdValue).style.background = "linear-gradient(to right, #11998e, #38ef7d)";
});
$('#customBgImageBox9').click( function(event) {
    document.getElementById("customImageBox"+customImageSelectIdValue).style.background = "linear-gradient(to right, #200122, #6f0000)";
});
$('#customBgImageBox10').click( function(event) {
    document.getElementById("customImageBox"+customImageSelectIdValue).style.background = "linear-gradient(to right, #cc2b5e, #753a88)";
});
$('#customBgImageBoxNone').click( function(event) {
    document.getElementById("customImageBox"+customImageSelectIdValue).style.background = null;
});

//custom text
//on select custom image id, change inputs value to related one or default one.
var customTextSelectIdValue = 1;

$('#customTextSelectId').change( function(event) {
    customTextSelectIdValue = document.getElementById('customTextSelectId').value;
});

//show hide custom text elements
document.getElementById("customTextElementState").onclick = (function(event) {
    if (window.getComputedStyle(document.getElementById("customTextBox"+customTextSelectIdValue)).display=="none"){
        document.getElementById("customTextElementState").innerHTML = "Hide Text";
        document.getElementById("customTextBox"+customTextSelectIdValue).style.display="block";
    } else{
        document.getElementById("customTextElementState").innerHTML = "Show Text";
        document.getElementById("customTextBox"+customTextSelectIdValue).style.display="none";
    }
});

//chage custom text value according to the user input
document.getElementById("customTextInputField").oninput = (function(event) {
    document.getElementById("customText"+customTextSelectIdValue).innerHTML = document.getElementById('customTextInputField').value;
});

//custom text top
document.getElementById("customTextTop").oninput = (function(event) {
    document.getElementById("customTextBox"+customTextSelectIdValue).style.top = document.getElementById('customTextTop').value*10+"px";
    document.getElementById("customTextTopEnter").value = document.getElementById('customTextTop').value*10;
});
document.getElementById("customTextTopEnter").oninput = (function(event) {
    document.getElementById("customTextBox"+customTextSelectIdValue).style.top = document.getElementById('customTextTopEnter').value+"px";
    if (document.getElementById("customTextTopEnter").value > 1400){
        document.getElementById("customTextTop").max = document.getElementById("customTextTopEnter").value/10;
    } else {
        document.getElementById("customTextTop").max = "140";
    }
    if (document.getElementById("customTextTopEnter").value < 0){
        document.getElementById("customTextTop").min = document.getElementById("customTextTopEnter").value/10;
    } else {
        document.getElementById("customTextTop").min = "0";
    }
    document.getElementById("customTextTop").value = document.getElementById('customTextTopEnter').value/10;
});

//custom text left
document.getElementById("customTextLeft").oninput = (function(event) {
    document.getElementById("customTextBox"+customTextSelectIdValue).style.left = document.getElementById('customTextLeft').value*10+"px";
    document.getElementById("customTextLeftEnter").value = document.getElementById('customTextLeft').value*10;
});
document.getElementById("customTextLeftEnter").oninput = (function(event) {
    document.getElementById("customTextBox"+customTextSelectIdValue).style.left = document.getElementById('customTextLeftEnter').value+"px";
    if (document.getElementById("customTextLeftEnter").value > 1400){
        document.getElementById("customTextLeft").max = document.getElementById("customTextLeftEnter").value/10;
    } else {
        document.getElementById("customTextLeft").max = "140";
    }
    if (document.getElementById("customTextLeftEnter").value < 0){
        document.getElementById("customTextLeft").min = document.getElementById("customTextLeftEnter").value/10;
    } else {
        document.getElementById("customTextLeft").min = "0";
    }
    document.getElementById("customTextLeft").value = document.getElementById('customTextLeftEnter').value/10;
});

//custom text width
document.getElementById("customTextWidth").oninput = (function(event) {
    document.getElementById("customTextBox"+customTextSelectIdValue).style.width = document.getElementById('customTextWidth').value*20+"px";
    document.getElementById("customTextWidthIndicator").innerHTML = document.getElementById('customTextWidth').value*20+"px";
});

//export image
function saveImage() {
    document.getElementById('imageData').style.width = "fit-content";
    domtoimage.toPng(document.getElementById('imageData'))
      .then(function (dataUrl) {
        document.getElementById('saveImageBox').src = dataUrl;
        document.getElementById('downloadImage').href = dataUrl;
        document.getElementById('downloadImage').click()
        document.getElementById('imageData').style.width = null;
      })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      });
  };

