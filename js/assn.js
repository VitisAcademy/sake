let assn=document.querySelector(".assn");function assnGenerator(){let s=assnContent(),n=assnAnswer(),e=[];for(let t=0;t<s.length;t++)e.push(`<div class="assn__task hidden">${s[t]}${n[t]}</div>`);shuffle(e),assn.insertAdjacentHTML("beforeend",e.join("")),assn.insertAdjacentHTML("beforeend",'<div class="button hidden" onclick="scoreButton(0)">Нажмите для завершения!</div>'),assn.firstElementChild.classList.remove("hidden")}function assnAnswer(){let s=[];for(let n=0;n<answerAssn.length;n++){let e=[];e.push(`<div class="assn__answer assn__button" onclick="assnResult(this, 1)">${answerAssn[n][0]}</div>`),e.push(`<div class="assn__answer assn__button" onclick="assnResult(this, 0)">${answerAssn[n][1]}</div>`),e.push(`<div class="assn__answer assn__button" onclick="assnResult(this, 0)">${answerAssn[n][2]}</div>`),shuffle(e),s.push(e.join(""))}return s}function assnContent(){let s=[];for(let n=0;n<contentAssn.length;n++)s.push(`<div class="assn__quest">${contentAssn[n]}</div>`);return s}assnGenerator();let assnStep=0;function assnResult(s,n){n?(s.classList.add("assnGreen"),userAssn+=1):s.classList.add("assnRed"),window.setTimeout((function(){assn.children[assnStep].classList.add("hidden"),assnStep+=1,assn.children[assnStep].classList.remove("hidden")}),500)}