(function (ns, $)
{
    "use strict";


    if (ns.Extensions.CSS.CloseDialogButton)
        return;


    ns.Extensions.CSS.CloseDialogButton = function ()
    {
		var rule = {
			selector: "._user1st_dialog-close-btn",
			rules: { "background-image": "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTCtCgrAAAAFPklEQVR4Xu1bO0sdQRRWMYWQSpCA+EYSsNTGStEi+Q120SIQgoW/QFJbiZ1CwAciaOU/sPIWVuYHpBYsAkIgYEy+bz1z2T2e3Tuzs/f62HzwJd6Z85hzdh47s7td7cT8/Hzv6Ojo7PDw8NrIyMgu/j8Hr8Df+P03TZZJ3bnIrlGXNsTc88DQ0FAfuIQAjsGfOtBQ0gZt0SZti5unh7GxsXdo6FYVQedRkrFFX+L28TE4OPgWjTsEb9ONbTPp65C+pRmdx8DAwGtcjQ3wwXjuFOmbbWBbpFmdAZwvwvEP3aDHorRlUZrXVvTC2Vc462R39+Ut28Y23je1YrCbwcmpcvoUeVr5kJicnByA4YZy9JTZYJul+XGQ4L8rB8+B36OTIN2+iivPOeMCY3QTNzPL4Bx+T42Pj78h+TfLWEcZyoqOZSuEjZjh0AsDsWP+ElxlkGLTG5KYVbFh2fblKcyFT4wy21sGfdiA/nuY6b63FoVu2qJN5cObjEVs+QFKi2CZLngNZx9houfeUqXooW36UD59yFj87hM4ZuCozE3OGW5Nh8VM20Af9KV8tyRj8poPILhhGSgidLY7uW2lL/q02lJExiYmbHBzAaGge3sxmhnrKJ/GXn6F+3n8jJoHYGsCdhawQvRLkQPnhqCLxdgKN1AQ4q7OVLYIg9tQSwfIK7Oj5I5mZmZeSb03qANb+9C/Ezu/wE9S7cAkhPaEQ9HNgntsVIZMfGeq2zP4A0OOiToJSYIEf2LYYjK+iFgCtgFlIXPCrXmeAIdbhnAer9WElxu8o28SCoJ3fJAEmRi9VwfGKqr3wPjqQ6H3SQ5kudQ1gbJvWsZiqyR4BO/IJGSGA9ukZHLJWBmzqCYJWLIEc9iASnOdx+9pVV/IvCQEBO94oybGHpR53ywxZtFLsndsCVmELO/wmuBsb8kVUSehRPAJuTqIiQQI6oMlZ5ExJ0qypvp2/0uoZJY1LnWGXEu6JJQNHuQwmJBmOHSjzGvvwJiTSTwwgFVxlAadHik5LzLwksFTd0/8Z4A6bqBMHU3Gzu7PhxamgOJt3q4u4iqWIn2lh1Aasov0Ws4ZOzO2qytyeCE+THQqCUXBO0CO5wmmvuIuewAfRVmVGUJuU+znot1J8AmeYFstfU3GTuErq1ITM+yy2C9Eu5LgGzzBtlo2NBk7E+C1+YHRObHfElUnISR4gm217Ggydo4Xs9LglNj3QlVJCA2egN6UtpNH7wSUOdeLTUKZ4AlZCUybmv8TYBXm8GUOATio9ySIf2q/DNb7Rgh/1P5WuN6boQq2w0ziniHbkgwkInFHcP3gyB3lYdvh2AMRlE2A7ujamwycVzGm9yQBZBF+IELgR8yR2IIlV0QXvJgoPYTge0VMJMDsH34kRkCx9KEodPtRdqNkcqmDdyiZhGlRJ8ofiuJH1LE4rwTK/2g5zbzgHUKSALkdUUvANllyFiGbPRYnUBjzYIT6n1GemwTUFwbv4JME1B9AtPlUKvrBCFHBo7HcJPgG71CUBB0824Dy+EdjBCpjH4664eDmhDvI7IcE70Ad6GdOm2GL3T6d9OoejhJ8dAyD0Y/HOTHK6qDP7UPRDTuzktT0hEdU/3icCDVKQudlvCBB1P4VGQIK9X1JygHOXsxrcuC62ArCS3pRslyP5JiBgdq+Kpug1i9LO0gSqugJnWJ1r8s7yHCo5wcTKXDLuQ5WMT6rJtvE2b4dS3AWcFTbj6aaYDeD43p+NpcGNxdoTP0+nNTgHhtXo36fzmrgZqaeH09b4LaV+3kE8EQ/n+/q+gd8FuE4u9L/zgAAAABJRU5ErkJggg==')",
			"width": "20px",
			"height": "20px",
			"position" : "absolute",
			"background-size": "20px 20px",
			"z-index" : "99999""},
			mediaQuery: null
		};
		return rule;
	};

	 ns.Extensions.Extesion.addCSSRule("CloseDialogButton",
                    ns.Extensions.API.CloseDialogButton().selector,
					ns.Extensions.API.CloseDialogButton().rules,
					ns.Extensions.API.CloseDialogButton().mediaQuery);


})(User1st.Web, uf$);
