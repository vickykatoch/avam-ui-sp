module avam.ui.menu{
	'use strict';
	
	class avamMenuItemDirective implements ng.IDirective{
		static instance() : ng.IDirective{
			return new avamMenuItemDirective;
		}
		require = '^avamMenu';
		scope ={
			label: '@',
            icon: '@',
            route: '@'
		};
		templateUrl = './src/avam-ui/menu/avamMenuItem.template.html';
	}
	angular.module("avam-ui-menu").directive("avamMenuItem", avamMenuItemDirective.instance);	
}