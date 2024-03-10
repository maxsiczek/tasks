import { Button } from "react-bootstrap";
import React, { useState } from "react";

interface ButtonProps {
    value: number;
    setValue: (value: number) => void;
}

function Doubler({ value, setValue }: ButtonProps): JSX.Element {
    return <Button onClick={() => setValue(2 * value)}>Double</Button>;
}

function Halver({ value, setValue }: ButtonProps): JSX.Element {
    return <Button onClick={() => setValue(0.5 * value)}>Halve</Button>;
}
export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler value={dhValue} setValue={setDhValue}></Doubler>
            <Halver value={dhValue} setValue={setDhValue}></Halver>
        </div>
    );
}
