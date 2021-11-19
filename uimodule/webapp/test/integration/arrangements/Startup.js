sap.ui.define(["sap/ui/test/Opa5"],
    /**
     * @param {typeof sap.ui.test.Opa5} Opa5 
     */
    function (Opa5) {
        "use strict";

        return Opa5.extend("eu.reitmayer.ui5.landingPage.test.integration.arrangements.Startup", {
            iStartMyApp: function () {
                this.iStartMyUIComponent({
                    componentConfig: {
                        name: "eu.reitmayer.ui5.landingPage",
                        async: true,
                        manifest: true
                    }
                });
            }
        });
    });
