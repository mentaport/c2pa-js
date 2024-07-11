import{__decorate as o,e as t}from"../../b803f408.js";import{r as i,$ as s,s as r}from"../../e4c0417e.js";import{n as e}from"../../06170432.js";import{defaultStyles as c,baseSectionStyles as n}from"../../styles.js";import{Localizable as l}from"../../mixins/localizable.js";import{hasChanged as p}from"../../3e371bb9.js";import"../Icon/Icon.js";import"../PanelSection/PanelSection.js";import"../../12d8f3c3.js";import"../../i18n/index.js";import"../../icons/color/logos/adobe-stock.js";import"../../icons/color/logos/adobe.js";import"../../icons/color/logos/behance.js";import"../../icons/color/logos/cai.js";import"../../icons/color/logos/ethereum.js";import"../../icons/color/logos/facebook.js";import"../../icons/color/logos/instagram.js";import"../../icons/color/logos/lightroom.js";import"../../icons/color/logos/linkedin.js";import"../../icons/color/logos/photoshop.js";import"../../icons/color/logos/solana.js";import"../../icons/color/logos/truepic.js";import"../../icons/color/logos/twitter.js";import"../../icons/color/logos/c2pa_mentaport.js";import"../Tooltip/Tooltip.js";import"../../fc995b5e.js";import"../../icons/monochrome/help.js";let a=class extends(l(r)){static get styles(){return[c,n,i`
        .section-produced-with-content {
          display: flex;
          align-items: center;
        }

        .section-produced-with-beta {
          color: var(--cai-secondary-color);
        }
      `]}render(){var o,t,i;return s` <cai-panel-section
      helpText=${this.strings["produced-with.helpText"]}
    >
      <div slot="header">${this.strings["produced-with.header"]}</div>
      <div slot="content">
        <div class="section-produced-with-content">
          <span> ${null!==(t=null===(o=this.data)||void 0===o?void 0:o.product)&&void 0!==t?t:""}    
          ${(null===(i=this.manifestStore)||void 0===i?void 0:i.isBeta)?s`<span class="section-produced-with-beta">
                  ${this.strings["produced-with.beta"]}
                </span>`:null} </span>
        </div>
      <div>
    </cai-panel-section>`}};o([t({type:Object,hasChanged:p})],a.prototype,"data",void 0),o([t({type:Object,hasChanged:p})],a.prototype,"manifestStore",void 0),a=o([e("cai-produced-with")],a);export{a as ProducedWith};
