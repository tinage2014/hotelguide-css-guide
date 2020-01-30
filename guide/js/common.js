// JavaScript source code
var gContents = $('.g_content_box .g_content')
gContents.each(function (index) {
    if ($(gContents[index]).children('.g_code_box').length > 0) {
        $(gContents[index]).parent().children('.g_tit_cont2').append('<a href="#" class="source_code">Source Code</a>')
    }
});

$('.g_code_box').each(function () {
    var copy = $(this).html();
    $(this).after('<div class="code_pre"><pre class="brush:html"></pre></div>');
    $(this).next().find('pre').prepend(copy);
});

$('.source_code').click(function () {
    $(this).parent().siblings().children('.code_pre').toggleClass('on');
    return false;
});
SyntaxHighlighter.all();
