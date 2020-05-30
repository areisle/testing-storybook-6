import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';

import { ICellEditorParams } from '@ag-grid-community/all-modules';
import React, { forwardRef, HTMLProps, useImperativeHandle, useRef, useState, ChangeEvent } from 'react';

interface NativeInputEditorParams {
    inputProps?: HTMLProps<HTMLInputElement>;
}

export type NativeInputEditorProps = ICellEditorParams & NativeInputEditorParams;

/**
 * cell editor that uses native input but allows for props
 */
const NativeInputEditor = forwardRef((props: NativeInputEditorProps, ref) => {
    const {
        node: { rowHeight },
        value: initialValue,
        inputProps = {}
    } = props;

    const inputRef = useRef<HTMLInputElement | null>(null);

    const [value, setValue] = useState(String(initialValue ?? ''));

    const handleChange = ({ target: { value: nextValue } }: ChangeEvent<HTMLInputElement>) => {
        setValue(nextValue);
    };

    useImperativeHandle(ref, () => ({
        afterGuiAttached: () => {
            inputRef.current?.focus();
        },
        getValue: () => value,
        isPopup: () => true,
    }));

    return (
        <div
            style={{ minHeight: rowHeight }}
        >
            <input
                {...inputProps}
                ref={inputRef}
                onChange={handleChange}
                value={value}
            />
        </div>
    );
});

export {
    NativeInputEditor,
};
