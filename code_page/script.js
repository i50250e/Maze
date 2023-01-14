function to1() {
	let input = document.getElementById("input");
	let error = document.getElementById("errorname");
	let check = document.getElementById("check");
	
	//시작 전 경고 문구와 애니메이션 초기화
	error.innerHTML = "";
	input.style.animation='';

	function ans()
	{
		if(input.value == "시작")
			location.href="./code_page/page1_start.html";
		else
		{
			input.style.animation='shake 0.5s';
			error.innerHTML = "다시 풀어보세요";
		}
	}

	//타이핑을 했을 때
	input.addEventListener("keydown", e => {
		//엔터라면 답안 확인(ans 함수 호출)
		if(e.keyCode === 13) {
			ans();
		}
	});

	//입력창을 클릭했을 때
	input.addEventListener("click", () => {
		error.innerHTML = "";
		input.style.animation='';
	});


	//확인 버튼을 클릭했을 때
	check.addEventListener("click", () => {
		ans();
	});

}


function to2() {
	let input = document.getElementById("input");
	let error = document.getElementById("errorname");
	let check = document.getElementById("check");
	
	//시작 전 경고 문구와 애니메이션 초기화
	error.innerHTML = "";
	input.style.animation='';

	function ans()
	{
		if(input.value == "라온이")
			location.href="./page2_raon.html";
		else
		{
			input.style.animation='shake 0.5s';
			error.innerHTML = "다시 풀어보세요";
		}
	}

	//타이핑을 했을 때
	input.addEventListener("keydown", e => {
		//엔터라면 답안 확인(ans 함수 호출)
		if(e.keyCode === 13) {
			ans();
		}
	});

	//입력창을 클릭했을 때
	input.addEventListener("click", () => {
		error.innerHTML = "";
		input.style.animation='';
	});


	//확인 버튼을 클릭했을 때
	check.addEventListener("click", () => {
		ans();
	});

}

