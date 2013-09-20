function body_load() {
	add_mainly_office_condition();
}

function add_mainly_office_condition() {
	var li = document.createElement("li");

	var input1 = document.createElement("input");
	input1.setAttribute("placeholder","开始工作时间");
	var input2 = document.createElement("input");
	input2.setAttribute("placeholder","结束工作时间");
	input2.setAttribute("type","text");
	var input3 = document.createElement("input");
	input3.setAttribute("placeholder","所在单位");
	input3.setAttribute("style","width:270px;margin-left:10px;");
	var input4 = document.createElement("input");
	input4.setAttribute("placeholder","担任职务");
	input4.setAttribute("style","width:250px");
	var input5 = document.createTextNode(":");

	var btn1 = document.createElement("button");
	btn1.innerHTML = "-";
	btn1.setAttribute("type","button");
	btn1.onclick = function(){
		li.parentNode.removeChild(li);
	}
	li.appendChild(input1);
	li.appendChild(input2);
	li.appendChild(input5);
	li.appendChild(input3);
	li.appendChild(input4);
	li.appendChild(btn1);

	document.getElementById("mainly_office_condition_list").appendChild(li);
}

