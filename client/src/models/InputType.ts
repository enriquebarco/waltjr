import { ChangeEventHandler } from "react";

export default interface InputType {
    label: string,
    name: string,
    type: string,
    value: string | number | undefined,
    onChange: ChangeEventHandler<HTMLInputElement>
}