(function (ns, $)
{
    "use strict";

    if (ns.Extensions.Handlers.RemoveSkipLinks)
        return;


    ns.Extensions.Handlers.RemoveSkipLinks = function ()
    {
        var _init = function ()
        {

            var desc = $(this).find("#u1st_Skip-links");
            if (desc)
            {
                $("#u1st_Skip-links").remove();
            }
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

    ns.Extensions.Extesion.addHandler("RemoveSkipLinks",
                    ns.handlerTarget.page,
                    20000,
                    null,
                    null,
                    ns.Extensions.Handlers.RemoveSkipLinks.handle,
                    ns.Extensions.Handlers.RemoveSkipLinks.dispose,
                    null);

})(User1st.Web, uf$);