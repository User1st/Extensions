(function (ns, $)
{
    "use strict";

    if (ns.Extensions.Handlers.SubmitButtonConfirmHandler)
        return;


    ns.Extensions.Handlers.SubmitButtonConfirmHandler = function ()
    {
        var _init = function ()
        {
            $("input[type='submit']").each(function ()
            {
                $(this).bind("click", function(ev){
					var r = confirm("Do you really want to submit the form?");
					if(!r)
					{
						ev.preventDefault();
						ev.stopPropagation();
						return false;
					}
				})
            });
        },
        handler = {
            handle: function ()
            {
                _init();
            },
            dispose: function ()
            {

            }
        };

        return handler;
    };

    ns.Extensions.Extesion.addHandler("SubmitButtonConfirmHandler",
                    ns.handlerTarget.page,
                    20000,
                    null,
                    null,
                    ns.Extensions.Handlers.SubmitButtonConfirmHandler.handle,
                    ns.Extensions.Handlers.SubmitButtonConfirmHandler.dispose,
                    null);

})(User1st.Web, uf$);
