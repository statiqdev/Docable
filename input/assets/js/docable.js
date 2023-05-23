$(document).ready(function() {
    quicklink.listen();

    // Bootstrap tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Keeps the sidebars in view on wider viewports
    let left = null;
    let leftParent = null;
    let right = null;
    let rightParent = null;
    function stickSidebars()
    {
        if (left == null) {
            left = $('#left-sidebar');
            right = $('#right-sidebar');
        }
        if (left.length) {
            if (window.innerWidth >= 768) {
                if (leftParent == null) {
                    leftParent = left.parent()[0];
                }
                if (leftParent) {
                    let leftRect = leftParent.getBoundingClientRect();
                    stickSidebar(left,  leftRect);
                }
            } else {
                left.css('position', 'relative');
                if (left.css('bottom') != 0) {
                    left.css('bottom', '0');
                }
            }
        }
        if (right.length) {
            if (window.innerWidth >= 768) {
                if (rightParent == null) {
                    rightParent = right.parent()[0];
                }
                if (rightParent) {
                    let rightRect = rightParent.getBoundingClientRect();
                    stickSidebar(right,  rightRect);
                }
            } else {
                right.css('position', 'relative');
                if (right.css('bottom') != 0) {
                    right.css('bottom', '0');
                }
            }
        }
    }
    function stickSidebar(sidebar, rect) {
        // Bottom
        if (rect.bottom > window.innerHeight) {
            sidebar.css('bottom', rect.bottom - window.innerHeight + "px");
        } else {
            sidebar.css('bottom', 0);
        }
        // Top
        if (rect.top < 0) {
            sidebar.css('position', 'sticky');
        } else {
            sidebar.css('position', 'absolute');
        }
    }
    $(window).on("load", function() {
        stickSidebars();
    });
    $(window).scroll(function() {
        stickSidebars();
    });
    $(window).resize(function() {
        stickSidebars();
    })

    // Mermaid diagrams
    mermaid.initialize(
        {
            flowchart:
                {
                    useMaxWidth: false
                },
            startOnLoad: false,
            cloneCssStyles: false
        });
    mermaid.init(undefined, ".mermaid");

    // Remove the max-width setting that Mermaid sets
    var mermaidSvg = $('.mermaid svg');
    mermaidSvg.addClass('img-fluid');
    mermaidSvg.css('max-width', '');

    // Make it scrollable
    var target = document.querySelector(".mermaid svg");
    if(target !== null)
    {
        var panZoom = window.panZoom = svgPanZoom(target, {
            zoomEnabled: true,
            controlIconsEnabled: true,
            fit: true,
            center: true,
            maxZoom: 20,
            zoomScaleSensitivity: 0.6
        });

        // Do the reset once right away to fit the diagram
        panZoom.resize();
        panZoom.fit();
        panZoom.center();

        $(window).resize(function(){
            panZoom.resize();
            panZoom.fit();
            panZoom.center();
        });
    }
});
