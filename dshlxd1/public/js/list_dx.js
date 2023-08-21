import $ from "jquery";

$(document).ready(function() {
    console.log("tutaj");
    $.ajax({
        url: '/list/dx/data',
        method: 'POST',
        dataType: 'json',
    }).then(function(data){
        console.log(data.data_dx.id.length);
        let table_dx = [data.data_dx.id, data.data_dx.taskname, data.data_dx.status];
        let table_dxt = Array(data.data_dx.id.length);
        for(let i =0; i < data.data_dx.id.length; i++){
            table_dxt[i] = Array(3);
            table_dxt[i][0] = table_dx[0][i];
            table_dxt[i][1] = table_dx[1][i];
            table_dxt[i][2] = table_dx[2][i];
        }
        console.log(table_dxt);
        $(() => {
            $('#gridContainer').dxDataGrid({
                dataSource: table_dxt,
               // keyExpr: 0,
                columns: [{dataField: '0', caption: 'id'}, {dataField: '1', caption: 'task'}, {dataField: '2', caption: 'state'}],
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
                    allowAdding: true,
                    allowDeleting: true,
                    selectTextOnEditStart: true,
                    startEditAction: 'click',
                },
            });
        });
    });
});