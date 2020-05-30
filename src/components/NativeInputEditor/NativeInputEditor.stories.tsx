import React from 'react';

import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { AgGridReact } from '@ag-grid-community/react';
import { NativeInputEditor, NativeInputEditorProps } from '.';

export default {
    title: 'NativeInputEditor',
    // this breaks it
    // component: NativeInputEditor,
};

// this also breaks it
// export const Basic = (args: NativeInputEditorProps) => (
//     <NativeInputEditor {...args} />
// )

export const WithinGrid = (args: NativeInputEditorProps) => (
    <AgGridReact
        {...args}
        columnDefs={[
            {
                cellEditor: 'NativeInputEditor',
                cellEditorParams: {
                    inputProps: {
                        type: 'number'
                    },
                },
                editable: true,
                field: 'id',
            },
        ]}
        frameworkComponents={{
            NativeInputEditor,
        }}
        modules={AllCommunityModules}
        rowData={[{ id: 5 }]}
        domLayout='autoHeight'
    />
);
