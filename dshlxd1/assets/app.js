import $ from "jquery";
//import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import './styles/first.css';
//import 'devextreme/bundles/dx.all.js';
import '/public/js/status_change.js';
//import '/public/js/dx.all.js';
import 'bootstrap';
import dxDataGrid from "devextreme/ui/data_grid";
//import 'devextreme/bundles/__internal/grids/data_grid/m_utils.js'
const header = document.getElementById("header");
header.className="navbar navbar-expand-lg navbar-light bg-light";
$(document).ready(function() {
    document.getElementById("flexSwitchCheckDefault1").addEventListener('click', function(e){
        console.log(header.className);
        if(header.className == "navbar navbar-expand-lg navbar-light bg-light"){
            header.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-dark");
            //header.style.color =
        }
        else{
            header.setAttribute("class", "navbar navbar-expand-lg navbar-light bg-light");
        }
    });
    // $.ajax({
    //     url: '/list/dx/data',
    //     method: 'POST',
    //     dataType: 'json',
    // }).then(function(data){
    //     console.log(data.data_dx.id.length);
    //     let table_dx = [data.data_dx.id, data.data_dx.taskname, data.data_dx.status];
    //     let table_dxt = Array(data.data_dx.id.length);
    //     for(let i =0; i < data.data_dx.id.length; i++){
    //         table_dxt[i] = Array(3);
    //         table_dxt[i][0] = table_dx[0][i];
    //         table_dxt[i][1] = table_dx[1][i];
    //         table_dxt[i][2] = table_dx[2][i];
    //     }
    //     console.log(table_dxt);
    //     $(() => {
    //         $('#gridContainer').dxDataGrid({
    //             dataSource: table_dxt,
    //            // keyExpr: 0,
    //             columns: [{dataField: '0', caption: 'id'}, {dataField: '1', caption: 'task'}, {dataField: '2', caption: 'state'}],
    //             showBorders: true,
    //             customizeColumns(columns) {
    //                 columns[0].width = 120;
    //             },
    //             paging: {
    //                 pageSize: 5,
    //             },
    //             pager: {
    //                 visible: true,
    //                 allowedPageSizes: [5, 7, 'all'],
    //                 showPageSizeSelector: true,
    //                 showInfo: true,
    //                 showNavigationButtons: true,
    //             },
    //         });
    //     });
    // });
});