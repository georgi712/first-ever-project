﻿(function () {
    $('.my-collapsible').each(function (_, element) {
        init(element);
    });

    function init(element) {
        $(element).find('.my-collapsible-header').on('click', toggle);
    }

    function toggle(ev) {
        const toggleExpandedClass = 'fa-minus-circle';
        const toggleCollapsedClass = 'fa-plus-circle';
        const expandedClass = 'expanded';

        var $collapsible = $(ev.target).closest('.my-collapsible');
        var $toggleIndicator = $collapsible.find('.my-collapsible-indicator');

        var isExpanded = $collapsible.hasClass(expandedClass);

        if (isExpanded) {
            $collapsible.removeClass(expandedClass);
            $toggleIndicator.removeClass(toggleExpandedClass);
            $toggleIndicator.addClass(toggleCollapsedClass);
        } else {
            $collapsible.addClass(expandedClass);
            $toggleIndicator.removeClass(toggleCollapsedClass);
            $toggleIndicator.addClass(toggleExpandedClass);
        }
    }
})();