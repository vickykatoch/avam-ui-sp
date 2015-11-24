module avam.ui.menu{
	'use strict';
	
	class avamMenuDirective implements ng.IDirective{
		static instance() : ng.IDirective{
			return new avamMenuDirective;
		}
		scope ={
		};
		templateUrl = './src/avam-ui/menu/avamMenu.template.html';
		transclude = true;
	}
	angular.module("avam-ui-menu").directive("avamMenu", avamMenuDirective.instance);	
}