# saad-utils
----


a small library provides set of helper functions, might be needed for every project


### installation

	npm install saad-utils --save
	

	
### Version: __3.0.0__


### Usage:

> require module

	var myUtil = require('saad-utils');
	
> use module
	
	// trim text
	console.log( myUtil.trimText('Hi There', 0, 2) ); // Hi
	
	console.log( myUtil.trimText('Hi There', 0, 2, '...') ); // Hi ...
	
	
	// convert string to camel case
	console.log( myUtil.toCamelCase( 'Ahmed saad' ) ); // ahmedSaad
	

### Methods:

* toNumber( num )
* uCFirst( str )
* toCamelCase( str )
* trimText( str, startIndex, length, tail )
* getDayName( day_index, locale )
* getFormattedDate( day, month, year, locale, withYear )
* getBrowserInfo()
* getSystemInfo()
* cssSupport( property )
* getPageOffsets()
* hasVerticalScroll()
* hasHorizontalScroll()
* getScrollBarWidth()
* getScrollBarHalfWidth
* loadJsFile( filePath )
* loadCssFile( filePath )
* getUrlParameters()
* getUrlParameter( key, defaultValue )
* buildQueryString( obj )
* updateBrowserQueryString( queryObj )

