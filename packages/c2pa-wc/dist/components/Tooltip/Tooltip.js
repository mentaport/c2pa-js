import{__decorate as o,e as i}from"../../b803f408.js";import{s as t,r,$ as s}from"../../e4c0417e.js";import{n as e}from"../../06170432.js";import{t as n}from"../../12d8f3c3.js";import{o as c}from"../../fc995b5e.js";import"../../icons/monochrome/help.js";import{defaultStyles as p}from"../../styles.js";import"../Icon/Icon.js";import"../../icons/color/logos/adobe-stock.js";import"../../icons/color/logos/adobe.js";import"../../icons/color/logos/behance.js";import"../../icons/color/logos/cai.js";import"../../icons/color/logos/ethereum.js";import"../../icons/color/logos/facebook.js";import"../../icons/color/logos/instagram.js";import"../../icons/color/logos/lightroom.js";import"../../icons/color/logos/linkedin.js";import"../../icons/color/logos/photoshop.js";import"../../icons/color/logos/solana.js";import"../../icons/color/logos/truepic.js";import"../../icons/color/logos/twitter.js";import"../../icons/color/logos/c2pa_mentaport.js";let a=class extends t{constructor(){super(...arguments),this._isShown=!1,this.animationDuration=200,this.autoPlacement={padding:10},this.arrow=!0}static get styles(){return[p,r`
        #trigger {
          display: flex;
          --cai-icon-width: var(--cai-popover-icon-width, 16px);
          --cai-icon-height: var(--cai-popover-icon-height, 16px);
          --cai-icon-fill: var(--cai-popover-icon-fill, #a8a8a8);
          cursor: pointer;
        }
        .content {
          min-width: 165px;
          max-width: 235px;
          font-size: 13px;
          padding: 10px;
          box-shadow: none;
          border-radius: var(--cai-border-radius);
          background-color: #fff;
          filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.4));
          z-index: 10;
          pointer-events: none;
        }
        .content.shown {
          opacity: 1;
        }
        .content.hidden {
          display: none;
        }
      `]}render(){const o={content:!0,shown:this._isShown};return s`
      <cai-popover
        id="popover"
        arrow=${this.arrow}
        .autoPlacement=${this.autoPlacement}
        ?interactive=${!1}
      >
        <div id="trigger" slot="trigger">
          <slot name="trigger">
            <cai-icon-help></cai-icon-help>
          </slot>
        </div>
        <div class=${c(o)} slot="content">
          <slot name="content"></slot>
        </div>
      </cai-popover>
    `}};o([n()],a.prototype,"_isShown",void 0),o([i({type:Number})],a.prototype,"animationDuration",void 0),o([i({type:Object})],a.prototype,"autoPlacement",void 0),o([i({type:Boolean})],a.prototype,"arrow",void 0),a=o([e("cai-tooltip")],a);export{a as Tooltip};
