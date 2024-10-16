/**
 * Copyright 2022 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in
 * accordance with the terms of the Adobe license agreement accompanying
 * it.
 */
import { L2ManifestStore } from 'c2pa';
import { LitElement } from 'lit';
import '../PanelSection';
declare global {
    interface HTMLElementTagNameMap {
        'cai-minimum-viable-provenance': MinimumViableProvenance;
    }
    namespace JSX {
        interface IntrinsicElements {
            'cai-minimum-viable-provenance': any;
        }
    }
}
export interface MinimumViableProvenanceConfig {
    dateFormatter: (date: Date) => string;
}
declare const MinimumViableProvenance_base: (new (...args: any[]) => import("../../mixins/configurable").ConfigurableInterface<MinimumViableProvenanceConfig>) & (new (...args: any[]) => import("../../mixins/localizable").LocalizableInterface) & typeof LitElement;
export declare class MinimumViableProvenance extends MinimumViableProvenance_base {
    manifestStore: L2ManifestStore | undefined;
    static get styles(): import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
export {};
