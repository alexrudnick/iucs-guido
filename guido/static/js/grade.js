function getSelectedText() {
    var iframe = document.getElementById("studentframe");
    var idoc= iframe.contentDocument || iframe.contentWindow.document;
    var iwin= iframe.contentWindow || iframe.contentDocument.defaultView;
    if (idoc.getSelection) {
        return idoc.getSelection();
    }
    else if (iwin.getSelection()) {
        return ''+iwin.getSelection();
    }
    return '';
}

$(function() {

    $("#searchbutton").button({
        icons: {
            secondary:"ui-icon-search"
        }
    });

    $("button").button();

    $("#linenumbers").bind("contextmenu",function(e){
        return false;
    }); 

    var student = $("#student").attr("value"),
    assignment = $("#assignment").attr("value"),
    problem = $("#problem").attr("value");
    

    $("#linenumbers").children().each(function() {
	$(this).qtip({
	content: { prerender: false, 
		   url: '/grading/entercomment', 
		   method:'get',
		   data: { student: student,
			   assignment: assignment,
			   problem: problem,
			   linenumber: $(this).attr("value")},
		   title: { text : "enter comment",
			    button : "close" }
		 },
	show: { solo: true, when: { event: 'mousedown' } },
	hide: { when: { event: 'unfocus' } },
	position: {
	    target: 'mouse',
	    adjust: { mouse: false }
	},
	style: {
	    width: { max: 400 }
	}
	
	});
    });

    $( "#formGrade" ).submit(function() {
        $.post(window.location.pathname,
               {'grade':$("#submit_grade").attr("value")});
        return false;
    });

    $( "#grades" ).selectable({
	stop: function() {
            var result = $("input:#submit_grade");
            $(".ui-selected", this).each(function() {	
		grade = $(this).text();
		result.attr("value" , grade);
		$(this).siblings().removeClass("ui-selected");
            });
        }
    });
    


});