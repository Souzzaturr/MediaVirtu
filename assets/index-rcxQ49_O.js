(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();function v(){return`
        <header id = "cabecalho">
            <div id = "cabecalho-cima" class = "bg-blbl rgb-border-fade"></div>
            <div id = "cabecalho-meio" class = "bg-blbl rgb-border-fade"></div>
            <a id = "titulo" href = "">
                <h1 class = "goldman-bold">MediaVirtu</h1>
            </a>
        </header>
    `}const I={opcoes:["Inicio","Sobre","Ajuda","Feedback","Configurações"],enderecos_icones:["icones/menu_lateral_icons/icone-inicio.png","icones/menu_lateral_icons/icone-sobre.png","icones/menu_lateral_icons/icone-ajuda.png","icones/menu_lateral_icons/icone-feedback.png","icones/menu_lateral_icons/icone-configuracoes.svg"]},h={opcoes:["Meu Perfil","Postar","Excluir","Denunciar","sair"],enderecos_icones:["icones/menu_lateral_icons/icone-perfil.png","icones/menu_lateral_icons/icone-postar.png","icones/menu_lateral_icons/icone-excluir.svg","icones/menu_lateral_icons/icone-denunciar.png","icones/menu_lateral_icons/icone-sair.png"]},g={sidebar_left:I,sidebar_right:h};function x(){let o,a;const s=[0,1,2,3,4];var t='<section id = "barra-esquerda" class = "bg-blbl rgb-border-fade">';return s.forEach(e=>{o=g.sidebar_left.opcoes[e],a=g.sidebar_left.enderecos_icones[e],t+=`
        <a id = "${o}" class = "opcao-barra-lateral" href="" data-page = "${o}">
            <h3 class = "texto-opc-lateral goldman-bold">${o}</h3>

            <img class = "icon-barra-ltrl" src="${a}" alt="" width = "100%">                    
        </a>
        `}),t+="</section>",t}function S(){let o,a;const s=[0,1,2,3,4];var t='<section id = "barra-direita" class = "bg-blbl rgb-border-fade">';return s.forEach(e=>{o=g.sidebar_right.opcoes[e],a=g.sidebar_right.enderecos_icones[e],t+=`
        <a id = "${o}" class = "opcao-barra-lateral" href = "" data-page = "${o}">
            <img class = "icon-barra-ltrl" src = "${a}" alt = "" width = "100%">

            <h3 class = "texto-opc-lateral goldman-bold">${o}</h3>
        </a>`}),t+="</section>",t}function k(){return'<nav id = "barras-navegacao-laterais">'+x()+S()+"</nav>"}function P(){return`
        <section id = "preloader">
            <img src = "icones/MediaVirtu_icons/MediaVirtu_icon.png" alt = "logo-MediaVirtu" width = "35%">
            <h1 class = "goldman-bold">MediaVirtu</h1>
        </section>
    `}function y(o){const t=JSON.parse(localStorage.getItem("banco_comentarios")||"[]").filter(e=>e.para_post==o).map(e=>`<div class = "comentario">
                        <p class = "texto-comentario">${e.autor}: ${e.conteudo}</p>
                        </div>`).join("");return`
            <div id = "bloco-comentarios-${o}" class = "bloco-comentarios esconder-comentarios">  
                <button class = "enviar-comentario goldman-bold">
                    Escreva um comentario:
                </button>
    
                ${t||"<p class = 'sem-comentarios'>Ninguem comentou nada ainda...</p>"}

                    
            </div>
            `}function V(){return`
        <div class = "tres-pontinhos">
            <div class = "tres-pontinhos-ponto"></div>
            <div class = "tres-pontinhos-ponto"></div>
            <div class = "tres-pontinhos-ponto"></div>
        </div>
    `}function $(o,a,s,t,e=[],n,i,l="xxxxxxxxxx"){const d=t.length>0?`<div class = "conteudo-shitpost">
        ${t.split(`
`).map(u=>`<p>${u}</p>`).join("")}
    </div>`:"",p=e.length>0?`<div class = "conjunto-imagens-shitpost">
        ${e.map(u=>`<img class = "imagem-shitpost" src = "${u}" alt = "imagem-shitpost">`).join("")}
    </div>`:"";return`
    <section id = "post-${l}" class="bloco bloco-shitpost">
        <div class = "topo-shitpost">
            <div class="autor">
                <img src="${a}" alt="" class="foto-perfil">
                <div class="info-autor">
                    <h3 class="nome-autor goldman-bold">${o}</h3>
                    <p class="tempo-post">${s}</p>
                </div>
            </div>
            ${V()}
        </div>
        <div class = "principal-shitpost">
            ${d}
            ${p}
        </div>
        <div class = "painel-interacao-shitpost">
            <div class = "botoes-interacao">
                ${A(n,l)}
                ${C(i,l)}
                ${L(l)}
            </div>
            ${y(l)}
        </div>
    </section>
    `}function A(o=0,a){const s=JSON.parse(localStorage.getItem("banco_usuarios")||"{}"),t=localStorage.getItem("usuario_atual"),e=t!=""&&s[t].likes.includes(a)?"-press":"";return`
        <button id = "like-${a}" class = "botao-gostei">
            <img class = "icone-gostei" src = "icones/interacao_shitpost_icons/icone-gostei${e}.png" alt = "gostei">
            <p id = "qtd-likes-${a}">${o}</p>
        </button>
    `}function C(o=0,a){const s=JSON.parse(localStorage.getItem("banco_usuarios")||"{}"),t=localStorage.getItem("usuario_atual"),e=t!=""&&s[t].dislikes.includes(a)?"-press":"";return`
        <button id = "dislike-${a}" class = "botao-naogostei">
            <img class = "icone-naogostei" src = "icones/interacao_shitpost_icons/icone-naogostei${e}.png" alt = "nao-gostei">
            <p id = "qtd-dislikes-${a}">${o}</p>
        </button>
    `}function L(o){const a=JSON.parse(localStorage.getItem("banco_comentarios")||"[]");let s=0;return a.forEach(t=>t.para_post==o?s++:""),`
        <button id = "comentarios-${o}" class = "botao-comentarios">
            <img class = "icone-comentarios" src = "icones/interacao_shitpost_icons/icone-comentarios.png" alt = "nao-gostei">
            <p id = "qtd-comentarios-shitpost-${o}">${s}</p>
        </button>
    `}function J(){return`
    <div class="linha-divisoria-sessoes">
        <div class="node-divisoria"></div>
        <div class="linha-divisoria"></div>
        <div class="node-divisoria"></div>
        <div class="linha-divisoria"></div>
        <div class="node-divisoria"></div>
    </div>
    `}const M=JSON.parse(localStorage.getItem("banco_posts"));function N(){return q(M.map(o=>$(o.nome,o.foto_perfil?o.foto_perfil:"pictures/MediaVirtu_icon.png",o.tempo_postagem,o.texto,o.imagens,o.likes,o.dislikes,o.codigo_post)+J())).join("")}function q(o){for(let a=o.length-1;a>0;a--){const s=Math.floor(Math.random()*(a+1));[o[a],o[s]]=[o[s],o[a]]}return o}function w(o){switch(o){case"Inicio":return N();case"Sobre":case"Ajuda":case"Feedback":case"Configurações":case"Meu Perfil":case"Postar":case"Excluir":case"Denunciar":case"sair":return"<div class = 'bloco'> Aguardem sensacionais revelações... </div>"}}function f(){const o=document.querySelector("#corpo-principal");o.innerHTML=w(localStorage.getItem("pagina_atual"))}function O(){document.querySelectorAll("[data-page]").forEach(a=>{a.addEventListener("click",s=>{s.preventDefault();const t=s.currentTarget.dataset.page;localStorage.setItem("pagina_atual",t),f()})})}function z(){const o=document.querySelector("#corpo-principal");E(o),B(o)}function E(o){o.addEventListener("click",a=>{const s=a.target.closest(".botao-gostei");if(!s)return;const t=localStorage.getItem("usuario_atual");if(!t)return;const e=JSON.parse(localStorage.getItem("banco_usuarios")),n=JSON.parse(localStorage.getItem("banco_posts")),i=s.id.slice(5),l=s.querySelector(".icone-gostei"),d=s.querySelector(`#qtd-likes-${i}`),p=document.querySelector(`#post-${i} .icone-naogostei`),u=document.querySelector(`#post-${i} #qtd-dislikes-${i}`);if(e[t].likes.includes(i)){l.src="icones/interacao_shitpost_icons/icone-gostei.png",d.textContent=Number(d.textContent)-1,e[t].likes=m(e[t].likes,i);const r=n.find(c=>String(c.codigo_post)===String(i));r&&(r.likes=Number(r.likes)-1)}else{l.src="icones/interacao_shitpost_icons/icone-gostei-press.png",d.textContent=Number(d.textContent)+1,e[t].likes.push(i);const r=n.find(c=>String(c.codigo_post)===String(i));if(r&&(r.likes=Number(r.likes)+1),e[t].dislikes.includes(i)){p.src="icones/interacao_shitpost_icons/icone-naogostei.png",u.textContent=Number(u.textContent)-1,e[t].dislikes=m(e[t].dislikes,i);const c=n.find(_=>String(_.codigo_post)===String(i));c&&(c.dislikes=Number(c.dislikes)-1)}}localStorage.setItem("banco_usuarios",JSON.stringify(e)),localStorage.setItem("banco_posts",JSON.stringify(n))})}function B(o){o.addEventListener("click",a=>{const s=a.target.closest(".botao-naogostei");if(!s)return;const t=localStorage.getItem("usuario_atual");if(!t)return;const e=JSON.parse(localStorage.getItem("banco_usuarios")),n=JSON.parse(localStorage.getItem("banco_posts")),i=s.id.slice(8),l=s.querySelector(".icone-naogostei"),d=s.querySelector(`#qtd-dislikes-${i}`),p=document.querySelector(`#post-${i} .icone-gostei`),u=document.querySelector(`#post-${i} #qtd-likes-${i}`);if(e[t].dislikes.includes(i)){l.src="icones/interacao_shitpost_icons/icone-naogostei.png",d.textContent=Number(d.textContent)-1,e[t].dislikes=m(e[t].dislikes,i);const r=n.find(c=>String(c.codigo_post)===String(i));r&&(r.dislikes=Number(r.dislikes)-1)}else{l.src="icones/interacao_shitpost_icons/icone-naogostei-press.png",d.textContent=Number(d.textContent)+1,e[t].dislikes.push(i);const r=n.find(c=>String(c.codigo_post)===String(i));if(r&&(r.dislikes=Number(r.dislikes)+1),e[t].likes.includes(i)){p.src="icones/interacao_shitpost_icons/icone-gostei.png",u.textContent=Number(u.textContent)-1,e[t].likes=m(e[t].likes,i);const c=n.find(_=>String(_.codigo_post)===String(i));c&&(c.likes=Number(c.likes)-1)}}localStorage.setItem("banco_usuarios",JSON.stringify(e)),localStorage.setItem("banco_posts",JSON.stringify(n))})}function m(o,a){const s=o.indexOf(a);return s>-1&&o.splice(s,1),o}function F(){document.querySelector("#corpo-principal").addEventListener("click",a=>{const s=a.target.closest(".botao-comentarios");if(!s)return;const t=s.id.slice(12);document.querySelector(`#bloco-comentarios-${t}`).classList.toggle("esconder-comentarios")})}function j(){window.addEventListener("load",function(){O(),z(),F();const o=document.querySelector("#preloader");o&&(o.style.height="0px")}),window.addEventListener("popstate",o=>{o.state&&o.state.page&&(localStorage.setItem("pagina_atual",o.state.page),f())})}const D=[{nome:"Dernald0_356",foto_perfil:"https://media.tenor.com/rLWM_LVTf-0AAAAM/%D0%BD%D1%83-%D0%B0%D1%87%D1%82%D0%BE.png",tempo_postagem:"Ontem",texto:"FINALMENTE, ALGUÉM CONSEGUIU!!",imagens:["pictures/lapis.png"],likes:10,dislikes:37,codigo_post:"qHMElv3JCyGoFHjAfApl"},{nome:"Euclides_34654",foto_perfil:"",tempo_postagem:"Anteontem",texto:"A saúde mental do estudante ao decorrer do semestre:",imagens:["pictures/picapau-bem.png","pictures/picapau-endoidado.png"],likes:139,dislikes:15,codigo_post:"3fG3Knwlg4FL4pa7voAp"},{nome:"Juliao_FiatUno13",foto_perfil:"https://pbs.twimg.com/profile_images/1518671976222625794/XS5UoGKU_400x400.jpg",tempo_postagem:"Amanhã",texto:"O seu patrão vendo você fazer 1 hora de almoço durante sua hora de almoço",imagens:["pictures/patrao-hora-almoco.png"],likes:365,dislikes:80,codigo_post:"2m34hF9kV4t2CgCuTtPj"},{nome:"featura_brentho123",foto_perfil:"",tempo_postagem:"Há 2 horas atrás",texto:"Você quando copia o código do tutorial e mesmo assim não funciona",imagens:["https://preview.redd.it/me-when-i-copy-the-exact-same-code-from-tutorial-and-it-v0-fak7lnhnr5rf1.jpeg?auto=webp&s=7b8a10942eea7622d9c0631afefa81df2a716054"],likes:24,dislikes:1,codigo_post:"Hj9BFXhDCRv5zxzd5TF1"},{nome:"Ussoperr",foto_perfil:"https://stickerly.pstatic.net/sticker_pack/xO3zSKpBX8TqGJtXWsgzg/HTWPHY/17/1fa92768-261d-482a-8fb0-d383215c5d7c.png",tempo_postagem:"logo cedo",texto:`Padeiro chique é outra coisa! 
O pão não basta ser francês, tem que ser da LACOSTE!!!`,imagens:["pictures/pao-chique.png"],likes:456,dislikes:56,codigo_post:"aggIwCPIVaL0JBvAIy4x"},{nome:"Pessoa (provavelmente)",foto_perfil:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fblank-default-pfp-wue0zko1dfxs9z2c.jpg&f=1&ipt=8da5bf2b6d284a0e0781a85b202c815cb0631a0a78c1bb9cd5dc1f6a311b5e0e",tempo_postagem:"agora a pouco",texto:"O importante foi tentar ;u;",imagens:["https://i.redd.it/2laptr63y19e1.jpeg"],likes:973,dislikes:0,codigo_post:"OCxQQOLSmFwzHVlYNyUg"}],H={nome:"Adm_Supremo",foto_perfil:"",senha:"*************",likes:[],dislikes:[]},b={Adm_Supremo:H},G=[{autor:"Marc3linh0_dsg4l1Nhas",para_post:"qHMElv3JCyGoFHjAfApl",conteudo:"Uma lenda, não tem como!!!"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3sta4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rfpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4trpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"MaxV3st4rpenz",para_post:"aggIwCPIVaL0JBvAIy4x",conteudo:"Pão do lula"},{autor:"Rutr4-8",para_post:"qHMElv3JCyGoFHjAfApl",conteudo:"Foto proibida em 346 países"}];localStorage.getItem("banco_posts")||localStorage.setItem("banco_posts",JSON.stringify(D));localStorage.getItem("banco_usuarios")||localStorage.setItem("banco_usuarios",JSON.stringify(b));localStorage.getItem("usuario_atual")||localStorage.setItem("usuario_atual",b.Adm_Supremo.nome||"");localStorage.getItem("banco_comentarios")||localStorage.setItem("banco_comentarios",JSON.stringify(G));localStorage.setItem("pagina_atual","Inicio");const T=document.querySelector("#root");U();f();j();function U(){T.innerHTML=`
    ${P()}
    ${v()}
    ${k()}
    <main id = "corpo-principal"></main>
    `}
