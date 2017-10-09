"use strict";

Lyngk.Coordinates = function (co, li) {
    var c = co;
    var l = li;

    this.valid = function () {
        var array = [[1, 3],
            [2, 2], [2, 3], [2, 4], [2, 5],
            [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7],
            [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7],
            [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8],
            [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [6, 8],
            [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8], [7, 9],
            [8, 5], [8, 6], [8, 7], [8, 8],
            [9, 7]];
        return array.indexOf([c.charCodeAt() - 65, l]) >= 0;
    }


    this.validNbCasesValid = function(){
        var array = [[1, 3],
            [2, 2], [2, 3], [2, 4], [2, 5],
            [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7],
            [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7],
            [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8],
            [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [6, 8],
            [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8], [7, 9],
            [8, 5], [8, 6], [8, 7], [8, 8],
            [9, 7]];
        var counter = 0;
        var i=0;
        var j=0;
        for (i in 9){
            for(j in 9){
                if(array.indexOf([i, j]>=0)){
                    counter++;
                }
            }
        }
        if(counter===43){
            return true;
        }
        return false;
    }


};

