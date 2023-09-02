var windowLoad = new bootstrap.Modal(document.getElementById('windowLoad'), {})
let windowEmpty = document.getElementById('windowEmpty')
let windowLoadList = document.getElementById('windowLoadList')
let windowList = document.getElementById('windowList')
let windowDetail = document.getElementById('windowDetail')
let windowLoadIcon = document.getElementById('windowLoadIcon')
let windowLoadProduct = document.getElementById('windowLoadProduct')
let windowLoadInfo = document.getElementById('windowLoadInfo')
let windowDetailProduct = document.getElementById('windowDetailProduct')
let windowDetail__icon = document.getElementById('windowDetail__icon')
let windowDetailInfo = document.getElementById('windowDetailInfo')

let arrayList = []



let guardar = document.getElementById('windowLoadAdd').addEventListener('click', function() {
    let producto = windowLoadProduct.value
    let icono = windowLoadIcon.value
    let info = windowLoadInfo.value


    function idObject() {
        if (arrayList.length == 0) {
            return 1
        } else {
            return arrayList.length + 1
        }
    }

    let modelo = ` <li class="list-group-item" data-producto="${producto}" data-icon="${icono}"  data-info="${info}" id=${idObject()}> <img class="img_nopoint" src="${icono}" alt="${producto}"> ${producto}   </li> `
    windowLoadList.innerHTML += modelo
    if (producto === "" || icono === "" || info === "") {
        return
    }
    let object = {
        id: idObject(),
        product: `${producto}`,
        imgage: `${icono}`,
        informacion: `${info}`,
    }
    arrayList.push(object)

    windowLoadProduct.value = ""
    windowLoadIcon.value = ""
    windowLoadInfo.value = ""
    windowLoad.hide()
    windowEmpty.style.display = 'none'
    windowList.style.display = 'block'


})



let windowLoadListClick = document.getElementById('windowLoadList').addEventListener('click', function(e) {
    windowDetailProduct.innerHTML = e.target.getAttribute('data-producto')
    windowDetail__icon.src = e.target.getAttribute('data-icon')
    windowDetailInfo.innerHTML = e.target.getAttribute('data-info')
    windowList.style.display = 'none'
    windowDetail.style.display = 'block'

})

let borrado = document.getElementById('btnBorrar')

borrado.addEventListener('click', (e) => {
    arrayList.filter(item => {
        return item.id != e.target.id
    })
    console.log(e.target.parentNode);
})

let windowDetaiLClose = document.getElementById('windowDetailClose').addEventListener('click', () => {
    windowList.style.display = 'block'
    windowDetail.style.display = 'none'

})