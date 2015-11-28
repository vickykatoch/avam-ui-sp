module avam.ui.menu{
	'use strict';
	interface IMenuModel{
		isVertical(): boolean;
		openMenuScope: any;
		showMenu : boolean;
		allowHorizontalToggle : boolean;
		
	}
	
	class AvamMenuController implements IMenuModel{
		
	}
}