1. Can't bind to 'routerLink' since it isn't a known property of 'a'.
## use RouterModule

2. 3d animation
https://polypane.app/css-3d-transform-examples/

3. 3d landing pages
https://www.sliderrevolution.com/resources/css-animated-background/

4. slider pure html and css
https://codepen.io/KamilDyrek/pen/ejmRxV

5. slider pure css dot ...
https://codepen.io/STKNG/pen/gVOPMO

6. split slick slide show
https://codepen.io/supah/pen/zZaPeE

7. minimal static cards using icon
https://codepen.io/lesliesamafful/pen/oNXgmBG

8. using one image view
https://freefrontend.com/css-sliders/

9. plane card using about section
https://freefrontend.com/css-cards/page/2/
https://codepen.io/mor10/pen/oNBdamz
https://codepen.io/arti2002/pen/LYRxeOG


email :archigram38@gmail.com
phone : +91 8089385338
facebook: https://www.facebook.com/Archigramarchitecture

insta:https://www.instagram.com/archigram_architecture?igsh=MWlncXRkbXVuMTk2cQ%3D%3D&utm_source=qr

youtube: https://www.youtube.com/@archigram2554

enquiry form : https://docs.google.com/spreadsheets/d/1Z0G8J9A6T_p-43Ud4ByjoyAVn0v0PnyVSlXHCfOuMAg/edit#gid=0

change 
X toggle button 
 about 


//////////// app.js 
 const sheetName = 'Sheet1'
const scriptProp = PropertiesService.getScriptProperties()

function intialSetup () {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
  const lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    const sheet = doc.getSheetByName(sheetName)

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    const nextRow = sheet.getLastRow() + 1

    const newRow = headers.map(function(header) {
      return header === 'Date' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}


 ///////javascript code

	const scriptURL = ''
			const form = document.forms['formName']
		  
			form.addEventListener('submit', e => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => alert("Thank you! your form is submitted successfully." ))
				.then(() => {  window.location.reload(); })
				.catch(error => console.error('Error!', error.message))
			})



      headline div data-aos="fade-down"
      picture data-aos="zoom-in-down"
      card div data-aos="fade-up"
     data-aos-duration="3000"