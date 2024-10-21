import React from 'react';
import '@testing-library/jest-dom';
import ReactDOM from 'react-dom';
import ProfileStatus from "./ProfileStatus";

test('status from props should be in state', () => {
    const div = document.createElement('div');
    const component= ReactDOM.render(<ProfileStatus status={'it-kamasutra'} className={''} updateUserStatus={() => {}} />, div) as any;

    expect(component.state.statusValue).toBe('it-kamasutra');
    expect(div.querySelector('span')).not.toBeNull();
    expect(div.querySelector('span')!.textContent).toBe('it-kamasutra');

    ReactDOM.unmountComponentAtNode(div);
});
test('after creation span with status should be displayed with correct status', () => {
    const div = document.createElement('div');
    const component= ReactDOM.render(<ProfileStatus status={'it-kamasutra'} className={''} updateUserStatus={() => {}} />, div) as any;

    expect(div.querySelector('input')).toBeNull();
    expect(div.querySelector('span')).not.toBeNull();

    ReactDOM.unmountComponentAtNode(div);
});
