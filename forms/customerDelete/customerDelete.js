
let allNames = []

customerDelete.onshow=function(){
// get all the data from the database when program loads
      let query = "SELECT name FROM customer"
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjh22435&pass=BIA375!&database=cjh22435&query=" + query)
    if (req1.status == 200) { //transit worked.
            allNames = JSON.parse(req1.responseText)
                    if (allNames == 0) {
} else {
  let message = ""
  for (i = 0; i <= allNames.length - 1; i++) {
    message = message + allNames[i][0] + "\n"
    }
    txtStateOptions1.value = message
  }
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  

}





btnGo1.onclick=function(){
let nameDel = inptState1.value
// make sure the pet name is in the database before you try to delete it
    let found = false
    for (i = 0; i <= allNames.length - 1; i++) {
        if (nameDel == allNames[i][0])
            found = true
    }
    if (found == false) 
       NSB.MsgBox("That pet name is not in the database.")
    else if (found == true) {
      let query = "DELETE FROM customer WHERE name = " + '"' + nameDel + '"'
 req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjh22435&pass=BIA375!&database=cjh22435&query=" + query)
      if (req1.status == 200) { //transit worked
        if (req1.responseText == 500) {    // means the insert succeeded
            NSB.MsgBox("You have successfully deleted the pet named " + nameDel)
            

 let query = "SELECT name FROM customer"
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=cjh22435&pass=BIA375!&database=cjh22435&query=" + query)
    if (req1.status == 200) { //transit worked.
            allNames = JSON.parse(req1.responseText)
                    if (allNames == 0) {
} else {
  let message = ""
  for (i = 0; i <= allNames.length - 1; i++) {
    message = message + allNames[i][0] + "\n"
    }
    txtStateOptions1.value = message
  }
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    }  
    
    
     } else {
            NSB.MsgBox("There was a problem deleting " + nameDel + " from the database.")
            }
      } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
      }  
  } // count if

}
