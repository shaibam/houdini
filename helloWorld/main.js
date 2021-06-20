// import {xml} from './assets/00f22257.js'
fetch('./assets/00f22257.xml')
    .then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(data => {
        const b = data.querySelectorAll('bndbox');
        var s = '['
        for (var i = 0; i < b.length; i++) {
            var a = []
            a.push([parseInt(b[i].querySelector('xmin').innerHTML),
            parseInt(b[i].querySelector('ymin').innerHTML),
            parseInt(b[i].querySelector('xmax').innerHTML),
            parseInt(b[i].querySelector('ymax').innerHTML)])
            s += '[' + a.toString() + ']';
            if (i !== b.length - 1)
                s += ",";
        }
        s += ']';
        s = '[[1402,2709,1847,2891],[2743,2046,3432,2753],[2597,2445,4420,4284],[4056,2233,4274,3690],[2633,2765,2775,2973],[2524,2338,4289,2550],[3024,1361,3121,1916],[2659,2761,2766,2955],[3973,2189,4295,3556],[3033,1368,3114,1921],[2304,118,2616,236]]';
        document.querySelector('#labels').setAttribute('style', '--some:' + s + ';position:absolute;z-index:999')
    })
