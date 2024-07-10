import{__decorate as o,e as i}from"../../b803f408.js";import{w as t,$ as a,s as e,r as c}from"../../e4c0417e.js";import{n as s}from"../../06170432.js";import{defaultStyles as n}from"../../styles.js";import{classPartMap as r}from"../../3e371bb9.js";import"../Tooltip/Tooltip.js";import"../../icons/monochrome/broken-image.js";import"../../icons/color/info.js";import"../../icons/color/alert.js";import"../../icons/color/missing.js";import"../../12d8f3c3.js";import"../../fc995b5e.js";import"../../icons/monochrome/help.js";import"../Icon/Icon.js";import"../../icons/color/logos/adobe-stock.js";import"../../icons/color/logos/adobe.js";import"../../icons/color/logos/behance.js";import"../../icons/color/logos/cai.js";import"../../icons/color/logos/ethereum.js";import"../../icons/color/logos/facebook.js";import"../../icons/color/logos/instagram.js";import"../../icons/color/logos/lightroom.js";import"../../icons/color/logos/linkedin.js";import"../../icons/color/logos/photoshop.js";import"../../icons/color/logos/solana.js";import"../../icons/color/logos/truepic.js";import"../../icons/color/logos/twitter.js";var l;let d=l=class extends e{constructor(){super(...arguments),this.src=void 0,this.badge="none",this.selected=!1,this.badgeHelpText=void 0}static get styles(){return[n,c`
        :host {
          display: inline-block;
          width: var(--cai-thumbnail-size, 72px);
          height: var(--cai-thumbnail-size, 72px);
        }
        .container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          border-radius: var(--cai-thumbnail-border-radius, 3px);
          transition: box-shadow 200ms ease-in-out;
          box-shadow: 0 0 0 0 transparent;
        }
        .selected {
          box-shadow: var(--cai-thumbnail-selected-shadow-offset-x, 0)
            var(--cai-thumbnail-selected-shadow-offset-y, 0)
            var(--cai-thumbnail-selected-shadow-blur, 0)
            var(--cai-thumbnail-selected-shadow-spread, 3px)
            var(--cai-thumbnail-selected-shadow-color, #1473e6);
        }
        cai-tooltip.badge-tooltip,
        .badge-no-tooltip {
          position: absolute;
          top: var(--cai-thumbnail-badge-icon-top, 1px);
          right: var(--cai-thumbnail-badge-icon-right, 1px);
          left: var(--cai-thumbnail-badge-icon-left, auto);
          bottom: var(--cai-thumbnail-badge-icon-bottom, auto);
          width: var(--cai-thumbnail-badge-icon-width, 20px);
          height: var(--cai-thumbnail-badge-icon-height, 20px);
        }
        cai-tooltip.badge-tooltip {
          pointer-events: auto;
        }
        .badge-icon {
          --cai-icon-width: var(--cai-thumbnail-badge-icon-width, 20px);
          --cai-icon-height: var(--cai-thumbnail-badge-icon-height, 20px);
        }
        .included-badge {
          display: flex;
        }
        .no-image {
          --cai-icon-width: var(
            --cai-thumbnail-no-image-icon-width,
            var(--cai-icon-width, 20px)
          );
          --cai-icon-width: var(
            --cai-thumbnail-no-image-icon-height,
            var(--cai-icon-height, 20px)
          );
          --cai-icon-fill: var(
            --cai-thumbnail-no-image-icon-fill,
            var(--cai-icon-width, #8e8e8e)
          );
        }
      `]}render(){const o=r({container:!0,selected:this.selected});return a`<style>
        .container {
          background: url(${this.src}) var(--cai-thumbnail-bgcolor, #eaeaea);
        }
      </style>
      <div class=${o}>
        <slot name="badge">
          ${"none"!==this.badge&&this.badgeHelpText?a`<cai-tooltip class="badge-tooltip">
                <div slot="content">${this.badgeHelpText}</div>
                <div class="included-badge" slot="trigger">
                  ${l.badgeMap[this.badge]}
                </div>
              </cai-tooltip>`:a`<div class="badge-no-tooltip">
                ${l.badgeMap[this.badge]}
              </div>`}
        </slot>
        ${this.src?t:a`<div class="no-image">
              <cai-icon-broken-image></cai-icon-broken-image>
            </div>`}
      </div>`}};d.badgeMap={none:t,info:a`<cai-icon-info class="badge-icon"></cai-icon-info>`,missing:a`<cai-icon-missing class="badge-icon"></cai-icon-missing>`,alert:a`<cai-icon-alert class="badge-icon"></cai-icon-alert>`},o([i({type:String})],d.prototype,"src",void 0),o([i({type:String})],d.prototype,"badge",void 0),o([i({type:Boolean})],d.prototype,"selected",void 0),o([i({type:String,attribute:"badge-help-text"})],d.prototype,"badgeHelpText",void 0),d=l=o([s("cai-thumbnail")],d);export{d as Thumbnail};
