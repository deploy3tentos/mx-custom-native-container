import { ReactElement, createElement } from "react";
import { TextStyle, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { Container } from "./components/Container";
import { CustomNativeContainerProps } from "typings/CustomNativeContainerProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function CustomNativeContainer({
    style,
    content,
    onClickAction,
    onClickActionDisabledDuringAction,
    onLongPressAction,
    onLongPressActionDisabledDuringAction
}: CustomNativeContainerProps<CustomStyle>): ReactElement {
    return (
        <Container
            style={style}
            content={content}
            onClickAction={onClickAction}
            onClickActionDisabledDuringAction={onClickActionDisabledDuringAction}
            onLongPressAction={onLongPressAction}
            onLongPressActionDisabledDuringAction={onLongPressActionDisabledDuringAction}
        />
    );
}
