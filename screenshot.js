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
    var logurl = urlparts[0] + '/artifact/reports/' + testcasePackage + '/sbx-test-log.log'
    link = document.createElement('a');
    link.setAttribute('href', logurl);
    link.innerHTML = '  [LOG]';
    $(element).append(link);
    link = document.createElement('a');
    link.setAttribute('href', pngurl);
    link.setAttribute('onmouseover', 'document.getElementById(\'place-holder-' + index + '\').src=\'' + pngurl + '\';');
    link.setAttribute('onmouseout', 'document.getElementById(\'place-holder-' + index + '\').src=\'https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png\';');
    link.innerHTML = '     [SCREENSHOT]';
    $(element).append(link);
    placeholder = document.createElement('img');
    placeholder.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png');
    placeholder.setAttribute('id', 'place-holder-' + index);
    placeholder.setAttribute('style', "zindex: 100; position: fixed; left: 20px; top: 100px; max-height: 600px;max-width: 800px;");
    $(element).append(placeholder);
  }
  var appendScreenshotCell = function (index, element) {
    elem = $(element).find('a:nth-child(3)');
    var url = elem.get(0).getAttribute('href');
    var urlparts = url.split('/testngreports/');
    var testcaseArray = urlparts[1].split('/');
    var testcaseName = testcaseArray[testcaseArray.size() - 1];
    var testcasePackage = urlparts[1].replace(/\//g, '.');
    var pngurl = urlparts[0] + '/artifact/reports/' + testcasePackage + '/smartboxfr_' + testcaseName + '.png';
    var logurl = urlparts[0] + '/artifact/reports/' + testcasePackage + '/sbx-test-log.log'
    link = document.createElement('a');
    link.setAttribute('href', logurl);
    link.innerHTML = '[LOG]';
    cell = document.createElement('td');
    cell.setAttribute('class', 'log');
    $(element).find('td:first').after(cell);
    $(element).find('td.log').append(link);
    placeholder = document.createElement('img');
    placeholder.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png');
    placeholder.setAttribute('id', 'place-holder-' + index);
    placeholder.setAttribute('style', "zindex: 100; position: fixed; left: 20px; top: 100px; max-height: 600px;max-width: 800px;");
    link = document.createElement('a');
    link.setAttribute('href', pngurl);
    link.setAttribute('onmouseover', 'document.getElementById(\'place-holder-' + index + '\').src=\'' + pngurl + '\';');
    link.setAttribute('onmouseout', 'document.getElementById(\'place-holder-' + index + '\').src=\'https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png\';');
    link.innerHTML = '[SCREENSHOT]';
    cell = document.createElement('td');
    cell.setAttribute('class', 'screen');
    $(element).find('td:first').after(cell);
    $(element).find('td.screen').append(link, placeholder);
  }
  loadScript('https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js', function () {
    if (appended != true) {
      if (window.location.pathname.match(/.*lastCompletedBuild.*$/))
      {
        $('table#fail-tbl tbody tr').each(appendScreenshotCell);
      } 
      else {
        $('td#main-panel table tr:nth-child(5) ol li').each(appendScreenshotLink);
      }
    }
    appended = true;
  });
}) ();
