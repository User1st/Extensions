(function (ns, $)
{
    "use strict";

    if (ns.Extensions.API.ApplyProxyTransparentButton)
        return;


    ns.Extensions.API.ApplyProxyTransparentButton = function (domElement, options)
    {
        
		if (options.isScreenReader || options.isKeyboardNav)
		{
			if($(domElement).parent().find(".user1st_btn_fake").length > 0)
				return;
		 
		 
			
			$(domElement).setAttr(ns.Consts.ignoreTabIndexAttrName, "1")
						.setAttr(ns.constants.elementStatusAttrName, ns.constants.elementStatus.forcedHidden)
						.setAttr("tabIndex", "-1")
						.setAttr("aria-hidden", "true");
			
			var fakeid = ns.getUniqueElementID();
			var fake = $("<a />")
						.css({
							"width" : ($(domElement).width() + 24).toString() + "px",
							"height": ($(domElement).height() + 12).toString() + "px",
							"background-color": "transparent",
							"z-index":"9999",
							"position":"absolute",
							"top": $(domElement).offset().top - 6,
							"left": $(domElement).offset().left + 6
							})
						.addClass("user1st_btn_fake")
						.setAttr("id", fakeid)
						.setAttr("tabIndex", "0")
						.setAttr("tootipstate", "0")
						.setAttr("aria-label", "more information tooltip")
						.setAttr("aria-haspopup", "true")
						.setAttr("href", "#/")    
						.setAttr(ns.Consts.avoidU1stAttrName, "2");
		
			$(fake)
			.bind("mouseover", function(ev){
				$.proxy(
				function()
				{
					ns.eventFire(this.element, "mouseover");
				}, 
				{
					fake: $(this),
					element: $(domElement)
				});
		
			})
			.bind("mouseout", function(){
				$.proxy(
				function()
				{
					ns.eventFire(this.element, "mouseout");
				}, 
				{
					fake: $(this),
					element: $(domElement)
				});
			});
		
			fake.insertAfter($(domElement));
			
			return fake;
		}
			   
    };

    ns.Extensions.Extesion.addAPIFunction("ApplyProxyTransparentButton",
                    ns.Extensions.API.ApplyProxyTransparentButton);



})(User1st.Web, uf$);
