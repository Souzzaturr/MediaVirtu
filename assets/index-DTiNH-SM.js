(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();function m(){return`
        <header id = "cabecalho">
            <div id = "cabecalho-cima" class = "bg-blbl rgb-border-fade"></div>
            <div id = "cabecalho-meio" class = "bg-blbl rgb-border-fade"></div>
            <a id = "titulo" href = "">
                <h1 class = "goldman-bold">MediaVirtu</h1>
            </a>
        </header>
    `}const _={opcoes:["Inicio","Sobre","Ajuda","Feedback","Configurações"],enderecos_icones:["icones/menu_lateral_icons/icone-inicio.png","icones/menu_lateral_icons/icone-sobre.png","icones/menu_lateral_icons/icone-ajuda.png","icones/menu_lateral_icons/icone-feedback.png","icones/menu_lateral_icons/icone-configuracoes.svg"]},f={opcoes:["Meu Perfil","Postar","Excluir","Denunciar","sair"],enderecos_icones:["icones/menu_lateral_icons/icone-perfil.png","icones/menu_lateral_icons/icone-postar.png","icones/menu_lateral_icons/icone-excluir.svg","icones/menu_lateral_icons/icone-denunciar.png","icones/menu_lateral_icons/icone-sair.png"]},d={sidebar_left:_,sidebar_right:f};function v(){let o,t;const a=[0,1,2,3,4];var e='<section id = "barra-esquerda" class = "bg-blbl rgb-border-fade">';return a.forEach(s=>{o=d.sidebar_left.opcoes[s],t=d.sidebar_left.enderecos_icones[s],e+=`
        <a id = "${o}" class = "opcao-barra-lateral" href="" data-page = "${o}">
            <h3 class = "texto-opc-lateral goldman-bold">${o}</h3>

            <img class = "icon-barra-ltrl" src="${t}" alt="" width = "100%">                    
        </a>
        `}),e+="</section>",e}function b(){let o,t;const a=[0,1,2,3,4];var e='<section id = "barra-direita" class = "bg-blbl rgb-border-fade">';return a.forEach(s=>{o=d.sidebar_right.opcoes[s],t=d.sidebar_right.enderecos_icones[s],e+=`
        <a id = "${o}" class = "opcao-barra-lateral" href = "" data-page = "${o}">
            <img class = "icon-barra-ltrl" src = "${t}" alt = "" width = "100%">

            <h3 class = "texto-opc-lateral goldman-bold">${o}</h3>
        </a>`}),e+="</section>",e}function h(){return'<nav id = "barras-navegacao-laterais">'+v()+b()+"</nav>"}function I(o){const e=JSON.parse(localStorage.getItem("banco_comentarios")||"[]").filter(s=>s.para_post==o).map(s=>`<div class = "comentario">
                        <p class = "texto-comentario">${s.autor}: ${s.conteudo}</p>
                        </div>`).join("");return`
            <div id = "bloco-comentarios-${o}" class = "bloco-comentarios esconder-comentarios">  
                <button class = "enviar-comentario goldman-bold">
                    Escreva um comentario:
                </button>
    
                ${e||"<p class = 'sem-comentarios'>Ninguem comentou nada ainda...</p>"}

                    
            </div>
            `}function x(){return`
        <div class = "tres-pontinhos">
            <div class = "tres-pontinhos-ponto"></div>
            <div class = "tres-pontinhos-ponto"></div>
            <div class = "tres-pontinhos-ponto"></div>
        </div>
    `}function S(o,t,a,e,s=[],i,n,c="xxxxxxxxxx"){const l=e.length>0?`<div class = "conteudo-shitpost">
        ${e.split(`
`).map(u=>`<p>${u}</p>`).join("")}
    </div>`:"",r=s.length>0?`<div class = "conjunto-imagens-shitpost">
        ${s.map(u=>`<img class = "imagem-shitpost" src = "${u}" alt = "imagem-shitpost">`).join("")}
    </div>`:"";return`
    <section id = "post-${c}" class="bloco bloco-shitpost">
        <div class = "topo-shitpost">
            <div class="autor">
                <img src="${t}" alt="" class="foto-perfil">
                <div class="info-autor">
                    <h3 class="nome-autor goldman-bold">${o}</h3>
                    <p class="tempo-post">${a}</p>
                </div>
            </div>
            ${x()}
        </div>
        <div class = "principal-shitpost">
            ${l}
            ${r}
        </div>
        <div class = "painel-interacao-shitpost">
            <div class = "botoes-interacao">
                ${k(i,c)}
                ${P(n,c)}
                ${y(c)}
            </div>
            ${I(c)}
        </div>
    </section>
    `}function k(o=0,t){const a=JSON.parse(localStorage.getItem("lista_likes")||"[]"),e=a.includes(t)?"-press":"";return o=a.includes(t)?o+1:o,`
        <a id = "like-${t}" class = "botao-gostei" href = "#a">
            <img class = "icone-gostei" src = "icones/interacao_shitpost_icons/icone-gostei${e}.png" alt = "gostei">
            <p id = "qtd-likes-${t}">${o}</p>
        </a>
    `}function P(o=0,t){const a=JSON.parse(localStorage.getItem("lista_dislikes")||"[]"),e=a.includes(t)?"-press":"";return o=a.includes(t)?o+1:o,`
        <a id = "dislike-${t}" class = "botao-naogostei" href = "#a">
            <img class = "icone-naogostei" src = "icones/interacao_shitpost_icons/icone-naogostei${e}.png" alt = "nao-gostei">
            <p id = "qtd-dislikes-${t}">${o}</p>
        </a>
    `}function y(o){const t=JSON.parse(localStorage.getItem("banco_comentarios")||"[]");let a=0;return t.forEach(e=>e.para_post==o?a++:""),`
        <a id = "comentarios-${o}" class = "botao-comentarios" href = "#a">
            <img class = "icone-comentarios" src = "icones/interacao_shitpost_icons/icone-comentarios.png" alt = "nao-gostei">
            <p id = "qtd-comentarios-shitpost-${o}">${a}</p>
        </a>
    `}function V(){return`
    <div class="linha-divisoria-sessoes">
        <div class="node-divisoria"></div>
        <div class="linha-divisoria"></div>
        <div class="node-divisoria"></div>
        <div class="linha-divisoria"></div>
        <div class="node-divisoria"></div>
    </div>
    `}const $=JSON.parse(localStorage.getItem("banco_posts"));function C(){return A($.map(o=>S(o.nome,o.foto_perfil?o.foto_perfil:"pictures/MediaVirtu_icon.png",o.tempo_postagem,o.texto,o.imagens,o.likes,o.dislikes,o.codigo_post)+V())).join("")}function A(o){for(let t=o.length-1;t>0;t--){const a=Math.floor(Math.random()*(t+1));[o[t],o[a]]=[o[a],o[t]]}return o}function L(o){switch(o){case"Inicio":return C();case"Sobre":case"Ajuda":case"Feedback":case"Configurações":case"Meu Perfil":case"Postar":case"Excluir":case"Denunciar":case"sair":return"<div class = 'bloco'> Aguardem sensacionais revelações... </div>"}}const J=[{nome:"Dernald0_356",foto_perfil:"https://media.tenor.com/rLWM_LVTf-0AAAAM/%D0%BD%D1%83-%D0%B0%D1%87%D1%82%D0%BE.png",tempo_postagem:"Ontem",texto:"FINALMENTE, ALGUÉM CONSEGUIU!!",imagens:["pictures/lapis.png"],likes:10,dislikes:37,codigo_post:"qHMElv3JCyGoFHjAfApl"},{nome:"Euclides_34654",foto_perfil:"",tempo_postagem:"Anteontem",texto:"A saúde mental do estudante ao decorrer do semestre:",imagens:["pictures/picapau-bem.png","pictures/picapau-endoidado.png"],likes:139,dislikes:15,codigo_post:"3fG3Knwlg4FL4pa7voAp"},{nome:"Juliao_FiatUno13",foto_perfil:"https://pbs.twimg.com/profile_images/1518671976222625794/XS5UoGKU_400x400.jpg",tempo_postagem:"Amanhã",texto:"O seu patrão vendo você fazer 1 hora de almoço durante sua hora de almoço",imagens:["pictures/patrao-hora-almoco.png"],likes:365,dislikes:80,codigo_post:"2m34hF9kV4t2CgCuTtPj"},{nome:"featura_brentho123",foto_perfil:"",tempo_postagem:"Há 2 horas atrás",texto:"Você quando copia o código do tutorial e mesmo assim não funciona",imagens:["https://preview.redd.it/me-when-i-copy-the-exact-same-code-from-tutorial-and-it-v0-fak7lnhnr5rf1.jpeg?auto=webp&s=7b8a10942eea7622d9c0631afefa81df2a716054"],likes:24,dislikes:1,codigo_post:"Hj9BFXhDCRv5zxzd5TF1"},{nome:"Ussoperr",foto_perfil:"https://stickerly.pstatic.net/sticker_pack/xO3zSKpBX8TqGJtXWsgzg/HTWPHY/17/1fa92768-261d-482a-8fb0-d383215c5d7c.png",tempo_postagem:"logo cedo",texto:`Padeiro chique é outra coisa! 
O pão não basta ser francês, tem que ser da LACOSTE!!!`,imagens:["pictures/pao-chique.png"],likes:456,dislikes:56,codigo_post:"aggIwCPIVaL0JBvAIy4x"},{nome:"Pessoa (provavelmente)",foto_perfil:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fblank-default-pfp-wue0zko1dfxs9z2c.jpg&f=1&ipt=8da5bf2b6d284a0e0781a85b202c815cb0631a0a78c1bb9cd5dc1f6a311b5e0e",tempo_postagem:"agora a pouco",texto:"O importante foi tentar ;u;",imagens:["https://i.redd.it/2laptr63y19e1.jpeg"],likes:973,dislikes:0,codigo_post:"OCxQQOLSmFwzHVlYNyUg"}],M=[{autor:"Marc3linh0_dsg4l1Nhas",para_post:"qHMElv3JCyGoFHjAfApl",conteudo:"Uma lenda, não tem como!!!"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3sta4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rfpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4trpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"Rutr4-8",para_post:"qHMElv3JCyGoFHjAfApl",conteudo:"Foto proibida em 346 países"}];function w(){const o=document.querySelector("#corpo-principal");N(o),q(o)}function N(o){o.addEventListener("click",t=>{const a=t.target.closest(".botao-gostei");if(!a)return;const e=a.id.slice(5),s=a.querySelector(".icone-gostei"),i=a.querySelector(`#qtd-likes-${e}`),n=JSON.parse(localStorage.getItem("lista_likes")||"[]"),c=document.querySelector(`#post-${e} .icone-naogostei`),l=document.querySelector(`#post-${e} #qtd-dislikes-${e}`),r=JSON.parse(localStorage.getItem("lista_dislikes")||"[]");n.includes(e)?(s.src="icones/interacao_shitpost_icons/icone-gostei.png",i.textContent=Number(i.textContent)-1,p(n,e)):(s.src="icones/interacao_shitpost_icons/icone-gostei-press.png",i.textContent=Number(i.textContent)+1,n.push(e),r.includes(e)&&(c.src="icones/interacao_shitpost_icons/icone-naogostei.png",l.textContent=Number(l.textContent)-1,p(r,e))),localStorage.setItem("lista_likes",JSON.stringify(n)),localStorage.setItem("lista_dislikes",JSON.stringify(r))})}function q(o){o.addEventListener("click",t=>{const a=t.target.closest(".botao-naogostei");if(!a)return;const e=a.id.slice(8),s=a.querySelector(".icone-naogostei"),i=a.querySelector(`#qtd-dislikes-${e}`),n=JSON.parse(localStorage.getItem("lista_dislikes")||"[]"),c=document.querySelector(`#post-${e} .icone-gostei`),l=document.querySelector(`#post-${e} #qtd-likes-${e}`),r=JSON.parse(localStorage.getItem("lista_likes")||"[]");n.includes(e)?(s.src="icones/interacao_shitpost_icons/icone-naogostei.png",i.textContent=Number(i.textContent)-1,p(n,e)):(s.src="icones/interacao_shitpost_icons/icone-naogostei-press.png",i.textContent=Number(i.textContent)+1,n.push(e),r.includes(e)&&(c.src="icones/interacao_shitpost_icons/icone-gostei.png",l.textContent=Number(l.textContent)-1,p(r,e))),localStorage.setItem("lista_dislikes",JSON.stringify(n)),localStorage.setItem("lista_likes",JSON.stringify(r))})}function p(o,t){const a=o.indexOf(t);return a>-1&&o.splice(a,1),o}function O(){document.querySelector("#corpo-principal").addEventListener("click",t=>{const a=t.target.closest(".botao-comentarios");if(!a)return;const e=a.id.slice(12);document.querySelector(`#bloco-comentarios-${e}`).classList.toggle("esconder-comentarios")})}localStorage.setItem("banco_posts",JSON.stringify(J));localStorage.setItem("pagina_atual","Inicio");localStorage.getItem("lista_likes")||localStorage.setItem("lista_likes",[]);localStorage.getItem("lista_dislikes")||localStorage.setItem("lista_dislikes",[]);localStorage.getItem("banco_comentarios")||localStorage.setItem("banco_comentarios",JSON.stringify(M));const z=document.querySelector("#root");function B(){z.innerHTML=`
    ${m()}
    ${h()}
    <main id = "corpo-principal"></main>
    `}B();g();E();w();O();function g(){const o=document.querySelector("#corpo-principal");o.innerHTML=L(localStorage.getItem("pagina_atual"))}function E(){document.querySelectorAll("[data-page]").forEach(t=>{t.addEventListener("click",a=>{a.preventDefault();const e=a.currentTarget.dataset.page;localStorage.setItem("pagina_atual",e),g()})})}window.addEventListener("popstate",o=>{o.state&&o.state.page&&(localStorage.setItem("pagina_atual",o.state.page),render())});
