!function(t){var n=function(t,n){var o;for(o=0;o<t.length;o++)if(t[o]===n)return o;return-1},o=function(){this.tokens=[],this.length=0};o.prototype.add=function(){var t,n=[].slice.call(arguments);for(t=0;t<n.length;t++)this.contains(n[t])||this.tokens.push(n[t])},o.prototype.contains=function(t){if(""===t||/\s/.test(t))throw new Error("Token must not be empty or contain whitespace.");return-1!==n(this.tokens,t)},o.prototype.item=function(t){return this.tokens[t]||null},o.prototype.remove=function(){var t,o,e=[].slice.call(arguments);for(t=0;t<e.length;t++)o=n(this.tokens,e[t]),-1!==o&&this.tokens.splice(o,1)},o.prototype.toggle=function(t,n){if(""===t||/\s/.test(t))throw new Error("Token must not be empty or contain whitespace.");return this.contains(t)?n?!0:(this.remove(t),!1):n===!1?!1:(this.add(t),!0)},o.prototype.toString=function(){return this.tokens.join(" ")},t.DOMTokenList2=o}(window);