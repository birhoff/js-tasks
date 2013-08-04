function extend(P, px, sx){
      return (function (){
        var f = function () {
            P.apply(this, Array.prototype.splice.call(arguments,0,1));

        };
    f.prototype = new P();
     mixin(f, P);
    mixin(f, sx);
    mixin(f.prototype, px);
    return f;
    }());
}

var mixin = (function () {
    // test IE prototype for/in error
    var hasIEError = true;
    for (var p in {toString: null}) hasIEError = false;

    if (!hasIEError) {
        return function extend(dst) {
            for (var i = 0; i < arguments.length; i++) {
                var source = arguments[i];
                for (var prop in source) {
                    dst[prop] = source[prop];
                }
            }
            return dst;
        }
    } else {
        var prototypeProps = ["toString", "valueOf", "constructor", "hasOwnProperty", "toLocaleString", "isPrototypeOf", "propertyIsEnumerable"];
        return function extend(dst) {
            for (var i = 0; i < arguments.length; i++) {
                var source = arguments[i];

                for (var prop in source) {
                    dst[prop] = source[prop];
                }

                for (var j = 0; j < prototypeProps.length; j++) {
                    prop = prototypeProps[j];
                    if (source.hasOwnProperty(prop)) {
                        dst[prop] = source[prop];
                    }
                }
            }
            return dst;
        }
    }
}());
