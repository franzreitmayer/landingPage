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
                var oNewTab = window.open();
                oNewTab.location.href = sUrl;
            },

            onProjectPress: function(oEvent) {
                var oContext = oEvent.getSource().getBindingContext();
                var sUrl = oContext.getObject().url;
                var oNewTab = window.open();
                oNewTab.location.href = sUrl;
            },

            onToolPress: function(oEvent) {
                var oContext = oEvent.getSource().getBindingContext();
                var sUrl = oContext.getObject().url;
                var oNewTab = window.open();
                oNewTab.location.href = sUrl;
            }
        });
    });