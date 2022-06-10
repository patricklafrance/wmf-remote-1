import { Button, Div, H2 } from "@sharegate/orbit-ui";
import React, { useCallback } from "react";

export default function Page8({ eventBus }) {
    const increment = useCallback(() => {
        eventBus.dispatch("increment");
    }, [eventBus]);

    return (
        <main>
            <H2>Page 8</H2>
            <Div>
                <Button onClick={increment}>Increment counter</Button>
            </Div>
        </main>
    );
}