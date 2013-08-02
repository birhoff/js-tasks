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
        var match = str.match(new RegExp(sub,'gi'));
        return !match ? [] : match;
    },
    /**
     * @param {string} str
     * @param {string} sub
     * @returns {Array.<string>}
     */
    wordsNotContains : function(str, sub) {},
    /**
     * @param {string} str
     * @returns {Array.<string>}
     */
    wordsBeginCapital : function(str) {},
    /**
     * @param {string} str
     * @returns {boolean}
     */
    isPalindrome : function(str) {}
};
