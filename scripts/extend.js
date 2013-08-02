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

function mixin(dst, src){
    var tobj = {}

    for(var x in src){
        if((typeof tobj[x] == "undefined") || (tobj[x] != src[x])){
            dst[x] = src[x];
        }
    }

    if(document.all && !document.isOpera){
        var p = src.toString;

        if(typeof p == "function" && p != dst.toString && p != tobj.toString &&
         p != "\nfunction toString() {\n    [native code]\n}\n"){
            dst.toString = src.toString;
        }
    }
}
