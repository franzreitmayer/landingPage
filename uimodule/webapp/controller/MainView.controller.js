sap.ui.define([
        "eu/reitmayer/ui5/landingPage/controller/BaseController",
        "eu/reitmayer/ui5/landingPage/model/formatter"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function(Controller, formatter) {
        "use strict";

        return Controller.extend("eu.reitmayer.ui5.landingPage.controller.MainView", {
            formatter: formatter,
            onInit: function() {

            },

            onSocialLink: function(oEvent) {
                var sSocialMediaId = oEvent.getSource().data("id");
                var oResourceBundle = this.getResourceBundle();
                var sResourceBundleId = `profiles.${sSocialMediaId}.url`;
                var sUrl = oResourceBundle.getText(sResourceBundleId);
                var newTab = window.open();
                newTab.location.href = sUrl;
            }
        });
    });