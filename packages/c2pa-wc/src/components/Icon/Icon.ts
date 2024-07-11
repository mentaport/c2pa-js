/**
 * Copyright 2022 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in
 * accordance with the terms of the Adobe license agreement accompanying
 * it.
 */

import { css, html, LitElement, nothing, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { defaultStyles } from '../../styles';

import '../../../assets/svg/color/logos/adobe-stock.svg';
import '../../../assets/svg/color/logos/adobe.svg';
import '../../../assets/svg/color/logos/behance.svg';
import '../../../assets/svg/color/logos/cai.svg';
import '../../../assets/svg/color/logos/ethereum.svg';
import '../../../assets/svg/color/logos/facebook.svg';
import '../../../assets/svg/color/logos/instagram.svg';
import '../../../assets/svg/color/logos/lightroom.svg';
import '../../../assets/svg/color/logos/linkedin.svg';
import '../../../assets/svg/color/logos/photoshop.svg';
import '../../../assets/svg/color/logos/solana.svg';
import '../../../assets/svg/color/logos/truepic.svg';
import '../../../assets/svg/color/logos/twitter.svg';
import '../../../assets/svg/color/logos/c2pa_mentaport.svg';

declare global {
  interface HTMLElementTagNameMap {
    'cai-icon': Icon;
  }

  namespace JSX {
    interface IntrinsicElements {
      'cai-icon': any;
    }
  }
}

@customElement('cai-icon')
export class Icon extends LitElement {
  @property({ type: String })
  source = '';

  static readonly matchers = [
    {
      pattern: /photoshop/i,
      icon: html`<cai-icon-photoshop></cai-icon-photoshop>`,
    },
    {
      pattern: /c2pa_mentaport/i,
      icon: html`<cai-icon-c2pa-mentaport"></cai-icon-c2pa-mentaport>`,
    },
    {
      pattern: /adobe\sstock/i,
      icon: html`<cai-icon-adobe-stock></cai-icon-adobe-stock>`,
    },
    {
      pattern: /adobe/i,
      icon: html`<cai-icon-adobe></cai-icon-adobe>`,
    },
    {
      pattern: /behance\.net/i,
      icon: html`<cai-icon-behance></cai-icon-behance>`,
    },
    {
      pattern: /facebook\.com/i,
      icon: html`<cai-icon-facebook></cai-icon-facebook>`,
    },
    {
      pattern: /instagram\.com/i,
      icon: html`<cai-icon-instagram></cai-icon-instagram>`,
    },
    {
      pattern: /truepic/i,
      icon: html`<cai-icon-truepic></cai-icon-truepic>`,
    },
    {
      pattern: /twitter\.com/i,
      icon: html`<cai-icon-twitter></cai-icon-twitter>`,
    },
    {
      pattern: /lightroom/i,
      icon: html`<cai-icon-lightroom></cai-icon-lightroom>`,
    },
    {
      pattern: /solana/i,
      icon: html`<cai-icon-solana></cai-icon-solana`,
    },
    {
      pattern: /ethereum/i,
      icon: html`<cai-icon-ethereum></cai-icon-ethereum>`,
    },
    {
      pattern: /linkedin/i,
      icon: html`<cai-icon-linkedin></cai-icon-linkedin>`,
    },
  ];

  @state()
  protected icon: TemplateResult | undefined;

  updated(changedProperties: any) {
    if (changedProperties.has('source')) {
      this.icon = Icon.matchers.find(({ pattern }) =>
        pattern.test(this.source),
      )?.icon;
    }
  }

  static get styles() {
    return [
      defaultStyles,
      css`
        :host {
          max-height: var(--cai-icon-size, 16px);
        }
        #container {
          display: inline-block;
          width: var(--cai-icon-size, 16px);
          height: var(--cai-icon-size, 16px);
          --cai-icon-width: var(--cai-icon-size, 16px);
          --cai-icon-height: var(--cai-icon-size, 16px);
          margin-right: var(--cai-icon-spacing, 8px);
        }
      `,
    ];
  }

  render() {
    return this.icon ? html`<div id="container">${this.icon}</div>` : nothing;
  }
}
