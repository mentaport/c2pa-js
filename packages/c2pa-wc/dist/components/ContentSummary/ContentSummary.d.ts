/**
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in
 * accordance with the terms of the Adobe license agreement accompanying
 * it.
 */
import { LitElement } from 'lit';
import '../../../assets/svg/monochrome/generic-info.svg';
import '../Icon';
import '../PanelSection';
declare global {
    interface HTMLElementTagNameMap {
        'cai-content-summary': ContentSummary;
    }
    namespace JSX {
        interface IntrinsicElements {
            'cai-content-summary': any;
        }
    }
}
export interface ContentSummaryConfig {
    stringMap: Record<string, string>;
}
declare const ContentSummary_base: (new (...args: any[]) => import("../../mixins/localizable").LocalizableInterface) & typeof LitElement;
export declare class ContentSummary extends ContentSummary_base {
    static get styles(): import("lit").CSSResult[];
    data: string | undefined;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
