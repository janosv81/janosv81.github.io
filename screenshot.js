var appended;
(function () {
  function loadScript(url, callback) {
    var script = document.createElement('script')
    script.type = 'text/javascript';
    if (script.readyState) { //IE
      script.onreadystatechange = function () {
        if (script.readyState == 'loaded' || script.readyState == 'complete') {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else { //Others
      script.onload = function () {
        callback();
      };
    }
    script.src = url;
    document.getElementsByTagName('head') [0].appendChild(script);
  }
  var appendScreenshotLink = function (index, element) {
    var url = element.firstChild.getAttribute('href');
    var urlparts = url.split('/testngreports/');
    var testcaseArray = urlparts[1].split('/');
    var testcaseName = testcaseArray[testcaseArray.size() - 1];
    var testcasePackage = urlparts[1].replace(/\//g, '.');
    var pngurl = urlparts[0] + '/artifact/reports/' + testcasePackage + '/smartboxfr_' + testcaseName + '.png';
    link = document.createElement('a');
    link.setAttribute('href', pngurl);
    link.innerHTML = '  --> Screenshot';
    $(element).append(link);
  }
  loadScript('https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js', function () {
	  if(appended != true){
	  $('td#main-panel table tr:nth-child(5) ol li').each(appendScreenshotLink);}
	appended = true;
  });
}) ();