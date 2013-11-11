/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, window, $, brackets, appshell */

define(function (require, exports, module) {
    "use strict";

    function _onReady() {
        
        $("#launch-dev-tools").click(function () {
            window.appshell.app.showDeveloperTools();
        });
    }
    
    $(window.document).ready(_onReady);
});
