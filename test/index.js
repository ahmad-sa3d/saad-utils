let should = require('chai').should();
let myUtil = require( '../index' );

// uCFirst
describe( '#uCFirst => Uppercase first letter', function(){
	it( 'converts ahmed to Ahmed', function(){
		myUtil.uCFirst( 'ahmed' ).should.equal( 'Ahmed' );
	} );

	it( 'converts Ahmed to Ahmed', function(){
		myUtil.uCFirst( 'Ahmed' ).should.equal( 'Ahmed' );
	} );
} );

// toNumber
describe( '#toNumber => get Numeric value', function(){
	it( "converts '100' to 100", function(){
		myUtil.toNumber( '100' ).should.equal( 100 );
	} );

	it( "converts 'ahmed' to 0", function(){
		myUtil.toNumber( 'ahmed' ).should.equal( 0 );
	} );

	it( "converts null to 0", function(){
		myUtil.toNumber( null ).should.equal( 0 );
	} );

	it( "converts '10aa' to 10", function(){
		myUtil.toNumber( '10aa' ).should.equal( 10 );
	} );

	it( "converts 'aa10' to 10", function(){
		myUtil.toNumber( 'aa10' ).should.equal( 0 );
	} );
} );

// toCamelCase
describe( '#toCamelCase', function(){
	it( 'converts ahmed to ahmed', function(){
		myUtil.toCamelCase( 'ahmed' ).should.equal( 'ahmed' );
	} );

	it( 'converts Ahmed saad to ahmedSaad', function(){
		myUtil.toCamelCase( 'Ahmed saad' ).should.equal( 'ahmedSaad' );
	} );

	it( 'converts Ahmed-saad to ahmedSaad', function(){
		myUtil.toCamelCase( 'Ahmed-saad' ).should.equal( 'ahmedSaad' );
	} );

	it( 'converts Ahmed_saad to ahmedSaad', function(){
		myUtil.toCamelCase( 'Ahmed_saad' ).should.equal( 'ahmedSaad' );
	} );

	it( 'converts ahmed-saad to ahmedSaad', function(){
		myUtil.toCamelCase( 'ahmed-saad' ).should.equal( 'ahmedSaad' );
	} );
} );

// trimText
describe( '#trimText', function(){
	it( 'converts ahmed saad to ahmed', function(){
		myUtil.trimText( 'ahmed saad', 0, 5 ).should.equal( 'ahmed' );
	} );

	it( 'converts ahmed saad to ahmed ... when defining tail', function(){
		myUtil.trimText( 'ahmed saad', 0, 5, '...' ).should.equal( 'ahmed ...' );
	} );
	
} );

// buildQueryString
describe( '#buildQueryString', function(){
	
	it( 'converts {key: value} to ?key=value', function(){
		myUtil.buildQueryString( { key: 'value' } ).should.equal( '?key=value' );
	} );

	it( 'converts {key: value, key2: value2} to ?key=value&key2=value2', function(){
		myUtil.buildQueryString( { key: 'value', key2: 'value2' } ).should.equal( '?key=value&key2=value2' );
	} );
	
} );

// getDayName
describe( '#getDayName', function(){
	
	it( 'converts 0 to Sunday', function(){
		myUtil.getDayName( 0 ).should.equal( 'Sunday' );
	} );

	it( 'converts 0 to Su', function(){
		myUtil.getDayName( 0, 'en', true ).should.equal( 'Su' );
	} );

	it( 'converts 0 to الأحد', function(){
		myUtil.getDayName( 0, 'ar' ).should.equal( 'الأحد' );
	} );

	it( 'converts 0 to الأحد', function(){
		myUtil.getDayName( 0, 'ar', true ).should.equal( 'الأحد' );
	} );
	
} );

// getFormattedDate
describe( '#getFormattedDate', function(){
	
	it( 'get January 2, 2017', function(){
		myUtil.getFormattedDate( 2, 1, 2017 ).should.equal( 'January 2, 2017' );
	} );

	it( 'get January 2', function(){
		myUtil.getFormattedDate( 2, 1, 2017, 'en', false ).should.equal( 'January 2' );
	} );
	
} );


