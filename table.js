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
