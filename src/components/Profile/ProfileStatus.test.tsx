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
test('after double click on span editMode should be changed, and input should be instead span', () => {
    const div = document.createElement('div');
    const component= ReactDOM.render(<ProfileStatus status={'it-kamasutra'} className={''} updateUserStatus={() => {}} />, div) as any;
    const span = div.querySelector('span');
    span?.dispatchEvent(new MouseEvent('dblclick', { bubbles: true }));
    expect(div.querySelector('input')).not.toBeNull();
    expect(div.querySelector('input')!.value).toBe('it-kamasutra');
    expect(div.querySelector('span')).toBeNull();

    ReactDOM.unmountComponentAtNode(div);
});