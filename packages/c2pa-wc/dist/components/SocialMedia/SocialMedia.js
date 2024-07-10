import{__decorate as o,e as i}from"../../b803f408.js";import{r as s,$ as t,s as e}from"../../e4c0417e.js";import{n as l}from"../../06170432.js";import{defaultStyles as c,baseSectionStyles as r}from"../../styles.js";import{Localizable as a}from"../../mixins/localizable.js";import{hasChanged as n}from"../../3e371bb9.js";import"../Icon/Icon.js";import"../PanelSection/PanelSection.js";import"../../12d8f3c3.js";import"../../i18n/index.js";import"../../icons/color/logos/adobe-stock.js";import"../../icons/color/logos/adobe.js";import"../../icons/color/logos/behance.js";import"../../icons/color/logos/cai.js";import"../../icons/color/logos/ethereum.js";import"../../icons/color/logos/facebook.js";import"../../icons/color/logos/instagram.js";import"../../icons/color/logos/lightroom.js";import"../../icons/color/logos/linkedin.js";import"../../icons/color/logos/photoshop.js";import"../../icons/color/logos/solana.js";import"../../icons/color/logos/truepic.js";import"../../icons/color/logos/twitter.js";import"../Tooltip/Tooltip.js";import"../../fc995b5e.js";import"../../icons/monochrome/help.js";let m=class extends(a(e)){static get styles(){return[c,r,s`
        .section-social-media-list {
          --cai-icon-size: 16px;
          display: flex;
          flex-direction: row;
          list-style: none;
          padding: 0px 0px 0px 2px;
          margin: 0;
          overflow: hidden;
        }

        .section-social-media-list-item {
          display: flex;
          align-items: center;
        }

        .section-social-media-list-item-link {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      `]}render(){var o;return t`<cai-panel-section
      helpText=${this.strings["social-media.helpText"]}
    >
      <div slot="header">${this.strings["social-media.header"]}</div>
      <ul class="section-social-media-list" slot="content">
        ${null===(o=this.data)||void 0===o?void 0:o.map((o=>t`
            <li class="section-social-media-list-item">
              <a
                class="section-social-media-list-item-link"
                href=${o["@id"]}
                target="_blank"
              >
                <cai-icon source="${o["@id"]}"></cai-icon>
              </a>
            </li>
          `))}
      </ul>
    </cai-panel-section>`}};o([i({type:Object,hasChanged:n})],m.prototype,"data",void 0),m=o([l("cai-social-media")],m);export{m as SocialMedia};
