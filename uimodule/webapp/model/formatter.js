sap.ui.define([], function() {
    "use strict";
    return {
        projectTypeImageURL: function(sProjectType) {
            switch (sProjectType) {
                case "ABAP":
                    {
                        return "../images/abap-logo.png"
                    }
                case "Java":
                    {
                        return "../images/Java-Logo.svg.png"
                    }
                case "AWS":
                    {
                        return "../images/aws.svg.png"
                    }
                case "JS":
                    {
                        return "../images/JavaScript-logo.png"
                    }
                case "antlr":
                    {
                        return "../images/antlr.jpg";
                    }
                case "UI5":
                    {
                        return "../images/phenix_blue.svg";
                    }
                case "TS":
                    {
                        return "../images/ts-logo-128.png";
                    }




            }
        }
    };
});