window.responsiveTable = (function (){
	var responsiveRules = '',
        responsiveStyle;

    /*
    var style = document.createElement("style");
    style.setAttribute("media", "@media (max-width: 870px)");
    // WebKit
    style.appendChild(document.createTextNode(""));
    document.head.appendChild(style);/**/

	function addResponsiveRule(breakPoint, selector, rules){
		document.styleSheets[0].insertRule('@media (max-width : ' + 
			breakPoint + ') { ' + selector + ' { ' + rules + '; } }', 0);
	}

    function createResponsiveRules(breakPoint){
        var addRule = addResponsiveRule.bind(null ,breakPoint);
        addRule('table, thead, tbody, th, td, tr', 'display: block;');
        /* For accessibility */
        addRule('thead tr', 'position: absolute;top: -9999px;left: -9999px;');
        addRule('tr', 'border: 1px solid #ccc;');
        addRule('tr td', 'border: none; border-bottom: 1px solid #eee;' + 
            'position: relative; padding-left: 50%;');
        addRule('tr td:before', 'position: absolute; top: 6px; left: 6px;' + 
            'width: 45%; padding-right: 10px; white-space: nowrap;');        
    }

	return function (table, breakPoint){
		breakPoint = breakPoint || '870px';

        createResponsiveRules(breakPoint);
        

		var headers = table.querySelectorAll('.responsive-table th');
		for(var i = 0, len = headers.length; i < len; i++) {
			responsiveRules += 'td:nth-of-type(' + i + '):before ' + 
				' { content: "' + headers[i].innerHTML + '" }';
		}

		document.styleSheets[0].insertRule('@media (max-width : ' + 
			breakPoint + ') { ' + responsiveRules + ' }', 0);
	};
})();
