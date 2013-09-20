$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	


		
$('#addItem').on('pageinit', function(){

		var myForm = $('#goalform')
			errorlink = $('#errorlink')
		;
		    
			myForm.validate({
			invalidHandler: function(form, validator) {
				errorlink.click();
				var html = '';
				for(var key in validator.submitted){
					var label = $('label[for^="'+ key +'"]')
					var legend = label.closest('fieldset').find('.ui-controlgroup-label');
					var fieldName = legend.length ? legend.text() : label.text();
					html += '<li>' + fieldName +'</li>';
					}; 
					$("#formerrors ul").html(html);
			},
			submitHandler: function() {
		var key = myForm.serializeArray();
			storeData(this.key);
		}
	});
	
	//any other code needed for addItem page goes here
	
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

function ge(x){
		var theElement = document.getElementById(x);
		return theElement;
	}


function storeData(key){
		//If there is no key this means this is a brand new item and we need a new key
		if(!key){
			var id			= Math.floor(Math.random()*10000001);
		}else{
			id = key;
		};
		
		var item				= {};
			item.goalname		=["Goal Name", ge('goalname').value];
			item.date			=["Date", ge('date').value];
			item.email			=["Email Address", ge('email').value];
			item.phone			=["Phone Number", ge('phone').value];
			item.mydropbox		=["Importance", ge('mydropbox').value];
			getSelectedRadio();
			//checkboxValue();
			
			//Save Data into Local Storage:
			localStorage.setItem(id, JSON.stringify(item));
			alert("Goal Saved!");
			window.reload(5);
			
		


function getSelectedRadio(){
		var radios = document.forms["goalform"].myradio;
		for (var i=0; i<radios.length; i++){
			if(radios[i].checked){
				myradioValue = radios[i].value;
			}
		}
		
	}
	
	
	//I could not get my checkboxes to save
  //function checkboxValue() {
    //    if (ge('mycheckbox').checked) {
      //      mycheckboxValue = ge('mycheckbox').value;
        //} else {
          //  mycheckboxValue = "No";
        //}
    //}


}; 

var	deleteItem = function (){
		
};
					
var clearLocal = function(){

};


