import React from "react";
import {render} from "@testing-library/react";
import {MainApp} from "./App";

it('renders without crashing', () => {
    const { unmount } = render(<MainApp/>);
    unmount();
});