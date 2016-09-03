package org.roovi.nashorn.javafx;

import javafx.collections.ObservableList;
import javafx.scene.control.ComboBox;

public class UIComboBox extends ComboBox {
	
	public UIComboBox(){
		super();
		
		System.out.println("UIComboBox successfully created!");
	}
	
	public UIComboBox(ObservableList<String> items){
		super(items);
		
		System.out.println("UIComboBox successfully created!");
	}
	
}