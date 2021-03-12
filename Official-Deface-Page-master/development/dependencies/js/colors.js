farbbibliothek=new Array();
				farbbibliothek[0]=new Array("#FFD16F","#FFD16F","#FFD16F","#FFD16F","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF");
				farbbibliothek[1]=new Array("#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFD16F","#FFD16F","#FFD16F","#FFD16F");
				farben=farbbibliothek[1];
				function farbschrift(){
						for
							(
								var i=0;
								i<Buchstabe.length;
								i++
							)
							{
								document.all["a"+i].style.color=farben[i];
							}
						farbverlauf();
				}
				function string2array(text){
						Buchstabe=new Array();
						while(farben.length<text.length)
						{
							farben=farben.concat(farben);
						}
						k=0;while(k<=text.length)
						{
							Buchstabe[k]=text.charAt(k);k++;
						}
				}
				function divserzeugen(){
					for(var i=0;i<Buchstabe.length;i++)
					{
						document.write("<font id='colors'><span id='a"+i+"' class='a"+i+"'>"+Buchstabe[i]+"</span></font>");
					}
					farbschrift();}
					var a=1;function farbverlauf()
					{
						for(var i=0;i<farben.length;i++)
							{
								farben[i-1]=farben[i];
							}
						farben[farben.length-1]=farben[-1];
						setTimeout("farbschrift()",30);
					}
					var farbsatz=1;function farbtauscher()
						{
							farben=farbbibliothek[farbsatz];
							while(farben.length<text.length)
							{
								farben=farben.concat(farben);
							}
							farbsatz=Math.floor(Math.random()*(farbbibliothek.length-0.0001));
						}
						setInterval("farbtauscher()",5000);
						text="[+] ☫ WE ARE READY TO CONQUER TEL AVIV ☫ [+]";
						string2array(text);
						divserzeugen();