<!DOCTYPE html>
<html>
	<head>
		<title>Hoorayof Hooay</title>
		<style>
			@keyframes move{
				0%	{
					color: #22649f; 
					opacity: 0;
					top: 170px;
					display: block;
				}
				100%{
					color: #22649f;
					opacity: 1;
					box-shadow: 15px 15px 20px -10px;
					top: 190px;
					display: block;
				}
			}
			@keyframes moveed{
				0%{
					color: #22649f;
					opacity: 1;
					box-shadow: 15px 15px 20px -10px;
					top: 190px;
					display: block;
				}
				100%{
					color: #22649f; 
					opacity: 0;
					top: 170px;
					display: none;
				}
			}
			@keyframes Emove{
				0%	{
					color: #22649f; 
					opacity: 0;
					top: 0%;
					display: block;
				}
				100%{
					color: #22649f;
					opacity: 1;
					box-shadow: 15px 15px 20px -10px;
					top: 35%;
					display: block;
				}
			}
			@keyframes Emoveed{
				0%{
					color: #22649f;
					opacity: 1;
					box-shadow: 15px 15px 20px -10px;
					top: 35%;
					display: block;
				}
				100%{
					color: #22649f; 
					opacity: 0;
					top: 0%;
					display: none;
				}
			}
			@keyframes opLogo{
				0%	{opacity: 0; font-size: 0px; color: #dfd435; text-align: center; width: 80%}
				10%	{font-size: 0px;}
				50%	{opacity: 1; font-size:64px; }
				100%{color: #22649f;}
			}
			@keyframes opTop{
				0%{opacity: 0;}
				100%{opacity: 100;}
			}
			#ooay{
				animation-name: opLogo;
				animation-duration: 2s;
			}
			#mainBody{
				animation-delay: 1.8s;
				animation-name: opTop;
				animation-duration: 1s;
				animation-fill-mode:forwards;
			}
			.window{
				opacity: 0;
    			display: block;
                position: absolute; 
                top: 180px; 
                left: 10%; 
                width: 25%; 
                height: 10%; 
                padding: 10px; 
                border: 10px solid #22649f; 
                background-color: white; 
                z-index:1002; 
                overflow: auto; 
			}
			
			.top {
				width: 100%;
				/*height: 60px;*/
				margin: 0;
				display: flex;
				animation-delay: 1s;
				animation-name: opTop;
				animation-duration: 1s;
				animation-fill-mode:forwards;
			}
			body{
				/*background-color: #22649f;*/
			}
			.top>ul{
				width: 100%;
				min-width: 100px;
				background-color: #22649f;
				padding: 20px;
			}
			.top>ul>li{
				color: #dfd435;
				width:10%;
				min-width: 10px;
				/*margin:-5px 50px 0 70px;*/
				float: left;
				text-align: center;
				display: block;
				/*background-color: red;*/
			}
			.start{
				animation-name: move;
				animation-duration: 0.2s;
				animation-fill-mode:forwards;
				color: #22649f;
			}
			.end{
				animation-name: moveed;
				animation-duration: 0.2s;
				color: #22649f;
				animation-fill-mode:forwards;
			}
			.Estart{
				animation-name: Emove;
				animation-duration: 0.2s;
				animation-fill-mode:forwards;
				color: #22649f;
			}
			.Eend{
				animation-name: Emoveed;
				animation-duration: 0.2s;
				color: #22649f;
				animation-fill-mode:forwards;
			}

		</style>
	</head>
	<body>
		<div id="logo">
    		<svg height="80" width="80" xmlns="http://www.w3.org/2000/svg" version="1.1" id="logo">
    			<polyline
    				points="
    					4,4
    					28,4
    					28,76
    					4,76
    					4,4
    					28,4
    					28,52
    					52,52
    					64,76
    					76,76
    					76,4
    					64,4
    					52,28
    					28,28
    				"
    				style="fill: #dfd435; stroke: #22649f; stroke-width: 4;"
    			/>
    		</svg>
    		<strong style="color: #22649f; font-size: 64px; text-align: center" id="ooay">ooay</strong>
		</div>
		<div class="top" style="opacity: 0;">
			<ul>
				<li style="font-size: 20px; font-family: 'monospace';">
					<strong>Hooay!</strong>
				</li>
				<li>
					<a onclick="em()">e-mail</a>
				</li>
				<li>
					<a onclick="showvx()">We Chat</a>
				</li>
			</ul>
		</div>
		<!--email-->
		<div id="vx"  class="window" style="left: 25%;">wxid_jsnurwuczi1m22</div>
		<div id="ema" class="window"></div>
		
		<script>
			var emshow = false;
			var vxshow = false;
			var email = "hoorayof_hooay@163.com"
			function em(){
				//邮箱
				let p = document.getElementById("ema");
				if(! emshow){
					emshow = true;
					p.innerHTML = email;
					//p.style.display = "block";
					p.style.Zindex = 1145141919810;
					p.className = "window start";
				}else{
					emshow = false
					p.className = "window end";
					//p.style.display = "none";
					
				}
			}
			function close(){
				let p = document.getElementById("ema");
				emshow = false
				p.className = "";
				p.style.display = "none";
				p.innerHTML = "window";
			}
			function showvx(){
				let p = document.getElementById("vx");
				if(! vxshow){
					vxshow = true;
					//p.style.display = "block";
					p.style.Zindex = 1145141919810;
					p.className = "window start";
				}else{
					vxshow = false;
					p.className = "window end";
					//p.style.display = "none";
				}
				//alert(String(p.style.display)+"\n"+(p.style.display != "none"));
			}
		</script>
		<div id="mainBody" style="opacity: 0;">
			<h2><strong>Hoorayof Hooay</strong></h2>
			<p>
				<br/>he <a onclick="showEastEgg()">i</a>s a NB man.
				<br/>very nb,nb and nb
				<br/>
			</p>
			<script>
				function showEastEgg(){
					let p = document.getElementById("egg");
						if(! vxshow){
							vxshow = true;
							//p.style.display = "block";
							p.style.Zindex = 1145141919810;
				            p.className = "window Estart";
				        }else{
					        vxshow = false;
			            	p.className = "window Eend";
				        	//p.style.display = "none";
				        }
			            	//alert(String(p.style.display)+"\n"+(p.style.display != "none"));

				        }
			</script>
		</div>
		<div id="egg" class="window" style="width:400px; height:300px; top:35%; left:30%; font-size:8px">
			<div class="top" style="opacity: 0;">
    			<ul>
    				<li style="font-size: 10px; font-family: 'monospace';">
    					<strong>Hooay!</strong>
    				</li>
    				<li>
    					<a onclick="em()">e-mail</a>
    				</li>
    				<li>
    					<a onclick="showvx()">We Chat</a>
    				</li>
    			</ul>
    		</div>
    		<div style="text-align:center;">
    			<svg height="80" width="80" xmlns="http://www.w3.org/2000/svg" version="1.1" id="logo" onclick="document.getElementById('egggg').innerHTML = 'Hooay yyds!'">
        			<polyline
        				points="
        					4,4
        					28,4
        					28,76
        					4,76
        					4,4
        					28,4
        					28,52
        					52,52
        					64,76
        					76,76
        					76,4
        					64,4
        					52,28
        					28,28
        				"
        				style="fill: #dfd435; stroke: #22649f; stroke-width: 4;"
        			/>
        		</svg>
        		<p id="egggg"style="font-size:0.5px;"></p>
    		</div>
		</div>
	</body>
</html>
