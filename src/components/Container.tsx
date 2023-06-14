import { ReactElement, createElement, ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import { CustomStyle } from "../CustomNativeContainer";
import { ActionValue } from "mendix";

export interface ContainerProps {
    style: CustomStyle[];
    content: ReactNode;
    onClickAction?: ActionValue;
    onClickActionDisabledDuringAction?: boolean;
    onLongPressAction?: ActionValue;
    onLongPressActionDisabledDuringAction?: boolean;
}

export function Container({
    content,
    onClickAction,
    onClickActionDisabledDuringAction,
    onLongPressAction,
    onLongPressActionDisabledDuringAction
}: ContainerProps): ReactElement {
    return (
        <TouchableOpacity
            onPress={() =>
                onClickActionDisabledDuringAction
                    ? onClickAction?.isExecuting
                        ? null
                        : onClickAction?.execute()
                    : onClickAction?.execute()
            }
            onLongPress={() =>
                onLongPressActionDisabledDuringAction
                    ? onLongPressAction?.isExecuting
                        ? null
                        : onLongPressAction?.execute()
                    : onLongPressAction?.execute()
            }
        >
            {content}
        </TouchableOpacity>
    );
}
