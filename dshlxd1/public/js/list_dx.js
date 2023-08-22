import $ from "jquery";

$(document).ready(function() {
    //console.log("tutaj");
    $.ajax({
        url: '/list/dx/data',
        method: 'POST',
        dataType: 'json',
    }).then(function(data){
        //console.log(data.data_dx);
        let arr_edits = [];
        console.log(arr_edits);
        $(() => {
            $('#gridContainer').dxDataGrid({
                dataSource: data.data_dx,
                keyExpr: '0',
                columns: [{dataField: '0', caption: 'id', allowEditing: false}, {dataField: '1', caption: 'task'}, {dataField: '2', caption: 'state'}],
                showBorders: true,
                customizeColumns(columns) {
                    columns[0].width = 120;
                    columns[2].width = 120;
                },
                paging: {
                    pageSize: 5,
                },
                pager: {
                    visible: true,
                    allowedPageSizes: [5, 7, 'all'],
                    showPageSizeSelector: true,
                    showInfo: true,
                    showNavigationButtons: true,
                },
                editing: {
                    mode: 'batch',
                    allowUpdating: true,
                    allowAdding: false,
                    allowDeleting: false,
                    selectTextOnEditStart: true,
                    startEditAction: 'click',
                },
                onSaved: function(e) {
                    console.log(e);
                    for(let i = 0; i < e.changes.length; i++)
                    {
                        arr_edits.push(e.changes[i].key);
                        let z = [e.changes[i].key, e.changes[i].data[1], e.changes[i].data[2]];
                        $.ajax({
                            url: '/list/dx/data/change',
                            type: 'POST',
                            data: JSON.stringify(z),
                        }).then(function (d) {
                            console.log(d);
                        });
                    }
                }
            });
        });
    });
});