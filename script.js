const firstDigit=document.querySelector('.first-digit');
const secondDigit=document.querySelector('.second-digit');
const answer=document.querySelector('input');
const operator=document.querySelector('.operator');
const equalSign=document.querySelector('.equal-sign');
const checkBtn=document.querySelector('.check-btn');
const changeBtn=document.querySelector('.change-btn');
const plusOp=document.querySelector('.plus-op');
const minusOp=document.querySelector('.minus-op');
const productOp=document.querySelector('.product-op');
const ansStatus=document.querySelector('.ans-status');
const wrongAudio=document.querySelector('.wrong-audio');
const rightAudio=document.querySelector('.right-audio');

randomFirst=Math.floor(Math.random()*25);
randomSecond=Math.floor(Math.random()*15);
firstDigit.innerHTML=randomFirst;
secondDigit.innerHTML=randomSecond;
operator.innerHTML='+';
equalSign.innerHTML='=';

checkBtn.addEventListener('click',handleCheck);
changeBtn.addEventListener('click',handleChange);

let opDeterminer=0;
plusOp.addEventListener('click',function(){
	opDeterminer=0;
	operator.innerHTML='+'
})
minusOp.addEventListener('click',function(){
	opDeterminer=1;
	operator.innerHTML='-'
})
productOp.addEventListener('click',function(){
	opDeterminer=2;
	operator.innerHTML='x'
})

function handleCheck(){
	let realAns;
	if(opDeterminer===0){
		realAns=randomFirst+randomSecond;
	}
	else if(opDeterminer===1){
		realAns=randomFirst-randomSecond;
	}
	else{
		realAns=randomFirst*randomSecond;
	}

	rightAudio.currentTime=0;
	wrongAudio.currentTime=0;
	if(parseInt(answer.value)===realAns){
		ansStatus.innerHTML='Correct';
		rightAudio.play();
	}
	else if(answer.value===''){
		ansStatus.innerHTML='No value';
		wrongAudio.play();
	}
	else{
		ansStatus.innerHTML='Incorrect';
		wrongAudio.play();
	}

	setTimeout(function(){
		if(ansStatus.innerHTML==='Correct'){
		answer.value='';
		randomFirst=Math.floor(Math.random()*25);
		randomSecond=Math.floor(Math.random()*15);
		firstDigit.innerHTML=randomFirst;
		secondDigit.innerHTML=randomSecond;
		ansStatus.innerHTML='Enter the answer';
	}},1000)
}

function handleChange(){
	answer.value='';
	ansStatus.innerHTML='Enter the answer';
	randomFirst=Math.floor(Math.random()*25);
	randomSecond=Math.floor(Math.random()*15);
	firstDigit.innerHTML=randomFirst;
	secondDigit.innerHTML=randomSecond;
}