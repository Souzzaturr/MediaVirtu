(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();function m(){return`
        <header id = "cabecalho">
            <div id = "cabecalho-cima" class = "bg-blbl rgb-border-fade"></div>
            <div id = "cabecalho-meio" class = "bg-blbl rgb-border-fade"></div>
            <a id = "titulo" href = "">
                <h1 class = "goldman-bold">MediaVirtu</h1>
            </a>
        </header>
    `}const f={opcoes:["Inicio","Sobre","Ajuda","Feedback","Configurações"],enderecos_icones:["icones/menu_lateral_icons/icone-inicio.png","icones/menu_lateral_icons/icone-sobre.png","icones/menu_lateral_icons/icone-ajuda.png","icones/menu_lateral_icons/icone-feedback.png","icones/menu_lateral_icons/icone-configuracoes.svg"]},_={opcoes:["Meu Perfil","Postar","Excluir","Denunciar","sair"],enderecos_icones:["icones/menu_lateral_icons/icone-perfil.png","icones/menu_lateral_icons/icone-postar.png","icones/menu_lateral_icons/icone-excluir.svg","icones/menu_lateral_icons/icone-denunciar.png","icones/menu_lateral_icons/icone-sair.png"]},d={sidebar_left:f,sidebar_right:_};function h(){let e,t;const s=[0,1,2,3,4];var o='<section id = "barra-esquerda" class = "bg-blbl rgb-border-fade">';return s.forEach(i=>{e=d.sidebar_left.opcoes[i],t=d.sidebar_left.enderecos_icones[i],o+=`
        <a id = "${e}" class = "opcao-barra-lateral" href="" data-page = "${e}">
            <h3 class = "texto-opc-lateral goldman-bold">${e}</h3>

            <img class = "icon-barra-ltrl" src="${t}" alt="" width = "100%">                    
        </a>
        `}),o+="</section>",o}function b(){let e,t;const s=[0,1,2,3,4];var o='<section id = "barra-direita" class = "bg-blbl rgb-border-fade">';return s.forEach(i=>{e=d.sidebar_right.opcoes[i],t=d.sidebar_right.enderecos_icones[i],o+=`
        <a id = "${e}" class = "opcao-barra-lateral" href = "" data-page = "${e}">
            <img class = "icon-barra-ltrl" src = "${t}" alt = "" width = "100%">

            <h3 class = "texto-opc-lateral goldman-bold">${e}</h3>
        </a>`}),o+="</section>",o}function v(){return'<nav id = "barras-navegacao-laterais">'+h()+b()+"</nav>"}function k(){return`
        <div class = "tres-pontinhos">
            <div class = "tres-pontinhos-ponto"></div>
            <div class = "tres-pontinhos-ponto"></div>
            <div class = "tres-pontinhos-ponto"></div>
        </div>
    `}function S(e,t,s,o,i=[],a,n,r="xxxxxxxxxx"){const l=o.length>0?`<div class = "conteudo-shitpost">
        ${o.split(`
`).map(g=>`<p>${g}</p>`).join("")}
    </div>`:"",c=i.length>0?`<div class = "conjunto-imagens-shitpost">
        ${i.map(g=>`<img class = "imagem-shitpost" src = "${g}" alt = "imagem-shitpost">`).join("")}
    </div>`:"";return`
    <section id = "post-${r}" class="bloco bloco-shitpost">
        <div class = "topo-shitpost">
            <div class="autor">
                <img src="${t}" alt="" class="foto-perfil">
                <div class="info-autor">
                    <h3 class="nome-autor goldman-bold">${e}</h3>
                    <p class="tempo-post">${s}</p>
                </div>
            </div>
            ${k()}
        </div>
        <div class = "principal-shitpost">
            ${l}
            ${c}
        </div>
        <div class = "painel-interacao-shitpost">
            ${x(a,r)}
            ${$(n,r)}
            ${I(e)}
        </div>
    </section>
    `}function x(e=0,t){const s=JSON.parse(localStorage.getItem("lista_likes")||"[]"),o=s.includes(t)?"-press":"";return e=s.includes(t)?e+1:e,`
        <a id = "like-${t}" class = "botao-gostei" href = "#a">
            <img class = "icone-gostei" src = "icones/interacao_shitpost_icons/icone-gostei${o}.png" alt = "gostei">
            <p id = "qtd-likes-${t}">${e}</p>
        </a>
    `}function $(e=0,t){const s=JSON.parse(localStorage.getItem("lista_dislikes")||"[]"),o=s.includes(t)?"-press":"";return e=s.includes(t)?e+1:e,`
        <a id = "dislike-${t}" class = "botao-naogostei" href = "#a">
            <img class = "icone-naogostei" src = "icones/interacao_shitpost_icons/icone-naogostei${o}.png" alt = "nao-gostei">
            <p id = "qtd-dislikes-${t}">${e}</p>
        </a>
    `}function I(e="ninguem"){return`
        <a class = "botao-comentarios" href = "">
            <img class = "icone-comentarios" src = "icones/interacao_shitpost_icons/icone-comentarios.png" alt = "nao-gostei">
            <p id = "qtd-comentarios-shitpost-${e}">0</p>
        </a>
    `}function O(){return`
    <div class="linha-divisoria-sessoes">
        <div class="node-divisoria"></div>
        <div class="linha-divisoria"></div>
        <div class="node-divisoria"></div>
        <div class="linha-divisoria"></div>
        <div class="node-divisoria"></div>
    </div>
    `}const q=JSON.parse(localStorage.getItem("banco_posts"));function y(){return N(q.map(e=>S(e.nome,e.foto_perfil?e.foto_perfil:"pictures/MediaVirtu_icon.png",e.tempo_postagem,e.texto,e.imagens,e.likes,e.dislikes,e.codigo_post)+O())).join("")}function N(e){for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}function C(e){switch(e){case"Inicio":return y();case"Sobre":case"Ajuda":case"Feedback":case"Configurações":case"Meu Perfil":case"Postar":case"Excluir":case"Denunciar":case"sair":return"<div class = 'bloco'> Aguardem sensacionais revelações... </div>"}}const E=[{nome:"Dernald0_356",foto_perfil:"https://media.tenor.com/rLWM_LVTf-0AAAAM/%D0%BD%D1%83-%D0%B0%D1%87%D1%82%D0%BE.png",tempo_postagem:"Ontem",texto:"FINALMENTE, ALGUÉM CONSEGUIU!!",imagens:["pictures/lapis.png"],likes:10,dislikes:37,codigo_post:"qHMElv3JCyGoFHjAfApl"},{nome:"Euclides_34654",foto_perfil:"",tempo_postagem:"Anteontem",texto:"A saúde mental do estudante ao decorrer do semestre:",imagens:["pictures/picapau-bem.png","pictures/picapau-endoidado.png"],likes:139,dislikes:15,codigo_post:"3fG3Knwlg4FL4pa7voAp"},{nome:"Juliao_FiatUno13",foto_perfil:"https://pbs.twimg.com/profile_images/1518671976222625794/XS5UoGKU_400x400.jpg",tempo_postagem:"Amanhã",texto:"O seu patrão vendo você fazer 1 hora de almoço durante sua hora de almoço",imagens:["pictures/patrao-hora-almoco.png"],likes:365,dislikes:80,codigo_post:"2m34hF9kV4t2CgCuTtPj"},{nome:"featura_brentho123",foto_perfil:"",tempo_postagem:"Há 2 horas atrás",texto:"Você quando copia o código do tutorial e mesmo assim não funciona",imagens:["https://preview.redd.it/me-when-i-copy-the-exact-same-code-from-tutorial-and-it-v0-fak7lnhnr5rf1.jpeg?auto=webp&s=7b8a10942eea7622d9c0631afefa81df2a716054"],likes:24,dislikes:1,codigo_post:"Hj9BFXhDCRv5zxzd5TF1"},{nome:"Ussoperr",foto_perfil:"https://stickerly.pstatic.net/sticker_pack/xO3zSKpBX8TqGJtXWsgzg/HTWPHY/17/1fa92768-261d-482a-8fb0-d383215c5d7c.png",tempo_postagem:"logo cedo",texto:`Padeiro chique é outra coisa! 
O pão não basta ser francês, tem que ser da LACOSTE!!!`,imagens:["pictures/pao-chique.png"],likes:456,dislikes:56,codigo_post:"aggIwCPIVaL0JBvAIy4x"},{nome:"Pessoa (provavelmente)",foto_perfil:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fblank-default-pfp-wue0zko1dfxs9z2c.jpg&f=1&ipt=8da5bf2b6d284a0e0781a85b202c815cb0631a0a78c1bb9cd5dc1f6a311b5e0e",tempo_postagem:"agora a pouco",texto:"O importante foi tentar ;u;",imagens:["https://i.redd.it/2laptr63y19e1.jpeg"],likes:973,dislikes:0,codigo_post:"OCxQQOLSmFwzHVlYNyUg"}];function L(){const e=document.querySelector("#corpo-principal");A(e),F(e)}function A(e){e.addEventListener("click",t=>{const s=t.target.closest(".botao-gostei");if(!s)return;const o=s.id.slice(5),i=s.querySelector(".icone-gostei"),a=s.querySelector(`#qtd-likes-${o}`),n=JSON.parse(localStorage.getItem("lista_likes")||"[]"),r=document.querySelector(`#post-${o} .icone-naogostei`),l=document.querySelector(`#post-${o} #qtd-dislikes-${o}`),c=JSON.parse(localStorage.getItem("lista_dislikes")||"[]");n.includes(o)?(i.src="icones/interacao_shitpost_icons/icone-gostei.png",a.textContent=Number(a.textContent)-1,p(n,o)):(i.src="icones/interacao_shitpost_icons/icone-gostei-press.png",a.textContent=Number(a.textContent)+1,n.push(o),c.includes(o)&&(r.src="icones/interacao_shitpost_icons/icone-naogostei.png",l.textContent=Number(l.textContent)-1,p(c,o))),localStorage.setItem("lista_likes",JSON.stringify(n)),localStorage.setItem("lista_dislikes",JSON.stringify(c))})}function F(e){e.addEventListener("click",t=>{const s=t.target.closest(".botao-naogostei");if(!s)return;const o=s.id.slice(8),i=s.querySelector(".icone-naogostei"),a=s.querySelector(`#qtd-dislikes-${o}`),n=JSON.parse(localStorage.getItem("lista_dislikes")||"[]"),r=document.querySelector(`#post-${o} .icone-gostei`),l=document.querySelector(`#post-${o} #qtd-likes-${o}`),c=JSON.parse(localStorage.getItem("lista_likes")||"[]");n.includes(o)?(i.src="icones/interacao_shitpost_icons/icone-naogostei.png",a.textContent=Number(a.textContent)-1,p(n,o)):(i.src="icones/interacao_shitpost_icons/icone-naogostei-press.png",a.textContent=Number(a.textContent)+1,n.push(o),c.includes(o)&&(r.src="icones/interacao_shitpost_icons/icone-gostei.png",l.textContent=Number(l.textContent)-1,p(c,o))),localStorage.setItem("lista_dislikes",JSON.stringify(n)),localStorage.setItem("lista_likes",JSON.stringify(c))})}function p(e,t){const s=e.indexOf(t);return s>-1&&e.splice(s,1),e}localStorage.setItem("banco_posts",JSON.stringify(E));localStorage.setItem("pagina_atual","Inicio");localStorage.getItem("lista_likes")||localStorage.setItem("lista_likes",[]);localStorage.getItem("lista_dislikes")||localStorage.setItem("lista_dislikes",[]);const J=document.querySelector("#root");function j(){J.innerHTML=`
    ${m()}
    ${v()}
    <main id = "corpo-principal"></main>
    `,u(),w(),L()}j();function u(){const e=document.querySelector("#corpo-principal");e.innerHTML=C(localStorage.getItem("pagina_atual"))}function w(){document.querySelectorAll("[data-page]").forEach(t=>{t.addEventListener("click",s=>{s.preventDefault();const o=s.currentTarget.dataset.page;localStorage.setItem("pagina_atual",o),u()})})}window.addEventListener("popstate",e=>{e.state&&e.state.page&&(localStorage.setItem("pagina_atual",e.state.page),render())});
