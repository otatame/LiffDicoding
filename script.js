var incAdd1, incAdd2, incAdd3, incAdd4;
var incSub1, incSub2, incSub3, incSub4;

var buttonPlus1 = $(".add1");
var buttonPlus2 = $(".add2");
var buttonPlus3 = $(".add3");
var buttonPlus4 = $(".add4");

var buttonMin1 = $(".sub1");
var buttonMin2 = $(".sub2");
var buttonMin3 = $(".sub3");
var buttonMin4 = $(".sub4");



var incAdd1 = buttonPlus1.click(function() {
    var count1 = $(".count1");
    var $n = count1;
    $n.val(Number($n.val())+1);

    var tab = $('#orderan');
    var markup1 = "<tr class='ord1'><td class='makan'>Ayam Goreng</td><td class='jmlh'><input type='text' class='counters count1' value='1'></td></tr>";

    if($n.val() > 0 && $n.val() == 1){
        tab.append(markup1);
    }

    add1 = $n.val();
});

var incAdd2 = buttonPlus2.click(function() {
    var count2 = $(".count2");
    var $n = count2;
    $n.val(Number($n.val())+1);

    var tab = $('#orderan');
    var markup = "<tr class='ord2'><td class='makan'>Mangut Tempe</td><td class='jmlh'><input type='text' class='counters count2' value='1'></td></tr>";

    if($n.val() > 0 && $n.val() == 1){
        tab.append(markup);
    }

    add2 = $n.val();
});

var incAdd3 = buttonPlus3.click(function() {
    var count3 = $(".count3");
    var $n = count3;
    $n.val(Number($n.val())+1);

    var tab = $('#orderan');
    var markup = "<tr class='ord3'><td class='makan'>Sambal Ikan Mangut</td><td class='jmlh'><input type='text' class='counters count3' value='1'></td></tr>";

    if($n.val() > 0 && $n.val() == 1){
        tab.append(markup);
    }

    add3 = $n.val();
});

var incAdd4 = buttonPlus4.click(function() {
    var count4 = $(".count4");
    var $n = count4;
    $n.val(Number($n.val())+1);

    var tab = $('#orderan');
    var markup = "<tr class='ord4'><td class='makan'>Ayam Bakar</td><td class='jmlh'><input type='text' class='counters count4' value='1'></td></tr>";

    if($n.val() > 0 && $n.val() == 1){
        tab.append(markup);
    }

});

var incSub1 = buttonMin1.click(function() {
    
    var count1 = $(".count1");
    var $n = count1;

    if($n.val() > 0){
        $n.val(Number($n.val())-1);
        if($n.val() < 1){
            $('.ord1').remove();
        }
    }

});

var incSub2 = buttonMin2.click(function() {
    var count2 = $(".count2");
    var $n = count2;

    if($n.val() > 0){
        $n.val(Number($n.val())-1);
        if($n.val() < 1){
            $('.ord2').remove();
        }
    }
});

var incSub3 = buttonMin3.click(function() {
    var count3 = $(".count3");
    var $n = count3;

    if($n.val() > 0){
        $n.val(Number($n.val())-1);
        if($n.val() < 1){
            $('.ord3').remove();
        }
    }
});

var incSub4 = buttonMin4.click(function() {
    var count4 = $(".count4");
    var $n = count4;

    if($n.val() > 0){
        $n.val(Number($n.val())-1);
        if($n.val() < 1){
            $('.ord4').remove();
        }
    }
});

