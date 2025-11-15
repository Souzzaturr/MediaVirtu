(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(a){if(a.ep)return;a.ep=!0;const t=s(a);fetch(a.href,t)}})();function u(){return`
        <header id = "cabecalho">
            <div id = "cabecalho-cima" class = "bg-blbl rgb-border-fade"></div>
            <div id = "cabecalho-meio" class = "bg-blbl rgb-border-fade"></div>
            <a id = "titulo" href = "">
                <h1 class = "goldman-bold">MediaVirtu</h1>
            </a>
        </header>
    `}const g={opcoes:["Inicio","Sobre","Ajuda","Feedback","Configurações"],enderecos_icones:["icones/menu_lateral_icons/icone-inicio.png","icones/menu_lateral_icons/icone-sobre.png","icones/menu_lateral_icons/icone-ajuda.png","icones/menu_lateral_icons/icone-feedback.png","icones/menu_lateral_icons/icone-configuracoes.svg"]},m={opcoes:["Meu Perfil","Postar","Excluir","Denunciar","sair"],enderecos_icones:["icones/menu_lateral_icons/icone-perfil.png","icones/menu_lateral_icons/icone-postar.png","icones/menu_lateral_icons/icone-excluir.svg","icones/menu_lateral_icons/icone-denunciar.png","icones/menu_lateral_icons/icone-sair.png"]},r={sidebar_left:g,sidebar_right:m};function f(){let e,o;const s=[0,1,2,3,4];var i='<section id = "barra-esquerda" class = "bg-blbl rgb-border-fade">';return s.forEach(a=>{e=r.sidebar_left.opcoes[a],o=r.sidebar_left.enderecos_icones[a],i+=`
        <a id = "${e}" class = "opcao-barra-lateral" href="" data-page = "${e}">
            <h3 class = "texto-opc-lateral goldman-bold">${e}</h3>

            <img class = "icon-barra-ltrl" src="${o}" alt="" width = "100%">                    
        </a>
        `}),i+="</section>",i}function h(){let e,o;const s=[0,1,2,3,4];var i='<section id = "barra-direita" class = "bg-blbl rgb-border-fade">';return s.forEach(a=>{e=r.sidebar_right.opcoes[a],o=r.sidebar_right.enderecos_icones[a],i+=`
        <a id = "${e}" class = "opcao-barra-lateral" href = "" data-page = "${e}">
            <img class = "icon-barra-ltrl" src = "${o}" alt = "" width = "100%">

            <h3 class = "texto-opc-lateral goldman-bold">${e}</h3>
        </a>`}),i+="</section>",i}function b(){return'<nav id = "barras-navegacao-laterais">'+f()+h()+"</nav>"}function _(){return`
        <div class = "tres-pontinhos">
            <div class = "tres-pontinhos-ponto"></div>
            <div class = "tres-pontinhos-ponto"></div>
            <div class = "tres-pontinhos-ponto"></div>
        </div>
    `}function v(e,o,s,i,a=[],t=0,n=0){const d=i.length>0?`<div class = "conteudo-shitpost">
        ${i.split(`
`).map(c=>`<p>${c}</p>`).join("")}
    </div>`:"",p=a.length>0?`<div class = "conjunto-imagens-shitpost">
        ${a.map(c=>`<img class = "imagem-shitpost" src = "${c}" alt = "imagem-shitpost">`).join("")}
    </div>`:"";return`
    <section class="bloco bloco-shitpost">
        <div class = "topo-shitpost">
            <div class="autor">
                <img src="${o}" alt="" class="foto-perfil">
                <div class="info-autor">
                    <h3 class="nome-autor goldman-bold">${e}</h3>
                    <p class="tempo-post">${s}</p>
                </div>
            </div>
            ${_()}
        </div>
        <div class = "principal-shitpost">
            ${d}
            ${p}
        </div>
        <div class = "painel-interacao-shitpost">
            ${$(e,t)}
            ${k(e,n)}
            ${S(e)}
        </div>
    </section>
    `}function $(e="ninguem",o=0){return`
        <a class = "botao-gostei" href = "">
            <img class = "icone-gostei" src = "icones/interacao_shitpost_icons/icone-gostei.png" alt = "gostei">
            <p id = "gostei-shitpost-${e}">${o}</p>
        </a>
    `}function k(e="ninguem",o=0){return`
        <a class = "botao-naogostei" href = "">
            <img class = "icone-naogostei" src = "icones/interacao_shitpost_icons/icone-naogostei.png" alt = "nao-gostei">
            <p id = "naogostei-shitpost-${e}">${o}</p>
        </a>
    `}function S(e="ninguem"){return`
        <a class = "botao-comentarios" href = "">
            <img class = "icone-comentarios" src = "icones/interacao_shitpost_icons/icone-comentarios.png" alt = "nao-gostei">
            <p id = "qtd-comentarios-shitpost-${e}">0</p>
        </a>
    `}function x(){return`
    <div class="linha-divisoria-sessoes">
        <div class="node-divisoria"></div>
        <div class="linha-divisoria"></div>
        <div class="node-divisoria"></div>
        <div class="linha-divisoria"></div>
        <div class="node-divisoria"></div>
    </div>
    `}const A=JSON.parse(localStorage.getItem("banco_posts"));function L(){return E(A.map(e=>v(e.nome,e.foto_perfil?e.foto_perfil:"pictures/MediaVirtu_icon.png",e.tempo_postagem,e.texto,e.imagens,e.likes,e.dislikes)+x())).join("")}function E(e){for(let o=e.length-1;o>0;o--){const s=Math.floor(Math.random()*(o+1));[e[o],e[s]]=[e[s],e[o]]}return e}function O(e){switch(e){case"Inicio":return L();case"Sobre":case"Ajuda":case"Feedback":case"Configurações":case"Meu Perfil":case"Postar":case"Excluir":case"Denunciar":case"sair":return"<div class = 'bloco'> Aguardem sensacionais revelações... </div>"}}const q=[{nome:"Dernald0_356",foto_perfil:"https://media.tenor.com/rLWM_LVTf-0AAAAM/%D0%BD%D1%83-%D0%B0%D1%87%D1%82%D0%BE.png",tempo_postagem:"Ontem",texto:"FINALMENTE, ALGUÉM CONSEGUIU!!",imagens:["pictures/lapis.png"],likes:10,dislikes:37},{nome:"Euclides_34654",foto_perfil:"",tempo_postagem:"Anteontem",texto:"A saúde mental do estudante ao decorrer do semestre:",imagens:["pictures/picapau-bem.png","pictures/picapau-endoidado.png"],likes:139,dislikes:15},{nome:"Juliao_FiatUno13",foto_perfil:"https://pbs.twimg.com/profile_images/1518671976222625794/XS5UoGKU_400x400.jpg",tempo_postagem:"Amanhã",texto:"O seu patrão vendo você fazer 1 hora de almoço durante sua hora de almoço",imagens:["pictures/patrao-hora-almoco.png"],likes:365,dislikes:80},{nome:"featura_brentho123",foto_perfil:"",tempo_postagem:"Há 2 horas atrás",texto:"Você quando copia o código do tutorial e mesmo assim não funciona",imagens:["https://preview.redd.it/me-when-i-copy-the-exact-same-code-from-tutorial-and-it-v0-fak7lnhnr5rf1.jpeg?auto=webp&s=7b8a10942eea7622d9c0631afefa81df2a716054"],likes:24,dislikes:1},{nome:"Ussoperr",foto_perfil:"https://stickerly.pstatic.net/sticker_pack/xO3zSKpBX8TqGJtXWsgzg/HTWPHY/17/1fa92768-261d-482a-8fb0-d383215c5d7c.png",tempo_postagem:"logo cedo",texto:`Padeiro chique é outra coisa! 
O pão não basta ser francês, tem que ser da LACOSTE!!!`,imagens:["pictures/pao-chique.png"],likes:456,dislikes:56},{nome:"Pessoa (provavelmente)",foto_perfil:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fblank-default-pfp-wue0zko1dfxs9z2c.jpg&f=1&ipt=8da5bf2b6d284a0e0781a85b202c815cb0631a0a78c1bb9cd5dc1f6a311b5e0e",tempo_postagem:"agora a pouco",texto:"O importante foi tentar ;u;",imagens:["https://i.redd.it/2laptr63y19e1.jpeg"],likes:973,dislikes:0}];localStorage.setItem("banco_posts",JSON.stringify(q));localStorage.setItem("pagina_atual","Inicio");const y=document.querySelector("#root");console.log(localStorage.getItem("banco_posts"));function I(){y.innerHTML=`
    ${u()}
    ${b()}
    <main id = "corpo-principal"></main>
    `,l(),M()}I();function l(){const e=document.querySelector("#corpo-principal");e.innerHTML=O(localStorage.getItem("pagina_atual"))}function M(){document.querySelectorAll("[data-page]").forEach(o=>{o.addEventListener("click",s=>{s.preventDefault();const i=s.currentTarget.dataset.page;localStorage.setItem("pagina_atual",i),l()})})}window.addEventListener("popstate",e=>{e.state&&e.state.page&&(localStorage.setItem("pagina_atual",e.state.page),render())});
