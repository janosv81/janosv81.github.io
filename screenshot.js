var appended;
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



loadScript('https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js', function () {
    if (appended != true) {
        $('table.fileList tbody tr').each(appendScreenshotCell);
    }
    appended = true;
});


var appendScreenshotCell = function (index, element) {
    elem = $(element).find('a');
    var testClassName = elem.get(0).getAttribute('href');
    var pageUrl = window.location.href;
    var testcaseArray = testClassName.split('.');
    var testcaseName = testcaseArray[testcaseArray.size() - 1];
    var pngurl = pageUrl + testClassName + "/" + testcaseName + ".png";

    $.ajax(pngurl, {type: "HEAD"}).done(function () {
        placeholder = document.createElement('img');
        placeholder.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png');
        placeholder.setAttribute('id', 'place-holder-' + index);
        placeholder.setAttribute('style', 'zindex: 100; position: fixed; left: 20px; top: 100px; max-height: 750px;max-width: 1300px;');
        link = document.createElement('a');
        link.setAttribute('href', pngurl);
        link.setAttribute('onmouseover', 'document.getElementById(\'place-holder-' + index + '\').src=\'' + pngurl + '\';');
        link.setAttribute('onmouseout', 'document.getElementById(\'place-holder-' + index + '\').src=\'https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png\';');
        link.innerHTML = '   [SCREENSHOT]';
        $(element).find("td:last").append(link,placeholder);
    });
};


