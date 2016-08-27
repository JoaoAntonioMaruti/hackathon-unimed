'use strict';
/* global angular */

angular.module('app.factory', [])

.factory('LoadingTemplate', function(){
    return {
        template:`
            <div class="loader">
              <div class="spinner"></div>
            </div>
        `
    };
})