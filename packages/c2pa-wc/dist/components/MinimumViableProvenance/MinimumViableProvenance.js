import{__decorate as e,e as t}from"../../b803f408.js";import{r as i,$ as n,w as o,s as r}from"../../e4c0417e.js";import{o as a}from"../../fc995b5e.js";import{n as s}from"../../06170432.js";import{Configurable as l}from"../../mixins/configurable.js";import{defaultStyles as c,baseSectionStyles as m}from"../../styles.js";import{defaultDateFormatter as u}from"../../3e371bb9.js";import{Localizable as d}from"../../mixins/localizable.js";import"../PanelSection/PanelSection.js";import"../../12d8f3c3.js";import"../../icons/monochrome/help.js";import"../../i18n/index.js";import"../Tooltip/Tooltip.js";import"../Icon/Icon.js";import"../../icons/color/logos/adobe-stock.js";import"../../icons/color/logos/adobe.js";import"../../icons/color/logos/behance.js";import"../../icons/color/logos/cai.js";import"../../icons/color/logos/ethereum.js";import"../../icons/color/logos/facebook.js";import"../../icons/color/logos/instagram.js";import"../../icons/color/logos/lightroom.js";import"../../icons/color/logos/linkedin.js";import"../../icons/color/logos/photoshop.js";import"../../icons/color/logos/solana.js";import"../../icons/color/logos/truepic.js";import"../../icons/color/logos/twitter.js";import"../../icons/color/logos/c2pa_mentaport.js";function p(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function g(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function f(e){g(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function v(e){return g(1,arguments),e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}var h={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},j=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,N=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,b=/^([+-])(\d{2})(?::?(\d{2}))?$/;function D(e){var t,i={},n=e.split(h.dateTimeDelimiter);if(n.length>2)return i;if(/:/.test(n[0])?t=n[0]:(i.date=n[0],t=n[1],h.timeZoneDelimiter.test(i.date)&&(i.date=e.split(h.timeZoneDelimiter)[0],t=e.substr(i.date.length,e.length))),t){var o=h.timezone.exec(t);o?(i.time=t.replace(o[1],""),i.timezone=o[1]):i.time=t}return i}function w(e,t){var i=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),n=e.match(i);if(!n)return{year:NaN,restDateString:""};var o=n[1]?parseInt(n[1]):null,r=n[2]?parseInt(n[2]):null;return{year:null===r?o:100*r,restDateString:e.slice((n[1]||n[2]).length)}}function y(e,t){if(null===t)return new Date(NaN);var i=e.match(j);if(!i)return new Date(NaN);var n=!!i[4],o=S(i[1]),r=S(i[2])-1,a=S(i[3]),s=S(i[4]),l=S(i[5])-1;if(n)return function(e,t,i){return t>=1&&t<=53&&i>=0&&i<=6}(0,s,l)?function(e,t,i){var n=new Date(0);n.setUTCFullYear(e,0,4);var o=n.getUTCDay()||7,r=7*(t-1)+i+1-o;return n.setUTCDate(n.getUTCDate()+r),n}(t,s,l):new Date(NaN);var c=new Date(0);return function(e,t,i){return t>=0&&t<=11&&i>=1&&i<=(C[t]||(U(e)?29:28))}(t,r,a)&&function(e,t){return t>=1&&t<=(U(e)?366:365)}(t,o)?(c.setUTCFullYear(t,r,Math.max(o,a)),c):new Date(NaN)}function S(e){return e?parseInt(e):1}function T(e){var t=e.match(N);if(!t)return NaN;var i=x(t[1]),n=x(t[2]),o=x(t[3]);return function(e,t,i){if(24===e)return 0===t&&0===i;return i>=0&&i<60&&t>=0&&t<60&&e>=0&&e<25}(i,n,o)?36e5*i+6e4*n+1e3*o:NaN}function x(e){return e&&parseFloat(e.replace(",","."))||0}function $(e){if("Z"===e)return 0;var t=e.match(b);if(!t)return 0;var i="+"===t[1]?-1:1,n=parseInt(t[2]),o=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,o)?i*(36e5*n+6e4*o):NaN}var C=[31,null,31,30,31,30,31,31,30,31,30,31];function U(e){return e%400==0||e%4==0&&e%100!=0}const I={dateFormatter:u};let z=class extends(l(d(r),I)){static get styles(){return[c,m,i`
        .minimum-viable-provenance-content {
          display: flex;
          text-align: left;
          color: #666666;
        }
        div.container {
          padding: var(
            --cai-manifest-summary-content-padding,
            12px 16px 12px 16px
          );
        }
        .minimum-viable-provenance-signer.no-date {
          height: 100%;
        }
        div.heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        div.heading-text {
          color: var(
            --cai-panel-section-heading-color,
            var(--cai-primary-color)
          );
          font-size: 18px;
          font-weight: var(--cai-panel-section-heading-font-weight, bold);
        }
      `]}render(){var e,t,i,r,s,l,c;const m="error"===(null===(e=this.manifestStore)||void 0===e?void 0:e.error),u={"minimum-viable-provenance-signer":!0,"no-date":m},d=(null===(i=null===(t=this.manifestStore)||void 0===t?void 0:t.signature)||void 0===i?void 0:i.isoDateString)?function(e,t){g(1,arguments);var i=t||{},n=null==i.additionalDigits?2:p(i.additionalDigits);if(2!==n&&1!==n&&0!==n)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var o,r=D(e);if(r.date){var a=w(r.date,n);o=y(a.restDateString,a.year)}if(!o||isNaN(o.getTime()))return new Date(NaN);var s,l=o.getTime(),c=0;if(r.time&&(c=T(r.time),isNaN(c)))return new Date(NaN);if(!r.timezone){var m=new Date(l+c),u=new Date(0);return u.setFullYear(m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate()),u.setHours(m.getUTCHours(),m.getUTCMinutes(),m.getUTCSeconds(),m.getUTCMilliseconds()),u}return s=$(r.timezone),isNaN(s)?new Date(NaN):new Date(l+c+s)}(null===(r=this.manifestStore)||void 0===r?void 0:r.signature.isoDateString):void 0;return n`
      <div class="container">
        <div class="heading">
          <div class="heading-text">
            ${this.strings["minimum-viable-provenance.header"]}
          </div>
        </div>
        <div class="minimum-viable-provenance-content">
          <div class=${a(u)}>
            <span>
              ${this.strings["minimum-viable-provenance.issuedBy"]}
              ${null===(l=null===(s=this.manifestStore)||void 0===s?void 0:s.signature)||void 0===l?void 0:l.issuer}
              ${m?o:n`
                    ${d&&function(e){if(g(1,arguments),!v(e)&&"number"!=typeof e)return!1;var t=f(e);return!isNaN(Number(t))}(d)?n`${this.strings["minimum-viable-provenance.on"]}
                        ${null===(c=this._config)||void 0===c?void 0:c.dateFormatter(d)}`:o}
                  `}
            </span>
          </div>
        </div>
      </div>
    `}};e([t({type:Object})],z.prototype,"manifestStore",void 0),z=e([s("cai-minimum-viable-provenance")],z);export{z as MinimumViableProvenance};
