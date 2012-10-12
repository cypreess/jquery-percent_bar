# percent_bar: a jQuery plugin

Percent Bar is a jQuery plugin that makes it easy to make a very simple 
percentage/progress bars, that are 100% html+css. Please see jquery.percent_bar.example.html for an example.

## Usage

First, load jQuery and the plugin:

```html
<script src="jquery.min.js" type="text/javascript"></script>
<script src="jquery.percent_bar.js" type="text/javascript"></script>
```

Now, let's attach it to your bars on DOM ready - put this in the head section:

```html
<script type="text/javascript">
   $(function() {
     $(".bar").percent_bar();
   });
</script>
```

This will turn all .bar class elements into nice html bars:

```html
<span class="bar" value="6" max="10"></span>
```

## Options

 
* value_color: default 'green' - set color of gauge,
* background_color: default 'gray' - set background color,
* font_size: default '11px' - size of label text,
* font_color: default 'white' - color of label text,
* width: default '200px' - width of bar,
* height: default '20px' - height of bar,
* show_label: default true - if true it shows label which is number of percent,
* label_position: default 'auto' - available label positions:
    * auto - right after a gauge,
    * left - on left side of the bar,
    * right - on right side of the bar,
    * auto-inside - on the right side of a gauge inside.


## Author

Krzysztof Dorosz ([@cypreess_](http://twitter.com/cypreess_))

## Other

[MIT License](http://www.opensource.org/licenses/mit-license.php)

Copyright (c) 2012, Krzysztof Dorosz (cypreess+github -[at]- gmail [*dot*] com)
