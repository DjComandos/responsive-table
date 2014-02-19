window.responsiveTable = (function (){
	var responsiveRules = '';

	function addResponsiveRule(breakPoint, selector, rules){
		document.styleSheets[0].insertRule('@media (max-width : ' + 
			breakPoint + ') { ' + selector + ' { ' + rules + '; } }', 0);
	}

	return function (table, breakPoint){
		breakPoint = breakPoint || '870px';

		var headers = table.querySelectorAll('.responsive-table th');
		for(var i = 0, len = headers.length; i < len; i++) {
			responsiveRules += 'td:nth-of-type(' + i + '):before ' + 
				' { content: "' + headers[i].innerHTML + '" }';
		}

		document.styleSheets[0].insertRule('@media (max-width : ' + 
			breakPoint + ') { ' + responsiveRules + ' }', 0);
	};
})();



function makeTableResponsive(){
	var headers = document.querySelectorAll('.responsive-table th');
	for(var i = 0, len = headers.length; i < len; i++) {
		/*style.sheet.addRule('td:nth-of-type(' + i + '):before', 
			'content: "' + headers[i].innerHTML + '"');/**/
		addCSSRule(document.styleSheets[0], 'td:nth-of-type(' + i + '):before', 
			'content: "' + headers[i].innerHTML + '"');
	}
}
