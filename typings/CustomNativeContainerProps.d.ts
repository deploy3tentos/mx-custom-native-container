/**
 * This file was generated from CustomNativeContainer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue } from "mendix";

export interface CustomNativeContainerProps<Style> {
    name: string;
    style: Style[];
    onClickAction?: ActionValue;
    onClickActionDisabledDuringAction: boolean;
    onLongPressAction?: ActionValue;
    onLongPressActionDisabledDuringAction: boolean;
    content?: ReactNode;
}

export interface CustomNativeContainerPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    onClickAction: {} | null;
    onClickActionDisabledDuringAction: boolean;
    onLongPressAction: {} | null;
    onLongPressActionDisabledDuringAction: boolean;
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
}
