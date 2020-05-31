function submitform()
{
    document.forms["myform"].submit();
}
var dayofWeekName =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var dayofWeek;
var genderMale =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var genderFemale=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var akanName;

function getDayofWeek(dateofBirth){
	var dt = new Date(dateofBirth);
	var day = dt.getDay();
	if (day == 0) {
		dayofWeek = dayofWeekName[0];
	}
	else if (day==1) {
		dayofWeek =dayofWeekName[1];
	}
	else if (day==2) {
		dayofWeek =dayofWeekName[2];
	}
	else if (day==3) {
		dayofWeek =dayofWeekName[3];
	}
	else if (day==4) {
		dayofWeek =dayofWeekName[4];
	}
	else if (day==5) {
		dayofWeek =dayofWeekName[5];
	}
	else if (day==6) {
		dayofWeek =dayofWeekName[6];
	}

  return dayofWeek;
}
function getDayofWeek(dateofBirth){
	var bornday= new Date(dateofBirth);
	var day = bornday.getDay();
	if (day == 0) {
		dayofWeek = dayofWeekName[0];
	}
	else if (day==1) {
		dayofWeek =dayofWeekName[1];
	}
	else if (day==2) {
		dayofWeek =dayofWeekName[2];
	}
	else if (day==3) {
		dayofWeek =dayofWeekName[3];
	}
	else if (day==4) {
		dayofWeek =dayofWeekName[4];
	}
	else if (day==5) {
		dayofWeek =dayofWeekName[5];
	}
	else if (day==6) {
		dayofWeek =dayofWeekName[6];
	}

  return dayofWeek;
}
function getName() {
	var gender="female";
	var dateofBirth ="Dec 9, 1991";
	var dayOftheWeek= getDayofWeek(dateofBirth);
	if (gender =="female" && dayOftheWeek == dayofWeekName[0]) {
		akanName = genderFemale[0];
	}
	else if (gender == "female" && dayOftheWeek == dayofWeekName[1]) {
		akanName = genderFemale[1];
	}
	else if (gender == "female" && dayOftheWeek == dayofWeekName[2]) {
		akanName = genderFemale[2];
	}
	else if (gender == "female" && dayOftheWeek == dayofWeekName[3]) {
		akanName = genderFemale[3];
	}
	else if (gender == "female" && dayOftheWeek == dayofWeekName[4]) {
		akanName = genderFemale[4];
	}
	else if (gender == "female" && dayOftheWeek == dayofWeekName[5]) {
		akanName = genderFemale[5];
	}
	else if (gender == "female" && dayOftheWeek == dayofWeekName[6]) {
		akanName = genderFemale[6];
	}
	else if (gender == "male" && dayOftheWeek == dayofWeekName[0]) {
		akanName = genderMale[0];
	}
	else if (gender == "male" && dayOftheWeek == dayofWeekName[1]) {
		akanName = genderMale[1];
	}
	else if (gender == "male" && dayOftheWeek == dayofWeekName[2]) {
		akanName = genderMale[2];
	}
	else if (gender == "male" && dayOftheWeek == dayofWeekName[3]) {
		akanName = genderMale[3];
	}
	else if (gender == "male" && dayOftheWeek == dayofWeekName[4]) {
		akanName = genderMale[4];
	}
	else if (gender == "male" && dayOftheWeek == dayofWeekName[5]) {
		akanName = genderMale[5];
	}
	else if (gender == "male" && dayOftheWeek == dayofWeekName[6]) {
		akanName = genderMale[6];
	}
	return "You were born on "  + dayOftheWeek +  " Your Akan Name is "  + akanName;

}
alert(getName());
