
function init() {

    ymaps.ready(init2);
    var myMap;
    var myPlacemark;
    var myPlacemark2;

    function init2(){
        myMap = new ymaps.Map ("map_krop", {
            center: [55.742869, 37.591539],
            zoom: 15,
            controls: ['zoomControl']
        });
        myPlacemark = new ymaps.Placemark([55.742869, 37.591539], { content: 'Штурмовой бой', balloonContent: 'Чистый переулок, 6' });
        myPlacemark2 = new ymaps.Placemark([55.772689, 37.687659], { content: 'Штурмовой бой', balloonContent: 'Малая почтовая, 12' });
        myMap.geoObjects.add(myPlacemark);
        myMap.geoObjects.add(myPlacemark2);
    }



    $('#map2').hide();

    $('#map1').click(function() {
        $('#map2').fadeIn();
        $('#map1').fadeOut();
        $('.left_stripe').animate({'width' : '220px'}, 400);
        myMap.setCenter([55.772689, 37.687659]);
    });
    $('#map2').click(function() {
        $('#map1').fadeIn();
        $('#map2').fadeOut();
        $('.left_stripe').animate({'width' : '720px'}, 400);
        myMap.setCenter([55.742869, 37.591539]);
    });

}


function fac(n) {
    if(n == 0) {
        return 1
    } else {
        return n * fac(n - 1);
    }
}


function rand(min, max) {
    return Math.floor(Math.random()*(max-min+1))+1;
}

