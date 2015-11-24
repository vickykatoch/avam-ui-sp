module avam.ui.directives{
	'use strict';
		
		
	class avamUIDirective implements ng.IDirective{
		static instance() : ng.IDirective{
			return new avamUIDirective;
		}
		transclude = true;
		restrict = 'E';
		scope ={
			title: '@',
            subtitle: '@',
            iconFile: '@'
		};
		templateUrl = './src/avam-ui/avamUI.template.html';
		
	}
	
	angular.module("avam-ui").directive("avamUi", avamUIDirective.instance);
}