$(function(){
    const randomID = () =>{
        return Math.random().toString(36).substr(2, 9);
    }
    const productsFic = [
        {
            name: "Smartphone XYZ",
            price: 1299.99,
            description: "Um smartphone avançado com câmera de alta resolução.",
            photo: "https://i.zst.com.br/thumbs/12/12/38/-949888442.jpg"
        },
        {
            name: "Notebook ABC",
            price: 2399.99,
            description: "Um poderoso notebook para produtividade e entretenimento.",
            photo: "https://a-static.mlcdn.com.br/450x450/notebook-samsung-np550xda-kt1br-tela-de-15-6-windows-10-1tb-4gb-ram-cinza/efacil/2310572/4f67de1ad0f837fcadd96294dcb38417.jpeg"
        },
        {
            name: "Headset Gamer",
            price: 199.99,
            description: "Um headset com áudio surround para uma experiência imersiva.",
            photo: "https://row.hyperx.com/cdn/shop/products/hyperx_cloud_stinger_core_wireless_7.1_03_front.jpg?v=1662421260"
        },
        {
            name: "Câmera DSLR",
            price: 1499.99,
            description: "Uma câmera profissional para capturar momentos incríveis.",
            photo: "https://s2-techtudo.glbimg.com/AxixvvA3-qyM4JeBdZmGeCe5HQU=/0x0:695x463/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/R/O/eOi78uRKiSX96sd00XTQ/2016-07-14-canon-7d.png"
        },
        {
            name: "TV 4K",
            price: 1899.99,
            description: "Uma televisão com resolução 4K para uma qualidade de imagem excepcional.",
            photo: "https://i.zst.com.br/thumbs/12/37/f/-809670821.jpg"
        },
        {
            name: "Tablet Super Slim",
            price: 499.99,
            description: "Um tablet leve e compacto, ideal para uso diário.",
            photo: "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/169544"
        },
        {
            name: "Mouse Sem Fio",
            price: 49.99,
            description: "Um mouse ergonômico e sem fio para maior comodidade.",
            photo: "https://m.media-amazon.com/images/I/61FwfUOZRvL._AC_UF1000,1000_QL80_.jpg"
        },
        {
            name: "Teclado Mecânico",
            price: 129.99,
            description: "Um teclado mecânico para gamers e digitadores exigentes.",
            photo: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/t/e/teclado-gamer-mecanico-philco_677978.jpg"
        },
        {
            name: "Impressora Multifuncional",
            price: 299.99,
            description: "Uma impressora que imprime, copia e digitaliza, tudo em um só dispositivo.",
            photo: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/i/m/impressora-multifuncional-hp-deskjet-ink-advantage-2774_484853.jpg"
        },
        {
            name: "Smartwatch Fitness",
            price: 159.99,
            description: "Um smartwatch projetado para monitorar sua saúde e atividades físicas.",
            photo: "https://i.zst.com.br/thumbs/12/25/16/-797963346.jpg"
        },
    ];

    if(Object.keys(localStorage) == ""){
    productsFic.forEach(function(product){
        let id = randomID();
            localStorage.setItem(id, JSON.stringify(product));
        })
    }
})