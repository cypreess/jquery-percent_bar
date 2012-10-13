/*
 *  Percent Bar 0.1 - jQuery plugin
 *	written by Krzysztof Dorosz
 *
 *
 *	Copyright (c) 2012 Krzysztof Dorosz
 *	Dual licensed under the MIT (MIT-LICENSE.txt)
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */


(function($) {

    $.fn.percent_bar = function(options){

        // default configuration properties
        var defaults = {
            value_color:            'green',
            background_color:       'gray',
            font_size:              '11px',
            font_color:             'white',
            width:                  '200px',
            height:                 '20px',
            show_label:             true,
            label_position:         'auto'

        };

        var options = $.extend(defaults, options);

        return this.each(function() {
            var obj = $(this);
            obj.css('width', options.width);
            obj.css('height', options.height);
            obj.css('display', 'inline-block');
            obj.css('position', 'relative');
            obj.css('background-color', options.background_color);
            obj.css('padding', '0');
            obj.css('vertical-align', 'middle');

            value = parseInt(obj.attr('value'));
            max = parseInt(obj.attr('max'));
            percentage = value / max;

            value_width = Math.min(parseInt(options.width), Math.round(parseInt(options.width) * percentage));

            obj.append('<span class="value"></span>');
            value_span = $('.value', obj);
            value_span.css('position', 'absolute');
            value_span.css('top', '0');
            value_span.css('bottom', '0');
            value_span.css('left', '0');
            value_span.css('height', options.height);
            value_span.css('background-color', options.value_color);
            value_span.css('width', value_width + 'px');
            value_span.css('display', 'inline-block');
            value_span.css('margin', '0');
            value_span.css('padding', '0');

            if (options.show_label) {
                obj.append('<span class="label">'+ Math.round(percentage * 100) +'%</span>');
                label_span = $('.label', obj);
                label_span.css('color', options.font_color);
                label_span.css('font-size', options.font_size);
                label_span.css('display', 'inline-block');

                label_span.css('margin', '0');
                label_span.css('top', '50%');
                label_span.css('margin-top', Math.round(label_span.height()/-2));
                label_span.css('padding-left', '0');
                label_span.css('padding-right', '0');
                label_span.css('position', 'absolute');
                if (options.label_position == 'auto') {
                    label_offset = value_width + 5;
                    if ( label_offset + label_span.width() > parseInt(options.width)) {
                        label_span.css('right', 5);

                    } else {
                        label_span.css('left', label_offset);
                    }
                } else if (options.label_position == 'auto-inside') {
                    label_offset = value_width - label_span.width() - 5;
                    if ( label_offset < 0 ) {
                        label_span.css('left', '5');
                    } else {
                        label_span.css('left', label_offset);
                    }
                } else if (options.label_position == 'right') {
                    label_span.css('right', '0');
                } else {
                    label_span.css('left', '0');
                }

            }



        });

    };

})(jQuery);



