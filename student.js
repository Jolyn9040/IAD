$(document).ready(function() {
	$(function() {
		var box = $("#pic");
		box.fadeOut("slow");
		box.fadeIn("slow");
		box.hide("slow");
		box.show("slow");
	});
	var idcount = 0;
	$("#customerform").submit(function(event) {
		event.preventDefault();
		var Surname = $("#Surname").val().trim();
		var Name = $("#name").val().trim();
		var Gender = $("#gender:checked").val();
		var Address = $("#address").val().trim();
		var Email = $("#email").val().trim();
		var PhoneNo = $("#phone").val().trim();
		var errorFree = true;
		var alphaReg = /^[A-Za-z\s]+$/;
		var emailReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
		
		if (Surname === "") {
			errorFree = false;
			$("#Surname_msg").show();
		}
		else {
			$("#Surname_msg").hide();
		}
		
		if (Name === "" || !(alphaReg.test(Name))) {
			errorFree = false;
			$("#name_msg").show();
		}
		else {
			$("#name_msg").hide();
		}
		
		if (Gender === undefined) {
			errorFree = false;
			$("#gender_msg").show();
		}
		else {
			$("#gender_msg").hide();
		}
		
		if (Address === "") {
			errorFree = false;
			$("#address_msg").show();
		}
		else {
			$("#address_msg").hide();
		}
		
		if (Email === "" || !(emailReg.test(Email))) {
			errorFree = false;
			$("#email_msg").show();
		}
		else {
			$("#email_msg").hide();
		}
		
		if (PhoneNo === "" || isNaN(PhoneNo)) {
			errorFree = false;
			$("#phone_msg").show();
		}
		else {
			$("#phone_msg").hide();
		}
		
		if (errorFree) {
		idcount++;
			$("#tblData tbody").append("<tr><td>" + idcount + "</td>" + "<td>" + Surname + "</td>" + "<td>" + Name + "</td>" + "<td>" + Gender + "</td>" + "<td>" + Address + "</td>" + "<td>" + Email + "</td>" + "<td>" + PhoneNo + "</td>"+ "<td><button class='btnEdit'>Edit</button>" + "<button class='btnDelete'>Delete</button></td></tr>");
			
			$(".btnEdit").bind("click", Edit);
			$(".btnDelete").bind("click", Delete);
		}
	});

	function Edit() {
		var par = $(this).parent().parent();
		var tdSurname = par.children("td:nth-child(2)");
		var tdName = par.children("td:nth-child(3)");
		var tdGender = par.children("td:nth-child(4)");
		var tdAddress = par.children("td:nth-child(5)");
		var tdEmail = par.children("td:nth-child(6)");
		var tdPhoneNo = par.children("td:nth-child(7)");
		var tdButtons = par.children("td:nth-child(8)");
		
		tdSurname.html("<input type='text' value='" + tdSurname.html() + "'>");
		tdName.html("<input type='text' value='" + tdName.html() + "'>");
		tdGender.html("<input type='text' value='" + tdGender.html() + "'>");
		tdAddress.html("<input type='text' value='" + tdAddress.html() + "'>");
		tdEmail.html("<input type='text' value='" + tdEmail.html() + "'>");
		tdPhoneNo.html("<input type='text' value='" + tdPhoneNo.html() + "'>");
		tdButtons.html("<button class='btnSave'>Save</button>");
		
		$(".btnSave").bind("click", Save);
	}

	function Save() {
		var par = $(this).parent().parent();
		var tdSurname = par.children("td:nth-child(2)");
		var tdName = par.children("td:nth-child(3)");
		var tdGender = par.children("td:nth-child(4)");
		var tdAddress = par.children("td:nth-child(5)");
		var tdEmail = par.children("td:nth-child(6)");
		var tdPhoneNo = par.children("td:nth-child(7)");
		var tdButtons = par.children("td:nth-child(8)");
		
		var Surname = tdSurname.children("input[type=text]").val().trim();
		var Name = tdName.children("input[type=text]").val().trim();
		var Gender = tdGender.children("input[type=text]").val();
		var Address = tdAddress.children("input[type=text]").val().trim();
		var Email = tdEmail.children("input[type=text]").val().trim();
		var PhoneNo = tdPhoneNo.children("input[type=text]").val().trim();
		var errorFree = true;
		var alphaReg = /^[A-Za-z\s]+$/;
		var emailReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
		var error = "";
		
		if (Surname === "") {
			errorFree = false;
			error += "Surname is required.\n";
		}
		
		if (Name === ""  || !(alphaReg.test(Name))) {
			errorFree = false;
			error += "Name is required and alphabets only.\n";
		}
		
		if (Gender === "Female" || Gender === "Male") {
			$("#gender_msg").hide();
		}
		else {
			errorFree = false;
			error += "Gender is required and must be Female or Male.\n";
		}
		
		if (Address === "") {
			errorFree = false;
			error += "Address is required.\n";
		}
		else {
			$("#address_msg").hide();
		}
		
		if (Email === "" || !(emailReg.test(Email))) {
			errorFree = false;
			error += "Email must be a valid email.\n";
		}
		else {
			$("#email_msg").hide();
		}
		
		if (PhoneNo === "" || isNaN(PhoneNo)) {
			errorFree = false;
			error += "Phone must be numeric only.\n";
		}
		else {
			$("#phone_msg").hide();
		}

		if (errorFree) {
			tdSurname.html(tdSurname.children("input[type=text]").val());
			tdName.html(tdName.children("input[type=text]").val());
			tdGender.html(tdGender.children("input[type=text]").val());
			tdAddress.html(tdAddress.children("input[type=text]").val());
			tdEmail.html(tdEmail.children("input[type=text]").val());
			tdPhoneNo.html(tdPhoneNo.children("input[type=text]").val());
			tdButtons.html("<button class='btnEdit'>Edit</button>" + "<button class='btnDelete'>Delete</button>");
			
			$(".btnEdit").bind("click", Edit);
			$(".btnDelete").bind("click", Delete);
	}
		else {
			alert(error);
		}
	}
	function Delete() {
		var par = $(this).parent().parent(); // this will select tr
		par.remove();
	}

});
