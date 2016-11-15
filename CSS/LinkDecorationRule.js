(function (ns, $)
{
    "use strict";

    if (ns.Extensions.CSS.LinkDecorationRule)
        return;


    ns.Extensions.CSS.LinkDecorationRule = function ()
    {
		var rule = {
			selector: "a.linkDecoration",
			rules: { "-webkit-box-shadow": "0px 0px 5px #888888x !important",
					"-moz-box-shadow": "0px 0px 5px #888888 !important",
					"box-shadow": "0px 0px 5px #888888 !important"
					},
			mediaQuery: null
		};
		return rule;
	};

	 ns.Extensions.Extesion.addCSSRule("LinkDecorationRule",
                    ns.Extensions.API.LinkDecorationRule().selector,
					ns.Extensions.API.LinkDecorationRule().rules,
					ns.Extensions.API.LinkDecorationRule().mediaQuery);



})(User1st.Web, uf$);
