package org.roovi.nashorn.javafx;

import javafx.scene.control.ListView;
import javafx.collections.ObservableList;

public class UIListView extends ListView {
	
	public UIListView(){
		super();
		
		System.out.println("UIListView successfully created!");
	}
	
	public UIListView(ObservableList items){
		super(items);
		
		System.out.println("UIListView successfully created!");
	}
	
}