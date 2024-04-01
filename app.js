// Apply mask BRL
$(function(){
    $("#price").on("input", function() {
        let value = $(this).val().replace(/\D/g, '');
        value = (value / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        $(this).val(value);
    });

    // PreventDefault submit in forms
    $("form").on("submit", function(e){
        e.preventDefault();
    });
    
    // Initiate bootstrap toast
    function showToast(message){
        const toast = new bootstrap.Toast($("#liveToast"));
        $(".toast-body").text(message);
        toast.show();
    }

    // Create random ID 
    const randomID = () =>{
        return Math.random().toString(36).substr(2, 9);
    }
    
    // Create Object Product
    const product = {
        name: "",
        price: 0,
        description: "",
        photo: "",
    };
    
    function saveLocalStorage(){
        const id = (!$("#registerProducts").attr("key")) ? randomID() : $("#registerProducts").attr("key");
        product.name = $("#name").val();
        product.price = parseFloat($("#price").val().replace(/\D/g, '')) / 100;
        product.photo = $("#img").val();
        product.description = $("#description").val();
        localStorage.setItem(id, JSON.stringify(product));
    };

    function renderTable(){
        const idProducts = Object.keys(localStorage);
        let colProduct = ``;
        idProducts.forEach(function(key){
            const productRender = JSON.parse(localStorage.getItem(key));
            colProduct += `<tr id="${key}">
                                    <th>${productRender.name}</th>
                                    <th>${productRender.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</th>
                                    <th><img src="${productRender.photo}" alt="Produto"></th>
                                    <th>${productRender.description}</th>
                                    <th>
                                        <button class="btn btn-edit">✏</button>
                                        <button class="btn btn-delete">❌</button>
                                    </th>
                                    </tr>`;
                                    $("#loadProducts").html(colProduct);
                                $(".btn-edit").on("click", function(){
                                    const id = $(this).closest('tr').attr('id');
                const productEdit = JSON.parse(localStorage.getItem(id));
                $("#registerProducts").attr("key", id);
                $("#name").val(productEdit.name);
                $("#price").val(productEdit.price);
                $("#img").val(productEdit.photo);
                $("#description").val(productEdit.description);
                console.log("entrou no click edit");
            });
            $(".btn-delete").on("click", function(){
                const id = $(this).closest('tr').attr('id');
                localStorage.removeItem(id);
                const idRow = "#" + id;
                $(idRow).remove()
                // Toast delete confirmation
                showToast("Produto excluído com sucesso!");
                renderTable();
                console.log("entrou no click delte");
            });
        });
    }; 
    renderTable();

    $("#save").on("click", function(){
        if($("#name").val() || $("#price").val() || $("#img").val()){
            saveLocalStorage();
            $("input, textarea").val("");
            $("#registerProducts").removeAttr("key");
            showToast("Produto salvo com sucesso!");
            renderTable();
        } else{
            $("form").addClass("was-validated");
        }
    });

    $("#clear").on("click", function(){
        $("input, textarea").val("");
    });

    if(Object.keys(localStorage) == ""){
        $(".products-home").html("<h2>Nenhum produto cadastrado</h2>")
    } else{
        console.log("caiu no else");
        const productCard = Object.keys(localStorage);
        productCard.forEach(function(key){
            let product = JSON.parse(localStorage.getItem(key));
            let card = `
            <div class="col-sm-12 col-md-6">
                <div class="card">
                    <img src="${product.photo}" class="card-img-top" alt="..." />
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">
                        ${product.description}
                        </p>
                        <span class="btn btn-primary align-self-end mt-4">${product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                </div>
            </div>
            `
            $('.products-home').append(card);
        });
    };
})