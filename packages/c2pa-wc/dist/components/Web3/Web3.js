import{__decorate as o,e as i}from"../../b803f408.js";import{r as s,$ as l,w as e,s as t}from"../../e4c0417e.js";import{n as r}from"../../06170432.js";import{defaultStyles as a,baseSectionStyles as n}from"../../styles.js";import{Localizable as c}from"../../mixins/localizable.js";import{hasChanged as d}from"../../3e371bb9.js";import"../Icon/Icon.js";import"../PanelSection/PanelSection.js";import"./Web3Pill.js";import"../../12d8f3c3.js";import"../../i18n/index.js";import"../../icons/color/logos/adobe-stock.js";import"../../icons/color/logos/adobe.js";import"../../icons/color/logos/behance.js";import"../../icons/color/logos/cai.js";import"../../icons/color/logos/ethereum.js";import"../../icons/color/logos/facebook.js";import"../../icons/color/logos/instagram.js";import"../../icons/color/logos/lightroom.js";import"../../icons/color/logos/linkedin.js";import"../../icons/color/logos/photoshop.js";import"../../icons/color/logos/solana.js";import"../../icons/color/logos/truepic.js";import"../../icons/color/logos/twitter.js";import"../Tooltip/Tooltip.js";import"../../fc995b5e.js";import"../../icons/monochrome/help.js";let p=class extends(c(t)){static get styles(){return[a,n,s`
        .web3-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
          list-style: none;
          padding: 0;
          margin: 0;
          overflow: hidden;
        }

        .web3-list-item {
          padding-left: 10px;
          display: flex;
          align-items: center;
        }
      `]}render(){var o,i,s,t,r,a;return l`<cai-panel-section>
      <div slot="header">${this.strings["web3.header"]}</div>
      <div slot="content">
        <ul class="web3-list">
          ${(null===(o=this.data)||void 0===o?void 0:o.solana)&&(null===(i=this.data)||void 0===i?void 0:i.solana.length)>0?l`
                <cai-web3-pill
                  key="solana"
                  address=${null===(s=this.data)||void 0===s?void 0:s.solana}
                  hidden="false"
                  locale=${this.locale}
                >
                </cai-web3-pill>
              `:e}
          ${(null===(t=this.data)||void 0===t?void 0:t.ethereum)&&(null===(r=this.data)||void 0===r?void 0:r.ethereum.length)>0?l`
                <cai-web3-pill
                  key="ethereum"
                  address=${null===(a=this.data)||void 0===a?void 0:a.ethereum}
                  hidden="false"
                  locale=${this.locale}
                >
                </cai-web3-pill>
              `:e}
        </ul>
      </div>
    </cai-panel-section>`}};o([i({type:Object,hasChanged:d})],p.prototype,"data",void 0),p=o([r("cai-web3")],p);export{p as Web3};
