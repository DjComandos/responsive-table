window.responsiveTable = (function (){

	function itemized (table, breakPoint){
        var headers = table.querySelectorAll('th');
        var responsiveRules = 
            'table, thead, tbody, th, td, tr {display: block;}' + 
            'thead tr {position: absolute;top: -9999px;left: -9999px;}' +
            'tr {border: 1px solid #ccc;}' + 
            'tr td {border: none; position: relative; padding-left: 50%;}' +
            'tr td:before {position: absolute; width: 45%; white-space: nowrap;}';
        
        breakPoint = breakPoint || '870px';

		for(var i = 0, len = headers.length; i < len; i++) {
			responsiveRules += 'td:nth-of-type(' + (i + 1) + '):before ' + 
				' { content: "' + headers[i].innerHTML + '" }';
		}

		document.styleSheets[0].insertRule('@media (max-width : ' + 
			breakPoint + ') { ' + responsiveRules + ' }', 0);
	};
    return {
        itemized: itemized
    };
})();
