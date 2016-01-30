window.onload=function(){
	var sc=document.getElementById('screen');
	var nums=document.getElementsByClassName('num');
	var ops=document.getElementsByClassName('oprator');
	var equl=document.getElementById('denghao');
	var firstNumber='',secondNumber='',yunsuanfu='',jieguo='';
	var qiehuan=document.getElementById('qiehuan');
	var contain1=document.getElementById('contain1');
	var firstblock=document.getElementById('contain0');
	var kaiguan=true;
	qiehuan.onclick=function(){
		if(kaiguan){
			contain1.style.display='block';
			this.innerHTML='普通计算器';
			firstblock.style.display='none';
			kaiguan=false;
		}else{
			contain1.style.display='none';
			this.innerHTML='科学计算器';			
			firstblock.style.display='block';
			kaiguan=true;
		}
	}
	for(var i=0;i<nums.length;i++){
		nums[i].onclick=function(){
			if(this.innerHTML=='.'&&firstNumber.indexOf('.')!=-1){
				return;
			}
			if(!yunsuanfu){
				if(this.innerHTML=='+/-'&&firstNumber.indexOf('-')==-1){
					firstNumber='-'+firstNumber;
					sc.innerHTML=firstNumber;
				}else{
					if(this.innerHTML!='+/-'){
						firstNumber+=this.innerHTML;
						sc.innerHTML=firstNumber;
					}else{
						return;
					}
				}
			}else{
				if(this.innerHTML=='+/-'&&secondNumber.indexOf('-')==-1){
					secondNumber='-'+secondNumber;
					sc.innerHTML=secondNumber;
				}else{
					if(this.innerHTML!='+/-'){
						secondNumber+=this.innerHTML;
						sc.innerHTML=secondNumber;
					}else{
						return;
					}
				}		
			}
		}
	}
	for(i=0;i<ops.length;i++){
		ops[i].onclick=function(){
			if(!sc.innerHTML){return};
			if(this.innerHTML=='+' || this.innerHTML=='-' || this.innerHTML=='*' || this.innerHTML=='/'){
				if(jieguo){
					firstNumber=jieguo;
				}
				if(yunsuanfu=='+'){
					firstNumber=Number(firstNumber)+Number(secondNumber)+'';
				}
				if(yunsuanfu=='-'){
					firstNumber=Number(firstNumber)-Number(secondNumber)+'';
				}
				if(yunsuanfu=='*'){
					if(secondNumber==''){secondNumber='1'};
					firstNumber=Number(firstNumber)*Number(secondNumber)+'';
				}
				if(yunsuanfu=='/'){
					if(secondNumber==''){secondNumber='1'};					
					firstNumber=Number(firstNumber)/Number(secondNumber)+'';
				}
				yunsuanfu=this.innerHTML;
				secondNumber='';
			}		
			if(this.innerHTML=='AC'){
				sc.innerHTML=0;
				firstNumber='';
				secondNumber='';
				yunsuanfu='';
				equl='';
				jieguo='';
			}		
		}
	}
	equl.onclick=function(){
		if(yunsuanfu=='+'){
			jieguo=Number(firstNumber)+Number(secondNumber);
			sc.innerHTML=jieguo;
		}
		if(yunsuanfu=='-'){
			jieguo=Number(firstNumber)-Number(secondNumber);
			sc.innerHTML=jieguo;
		}
		if(yunsuanfu=='*'){
			jieguo=Number(firstNumber)*Number(secondNumber);
			sc.innerHTML=jieguo;
		}
		if(yunsuanfu=='/'){
			jieguo=Number(firstNumber)/Number(secondNumber);
			sc.innerHTML=jieguo;
		}
		firstNumber='';secondNumber='';yunsuanfu='';equl='';

	};

	// ------------------------------------------------------
	var ping=document.getElementById('ping');
	var nums1=document.getElementsByClassName('num1');
	var yusuan=document.getElementsByClassName('fuhao');
	var dengyu=document.getElementById('equl');
	var pai=document.getElementById('pai');
	var first='',second='',opt='',result=1,jieguo1='';
	pai.onclick=function(){
		if(first==''&&this.innerHTML=='PI'){
				ping.innerHTML='PI';
				first=Math.PI+'';
				return;
			}
		if(second==''&&this.innerHTML=='PI'){
				ping.innerHTML='PI';
				second=Math.PI+'';
				return;
			}
	}
	for(var i=0;i<nums1.length;i++){
		nums1[i].onclick=function(){
			if(this.innerHTML=='.'&&first.indexOf('.')!=-1){
				return;
			}
			if(!opt){
				if(this.innerHTML=='+/-'&&first.indexOf('-')==-1){
					first='-'+first;
					ping.innerHTML=first;
				}else{
					if(this.innerHTML!='+/-'){
						first+=this.innerHTML;
						ping.innerHTML=first;
					}else{
						return;
					}
				}
			}else{
				if(this.innerHTML=='+/-'&&second.indexOf('-')==-1){
					second='-'+second;
					ping.innerHTML=second;
				}else{
					if(this.innerHTML!='+/-'){
						second+=this.innerHTML;
						ping.innerHTML=second;
					}else{
						return;
					}
				}		
			}
		}
	}
	for(i=0;i<yusuan.length;i++){
		yusuan[i].onclick=function(){
			if(!sc.innerHTML){return};
			ping.innerHTML=this.innerHTML;
			if(jieguo1){
				first=jieguo1;
			}
			if(opt=='+'){
				first=Number(first)+Number(second)+'';
			}
			if(opt=='-'){
				first=Number(first)-Number(second)+'';
			}
			if(opt=='*'){
				if(second==''){second='1'};
				first=Number(first)*Number(second)+'';
			}
			if(opt=='/'){
				if(second==''){second='1'};					
				first=Number(first)/Number(second)+'';
			}			
			if(opt=='%'){
				if(second==''){second=Number(first)+1+''};					
				first=Number(first)/Number(second)+'';
			}
			if(opt=='log'){
				if(second==''){second='1'};					
				first=Number(first)/Number(second)+'';
			}
			if(this.innerHTML=='x-1'){				
				first=1/Number(first)+'';
				ping.innerHTML=first;
				jieguo1=first;
			}
			if(this.innerHTML=='x2'){			
				first=Math.pow( first,2 )+'';
				ping.innerHTML=first;
				jieguo1=first;
			}
			if(this.innerHTML=='x3'){			
				first=Math.pow( first,3 )+'';
				ping.innerHTML=first;
				jieguo1=first;
			}
			if(this.innerHTML=='ex'){			
				first=Math.pow( Math.E,first )+'';
				ping.innerHTML=first;
				jieguo1=first;
			}
			if(this.innerHTML=='sin'){			
				first=Math.sin( 2*Math.PI/360*first )+'';
				ping.innerHTML=first;
				jieguo1=first;
			}
			if(this.innerHTML=='cos'){			
				first=Math.cos( 2*Math.PI/360*first )+'';
				ping.innerHTML=first;
				jieguo1=first;
			}
			if(this.innerHTML=='tan'){			
				first=Math.tan( 2*Math.PI/360*first )+'';
				ping.innerHTML=first;
				jieguo1=first;
			}
			if(this.innerHTML=='sinh'){			
				first=( Math.pow( Math.E,first )-Math.pow( Math.E,-first ) )/2+'';
				ping.innerHTML=first;
				jieguo1=first;
			}
			if(this.innerHTML=='cosh'){			
				first=( Math.pow( Math.E,first )+Math.pow( Math.E,-first ) )/2+'';
				ping.innerHTML=first;
				jieguo1=first;
			}
			if(this.innerHTML=='tanh'){			
				first=( (Math.pow( Math.E,first )-Math.pow( Math.E,-first ) ) /
					(Math.pow( Math.E,first )+Math.pow( Math.E,-first )) )+'';
				ping.innerHTML=first;
				jieguo1=first;
			}
			if(this.innerHTML=='ln'){			
				first=Math.log( first )/Math.log( 10 )+'';
				ping.innerHTML=first;
				jieguo1=first;
			}
			if(this.innerHTML=='xy'){			
				if(second==''){second='1'};					
				first=Math.pow(first,1);
			}
			if(this.innerHTML=='x!'){
				for(var i=Number(first);i>0;i--){
					result*=i;
				}
				ping.innerHTML=result;			
				first=result;
				jieguo1=first;
			}
			if(this.innerHTML=='√'){			
				first=Math.sqrt( first )+'';
				ping.innerHTML=first;
				jieguo1=first;
			}			
			if(this.innerHTML=='x√y'){			
				if(second==''){second='1'};					
				first=Math.pow(first,1/second);
			}
			opt=this.innerHTML;
			second='';
		}
	}
	dengyu.onclick=function(){
		first=Number(first);
		second=Number(second);
		if(opt=='+'){
			jieguo1=first+second;
		}
		if(opt=='-'){
			jieguo1=first-second;
		}
		if(opt=='*'){
			jieguo1=first*second;
		}
		if(opt=='/'){
			jieguo1=first/second;
		}
		if(opt=='%'){
			jieguo1=first%second;
		}
		if(opt=='xy'){
			jieguo1=Math.pow(first,second);
		}
		if(opt=='x√y'){
			jieguo1=Math.pow(first,1/second);
		}
		if(opt=='log'){
			jieguo1=Math.log(first,second);
		}
		ping.innerHTML=jieguo1;
		first='';
		second='';
		opt='';
	};
	var ac=document.getElementById('ac');
	ac.onclick=function(){
		ping.innerHTML=0;
		first='';
		second='';
		opt='';
		equl='';
		jieguo1='';
	}
};