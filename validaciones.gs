
function validateEmailMicroYlanzarCuestionarioWorkshop()  {
var sheet_workshops=SpreadsheetApp.getActive().getSheetByName('Workshops');
var emailProfeMicro = sheet_workshops.getRange('emailProfeMicro').getValue();
var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!re.test(emailProfeMicro)){
    var ui = SpreadsheetApp.getUi();
   var response = ui.prompt('Necesitamos email profesor Micro', 'Cual es tu correo electrónico?', ui.ButtonSet.YES_NO);  
   // Process the user's response.
   if (response.getSelectedButton() == ui.Button.YES) {
       if(response.getResponseText() == ""){
           sheet_workshops.getRange('emailProfeMicro')
           .setValue("Falta email aqui").setBackground("red").setFontColor("white");
           return
       }else{
        var emailDado = response.getResponseText() 
            sheet_workshops.getRange('emailProfeMicro')
           .setValue(emailDado)
           return
        }
  } else if (response.getSelectedButton() == ui.Button.NO) {
        sheet_workshops.getRange('emailProfeMicro')
       .setValue("Falta email aqui").setBackground("red").setFontColor("white");
  } else {
        sheet_workshops.getRange('emailProfeMicro')
       .setValue("Falta email aqui").setBackground("red").setFontColor("white");
  }
    
    } else {
    //Lanzar Workshop Python
    lanzarCuestionarioWorkshop('Micro');   
   /* var htmlOutput = HtmlService
    .createHtmlOutput('<p>Ok Python</p>')
    .setWidth(250)
    .setHeight(300);
     SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'My add-on'); 
     */  
    // Logger.log("Evaluadores " + getEmailsSelected(false, "Python"))
     
    }
}

//validar email Spark
function validateEmailSQLYlanzarCuestionarioWorkshop()  {
var sheet_workshops=SpreadsheetApp.getActive().getSheetByName('Workshops');
var emailProfeSQL = sheet_workshops.getRange('emailProfeSQL').getValue();
var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!re.test(emailProfeSQL)){
    var ui = SpreadsheetApp.getUi();
   var response = ui.prompt('Necesitamos email profesor SQL', 'Cual es tu correo electrónico?', ui.ButtonSet.YES_NO);  
   // Process the user's response.
   if (response.getSelectedButton() == ui.Button.YES) {
       if(response.getResponseText() == ""){
           sheet_workshops.getRange('emailProfeSQL')
           .setValue("Falta email aqui").setBackground("red").setFontColor("white");
           return
       }else{
        var emailDado = response.getResponseText() 
            sheet_workshops.getRange('emailProfeSQL')
           .setValue(emailDado)
           return
        }
  } else if (response.getSelectedButton() == ui.Button.NO) {
        sheet_workshops.getRange('emailProfeSQL')
       .setValue("Falta email aqui").setBackground("red").setFontColor("white");
  } else {
        sheet_workshops.getRange('emailProfeSQL')
       .setValue("Falta email aqui").setBackground("red").setFontColor("white");
  }
    
    } else {
    //Lanzar Workshop Spark
    lanzarCuestionarioWorkshop('SQL');
    /*
    var htmlOutput = HtmlService
    .createHtmlOutput('<p>Ok Spark</p>')
    .setWidth(250)
    .setHeight(300);
     SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'My add-on'); 
     */
    // Logger.log("Evaluadores " + getEmailsSelected(false, "Spark"))
    }
}
