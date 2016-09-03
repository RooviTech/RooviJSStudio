package org.roovi.nashorn.javafx;

import javafx.scene.Node;
import javafx.scene.control.Tooltip;

public class UITooltip extends Tooltip {
	
	public UITooltip(){
		super();
		
		System.out.println("UITooltip successfully created!");
	}
	
	public UITooltip(String text){
		super(text);
		
		System.out.println("UITooltip successfully created!");
	}
	
	public UITooltip(Node graphic){
		super();
		this.setGraphic(graphic);
		
		System.out.println("UITooltip successfully created!");
	}
	
	public UITooltip(String text, Node graphic){
		super(text);
		this.setGraphic(graphic);
		
		System.out.println("UITooltip successfully created!");
	}
	
}