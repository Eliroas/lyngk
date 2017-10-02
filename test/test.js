'use strict';

var LyngkTestCase = TestCase("LyngkTestCase");

LyngkTestCase.prototype.testA = function(){
    var c = new Lyngk.Coordinates("A",3);
    assertFalse(c.valid());
}

LyngkTestCase.prototype.testB = function(){
    var c = new Lyngk.Engine();
    assertTrue(c.validNbCasesValid());
}