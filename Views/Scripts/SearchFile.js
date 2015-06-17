$('#propertyType').on('change', function () {
    var s = $('#propertyType').val();
    $.getJSON('/Property/SearchResult?id=' + s, function (d) {
        for (i = 0; i < d.size; i++) {
            $('#row').append('<div class="col-lg-3 col-md-3 col-sm-6"><div class="propertyItem"><div class="propertyContent">' +
                             '<a href="/Property/PropertyDetail/' + d[i].Id + '" class="propertyImgLink"><img class="propertyImg" src="' + d[i].Path + '" alt=""></a><h4><a href="/Property/PropertyDetail/' +
                             d[i].Id + '">587 Smith Avenue</a></h4><p>' + d[i].Address + '</p><div class="divider thin"></div><p class="forSale">FOR SALE</p><p class="price_prop">' +
                             d[i].Price + '</p></div><table class="propertyDetails" border="1"><tbody><tr><td><img src="~/Images/icon-area.png" alt="" style="margin-right:7px;" />' +
                             d[i].Area + ' meter</td></tr></tbody></table></div></div>');
        }
    });
});


//<div class="col-lg-3 col-md-3 col-sm-6">
//                <div class="propertyItem">
//                    <div class="propertyContent">
//                        @foreach (var y in x.PicturePaths)
//{
//    <a href="/Property/PropertyDetail/@x.Id" class="propertyImgLink"><img class="propertyImg" src="@y.Path" alt=""></a>
//    break;
//}
//<h4><a href="/Property/PropertyDetail/@x.Id">587 Smith Avenue</a></h4>
//<p>@x.Address</p>
//<div class="divider thin"></div>
//<p class="forSale">FOR SALE</p>
//<p class="price_prop">@x.Price</p>
//</div>
//<table class="propertyDetails" border="1">
//    <tbody>
//        <tr>
//            <td>
//                <img src="~/~/Images/icon-area.png" alt="" style="margin-right:7px;" />@x.Area meter
//            </td>
//        </tr>
//    </tbody>
//</table>
//</div>
//</div>