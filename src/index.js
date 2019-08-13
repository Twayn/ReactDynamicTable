// var rowsShown = 10;
// var curPage;
// var rowsTotal;
// var numPages;
//
// $(document).ready(function(){
//     updatePaginationPanel(1);
// });
//
// function updatePaginationPanel(pageNum) {
//     updatePagination();
//     moveTo(pageNum);
//
//     $('#nav .page').unbind().click(function(){
//         moveTo($(this).parent().index());
//     });
//
//     $('#gotoPage').unbind().keypress(function(event) {
//         if (event.which === 13) {
//             moveTo(parseInt($('#gotoPage').val()));
//         }
//     });
// }
//
// function updatePagination(){
//     updatePageValues();
//     var nav = $('#nav').empty();
//
//     nav.append('<span><a href="javascript:void(0)" onclick="moveTo(curPage - 1)">&#8592;</a></span>');
//     for(var i = 1; i <= numPages; i++) {
//         nav.append('<span><a href="#" class="page">'+i+'</a></span>');
//     }
//     nav.append('<span><a href="javascript:void(0)" onclick="moveTo(curPage + 1)">&#8594;</a></span>');
// }
//
// function updatePageValues(){
//     curPage = parseInt($('#nav .active').text());
//     rowsTotal = document.getElementById('acceptance-list').rows.length;
//     numPages = Math.ceil((rowsTotal-1)/rowsShown);
// }
//
// function moveTo(pageNum) {
//     if (pageNum >= 1 && pageNum <= numPages){
//         $('#nav .page').removeClass('active').eq(pageNum-1).addClass('active');
//         $('#gotoPage').val(pageNum);
//         curPage = pageNum;
//
//         var startItem = (pageNum-1) * rowsShown;
//         var endItem  = startItem + rowsShown;
//         $('#acceptance-list tr').slice(1, rowsTotal).hide().slice(startItem, endItem).show();
//     }
// }