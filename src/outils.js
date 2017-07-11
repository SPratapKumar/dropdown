jQuery().ready(function () {
    var tabname = [];
    $.getJSON('countries.json','state.json', function (data) {//to get the respective data from json files
        $.each(data, function (index, val) {
            tabname[index] = val;
        });
    });
    //fumction to select a country and its respective states 
    $('#name').change(function (event) {
        $name = $(this).val();
        $htmlOption = '<option value="0">Select State</option>';
        if ($name != 0) {
            $.each(tabname[$name], function (key, value) {
                $htmlOption += '<option value="' + value[0] + '">' + value[1] + '</option>';
            });
        }
        $('#file').html(htmlOption);
    });
});
//# sourceMappingURL=outils.js.map 
//# sourceMappingURL=outils.js.map