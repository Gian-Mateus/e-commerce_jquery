$(function(){
    let storage = (localStorage.products) ?
    JSON.parse(localStorage.products) : [];

    // evento de cadastro
    $(document).on('submit', '#registerProducts', function(){
        // get values inputs
        console.log("entrou");
        let title = $('#title').val();
        let description = $('#description').val();
        let img = $('#img').val();
        let price = $('#price').val();

        // criar objeto para gravar no array/banco
        let item = {
            title: title,
            description: description,
            img: img,
            price: price
        };

        // adicionar os produtos no objeto
        storage.push(item);

        // transformar os dados em json
        localStorage.setItem("products", JSON.stringify(storage));
        // direcionando usuario para o index
        window.location.href = "index.html"
        loadProducts()
        return false;
    })


    let loadProducts = () => {
        let structure = '';
        let list = (localStorage.products) ? JSON.parse(localStorage.products) : [];
        for(pos in list){
            structure += `
            <tr>
                <td>${list[pos].title}</td>
                <td>${list[pos].price}</td>
                <td>${list[pos].img}</td>
                <td>${list[pos].description}</td>
                <td>
                    <a href="#" class="btn btn-info editaItem" rel="${pos}">E</a>
                    <a href="#" class="btn btn-danger deletaItem" rel="${pos}">D</a>
                </td>
            </tr>
            `
            $('#loadProducts').html(structure)
        }
    }

    loadProducts()

    // deletar item
    $(document).on('click', '.deletaItem', function(){
        
        let itemId = $(this).attr('rel')
        console.log(itemId);
        storage.splice(itemId, 1)
        localStorage.setItem("products", JSON.stringify(storage))
        loadProducts()

        return false;
    })
})