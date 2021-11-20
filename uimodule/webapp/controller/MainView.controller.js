sap.ui.define([
    "eu/reitmayer/ui5/landingPage/controller/BaseController"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("eu.reitmayer.ui5.landingPage.controller.MainView", {
            onInit: function () {

            },

            onSocialLink: function(eventSource) {
                var sourceId = eventSource.getSource().data("id");
                console.log(sourceId);
                var resourceBundle = this.getResourceBundle();
                switch (sourceId) {
                    case "github": {
                        // alert("clicked on github");
                        //window.open("https://github.com/franzreitmayer", '_blank').focus();
                        
                        
                        let url = resourceBundle.getText("profiles.github.url");
                        let newTab = window.open();
                        newTab.location.href = url;
                        break;
                    }
                    
                }
            }
        });
    });
