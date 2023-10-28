$(function(){
    let structure = '';

let loadProducts = () => {
    // $.ajax({
    //     url: "produtos.json",
    //     dataType: "JSON",
    //     success: function(data){
            // fazer loop nos produtos
            let list = (localStorage.products) ? JSON.parse(localStorage.products) : [];
            for(pos in list){
                structure += `
                    <div class="col-sm-12 col-md-3">
                        <div class="card">
                            <img src="assets/${list[pos].img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${list[pos].title}</h5>
                                <p class="card-text">${list[pos].description}</p>
                                <div class="row">
                                    <div class="col-6">
                                            <a href="#" class="btn btn-primary">Comprar</a>
                                    </div>
                                    <div class="col-6">
                                        <span class="badge bg-secondary fs-6 h-100 d-flex align-items-center">R$ ${list[pos].price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
            }

            // injetar conteúdo no index
            $('#loadProducts').html(structure)
        // }
    // })
}

// carregar produtos
    loadProducts();
})