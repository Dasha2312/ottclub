let faq_headers = document.querySelectorAll('.faq__item-header');
faq_headers.forEach(function(el) {
    el.addEventListener('click', function() {
        if(el.closest('.faq__item').classList.contains('active')) {
            el.closest('.faq__item').classList.remove('active')
        } else {
            let faq_headers_active = document.querySelectorAll('.faq__item.active');
            faq_headers_active.forEach(function(itemActive) {
                itemActive.classList.remove('active')
            })
            el.closest('.faq__item').classList.add('active')
        }
    })
})

$(document).ready(function () {
    channelsFoote();

    $('.channels__items-more').on('click', function() {
        $(this).parents('.channels__block').find('.channels__item').show();
        $(this).hide()
    })

    $('.channels__filte-btn').on('click', function() {
        let btnDataId = $(this).data('id');

        $('.channels__filte-btn').removeClass('active');
        $(this).addClass('active');

        $('.channels__block').hide(); 
        $(".channels__block[data-id=" + btnDataId + "]").show();
        
        
    })
})

$(window).on( "resize", function() {
    channelsFoote();
});

function channelsFoote() {
    if($(window).width() > 1920) {
        channelsFooteHide(10)
    } else if ($(window).width() > 989) {
        channelsFooteHide(8)
    } else if ($(window).width() > 320) {
        channelsFooteHide(6)
    }
}

function channelsFooteHide(count) {
    $('.channels__block').each(function() {
        if($(this).find('.channels__item').length <= count) {
            $(this).find('.channels__footer').hide()
        }
    })
}