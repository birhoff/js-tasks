var StringsBasic = {
    /**
     * @param {string} str
     * @param {string} sub
     * @returns {number}
     */
    subCount : function(str, sub) {
        var match = str.match(new RegExp(sub,'gi'));
        return !match ? 0 : match.length;
    },

    /**
     * @param {string} str
     * @param {string} sub
     * @returns {Array,<string>}
     */
    wordsContains : function(str, sub) {
        var allWords = str.replace(/[\.,]+/gi).split(' '),
            result = [];
        
        for(var i=0;i<allWords.length;i++){
            if(~allWords[i].toLocaleLowerCase().indexOf(sub.toLocaleLowerCase())){
                result.push(allWords[i]);
            }
        }
        return result;
    },
    /**
     * @param {string} str
     * @param {string} sub
     * @returns {Array.<string>}
     */
    wordsNotContains : function(str, sub) {
        var allWords = str.replace(/[\.,]+/gi).split(' '),
            result = [];
        
        for(var i=0;i<allWords.length;i++){
            if(!~allWords[i].toLocaleLowerCase().indexOf(sub.toLocaleLowerCase())){
                result.push(allWords[i]);
            }
        }
        return result;
    },
    /**
     * @param {string} str
     * @returns {Array.<string>}
     */
    wordsBeginCapital : function(str) {
        var allWords = str.replace(/[\.,]+/gi).split(' '),
            result = [];
        
        for (var i = 0; i < allWords.length; i++) {
            if (isUpperCase(allWords[i].charAt(0))) {
                result.push(allWords[i]);
            }
        }

        return result;

        function isUpperCase(character) {
            if (!isNaN(character * 1)) {
                return false;
            } else {
                if (character == character.toUpperCase()) {
                    return true;
                }
                return false;
            }

        }

    },
    /**
     * @param {string} str
     * @returns {boolean}
     */
    isPalindrome : function(str) {
        return str.replace(/[ ,\.]+/g,'').toLocaleLowerCase() == str.replace(/[ ,\.]+/g,'').split('').reverse().join('').toLocaleLowerCase();
    }
};
